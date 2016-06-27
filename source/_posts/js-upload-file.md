---
title: js异步文件上传
date: 2016-06-25 14:18:52
type: 'tags'
tags: [js,node]
---

前段时间应朋友要求写一个js异步的文件上传，因为一直在做H5的东西所以用了H5的formdata，但是呢他们要兼容IE8，所以没办法。。写了一个iframe的异步。

### 用H5写的异步提交

html代码很简单

```bash
<form enctype='multipart/form-data' method='post' action='javascript:;' role = "form">
  <input type = "file" name = "files" />
  <button onClick = "uploadFile()">上传</button>
  <span id = "spanMsg"></span>
</form>

```

js代码  须引用2.0版本以上的Jquery包

```bash
function uploadFile(){
  var formData = new FormData($("form")[0]);
  $.ajax({
    url: '/postFile', ##提交地址
    type: 'POST',
    data: formData,
    async: true,
    cache: false,
    contentType: false,
    processData: false,
    success: function(data){
      if(200 === data.code) {
        $("#spanMsg").html("上传成功");
      } else {
        $("#spanMsg").html('error');
      }
    },
    error: function(e){
      $("#spanMsg").html("error" + e);
    }
  });
}
```
node 服务端代码 服务端采用express框架 （express安装及运用后续会慢慢添加，敬请期待 ^o^）
只有核心代码部分，其他引用先不贴出来了

``` bash
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var morgan = require('morgan');

··· ##其他代码

router.post('/postFile',function(req, res, next) {
  var filename = req.files.files.name;  ## 获取上传用户名
  var filePath = './public/file/' + filename;  ## 文件保存地址
  fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(filePath));  ## 读取流文件并保存到服务端
  res.json({code: 200}); ## 请求返回
})

```
### 兼容IE8以下浏览器
由于IE8 不支持formdata 所以只能用古老的办法，通过页面加载一个iframe，然后文件提交操作在iframe框架内处理，处理完成后将iframe从页面中删除，反馈给主页面一个状态值，以此来达到没有刷新的文件提交。

---

一天一篇文章计划 第<span class="text-success">3</span>天
