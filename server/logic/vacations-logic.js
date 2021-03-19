const vacationsDao = require('../dao/vacations-dao');
let ErrorType = require("./../errors/error-type");
let ServerError = require("./../errors/server-error");
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
    let userId = userData.id;
    let vacations = await vacationsDao.getAllVacationsToUser(userId);
    return vacations;
}

async function getVacationById(id) {
    let vacations = await vacationsDao.getVacationById(id);
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