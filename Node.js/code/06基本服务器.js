const http =require('http')
const server =http.createServer()
server.on('request',function(req,res){
    console.log('Some visit our web server.')
})

server.listen(8888,function(){
    console.log('server running at http://127.0.0.1:8888')
})