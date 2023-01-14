[toc]



**HTML就是书写网页的一套标准**

```html
<!--单行注释-->
<!--
多行注释1
多行注释2
多行注释3
-->
由于HTML代码非常的杂乱无章并且很多，所以我们习惯性的用注释来划定区域，方便后续查找
<!--导航条开始-->
导航条所有的html代码
<!--导航条结束-->
<!--左侧菜单栏开始-->
左侧菜单栏的html代码
<!--左侧菜单栏结束-->


```

## HTML文档结构
```html
<html>
    <head></head> :head内的标签不是给用户看的，而是定义一些配置，主要是给浏览器看到
    <body></body> :body内的标签 写什么浏览器就渲染什么，用户就能看到什么 
</html>
```
**ps**:文件的后缀名其实是给用户看到，只不过对应不同的文件，文件后缀名有不同的软件来处理添加功能
**注意**:HTML代码是没有格式的，可以全部写在一行，只不过习惯了缩进来表示代码
## 两种打开HTML文件的方式
* 找到文件所在的位置右键选择浏览器打开
* 在pycharm内部****集成了自动调用浏览器的功能，直接点击即可（前提是安装了对应的浏览器）

## 标签的分类1
```python
1. 双标签
2. 单标签（自闭和标签）
```
## head内常用标签
```html
<title>标题</title> 显示网页标题
<style></style> 内部用来书写css代码\
<script>
    alert(123)
</script>  内部用来书写js代码
<script src="my.js"></script>    还可以引入外部js文件
<link rel="stylesheet" href="my.css">   引入外部css文件

    
    <meta name="keywords" content="python全站,Linux运维培训,Python自动化,GO语言培训">  当你在用浏览器搜索的时候，只要输入了keywords后面指定的关键字，那么该网页都有可能被百度搜索出来展示给用户（网页推荐）
    
    <meta name="description" content="淘宝网-亚洲最大的网上交易平台，提供各类服装、美容、家具、数码、话费、数亿优质商品，等安全交易保障服务">  网页的描述信息
```

## body内常用标签

肉眼能够在浏览器上看到的花里胡哨的页面，内部都是HTML代码

#### 基本标签

```html
<h1>标题h1</h1>  标题标签1-6级标题
<b>加粗</b>
<i>斜体</i>
<u>下划线</u>
<em>强斜体</em>
<strong>强加粗</strong>
<s>删除线</s>
<p>虽然他送了我玫瑰花</p>
<br>换行
<hr> 水平分割线
<p>段落</p>
```

#### 标签分类2

```python
# 1. 块儿标签：独占一行
	h1-h6 p  div
    1. 块级标签可以修改长宽，行内标签不可以，修改了也不会变化
    2. 块级标签内部可以嵌套任意的块级标签和行内标签，
    	但是p标签虽然是块级标签，但是他里面只可以嵌套行内标签，不能嵌套块级		  标签，如果套了，问问题也不大，浏览器会自动帮你解开（浏览器会面向用户		的，不会轻易的报错，哪怕有报错，用户也基本感觉不出来）
# 2. 行内标签：自身文本多大就占多大
	i u s b strong em  span
    行内标签不能嵌套块级标签
```

#### 特殊符号

```python
&nbsp;空格
&gt;大于号
&lt;小于号
&amp; &
&yen; ￥
&copy; ©
&reg;  ®
```

#### 常用标签

```python
div  块儿级标签
span  行内标签

构造页面初期最常使用的,页面布局一般先用div和span占位之后再去调整样式，尤其是
div使用非常的频繁
div可以看成一块区域,也就意味着用div来提前规定所有的区域，之后往该区域的内部填写内容即可
普通的文本先用span标签

```



#### img标签

```python
#图片标签
<img src="" alt="" title="">

src:
    1.图片路径：可以是本地的也可以网上的
    2.url:自动向该url发送get请求获取数据
    
 alt:
    当图片加载不出来的时候，给图片的描述信息
title:
    当鼠标悬浮到图片上显示的提示信息
    
height:
width:
    当只修改一个的时候，另外一个参数会等比例的缩放
    如果修改了两个参数，并且没有考虑比例的问题，图片就会失真
    
```

#### a标签

```python
#链接标签
<a href="https://www.baidu.com" target="_blank">百度知道</a>

"""
当a标签指定的网址从来没有被点击过，那么a标签的字体颜色是蓝色
如果点击过了，就会是紫色，（浏览器给记忆了）
"""

href:
    放的是url ,用户点击，就会跳转到url页面
    可以放其他a标签的id 值，点击即可跳转到对应的标签位置
    
target
	默认是_self，在当前页面跳转
    新建页面跳转 _blank
# a标签的锚点功能
"""点击一个文本标题，页面自动跳转到哦标题对应的内容区域"""
<a href="" id="d1">顶部Top</a>
<h1 id="d22">11</h1>
<div  style="height: 1000px;background-color: tomato"></div>
<a href="" id="d2">中间Middle</a>
<div  style="height: 1000px;background-color: blue"></div>
<a href="#d1">回到顶部</a>
<a href="#d2">回到中间</a>
<a href="#d22">回到中间</a>

```

#### 标签具有的两个重要书写

```python
1. id值
	类似于标签的身份证号，在同一个html页面上id值不能重复
2. class值
	该值有点类似于面向对象里面的继承，一个标签可以继承多个class值
	
```

标签可以有自带的属性，也可以有自带的属性

```html
<p id="d1111" class="c11" username="zhao" password="123"></p>
```

#### 列表标签

* 无序列表

```html
<ul>
    <li>第一</li>
    <li>第二</li>
    <li>第三</li>
</ul>
虽然ul很丑，但是在页面布局的时候，只要是排版一致的几行数据基本上使用的都是ul标签
```

* 有序列表

```html
<ol type="1" start="5">
    <li></li>
    <li></li>
    <li></li>
</ol>

<!--1 A I a....-->
```

* 标题列表

```html
<dl>
    <dt>标题一</dt>
    <dd>内容一</dd>
    <dt>标题二</dt>
    <dd>内容二</dd>
    <dt>标题三</dt>
    <dd>内容三</dd>

</dl>
```

#### 表格标签

```html
<table>
  <thead>
  	 <tr>   一个tr就是一行
            <th></th>  加粗文本
            <td></td>  正常文本
        </tr>  
  </thead>  表头（字段信息）
  <tbody>
    
  </tbody>  表单（数据信息）
</table>

<td border="1" >zhao</td>  #加外边框
<td colspan="2" >zhao</td> #水平方向占多行
<td rowspan="2" >zhao</td> #垂直方向占多行
```

#### 表单标签

```python
"""
获取用户数据，（用户输入的内容，用户选择，用户上传...）基于网络发送给后端服务器
"""

<form action=""></form> 在该form 标签内部书写的获取用户的数据都会被form标签提交到后端


action:控制数据提交的后端路径(给哪个服务端提交数据)
	1.什么都不写，默认朝当前页面所在的url提交数据
    2.写全路径:https://www.baidu.com 朝百度服务端提交
    3.只写路径后缀:action='/index/' 自动识别当前服务端的IP和Port拼接到前面  host:port/index/

<label for="d1">   第一种：直接将input框写在label内
     username:<input type="text" id="d1">
</label>
<label for="d2">password:</label> 第二种：通过id链接即可，无需嵌套
<input type="password" id="d2">
PS:input不跟label关联也没有问题

"""
label和input都是行内标签
"""


"""input标签类似于前端的变形金刚，通过type属性变形"""
	text:普通文本
    password:密文
    date :日期
    submit:用来触发form表单提交数据的动作
    button:一个普普通通的按钮，本身没有任何功能，学玩js后可以给它绑定自定义各种功能
    reset:重置内容
    radio:单选
    	默认选中要加checked="checked"
        <input type="radio" name="gender" checked="checked">男
        当标签的属性名和属性值一样的时候可以简写
        <input type="radio" name="gender" checked>女
    checkbox:多选
    	<input type="checkbox" checked>JayChou
    file:获取文件,也可以一次性获取多个,加个multiple
    	<input type="file" mutiple>
    hidden:隐藏当前input框
     	<input type="hidden">
        
    
        
"""select标签,默认是单选，可以加multiple变多选,默认选中用selected"""   
    <p>周杰伦
        <select name="" id="" multiple>
            <option value="">可爱女人</option>
            <option value="" selected>霍元甲</option>
            <option value="" selected>晴天</option>
            <option value="" >稻香</option>
            <option value="" >退后</option>
            <option value="" >安静</option>
            <option value="" >爱在西元前</option>
        </select>
    </p>        
     
    <p>带标题的省份:
        <select name="" id="">
            <optgroup label="上海">
                <option value="">浦东</option>
                <option value="">黄埔</option>
            </optgroup>
            <optgroup label="山西">
                <option value="">运城</option>
                <option value="">稷山</option>
            </optgroup>
            <optgroup label="北京">
                <option value="">朝阳区</option>
                <option value="">东城区</option>
            </optgroup>
        </select>
    </p>
    
"""textarea标签 获取大段文本（文本域）"""
		<textarea name="" id="" cols="30" rows="10" maxlength="20"></textarea>

 
# 能够触发form表单数据的按钮有哪些
	1. <input type="submit" value="注册">
    2. <button>点我</button>
    
#所有获取用户输入的标签都应该有name属性，
name类似于字典的Key
用户的数据类似于字典的value

    <p>性别:
        <input type="radio" name="gender">男
        <input type="radio" name="gender">女
        <input type="radio" name="gender">其他
    </p>
```

#### 验证form表单提交数据

```python
pip install Flask
```

```python
#form表单默认的提交数据的方式是get请求，数据是直接放在url后面的
http://127.0.0.1:5000/index/?gender=on
#可以通过method
<form action="http://127.0.0.1:5000/index/" method="post">


针对用户选择的标签，用户不需要输入内容，但是你需要提前给这些标签加上内容values值
	<p>性别:
        <input type="radio" name="gender" value="male">男
        <input type="radio" name="gender" checked value="female">女
        <input type="radio" name="gender" value="others">其他
    </p>
    <p>爱好:
        <input type="checkbox" checked name="hobby" value="Read">Read
        <input type="checkbox" checked name="hobby" value="Movie">Movie
        <input type="checkbox" name="hobby" value="JayChou">JayChou
        <input type="checkbox" name="hobby" value="Python">Python
    </p>
    
    <p>省份
        <select name="province" id="">
            <option value="hb">河北</option>
            <option value="sx" selected="selected">山西</option>
            <option value="sz">深圳</option>
            <option value="cq">重庆</option>
        </select>
    </p>
    
    
"""
form表单提交文件需要注意
	method必须是post
	enctype="multipart/form-data"	
		enctype类似于数据提交的编码格式
			默认是urlencoded 只能够提交普通的文本数据
			formdata 可以支持提交文件数据
"""

<form action="http://127.0.0.1:5000/index/" method="post" enctype="multipart/form-data">

#针对用户输入的标签，如果加了value 那就是默认值
<p>
  <label for="d1">
     username:<input type="text" id="d1" name="username" value="默认值">
  </label>
</p>


disables 禁用属性
readonly 只读

<label for="d1">
     username:<input type="text" id="d1" name="username" value="默认值" disabled>
</label>

<label for="d2">
	     username:<input type="text" id="d2" name="username" value="默认值" readonly>
</label>
```

```python
# -*- coding: UTF-8 -*- 
# @Date ：2022/10/9 17:53
from flask import Flask,request

app = Flask(__name__)

@app.route('/index/', methods=['GET', 'POST'])  # 当前url既可以支持get，也可以支持post
def index():
    print(request.form)#获取form表单提交过来的非文件数据
    print(request.files)#获取文件数据
    file_obj=request.files.get('myfile')
    # print(file_obj.name)
    file_obj.save(file_obj.name)
    return 'OK'


app.run()

```

## CSS 

层叠样式表：就是给HTML标签添加样式的，让他变得更好看

```python
# 注释
/*单行注释*/

/*
多行注释
多行注释
多行注释
*/

通常在写CSS样式的时候也会用注释来划定样式区域（应为HTML代码多，所有对应的CSS代码也会很多）

/*这是博客园首页的CSS样式文件*/
...
/*顶部导航条样式*/
...
/*左侧菜单栏样式*/
...
/*右侧菜单栏样式*/
...

# css样式语法结构
选择器{
    属性1:值1;
    属性2:值2;
}

# css三种引入方式
	1.style标签内部直接书写
      	<style>
            h1{
              color: yellow;
            }
  		</style>
     2. link标签引入外部css文件(最正规的方式 解耦合)
    	  <link rel="stylesheet" href="./my.css">
     3. 行内样式（一般不用）
        <h1 style="color: lime">老板好</h1>

```

```python
"""
css学习流程
	1.先学如何查找标签
		css查找标签的方式一定要会
	2.之后再学如何添加样式
"""
```

## CSS选择器

#### 基本选择器

```python
# id选择器
        #d1{
            color: lawngreen;
        }
# 类选择器
        .c1{
            color: red;
        }
# 元素/标签选择器
        span{
            color: mintcream;
        }
# 通用选择器
       *{
            color: darkgreen;
        }
```

#### 组合选择器

```python
# 在前端中 将标签嵌套用亲戚关系来描述层级
<div>div
    <p>div.p1</p>
    <p>div.p2
        <span>div.p2.span</span>
    </p>
    <span>div.span1</span>
    <span>div.span2</span>
</div>

div里的p span都是div的后代
p是div的后代
p里面的span是p的儿子，是div的孙子
div是p的父亲

# 后代选择器
        div span{
            color: red;
        }
# 儿子选择器
        div>span{
            color: red;
        }
# 毗邻选择器
        div+span{ /*同级别，紧挨着的第一个*/
            color: lime;
        }
# 弟弟选择器
        div~span{  /*同级别所有的span*/
            color: yellow;
        }
```

#### 属性选择器

```python
"""
 1. 含有某个属性
 2.含有某个属性并且有某个值
 3.含有某个属性并且有某个值的某个标签
 
"""
# 属性选择器是以[]来

[username] { background-color: red;}/*将所有含有属性名是username的标签背景色改为红色*/
[username='zhao']{color:orange;}
input[username='zhao']{background-color: yellow;}
```

#### 分组与嵌套

```css
div,span,p{   /*逗号表示并列关系*/
            color: tomato;
        }

#d1,.c1,span {
         color: greenyellow;
  		}

#d1 .c2{
           color: lime;
       }

```

#### 伪类选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        a:link { /*访问之前的状态*/
            color: red;
        }

        a:hover {
            color: blue; /*鼠标悬浮态*/
        }

        a:active {
            color: black; /*鼠标点击不松开的状态   激活态*/
        }

        a:visited {
            color: darkgreen; /*访问之后的状态*/
        }

        p {
            color: lime;
            font-size: 20px;
        }

        p:hover {
            color: #5bc0de;
        }

        input:focus { /*input框获取焦点  （鼠标点击了input框)*/
            background-color: mintcream;
        }

    </style>
</head>
<body>
<a href="https://blog.csdn.net/">拉钩网</a>
<p>点我</p>
<input type="text">
</body>
</html>
```

#### 伪元素选择器

```css
p:first-letter{
  font-size: 48px;
  color: orange;
}
p:before{
  content: '..?';
  color: blue;
}
p:after{
  content: '雨露均沾';
  color: tomato;
}


ps: before和after通常是用来清除浮动带来的影响：父标签塌陷的问题
```

#### 选择器优先级

```python
"""
id选择器
类选择器
标签选择器
行内式
"""
      1. 选择器相同，书写顺序不同
            # 就近原则
      2. 选择器相同，书写顺序不同
            # 行内  > id选择器 > 类选择器  > 标签选择器
# !important （优先级最高）强制让标签采用你的样式
```

## CSS属性相关

#### 设置长宽

```css
<style>
    p {
        background-color: red;
        height: 200px;
        width: 400px;
    }

    span {
        background-color: green;
        height: 200px;
        width: 400px;
        /*行内标签无法设置长宽，就算写了，也不生效*/
    }
</style>


/* 
	块儿级标签可以改长宽
	行内标签不可以改行宽
	块级标签的宽度不修改的情况下，默认占浏览器的一整行，块级标签的高度也就是取决于标签内部的文本高度
	行内标签宽度和高度都是由内部文本决定的，行内标签是无法设置长宽的

*/
```

#### 字体属性

```css
p {
    font-family: 'Arial Black', '微软雅黑'; /*第一个不生效，就用后面的，*/
    font-size: 24px;
    font-weight: bold;/*bold lighter 100-900 inherit*/
    /*color: red;!*直接写英文*!*/
    /*color: #ffff00;!*十六进制，颜色编号*!*/
    /*color: rgb(128,23,45);!*三基色 范围都是0-255*!*/
    color: rgba(128,23,45,0.1);/*第四个参数是颜色的透明度 范围是0-1*/
    
}
```

#### 文字属性

```css
p {
    /*text-align: center; !*  center right left *!*/
    /*text-align: justify;!*两端对齐*!*/
    /*text-decoration: underline; !*下划线*!*/
    /*text-decoration: overline; !*上划线*!*/
    text-decoration: line-through; /*删除线*/
    /*text-decoration: none;*/
    /*在HTML中，有很多标签渲染出来的样式效果是一样的*/
    font-size: 16px;
    text-indent: 32px;/*缩进32px*/

}

a {
    text-decoration: none; /* 用于给a标签去掉自带的 下划线*/
}


line-height 行高
```

#### 背景图片

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #d1{
            height: 500px;
            background-color: red;
        }
        #d2{
            height: 500px;
            background-color: greenyellow;
        }
        #d3{
            height: 500px;
            background-image: url("img.png");
            background-position:
          
            background-attachment: fixed;
        }
        #d4{
            height: 500px;
            background-color: aqua;
        }
    </style>
</head>
<body>
<div id="d1"></div>
<div id="d2"></div>
<div id="d3"></div>
<div id="d4"></div>
</body>
</html>



 /*background-repeat: repeat-x;!* x轴铺 *!*/
            /*background-repeat: repeat-y;!* y轴铺*!*/
            /*background-position: center center;*/

            background: red url("./dog.jpeg") no-repeat;
```

#### 边框

```html
# 任何一个标签都有上下左右四个不同的边框
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p {
            /*border: 1px;*/
            border-width: 6px;
            border-style: solid;
            border-color: rebeccapurple;
            background-color: lime;


        }

        div {
            /*border-left-width: 5px;*/
            /*border-left-color: red;*/
            /*border-left-style: solid;*/

            /*border-right-width: 10px;*/
            /*border-right-color: greenyellow;*/
            /*border-right-style: dotted;*/

            /*border-top-width: 15px;*/
            /*border-top-color: deeppink;*/
            /*border-top-style: solid;*/

            /*border-bottom-width: 5px;*/
            /*border-bottom-color: blue;*/
            /*border-bottom-style: dashed;*/

            border: 3px solid darkgreen;
        }
        #d1{
            background-color: mediumpurple;
            width: 400px;
            height: 400px;
            border-radius: 50%;  /*圆，直接写50%，长宽一致就是圆*/
        }
    </style>
</head>
<body>
<p></p>
<div>python</div>
<div id="d1"></div>
</body>
</html>
```

#### display属性

```html
# 能够让标签具有自身没有的属性和特征
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        /*#d1 {*/
        /*    !*display: none; !*隐藏标签，不显示在前端页面，并且原来的位置也不占有了，但是还存在文档上*!\*!*/
        /*    display: inline;*/
        /*}*/
        /*#d2{*/
        /*    display: inline;*/
        /*}*/
        /*#d3{*/
        /*    display: block; !*将标签设置成块儿级标签的特点*!*/
        /*}*/
        /*#d4{*/
        /*    display: block;*/
        /*}*/

        /*#d1{*/
        /*    display: inline-block;  !* 让标签既可以在一行显示，又可以设置长宽 *!*/
        /*}*/
        /*#d2{*/
        /*    display: inline-block;*/
        /*}*/
    </style>
</head>
<body>
<div style="display: none">div1</div>
<div>div2</div>
<div style="visibility: hidden">单纯的隐藏，位置还在</div>
<div>div4</div>

<!--<div id="d1" style="height: 100px ;width: 100px; background-color: blue">01</div>-->
<!--<div id="d2" style="height: 100px ;width: 100px; background-color: orange">02</div>-->
<!--<span id="d3" style="height: 100px ;width: 100px; background-color: grey" ></span>-->
<!--<span id="d4" style="height: 100px ;width: 100px; background-color: yellow"></span>-->

<!--<div id="d1" style="height: 100px ;width: 100px; background-color: blue">01</div>-->
<!--<div id="d2" style="height: 100px ;width: 100px; background-color: orange">02</div>-->
</body>
</html>

```

#### 盒子模型

```python
# margin 外边距（标签与标签之间的距离）
# border 边框
# padding 内填充/内边距
# content 内容

"""
body默认自带8px 的margin
"""

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <style>
    /**{*/
    /*  margin: 0 ;*/
    /*  padding:0;*/
    /*}*/
    #d1{
      margin-bottom: 50px;
    }
    #d2{
      margin-top: 20px;  /*不叠加，只取最大的*/
    }
    #dd{
      margin:0 auto;/*只能做到标签的 水平居中，*/
    }
    p{
      border:3px solid red;
      /*padding-left: 30px;*/
      /*padding-top: 20px;*/
      /*padding-right: 20px;*/
      /*padding-bottom: 20px;*/

      /*padding: 10px;*/
      /*padding:10px 20px;*/
      /*padding:10px 20px 30px;*/
      padding: 10px 20px 30px 40px;
    }
  </style>
</head>
<body>
<!--  <p style="border:1px solid red" id="d1">ppp</p>-->
<!--  <p style="border:1px solid blue" id="d2">ppp</p>-->
<!--<div style="border:5px solid red;height: 400px;width:400px">-->
<!--  <div id="dd" style="border:1px solid orange ;width:50px;height: 50px;background-color: blue "></div>-->
<!--</div>-->

<p>ppp</p>
</body>
</html>




```

#### 浮动

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            margin:0;
        }
        #d1{
            width: 20%;
            height: 1000px;
            background-color: darkgray;
            float: left;
        }
        #d2{
            width: 80%;
            height: 2000px;
            background-color: wheat;
            float: right;
        }
    </style>
</head>
<body>
<div id="d1"></div>
<div id="d2"></div>
</body>
</html>
```

#### 浮动带来的影响

```python
# 浮动带来的影响
#1 自己加一个div设置高度
#2 利用clear属性
    #d4{
            
            clear: left;   /*该标签的左边不能有浮动的元素*/
     }
    
 #3 通用的解决浮动带来的影响方法
	再写HTML代码之前，先提前写好处理了浮动带来的影响 css代码
    .clearfix:after {
                content: '';
                display: block;
                clear: both;
        }
    之后只要标签出现了塌陷问题，就给该标签加一个clearfix属性即可
    上述的解决方式是通用的，到哪里有一样，并且名字就叫clearfix
```

#### 溢出属性

```python
 /*overflow:visible;!*默认就是可见的*!*/
            /*overflow: hidden;!*溢出部分隐藏*!*/
            overflow:scroll ;/* 设置成上下滚动条的形式 */
            overflow:auto;/* 自动 */
```



#### 定位

* 相对定位

  ​	相对于标签原来的位置做移动 relative

* 绝对定位

  ​	相对于已经定位过的父标签做移动 absolute（没有父标签那么就以body 为参照）

* 固定定位 fix

  ​	相对于浏览器窗口固定在某个位置

* 静态

​		    所有的标签都是静态的 static，无法改变位置

ps:浏览器优先展示文本内容，如果发现文本内容被挡住了，会想方设法的找个位置展示出来

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #d1 {
            height: 100px;
            width: 100px;
            background-color: red;
            left: 50px; /*距离左边50px*/
            top: 50px; /* 距离上面50px*/
            /*position: static;!*默认是static，无法修改位置*!*/
            /*position: relative;*/
            /* 相对定位：
                    标签由static变为relative 它的性质就从原来没有定位的标签变成了已经定位过的标签
                     虽然位置没有动，但是性质已经发生了改变*/
        }

        #d2 {
            height: 100px;
            width: 200px;
            background-color: yellowgreen;
            position: relative;

        }

        #d3 {
            height: 200px;
            width: 400px;
            background-color: rosybrown;
            position: absolute;
            left: 200px;
            top: 100px;
        }
    </style>
</head>
<body>
<!--<div id="d1"></div>-->
<!--<div id="d2">python-->
<!--    <div id="d3"></div>-->
<!--</div>-->
<div style="height: 500px;background-color: red"></div>
<div style="height: 500px;background-color: blueviolet"></div>
<div style="height: 500px;background-color: darkcyan"></div>
<div style="position: fixed;bottom: 10px ;right:20px; height: 50px;width: 100px;background-color: white;border: 5px solid black"></div>
</body>
</html>
```

#### 验证浮动和定位是否脱离文档流（原来的位置是否还保留）

```python
"""
浮动
相对定位
固定定位
绝对定位
"""

# 不脱离文档流
 1.相对定位 
    
# 脱离文档流
 1. 浮动
 2.绝对定位
 3. 脱离文档流
 
```

#### z-index模态框

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <style>
    body{
      margin: 0;
    }
    .cover{
      position: fixed;
      left: 0;
      top:0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.4);
      z-index: 99;
    }
    .modal{
      background-color: white;
      width: 400px;
      height: 200px;
      position: fixed;
      left: 50%;
      top: 50%;
      z-index: 100;
      margin-left:-200px ;
      margin-top: -100px;

    }
    
  </style>
</head>
<body>
<div>这是最底层的页面内容</div>
<div class="cover"></div>
<div class="modal">
  <h1>登录页面</h1>
  <p>username:
    <input type="text">
  </p>
  <p>password:
    <input type="text">
  </p>
  <button>Click Me!!</button>
</div>
</body>
</html>
```

#### 透明度opacity

```python
"""不仅可以修改颜色的透明度，也可以修改字体的透明度"""
rgba只能影响颜色
而opacity可以修改颜色和字体
  <style>
    #d1{
      background-color: rgba(0,0,0,0.5);
    }
    #d2{
      
      opacity: 0.3;
      color: black;
    }
  </style>
```



