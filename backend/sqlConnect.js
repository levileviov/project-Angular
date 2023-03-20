// import mysql from 'mysql';

// export const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'angular-project',
// });

// con.connect((err) => {
//     if (err) {
//         throw err;
//     }

//     console.log('DB Connected');
// });

const mysql = require('mysql');

let connection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'full-stack-w020222er',
};

if (process.env.NODE_ENV !== 'development') {
    connection = {
        host: 'localhost',
        user: 'leviovs1_admin',
        password: '2B)2z9(]^6ek',
        database: 'leviovs1_angular-project',
    };
}

const con = mysql.createConnection(connection);

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('DB Connected');
});

exports.con = con;
