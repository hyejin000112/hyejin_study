var express = require('express') //node_modules에 있는 파일을 가져온다.
var app = express();//위의 코드의 반환값이 함수형태이고 함수를 실행하여  함수정보를 app이라는 변수에 담는구조
var bodyParser = require('body-parser');
const router = require('./router/index');
const path = require('path');

//패스포트
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');



app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.listen(3000,function(){ //3000이라는 포트를 기반으로 다음 함수를 실행시켜주는것.
    console.log("start!3000")
})


// app.use(express.static('public')); //요청이 오면 그냥 자동으로 처리하라는 뜻 >
// ^ 좀이해 안감.
app.use(bodyParser.json())//express에 bodyParser를 사용한다고 선언하는 코드
app.use(bodyParser.urlencoded({extended : true}));//https://velog.io/@yejinh/express-%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4-bodyParser-%EB%AA%A8%EB%93%88
app.use(express.static(path.join(__dirname, 'public')));


//html설정
app.set ('views',__dirname+"/public"); //views역할을 publice 에게 시킨다고 선언
app.set('view engine','ejs');  //뷰엔진 ejs설정
app.engine('html',require('ejs').renderFile);

//패스포트 설정
// app.use(session({
//     secret : 'keyboard cat',
//     resave : false,
//     saveUninitialized : true
// }))
// app.use(passport.initialize());
// app.use(passport.session())
// app.use(flash());



app.use(router);
// app.use('/main',main); //    > 경로 /main에 대한 라우터는 main  = reqiure('./router/main')을 사용하라는 의미
// app.use('/email',email);










