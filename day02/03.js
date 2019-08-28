var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf8' })
    if (req.url == '/favicon.ico') {
        return
    }
    // 读取
    // fs.readFile('./22.txt',(err,data)=>{
    //     res.end(data);
    // })

    // 写入
    // fs.writeFile('./33.txt','新写入的内容',(err,data)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success');
    // })

    // 追加写入
    // fs.writeFile('./33.txt','新写入的内容3',{'flag':'a'},(err,data)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success');
    // })

    // 改名
    // fs.rename('./22.txt','./2b.txt',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success1')
    // })

    // 删除
    // fs.unlink('./2b.txt',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })

    // 创建文件夹
    // fs.mkdir('./aa', (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end('success')
    // });

    // 删除文件夹
    // fs.rmdir('./aa',(err)=>{
    //     if (err) {
    //         throw err
    //     }
    //     res.end('success')
    // });

    // 读取文件夹
    // fs.readdir('./zuoye',(err,data)=>{
    //     if (err) {
    //         throw err
    //     }
    //     res.end(data.toString());
    // })

    // 判断是否是文件夹
    // fs.exists('./zuoye',(exists)=>{
    //     if(exists){
    //         console.log('文件夹存在')
    //     }
    // })

    // 判断是文件夹还是文件
    // fs.stat('./zuoye/a.txt',(err,stats)=>{
    //     // 文件夹
    //     // console.log(stats.isDirectory());

    //     // 文件
    //     console.log(stats.isFile())
    //     res.end('success1')
    // })
}).listen(3000, function () {
    console.log('listen挂起')
})