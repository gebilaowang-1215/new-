var express = require('express');
var bodyparser = require('body-parser')
var app = express();
// 使用静态资源
app.use()

// 使用中间件
// 针对post方式处理字符串
app.use(bodyparser.urlencoded({extended:false}));
// 针对post方式处理json
// app.use(bodyparser,json());

// 中间件；路由中间件；第三方中间件
// body-parser   处理post请求
// 
app.get('/',(req,res)=>{
    res.send('首页');
});
app.get('/list',(req,res)=>{
    console.log(req.query);
    res.send('get传输过来的username:'+req.query.username)
});
app.post('/epost',(req,res)=>{
    res.send('post传输过来的username:'+req.body.username)
})
app.listen(3000);
