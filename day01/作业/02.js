// var http = require('http');

// file system

// var fs = require('fs');
// var style = '<link rel="stylesheet" href="./red.css"></link>'
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-type': 'text/html;charset=utf8' })
//     if (req.url == '/') {
//         res.end('首页1');
//     } else if (req.url == '/red') {
//         fs.appendFile('./red.html', style, function () {
//             fs.readFile('./red.html', function (err, data1) {
//                 res.end(data1);
//             });
//         });
//     }
// }).listen(3000, function () {
//     console.log('listen挂起')
// });

var http = require('http');
var fs = require('fs');
var sever = http.createServer();
sever.on('request',function (req, res) {
    if (req.url == '/') {
        fs.readFile('./html/red.html',function(err,data){
            res.end(data);
        })
    }else if(req.url.startsWith('/css')){
        fs.readFile(__dirname+req.url,function(err,data){
            res.end(data)
        })
    }
}).listen(3000, function () {
    console.log('listen挂起')
});