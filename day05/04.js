// session  基于服务端
var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({
    name:'fcht',     //session的名称，默认为connect_id
    secret:'fcht',   //签名，防止信息被篡改
    resave:false,     //强制保存为session值
    cookie:('name','value',{maxAge:90000,httpOnly:true}),
    saveUninitialized:true   //初始化
}));
app.get('/set',(req,res)=>{
    req.session.username='tom';
    res.send();
});
app.get('/get',(req,res)=>{
    if(req.session.username=='tom'){
        res.send('欢迎'+req.session.username+'光临');
    }
});
app.listen(3000,()=>{
    console.log('listen挂起')
})