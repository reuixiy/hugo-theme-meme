简体中文 | 
[English](https://github.com/reuixiy/hugo-theme-meme/blob/master/README.md)

<div align="center"><img src="https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/static/icons/apple-touch-icon.png" /></div>

# <div align="center">MemE</div>

## 简介

MemE 是一个强大且可高度定制的 [GoHugo](https://github.com/gohugoio/hugo) 博客主题，专为个人博客设计。MemE 主题专注于优雅、简约、现代，以及代码的正确性。同时，希望你将像欣赏一个模因一样欣赏 MemE，希望你将像分享一个模因一样分享 MemE，就像你的博客和文章所做的那样😝！

## Lighthouse 测试报告

![lighthouse-report.png](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/lighthouse-report.png)

## 快速开始

https://gohugo.io/getting-started/quick-start/

### 安装 Hugo（扩展版）

对于 Arch Linux 的用户：

```sh
~ $ sudo pacman -S hugo
~ $ hugo new site blog
```

对于其它系统的用户，请查看：https://gohugo.io/getting-started/installing/

### 安装 MemE

```sh
~ $ cd blog
~/blog $ git init
~/blog $ git submodule add https://github.com/reuixiy/hugo-theme-meme.git themes/meme
```

如何将 MemE 更新到最新版本？

```sh
~/blog $ git submodule update --rebase --remote
```

### 开始写作

1. 将 `config.toml` 替换为 [config.toml](https://github.com/reuixiy/hugo-theme-meme/blob/master/config-examples/zh-cn/config.toml)。

2. 新建一篇文章和一个关于页面：
   ```sh
   ~/blog $ hugo new "posts/hello-world.md"
   ~/blog $ hugo new "about/_index.md"
   ```

3. 现在：
   ```sh
   ~/blog $ hugo server -D
   ```

## Awesome MemE

请看 [#2](https://github.com/reuixiy/hugo-theme-meme/issues/2)。

## 支持的 Front Matter

名字 | 描述 | 说明
---|---|---
title | * | string
linkTitle | * | string
subtitle | displayed below the title | string, Markdown supported, MemE only
date | * | string
lastmod | * | string
publishDate | * | string
expiryDate | * | string
`<taxonomies>` eg: categories, tags, series | * | array
description | * | string, Markdown supported
summary | * | string, Markdown supported
keywords | * | array
images | * | array
slug | * | string
url | * | string
draft | * | boolean
isCJKLanguage | * | boolean
weight | * | integer
type | * | string, if equal to "poetry", will use a special layout for it
layout | * | string
outputs | * | array
aliases | * | array
markup | * | string
meta | set `false` to disable post-meta | boolean, MemE only
toc | display TOC | boolean, override `enableTOC` in `config.toml`, MemE only
displayCopyright | display post-copyright | boolean, override `displayPostCopyright` in `config.toml`, MemE only
badge | display updated-badge | boolean, override `displayUpdatedBadge` in `config.toml`, MemE only
gitinfo | display post-gitinfo | boolean, override `displayPostGitInfo` in `config.toml`, MemE only
related | display related-posts | boolean, override `displayRelatedPosts` in `config.toml`, MemE only
katex | add KaTeX support | boolean, override `enableKaTeX` in `config.toml`, MemE only
mathjax | add MathJax support | boolean, override `enableMathJax` in `config.toml`, MemE only
comments | set `false` to disable comments in mainSections or set `true` to enable comments in non-mainSections | boolean, MemE only
smallCaps | small caps? | boolean, override `enableSmallCaps` in `config.toml`, MemE only
dropCap | drop cap? | boolean, override `enableDropCap` in `config.toml`, MemE only
dropCapAfterHr | drop cap after every horizontal rule tag? | boolean, override `enableDropCapAfterHr` in `config.toml`, MemE only
deleteHrBeforeDropCap | delete horizontal rule tag before drop cap? | boolean, override `deleteHrBeforeDropCap` in `config.toml`, MemE only
indent | indent instead of margin? | boolean, override `paragraphStyle` in `config.toml`, MemE only
indentFirstParagraph | indent the first paragraph? | boolean, override `indentFirstParagraph` in `config.toml`, MemE only
align | normal, justify, center | srting, if euqal to "normal", will override `enableJustify` in `config.toml`, MemE only
original | original? You can add the following 8 terms if you set `false`. The `author` is required, other optional | boolean, override `original` in `config.toml`, MemE only
author | author of original post | string, MemE only
link | link of original post | string, URL, MemE only
copyright | license of the post | string, Markdown supported, MemE only
website | author’s website | string, MemE only
email | author’s email | string, MemE only
motto | author’s description | string, MemE only
avatar | author’s avatar | string, URL, MemE only
twitter | author’s twitter id | string, MemE only
disqus_url | * | string, if not set, will use `Permalink` as default
disqus_identifier | * | string, if not set, will use `RelPermalink` as default
disqus_title | * | string, if not set, will use `Title` as default

*: see https://gohugo.io/content-management/front-matter/  
   and https://gohugo.io/templates/internal/#configure-disqus
