var express = require('express');
var app = express();
var router = express.Router();
//const {Router} = require('express');
//const router = Router();

var path = require('path');
const mysql = require('mysql2');
const client = require('../../db/database');
const { userInfo } = require('os');
//const client = c.client();
const crypto = require('crypto');

router.get('/',function(req,res){
    console.log('get join url')
    //res.sendFile(path.join(__dirname, '/../../public/join.html')) 이코드도 사용가능.(절대경로)
    res.render("join.html");
})

router.post('/',(req,res)=>{
    var body=req.body;
    var email = body.email;
    var name = body.name;
    var password = crypto.createHash('sha512').update(req.body.password).digest('base64');
    console.log(req.body);

    const sql = `insert into user(email,name,pw) values ('${email}','${name}','${password}')`;
    //위코드도 가능
    // const sql = {email: email,name : name,pw: password}; 'insert into user set ?',
    var query = client.query(sql,(err,result)=>{
        if(err){throw err;}
        console.log(`ok db insert`,result.insertId , name);
        res.render(`welcome.html`,{'name' : name, 'id' : result.insertId});
    });
})

module.exports = router;