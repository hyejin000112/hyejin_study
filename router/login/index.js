const {Router} = require('express');
const router = Router();
const ctrl = require('./login.ctrl.js');
//const client = require('../../db/database');

router.use('/info',ctrl.login)

router.get('/',(req,res)=>{
    res.render("login.html");
});



module.exports = router;