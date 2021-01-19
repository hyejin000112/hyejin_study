const express = require('express');
const crypto = require('crypto');
let jwt = require('jsonwebtoken');

const client = require('../../db/database');
const { render } = require('ejs');
let secretObj = require("../../db/jwt");

//로그인 함수
exports.login=(req,res,next)=>{
    var params = [
        req.body.email,
        crypto.createHash('sha512').update(req.body.password).digest('base64')
    ]
    const sql = "SELECT * FROM user where email = ? AND pw = ?";// AND pw = ?
   client.query(sql,params,(err,result,fields)=>{
        if(err){
            console.log("실패")
            console.log(err);
            res.send({login:false})
        }else{
            if(!result[0]){
                res.json({login:false})
              }
              else{
                console.log("성공")
                    let token = jwt.sign(
                    {
                        userId : req.body.email //토큰의 내용
                    },
                    
                    secretObj.secret,
                    {
                    expiresIn: '1m'
                    
                    } ) 
        
                    // if(token){
                    //     res.render("form.html",{result,login:true,token})//,

                    // }
                    // else{

                    // }
                    res.cookie('user',token);
                    console.log(token)
                    res.render("form.html",{result,login:true,token})//,
                    console.log("로그인 성공")
              }


        }
    })
}

    
