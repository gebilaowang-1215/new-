// ejs  模板引擎
// 定义 嵌入javascript的模板引擎
// 特点
//     render 渲染   compile 编译    template  模板
//     ejs.render(template,data)  template 模板  data 数据(必须是对象) 
//     <% %>编译  <%= %>输出  <%# %>注释  <%_ %>去除首位空格  <% _%>去除末尾空格
// <% 'Scriptlet'标签，用于控制流，没有输出
// <%_ 'Whitespace Slurping'Scriptlet标签，在它之前去除所有空格
// <%= 将值输出到模板中（转义）
// <%- 将未转义的值输出到模板中
// <%# 评论标签，无执行，无输出
// <%% 输出文字'<％'
// %%> 输出文字'％>'
// %> 平原结束标记
// -%> 修剪模式（'newline slurp'）标签，修剪后面的换行符
// _%> 'Whitespace Slurping'结束标记，删除后面的所有空格
// include  包含

var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
http.createServer((req,res)=>{
    // var data1 = {
    //     num:8
    // }
    // fs.readFile('./html/01.ejs',(err,data)=>{
    //     var template = data.toString();
    //     var str = ejs.render(template,data1);
    //     res.end(str);
    // })
    var list =['首页','新闻','关于'];
    fs.readFile('./html/01.ejs',(err,data)=>{
        var template = data.toString();
        var str = ejs.render(template,{list:list});
        res.end(str);
    })
}).listen(3000,()=>{
    console.log('liaten挂起')
})