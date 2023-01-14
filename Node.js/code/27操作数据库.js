//导入
const mysql =require('mysql')
//建立与MySQL数据库的连接
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123.com',
    database:'express_db'
})

// //测试mysql模块能否正常工作
// db.query('select 1',(err,results)=>{
//     if(err){
//         return console.log(err.message)
//     }
//     console.log(results)
// })

// //查询数据
// db.query('select * from user',(err,results)=>{
//     if(err){
//         return console.log(err.message)
//     }
//     console.log(results)
// })

//插入数据
// const user={name:'tank',gender:'男'}
// //待执行的sql语句，其中英文的?表示占位符
// const sqlStr = 'insert into user (name,gender) values(?,?)'
// //使用数据的形式，依次为？占位符指定具体的值
// db.query(sqlStr,[user.name,user.gender],(err,results)=>{
//     if(err){
//         return console.log(err.message) //失败
//     }
//     if(results.affectedRows ===1 ){
//         console.log('插入数据成功！')  //成功
//     }
// })

// const user={name:'shasha',gender:'女'}
// //待执行的sql语句，其中英文的?表示占位符
// const sqlStr = 'insert into user set ?'
// //使用数据的形式，依次为？占位符指定具体的值
// db.query(sqlStr,user,(err,results)=>{
//     if(err){
//         return console.log(err.message) //失败
//     }
//     if(results.affectedRows ===1 ){
//         console.log('插入数据成功！')  //成功
//     }
// })


// const user={'id':2,name:'aaa',gender:'男'}
// //待执行的sql语句，其中英文的?表示占位符
// const sqlStr = 'update user set name=?,gender=? where id=?'
// //
// db.query(sqlStr,[user.name,user.gender,user.id],(err,results)=>{
//     if(err){
//         return console.log(err.message) //失败
//     }
//     if(results.affectedRows ===1 ){
//         console.log('更新数据成功！')  //成功
//     }
// })

// const user={'id':2,name:'aaa',gender:'男'}
// //待执行的sql语句，其中英文的?表示占位符
// const sqlStr = 'update user set ? where id=?'
// //
// db.query(sqlStr,[user,user.id],(err,results)=>{
//     if(err){
//         return console.log(err.message) //失败
//     }
//     if(results.affectedRows ===1 ){
//         console.log('更新数据成功！')  //成功
//     }
// })


// const sqlStr = 'delete from user where id=?'
// //
// db.query(sqlStr,1,(err,results)=>{
//     if(err){
//         return console.log(err.message) //失败
//     }
//     if(results.affectedRows ===1 ){
//         console.log('删除数据成功！')  //成功
//     }
// })

const sqlStr = 'update user set status=1 where id=?'
//
db.query(sqlStr,2,(err,results)=>{
    if(err){
        return console.log(err.message) //失败
    }
    if(results.affectedRows ===1 ){
        console.log('删除数据成功！')  //成功
    }
})