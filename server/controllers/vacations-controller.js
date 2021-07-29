const vacationsLogic = require('../logic/vacations-logic');
const express = require("express");
const router = express();
const cache = require("./cache-controller");
router.use(express.json());


// DELETE vacation by id
router.delete("/:id", async (request, response, next) => {
    // Extracting the JSON from the packet's BODY
    const id = request.params.id;
    try {
        await vacationsLogic.deleteVacation(id);
        response.json();
    }
    catch (error) {
        return next(error);
    }
});

// ADD vacation
// POST http://localhost:3001/vacations/
router.post("/", async (request, response, next) => {

    // Extracting the JSON from the packet's BODY
    const newVacationDetails = request.body;
    try {
        await vacationsLogic.addVacation(newVacationDetails);
        response.json();
    }
    catch (error) {
        return next(error);
    }

});

//<--- GET all vacations to user by followed and unfollowed vacations ---> 
// GET http://localhost:3001/vacations/
router.get("/", async (request, response, next) => {
    const userData = cache.extractUserDataFromCache(request);
    try {
        const vacations = await vacationsLogic.getAllVacationsToUser(userData);
        response.json(vacations)
    }
    catch (error) {
        return next(error);
    }

});
// <----------------------------->


// UPDATE vacation (only admin)
router.put("/", async (request, response, next) => {

    // Extracting the JSON from the packet's BODY
    const vacation = request.body;
    try {
        await vacationsLogic.updateVacation(vacation);
        response.json()
    }
    catch (error) {
        return next(error);
    }

})

// GET vacation by id
// GET http://localhost:3001/vacations/:id
router.get("/:id", async (request, response, next) => {

    const id = request.params.id;
    try {
        const vacation = await vacationsLogic.getVacationById(id);
        response.json(vacation)
    }
    catch (error) {
        return next(error);
    }

});


module.exports = router;
