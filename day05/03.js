// cookie-parser
var express = require('express');
// 可以存储二级域名
var cookie = require('cookie-parser');
var app = express();
app.use(cookie());
app.get('/set', (req, res) => {
    // 储存
    res.cookie('username', 'admin', { maxAge: 90000, httpOnly: true });
    res.send('cookie设置成功');
});
app.get('/get', (req, res) => {
    // 提取
    var data = req.cookies.username;
    console.log(res.req.cookies.username)
    res.send({ 'data': data })
});
app.listen(3000,()=>{
    console.log('lishen挂起')
});