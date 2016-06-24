---
title: hexo 网站配置文件
date: 2016-06-24 16:59:22
type: 'tags'
tags: hexo
---
刚开始看配置文件的时候确实有点头大，毕竟英文实在不咋地，不过也能看得懂，又google了一下网上分享的配置文件，发现蛮简单。
---
站点需要配置两个地方，一个是站点配置，一个是主题配置（这次先不管主题配置），先介绍一下站点配置：

### 站点配置

配置文件地址： yoursiteDir/_config.yml

```bash
title:  #站点名称
subtitle:  #副标题
description:  #页面描述
author:  #作者，在页面最下方版权的地方显示
email: #联系邮箱
language:  #语言设置

timezone:

# URL
## 先不管
url: 
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:

# Category & Tag
default_category: uncategorized
category_map:
tag_map:


archive: 1
category: 1
tag: 1

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: landscape

duoshuo_shortname:  #多说评论

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repository: https://github.com/Kingvill/kingvill.github.io.git
  branch: master

```

---

一天一篇文章计划 第<span class="text-success">2</span>天