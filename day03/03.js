var path = require('path');
// console.log(path);
// extname 获取后缀名(扩展名)

// var obj = path.extname('./a../b/2.pic')
// console.log(obj);

// basename  返回一个真实路径的最后一段
// var obj = path.basename('./a./b../e/2.txt')
// console.log(obj);

// normalize  规范路径的输出
// var obj = path.normalize('.///a./b./\./e/2.txt')
// console.log(obj);

// isAbsolute   判断是否是绝对路径   true false
// var obj = path.isAbsolute('C:/Users/王勇/Desktop/课程/框架阶段/day03/02.js')
// console.log(obj);

// join 拼接完整的路径(按照正确路径)
// var obj = path.join('.///a','/\b','/c.','./e','./','f')
// console.log(obj);

// dirname  返回当前文件所在的目录名称
// var obj = path.dirname('./a.c/./b/2.pic')
// console.log(obj);

// format 把对象转化为字符串，读取时会读取dir和base 
        // root 根 dir 目录 base 文件路径   
// var obj = path.format({
//     root:"C",
//     dir:'a/.b/..c',
//     base:'/d'
// })
// console.log(obj);

// parse  字符串转化对象，与format相反输出
var obj = path.parse('./a.c/./b/2.pic')
console.log(obj);

// resolve 从右向左依次解析，直到返回一个完整的路径，增加盘符
// var obj = path.resolve('./a/b','/c../e./f')
// console.log(obj);

// path   提供一些工具函数，主要处理文件和目录
