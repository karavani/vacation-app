const mysql = require('mysql2');
const TWENTYFOURHOURS = 1000 * 60 * 60 * 24;

// Connection = קו תקשורת למסד הנתונים
const connection = mysql.createConnection({
    host: "34.65.1.203", // Computer
    user: "root", // Username
    password: "1234", // Password
    database: "vacation_schema", // Database name
    dateStrings: "date"
});

// refresh connection to DB every 24 hours;
function connectToDB() {
    // Connect to the database: 
    connection.connect(err => {
        if (err) {
            console.log("Failed to create connection + " + err);
            return;
        }
        console.log("We're connected to MySQL");
    });
    setTimeout(connectToDB(), TWENTYFOURHOURS);
}
connectToDB();

// One function for executing select / insert / update / delete: 
function execute(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                console.log("Error " + err);
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function executeWithParameters(sql, parameters) {
    return new Promise((resolve, reject) => {
        connection.query(sql, parameters, (err, result) => {
            if (err) {
                console.log("Error " + err);
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    execute,
    executeWithParameters
};