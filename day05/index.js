// 接口编写文件
var express = require('express');
// var app = express();
var router = express.Router();
router.get(('/index'),(req,res)=>{
    res.send({'success':'ok','data':[{'username':'tom1','age':10},{'username':'jerry1','age':13}]})
});
exports.router = router;