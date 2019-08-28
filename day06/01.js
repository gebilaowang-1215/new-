var express = require('express');
var app = express();
// 'mongodb://127.0.0.1:27017'mongodb的默认端口
// 'mongodb://127.0.0.1:3306';mysql的默认端口
// 连接mongodb客户端
var mongodbclient = require('mongodb').MongoClient;
// 添加
// console.log(mongodbclient)
app.get('/add', (req, res) => {
    // mongodbclient.connect('mongodb://127.0.0.1:27017', (err, db) => {
    //     // 创建数据库
    //     var dbName = db.db('newdb');
    //     // 连接集合
    //     dbName.collection('test').insert({ 'username': 'wy' }, (err) => {
    //         if (err) {
    //             throw err;
    //         }
    //         res.send('插入成功');
    //         db.close();
    //     });
    // });
    mongodb('newdb',insert);
});
function mongodb(newdb,mode){
    mongodbclient.connect('mongodb://127.0.0.1:27017', (err, db) => {
        var dbName = db.db(newdb);
        dbName.collection('test').mode({ 'username': 'wyy' }, (err) => {
            if (err) {
                throw err;
            }
            res.send('成功');
            db.close();
        });
    });
}
// 删除
// app.get('/del', (req, res) => {
//     mongodbclient.connect('mongodb://127.0.0.1:27017', (err, db) => {
//         var dbName = db.db('newdb');
//         dbName.collection('test').deleteOne({ 'username': 'wyy' }, (err) => {
//             if (err) {
//                 throw err;
//             }
//             res.send('删除成功');
//             db.close();
//         });
//     });
// });
app.listen(3000,()=>{
    console.log('listen挂起');
});