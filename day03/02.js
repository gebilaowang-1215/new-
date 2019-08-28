var http = require('http');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var sd = require('silly-datetime');
http.createServer((req,res)=>{
    if(req.url=='/send' && req.method =='POST'){
        var form = new formidable.IncomingForm();
        form.uploadDir = './img';
        form.parse(req,function(err,fields,files){
            var oldpath = files.pic.path;
            var extname = path.extname(files.pic.name);
            var time = sd.format(new Date(),'YYYYMMDDHHmmss');
            var newpath ='./img/'+time+extname;
            fs.rename(oldpath,newpath,(err)=>{
                if(err){
                    throw err
                }
                console.log('success');
                res.end(newpath);
            }) 
        })
    }
}).listen(3000,()=>{
    console.log('listen挂起')
})