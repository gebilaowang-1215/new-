var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    var data = res.cookie('name','Tom',{maxAge:9000,httpOnly:true});
    res.send()
});
app.get('/get',(req,res)=>{
    var message = req.headers.cookie.toString().substring(5);
    res.send('欢迎'+message+'光临');
})
app.listen(3000);
/* 什么是cookie？   浏览器端     大小：4K   最多出现的次数：20 
 maxAge:过期时间     domain:域名   path:路径(在该路径下才可以访问缓存)
 httpOnly:设置https或http   singIed:签名   expires:时长
存储空间:
用途: 登录注册
*/