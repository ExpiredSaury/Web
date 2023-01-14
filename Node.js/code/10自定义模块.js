//在一个自定义模块中，默认情况下，module.exports={}


//向module.exports对象上挂载username属性
module.exports.username='zhao'
//向module.exports对象上挂载sayHello方法
module.exports.sayHello=function(){
    console.log('Hello!');
}

const age=18

module.exports.age=age


//module.exports指向一个全新的对象
module.exports={
    nickname:'赵',
    sayHi(){
        console.log('Hi!!')

    }
}