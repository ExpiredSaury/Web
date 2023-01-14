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
