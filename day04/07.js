var express = require('express');
var path = require('path');
var app = express();
// 使用引擎
app.engine('ejs',require('express-art-template'));
// 设置引擎
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.get('/',(req,res,next)=>{
    var list = ['首页','新闻','关于'];
    res.render('01.ejs',{list:list});
})
app.listen(3000);