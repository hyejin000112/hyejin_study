const mysql = require('mysql2');
const dotenv = require('dotenv');


dotenv.config();





const client= mysql.createConnection({
            host : process.env.DB_HTML,
            user : process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DATABASE
        })
        //    port : 3306,
        // //서버 연동 끝

module.exports = client;
