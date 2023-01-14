//注册新用户
exports.regUser=(req,res)=>{
    //获取客户端提交到服务器的用户
    const userinfo=req.body
    console.log(userinfo)
    res.send('reguser OK')
}



exports.login=(req,res)=>{
    res.send('login OK ')
}