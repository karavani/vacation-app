const vacationsDao = require('../dao/vacations-dao');
const ErrorType = require("./../errors/error-type");
const ServerError = require("./../errors/server-error");
const pushService = require("../services/pushService");


async function addVacation(vacation) {
    // Validations
    if (!vacationsDao.isVacationExist(vacation)) {
        throw new ServerError(ErrorType.VACATION_ALREADY_EXIST, sql, e);
    }
    await vacationsDao.addVacation(vacation);
    pushService.broadcast("vacations-refresh");
}

async function getAllVacationsToUser(userData) {
    const userId = userData.id;
    const vacations = await vacationsDao.getAllVacationsToUser(userId);
    return vacations;
}

async function getVacationById(id) {
    const vacations = await vacationsDao.getVacationById(id);
    return vacations;
}

async function updateVacation(vacation) {
    await vacationsDao.updateVacation(vacation);
    pushService.broadcast("vacations-refresh");

}

async function deleteVacation(id) {
    // first delete vacation rows from FK table
    await vacationsDao.deleteVacationFromFollowers(id);
    // then delete vacation
    await vacationsDao.deleteVacation(id);
    pushService.broadcast("vacations-refresh");
}


module.exports = {
    addVacation,
    deleteVacation,
    updateVacation,
    getAllVacationsToUser,
    getVacationById
};