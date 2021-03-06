const usersLogic = require('../logic/users-logic');
const cache = require('./cache-controller');
const express = require("express");

const { response, request } = require('express');

const server = express();

server.use(express.json());


// POST http://localhost:3001/users/login
server.post("/login", async (request, response, next) => {

    // Extracting the JSON from the packet's BODY
    const userLoginDetails = request.body;
    try {
        const successfullLoginData = await usersLogic.login(userLoginDetails);
        response.json(successfullLoginData);
    }
    catch (error) {
        return next(error);
    }
});

// ADD USER
// POST http://localhost:3001/users/
server.post("/", async (request, response, next) => {

    // Extracting the JSON from the packet's BODY
    const newUserDetails = request.body;
    try {
        const successfullLoginData = await usersLogic.addUser(newUserDetails);
        response.json(successfullLoginData);
    }
    catch (error) {
        return next(error);
    }

});


// GET chart data http://localhost:3001/users/
server.get("/", async (request, response, next) => {

    try {
        chartDetails = await usersLogic.getChartData();
        response.json(chartDetails)
    }
    catch (error) {
        return next(error);
    }
    
});



// POST follower http://localhost:3001/users/follow/
server.post("/follow", async (request, response, next) => {

    // Extracting the JSON from the packet's BODY
    const vacationId = request.body.vacationId;
    const userId = cache.extractUserDataFromCache(request).id;
    try {
        await usersLogic.followVacation(vacationId, userId);
        response.json();
    }
    catch (error) {
        return next(error);
    }


})

// DELETE follower http://localhost:3001/users/follow/:id
server.delete("/follow/:id", async (request, response, next) => {

    const vacationId = request.params.id;
    const userId = cache.extractUserDataFromCache(request).id;
    try {
        await usersLogic.unfollowVacation(vacationId, userId);
        response.json();
    }
    catch (error) {
        return next(error);
    }


});


module.exports = server;