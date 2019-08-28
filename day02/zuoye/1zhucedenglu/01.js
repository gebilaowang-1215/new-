var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html;charset=UTF8' })
    if (req.url == '/favicon.ico') {
        return
    }
    var obj = url.parse(req.url, true).query;
    var message = '用户名:' + obj.username + ';密码:' + obj.password;
    fs.writeFile('./a.txt', message + '#', { 'flag': 'a' }, (err, data) => {
        if (err) {
            throw err
        }
        res.end('注册成功');
    })
}).listen(3000, function () {
    console.log('listen挂起');
})

// 实现登录注册功能
// 客户端--->服务端     数据库
// 前端      接受username  password
// 假设有数据库，将前端提交得数据与数据库内数据进行对比