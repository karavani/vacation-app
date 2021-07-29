const usersDao = require('../dao/users-dao');
const ServerError = require("../errors/server-error");
const ErrorType = require("../errors/error-type");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../config.json");
const cache = require("../controllers/cache-controller");

const saltRight = "sdkjfhdskajh";
const saltLeft = "--mnlcfs;@!$ ";

async function addUser(user) {
    // Validations
    if (!isValidEmail(user.eMail)) {
        throw new ServerError(ErrorType.EMAIL_NOT_VALID);
    }
    if (usersDao.isUserExistByName(user.userName)) {
        throw new ServerError(ErrorType.USER_NAME_ALREADY_EXIST);
    }
    else {
        user.password = crypto.createHash("md5").update(saltLeft + user.password + saltRight).digest("hex");
        await usersDao.addUser(user);
        const userData = await usersDao.login(user);
        const token = jwt.sign({ sub: saltLeft + userData.userName + saltRight }, config.secret)
        cache.put(token, userData);
        const response = { token: "Bearer " + token, userType: userData.userType }
        return response;
    }

}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const response = re.test(String(email).toLowerCase());
    return response;
}

async function followVacation(vacationId, userId) {
    let response = await usersDao.followVacation(vacationId, userId);
    return response;
}

async function unfollowVacation(vacationId, userId) {
    const response = await usersDao.unfollowVacation(vacationId, userId);
    return response;
}

async function login(user) {
    user.password = crypto.createHash("md5").update(saltLeft + user.password + saltRight).digest("hex");
    const userData = await usersDao.login(user);
    const token = jwt.sign({ sub: saltLeft + userData.userName + saltRight }, config.secret)
    cache.put(token, userData);
    const response = { token: "Bearer " + token, userType: userData.userType }
    return response;
}

async function getChartData() {
    const response = await usersDao.getChartData();
    return response;
}

module.exports = {
    addUser,
    login,
    followVacation,
    unfollowVacation,
    getChartData
};