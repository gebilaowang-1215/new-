var express = require('express');
var app = express();
app.all('*',(req,res,next)=>{
    // 允许所有域名进行访问
    res.header('Access-Control-Allow-origin','*');
    // 定义请求头类型
    res.header('Access-Control-Allow-Headers','content-type');
    // 定义允许跨域访问的请求方式
    res.header('Access-Control-Allow-Methods','GET','POST','PUT','DELETE','PATCH','OPTIONS');
    // 判断
    next();
});
app.listen(3000,()=>{
    console.log('listen挂起')
});







// mongodb --dapath=d:/软件/mongodb/bin
// mongo