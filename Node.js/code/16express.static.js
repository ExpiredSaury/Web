const express=require('express')
const app =express()

//调用express.static方法，对外提供静态资源
app.use('/public',express.static('./clock'))
app.listen(888,()=>{
    console.log('express server running http://127.0.0.1:888');
})