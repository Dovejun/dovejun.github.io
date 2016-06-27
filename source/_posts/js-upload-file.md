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
<form>
   <input type='file' value=''>
   <input type ='button' value='上传'>
</form>
<progress></progress>

```