---
title: 第一篇博客
date: 2016-06-23 16:04:44
updated: 2016-06-26 09:12:23
type: 'tags'
tags: [note,hexo]
---
  想写一些自己的文章，一直没有去做 今天偶然发现了hexo的blog框架，感觉是自己的菜，然后就开始部署环境。

  实不相瞒，虽然用了很长一段时间的nodeJS，但是在弄hexo的时候还是问题重重，首先就是一个很严重的问题，按照步骤将blog push到github 但是gitpage 访问一直是404，后来查看email 才知道git账号一直没有验证，所以网页无法查看。。。汗死！ 
  
   言而总之，总而言之，最终还是搭建起来了！

---

首先，先把hexo搭建的步骤写一下，为以后做准备 (^O^).  下面所有的步骤都是在windows 环境下的安装与部署，其他系统后续再添加

### step 1 安装hexo

```bash
$ npm install hexo
```

### step 2 初始化hexo

```bash
$ hexo init 
```

### step 3 创建新bolg文章

```bash
$ hexo n 'blog name'
```

### step 4 启动hexo服务

```bash
$ hexo s
```

### step 5 生成静态文件

```bash
$ hexo g
```

### step 6 推送内容到站点（github）

```bash
$ hexo d
```

---

一天一篇文章计划 第<span class="text-success">1</span>天
