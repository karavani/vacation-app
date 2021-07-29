const vacationsDao = require('../dao/vacations-dao');
const app = require('express')();
const http = require('http').createServer(app);
const io = require("socket.io")(http, {
    cors: {
        jsonp: false,
        transports: ['websocket']
    }
});
const cache = require('../controllers/cache-controller');

const userIdToSocketsMap = new Map();

io.on("connection", socket => {
    const handshakeData = socket.request;
    const token = handshakeData._query['userToken'].substring("Bearer ".length);
    const userData = cache.get(token);
    userIdToSocketsMap.set(userData.id, socket);

    socket.on("disconnect", () => {

        var handshakeData = socket.request;
        const token = handshakeData._query['userToken'].substring("Bearer ".length);
        const userData = cache.get(token);
        const userId = userData.id;

        if (!userId) {
            return;
        }
        userIdToSocketsMap.delete(userId);
    });
});

async function broadcast(event) {
    for (const [userId, socket] of userIdToSocketsMap.entries()) {
        const vacations = await vacationsDao.getAllVacationsToUser(userId);
        socket.emit(event, vacations);
    }
}
http.listen(3002, () => console.log("Socket-server Listening on port 3002..."));

module.exports = {
    broadcast
}