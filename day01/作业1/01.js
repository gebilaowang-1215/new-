var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=UTF8'});
    if(req.url=='/'){
        res.end('首页');
    }else if(req.url=='/red'){
        fs.readFile('./html/red.html',function(err,data){
            res.end(data)
        });
    }else if(req.url=='/red.css'){
        res.writeHead(200,{'Content-type':'text/css'})
        fs.readFile('./html/red.css',function(err,data){
            res.end(data);
        });
    }else if(req.url=='/0.jpg'){
        res.writeHead(200,{'Content-type':'image/jpg'});
        fs.readFile('./html/0.jpg',function(err,data){
            res.end(data);
        }); 
    }
}).listen(3000,function(){
    console.log('listen挂起')
})