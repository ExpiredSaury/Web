//导入
const express =require('express')

//创建服务器的实例对象
const app = express()
//导入并配置cors中间件
const cors=require('cors')
app.use(cors())

//配置表单数据的中间件,这个中间件只能解析 application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({extended:false}))

//导入并使用路由模块
const userRouter=require('./router/user')

app.use('/api',userRouter)

//启动服务器
app.listen(888,()=>{
    console.log('api server running at http:127.0.0.1:888');
})
