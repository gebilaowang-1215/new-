var express = require('express');
var app = express();
var db = require('./newdb');
app.get('/add',(req,res)=>{
    db.add('test',{'username':'admin666'},(err)=>{
        if(err){
            throw err
        }
        res.send('插入成功');
    });
});
app.get('/find',(req,res)=>{
    db.find('test',{'username':'admi'},(err,data)=>{
        if(err){
            throw err
        }
        res.send({'data':data});
    }); 
});
app.get('/del',(req,res)=>{
    db.del('test',{'username':'admin666'},(err,data)=>{
        if(err){
            throw err
        }
        res.send('删除成功');
    }); 
});
app.get('/update',(req,res)=>{
    db.update('test',{'username':'admin666'},{'username':'admin'},(err,data)=>{
        if(err){
            throw err
        }
        res.send('改名成功');
    }); 
});
app.listen(3000,()=>{
    console.log('listen挂起')
})