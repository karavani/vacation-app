const connection = require("./connection-wrapper");
let ErrorType = require("./../errors/error-type");
let ServerError = require("./../errors/server-error");



async function addVacation(vacation) {
    const start = vacation.startDate.split("T");
    const end = vacation.endDate.split("T");
    let sql = "INSERT INTO vacations (destination, start_date, end_date, description, price, image_url)  values(?, ?, ?, ?, ?, ?)";
    let parameters = [vacation.destination, start[0], end[0], vacation.description,
    vacation.price, vacation.imageUrl];
    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

// <-------------GET ALL VACATIONS TO USER BY FOLLOWED AND UNFOLLOWED VACATIONS----->

async function getAllVacationsToUser(userId) {
    let sql = `SELECT 
    v.id,
    v.destination,
    v.description,
    v.image_url AS 'imageUrl',
    v.start_date AS 'startDate',
    v.end_date AS 'endDate',
    v.price,
    CASE
        WHEN followed.vacation_id IS NOT NULL THEN 1
        ELSE 0
    END AS 'isFollowing',
    CASE
        WHEN f_v.followers IS NOT NULL THEN f_v.followers
        ELSE 0
    END AS 'numOfFollowers'
FROM
    vacations v
        LEFT JOIN
    (SELECT 
        vacation_id
    FROM
        followed_vacations
    WHERE
        user_id = ?) followed ON v.id = followed.vacation_id
        LEFT JOIN
    (SELECT 
        vacation_id, COUNT(vacation_id) AS 'followers'
    FROM
        followed_vacations
    GROUP BY vacation_id) f_v ON v.id = f_v.vacation_id`;
    let parameters = [userId];
    try {
        let vacations = await connection.executeWithParameters(sql, parameters);
        return vacations;
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

// <-------------------------------------------->


async function getVacationById(id) {
    try {
        let sql = `SELECT 
                        destination,
                        start_date as startDate,
                        end_date as endDate,
                        description,
                        price,
                        image_url as imageUrl
                    FROM
                        vacations
                    WHERE 
                        id = ?`;
        let parameters = [id];
        return await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function updateVacation(vacation) {
    const start = vacation.startDate.split("T");
    const end = vacation.endDate.split("T");
    let sql = `UPDATE vacations 
                SET 
                    destination = ?,
                    start_date = ?,
                    end_date = ?,
                    description = ?,
                    price = ?,
                    image_url = ?
                WHERE
                    id = ?`;
    let parameters = [vacation.destination, start[0], end[0], vacation.description,
    vacation.price, vacation.imageUrl, vacation.id];
    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function deleteVacationFromFollowers(id) {
    let sql = "DELETE from followed_vacations where vacation_id = ?";
    let parameters = [id];
    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function deleteVacation(id) {
    let sql = "DELETE from vacations where id = ?";
    let parameters = [id];
    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function isVacationExist(vacation) {
    let sql =
        `SELECT 
        destination, start_date, end_date
    FROM
        vacations
    WHERE
        destination = ? AND start_date = ?
            AND end_date = ?;`;
    let parameters = [vacation.destination, vacation.startDate, vacation.endDate]
    let vacationExistsOnDb = await connection.executeWithParameters(sql, parameters);
    if (vacationExistsOnDb == null || vacationExistsOnDb.length == 0) {
        return false;
    }
    else {
        return true;
    }
}



module.exports = {
    addVacation,
    getAllVacationsToUser,
    deleteVacation,
    updateVacation,
    isVacationExist,
    getVacationById,
    deleteVacationFromFollowers
};