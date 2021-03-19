const expressJwt = require('express-jwt');
const config = require("../config.json");

let { secret } = config;


function authenticateJwtRequestToken() {
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            '/',
            '/login', // Login
            '/register', // Register
            '/users/login', // POST Login
            '/users/register', // POST Register
            '/vacations/'
        ]
    });
}

module.exports = authenticateJwtRequestToken;
