const express = require("express");
const cors = require("cors");
const usersController = require("./controllers/users-controller");
const vacationsController = require("./controllers/vacations-controller");
const errorHandler = require("./errors/error-handler");
const loginFilter = require('./middleware/login-filter');
const server = express();

server.use(express.static("public"));

server.use(cors());

server.use(loginFilter());

server.use(express.json());

server.use("/users", usersController);
server.use("/vacations", vacationsController);

server.use(errorHandler);
server.listen(3001, () => console.log("Listening on http://localhost:3001"));


