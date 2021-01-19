// var express = require('express');
// var app = express();
// var router = express.Router();
// var path = require('path');
const { Router } = require('express');
const router = Router()





router.use('/main',require('./main/main'));
router.use('/email',require('./email/email'));
router.use('/join',require('./join/index'))
router.use('/login',require('./login'));

router.use('/logout',(req,res)=>{
    res.clearCookie("user");
    res.redirect('/main')
})

// router.use('/',(req,res)=>{
//     // res.cookie('test',123)
//     // console.log(req.cookies.test)
//     // console.log(req.headers.cookie)
//     // res.render('form.html',{tooken:req.headers.cookie})
// })

module.exports = router;