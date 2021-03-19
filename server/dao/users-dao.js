const connection = require("./connection-wrapper");
let ErrorType = require("./../errors/error-type");
let ServerError = require("./../errors/server-error");

async function login(user) {
    let sql = "SELECT id, username as userName, password, email, user_type as userType FROM users where username =? and password =?";

    let parameters = [user.userName, user.password];

    let usersLoginResult;
    try {
        usersLoginResult = await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(user), e);
    }

    // A functional (!) issue which means - the userName + password do not match
    if (usersLoginResult == null || usersLoginResult.length == 0) {
        throw new ServerError(ErrorType.UNAUTHORIZED);
    }

    return usersLoginResult[0];
}

async function addUser(user) {
    let sql = "INSERT INTO users (username, password, email) values(?, ?, ?)";
    let parameters = [user.userName, user.password, user.eMail];
    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function isUserExistByName(name) {
    let sql = "SELECT username FROM users where username = ? ";
    let parameters = [name]
    try {
        let isUserNameExists = await connection.executeWithParameters(sql, parameters);
        if (isUserNameExists == null || isUserNameExists.length == 0) {
            return false;
        }
        return true;
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function followVacation(vacationId, userId) {
    let sql = "INSERT INTO followed_vacations (vacation_id, user_id) values (?,?)";
    let parameters = [vacationId, userId];
    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function unfollowVacation(vacationId, userId) {
    let sql = "DELETE from followed_vacations WHERE vacation_id = ? and user_id = ?";
    let parameters = [vacationId, userId];
    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function getChartData() {
    let sql = `SELECT 
                   vacation_id AS vacationId,
                   destination,
                   COUNT(vacation_id) AS 'followers'
                FROM
                   followed_vacations
                       JOIN
                   vacations ON vacation_id = id
                GROUP BY vacation_id`;
    try {
        return await connection.execute(sql);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}


module.exports = {
    addUser,
    isUserExistByName,
    login,
    followVacation,
    unfollowVacation,
    getChartData
};