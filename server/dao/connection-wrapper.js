const mysql = require('mysql2');
const TWENTYTHREEHOURS = 82800000;

// Connection = קו תקשורת למסד הנתונים
const connection = mysql.createConnection({
    host: "34.65.1.203", // Computer
    user: "root", // Username
    password: "1234", // Password
    database: "vacation_schema", // Database name
    dateStrings: "date"
});

// refresh connection to DB every 23 hours;
setInterval(() => {
    // Connect to the database: 
    connection.connect(err => {
        if (err) {
            console.log("Failed to create connection + " + err);
            return;
        }
        console.log("We're connected to MySQL");
    });
}, TWENTYTHREEHOURS)


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