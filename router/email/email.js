var express = require('express');
var app = express();
var router = express.Router();
//const {Router} = require('express');
//const router = Router();

var path = require('path');
const mysql = require('mysql2');
const Router= require('express'); //Router에 
const client = require('../../db/database');
//const client = c.client();


router.post('/form',function(req,res){
    res.render('email.html',{'email' : req.body.email})
})

// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'hyejin',
//     password : 'dcdc1212!!',
//     database : 'jsman'
// });
// //    port : 3306,

// connection.connect();
// //서버 연동 끝


router.post('/ajax',function(req,res){
    console.log("1")
    console.log(client);
    let email =req.body.email;
    let responseData = {};
    const sql = `select name from user where email ="${email}"`;
    const query = client.query(sql,function(err,rows){
        if(err) throw err;
        if(rows[0]){
            //console.log(result[0].name);
            responseData.result = "ok";
            responseData.name = rows[0].name;
        }else{
            console.log(`none ${rows[0]}`);
            responseData.result = "none";
            responseData.name = "";
        }
        res.json(responseData);
    })
})

module.exports = router;