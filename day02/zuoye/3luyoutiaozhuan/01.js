var http = require('http');
var mod = require('./02');
http.createServer((req,res)=>{
    if(req.url=='/'){
        mod.showIndex(req,res);
    }else if(req.url=='/new'){
        mod.showNew(req,res);
    }else if(req.url=='/about'){
        mod.showAbout(req,res)
    }else{
        res.end('404')
    }
}).listen(3000,()=>{
    console.log('listen挂起')
})