// 路由router
// express.Router()创建：提供路由模块化而不需要创建额外应用程序的开销。
// var express = require("express");
// var app = express();
// var router = express.Router();
// // router.get('/test',function(req,res,next){
// //     res.send('test');
// // });
// // app.use('/user/:name',router);
// app.use(router);
// router.get('/login',(req,res,next)=>{
//     res.send('login');
// })
// app.listen(3000,()=>{
//     console.log('listen挂起');
// });
var express = require("express");
var app = express();
var router = require('./router');
var index = require('./index');
var data = { 'username': 'admin', 'password': 123 }
app.use('/login', router.router);

// app.use('/login',index.router);
// router.get('/login',(req,res,next)=>{
//     res.send('login');
// })
app.listen(3000, () => {
    console.log('listen挂起');
});