// var http = require('http');
// var fs = require('fs');

// http.createServer((req, res) => {
//     if (req.url == '/favicon.ico') {
//         return
//     }
//     fs.readdir('./demo', (err, read) => {
//         res.end(read.toString())
//         for (var i = 0; i < read.length; i++) {
//             var num = read[i]
//             var stats = fs.statSync('./demo/' + num);
//             if (stats.isDirectory()) {
//                 console.log(num);
//             }
//         }
//     })
// }).listen(3000, () => {
//     console.log('listen挂起');
// })

// 取出目录里的所有文件夹
var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    }
    fs.readdir('./demo',(err,data)=>{
        for(let i=0;i<data.length;i++){
            fs.stat('./demo/'+data[i],(err,stats)=>{
                if(stats.isDirectory()){
                    console.log(data[i]);
                }
            })
        }
        res.end('success');
    })
}).listen(3000,()=>{
    console.log('listen挂起');
})