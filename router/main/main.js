var express = require('express') //node_modules에 있는 파일을 가져온다.
var app = express();//위의 코드의 반환값이 함수형태이고 함수를 실행하여  함수정보를 app이라는 변수에 담는구조
var router  = express.Router();
const path = require('path');

router.get('/',(req,res)=>{
    console.log('main js loaded');
    res.render('form.html');
    //상대경로를 사용하려면 path를 사용해줘야함.
});


module.exports = router;
