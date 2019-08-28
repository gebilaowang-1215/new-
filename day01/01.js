// 路径C:\Users\王勇\Desktop\课程\框架阶段\day01
// http  模块 
// require 引入 加载   加载http模块  服务模块
// 创建服务器  http.createServer
// req=Request 请求    res=Response  响应    res.end 结束响应
// 解决中文乱码  res.writeHead(200,{'Content-type':'text/html;charset=UTF8'})
// listen 监听端口  listen(3000)
// 读文件  readfile

//  /red   /green   路由

// var http = require('http');
// console.log(http);

// http.createServer(function(){
//     console.log(arguments)
// }).listen(3000)

// http.createServer(function(req,res){
    // req=Request 请求    res=Response  响应
    // res.end 结束响应
    // res.end('success')
// }).listen(3000)

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/html;charset=UTF8'})
//     res.end('我爱中国，我的国家');
// }).listen(2000);

// http.createServer(function(req,res){
    // argument  必须是字符串
//     res.end((1+2+3+4).toString());
// }).listen(3000);

// var http = require('http');
// http.createServer(function(req,res){
    
// }).listen(3000,function(){
//     console.log('服务器挂起')
// });