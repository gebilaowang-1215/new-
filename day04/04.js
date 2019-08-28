var express = require('express');
// console.log(express);
// use
// route
// engine
// param
// set
// path
// render
// request
// express => createAppllication
var app = express();
// context(执行上下文)
// use只能使用当前路由和中间件
// console.log(app);
// app.use('/',(req,res)=>{
//     res.send({'success':'ok','data':{'list':[{id:1,name:'tom'},{id:2,name:'jerry'}]}});
// });
// app.use('/about/:id',(req,res)=>{
//     res.send(req.params.id);
// });
app.get('/get',(req,res)=>{
    res.send('get');
});
app.post('/second',(req,res)=>{
    res.send('second');
});
app.listen(3000,()=>{
    console.log('listen挂起')
});

/* 
express:
    路由路径不区分大小写
    获取动态路由参数  params   =>get
    use 使用
    get 请求方式(可连续请求)
    post 请求方式
    express 支持链式调用
*/ 