简体中文 | 
<a href="README.md">English</a>

<div align="center"><img src="https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/static/icons/apple-touch-icon.png" /></div>

# <div align="center">MemE</div>

## 简介

MemE 是一个强大且可高度定制的 [GoHugo](https://github.com/gohugoio/hugo) 博客主题，专为个人博客设计。MemE 主题专注于优雅、简约、现代，以及代码的正确性。同时，希望你将像欣赏一个模因一样欣赏 MemE，希望你将像分享一个模因一样分享 MemE，就像你的博客和文章所做的那样😝！在线预览：https://meme-test.netlify.com

## 特性

- InstantClick
- Dark Mode
- PWA
- JSON-LD
- Multilingual（多语言）
- Atom / RSS
- TOC（目录）
- Drop Cap & Small Caps（首字下沉和小型大写）
- KaTeX（公式）
- Google Analytics
- Disqus
- 支持部署在星际文件系统（IPFS）
- ...

## Lighthouse 报告

![lighthouse-report.png](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/lighthouse-report.png)

你可以[在线查看这份报告](https://www.webpagetest.org/result/190827_95_55731f51a7aecf418c2f4de3ce7c14b4/)，或者你也可以[再自行测试](https://www.webpagetest.org/lighthouse)一下。

## 细节

### 首页布局

对于首页布局，MemE 主题提供了三种不同的样式：文章摘要（posts）、诗意人生（poetry）、视频片段（footage）。

1. [文章摘要](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/home-layout-posts.png)，在线预览：https://meme-test.netlify.com
2. [诗意人生](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/home-layout-poetry.png)，在线预览：https://io-oi.me
3. [视频片段](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/home-layout-footage.png)，在线预览：https://yixiuer.me

同时，你也可以通过设置 `homeLayout` 为 `page`，并在站点的 content 文件夹下添加 `_index.md` 文件，以得到一个类似普通页面╱文章的首页布局。

### 懒人友好

MemE 主题有一些特别的专为慵懒博主设计的特性，比如：

1. 自动探测文章中的图片，以用于 JSON-LD 和 Open Graph
2. 将文章的类别名（比如：分类和标签）或专栏名用于 keywords
3. 用 GitHub 风格的方式实现代码高亮，而非使用 Hugo 的代码高亮短代码
4. 将图片的标题用于图片的说明，而非使用 Hugo 的短代码
5. 在 Markdown 中像插入图片一样插入视频
6. 利用 Hugo 默认的 Markdwon 引擎支持数学公式的正确渲染，而非 Mmark
7. ...

### 字体排版

对于字体排版，MemE 主题是高度可定制的。你可以自定义字体、字号、行间距，甚至文章内容的宽度。

MemE 主题有首字下沉和小型大写的特性。你可以为你的文章设置首字下沉，或者为你的文章设置在每一条分隔线（`<hr />`）之后首字下沉——如《[纽约客](https://www.newyorker.com/)》一样。你也可以设置你的文章中的标题（headings）为小型大写（仅限英文）。

此外，MemE 主题还支持两种不同的分段样式：段间距式和段首缩排。如果你设置段落样式为 `indent`，你将可以得到一种像书本一样的段落风格。同时，MemE 主题有专为诗歌设计的布局（需指定 `type` 为 `poetry`，或者将文章放在 `content/poetry/` 文件夹下）。

对于中文用户，MemE 主题设计了一个新的 Markdown 语法来支持[着重号](https://en.wikipedia.org/wiki/Emphasis_point)。如何使用呢？`..文字..`。当然，如果你不需要它，你可以设置 `enableEmphasisPoint` 为 `false`。

另一个特别为中文用户设计的特性是字形纠正。当你将英文字体放于中文字体之前——那会导致一些中文的标点符号的字形不正确——时，这将会非常有用。

## 文档

这个主题的文档还仍在码字中，如果你感兴趣，请持续关注 MemE。

### 安装

https://gohugo.io/getting-started/quick-start/

#### Hugo

对于 Arch Linux 的用户：

```
~ $ sudo pacman -S hugo
~ $ hugo new site blog
```

对于其它系统的用户，请查看：https://gohugo.io/getting-started/installing/

#### MemE

```
~ $ cd blog
~/blog $ git init
~/blog $ git submodule add https://github.com/reuixiy/hugo-theme-meme.git themes/meme
```

如何将 MemE 更新到最新版本？

```
~/blog $ git submodule update --rebase --remote
```

### 写作

1. 将 `config.toml` 替换为预览站点的 [config.toml](https://github.com/reuixiy/meme-test/blob/master/config.toml)。

2. 添加一些文章到站点的 `content` 目录内，或者，你也可以直接复制预览站点的 [content](https://github.com/reuixiy/meme-test/tree/master/content)。

3. ```
   ~/blog $ hugo server -D
   ```

### 配置

#### 基本

请查看 [config.toml](https://github.com/reuixiy/meme-test/blob/master/config.toml)。

#### Service Worker

MemE 主题使用 [Workbox](https://developers.google.com/web/tools/workbox/) (via workbox-build & gulp) 来生成 sw.js，请参考：https://github.com/reuixiy/meme-test

#### 支持的 Front Matter

名字 | 描述 | 说明
---|---|---
title | * | string
linkTitle | * | string
subtitle | displayed below the title | string, Markdown supported, theme only
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
meta | set `false` to disable post-meta | boolean, theme only
toc | display TOC | boolean, override `enableTOC` in `config.toml`, theme only
displayCopyright | display post-copyright | boolean, override `displayPostCopyright` in `config.toml`, theme only
badge | display updated-badge | boolean, override `displayUpdatedBadge` in `config.toml`, theme only
gitinfo | display post-gitinfo | boolean, override `displayPostGitInfo` in `config.toml`, theme only
related | display related-posts | boolean, override `displayRelatedPosts` in `config.toml`, theme only
katex | add KaTeX support | boolean, override `enableKaTeX` in `config.toml`, theme only
comments | set `false` to disable comments in postSections or set `true` to enable comments in non-postSections | boolean, theme only
original | original? You can add the following 9 terms if you set `false`. The `author` is required, other optional | boolean, override `original` in `config.toml`, theme only
author | author of original post | string, theme only
link | link of original post | string, URL, theme only
copyright | license of the post | string, Markdown supported, theme only
website | author’s website | string, theme only
email | author’s email | string, theme only
motto | author’s description | string, Markdown supported, theme only
avatar | author’s avatar | string, URL, theme only
twitter | author’s twitter id | string, theme only
facebook | author’s facebook id | string, theme only
darkImage | dark image? | boolean, override `darkImage` in `config.toml`, theme only
smallCap | small cap? | boolean, override `enableSmallCap` in `config.toml`, theme only
dropCap | drop cap? | boolean, override `enableDropCap` in `config.toml`, theme only
dropCapAfterHr | drop cap after every horizontal rule tag? | boolean, override `enableDropCapAfterHr` in `config.toml`, theme only
deleteHrBeforeDropCap | delete horizontal rule tag before drop cap? | boolean, override `deleteHrBeforeDropCap` in `config.toml`, theme only
indent | indent instead of margin? | boolean, override `paragraphStyle` in `config.toml`, theme only
align | normal, justify, center | srting, if euqal to "normal", will override `enableJustify` in `config.toml`, theme only
disqus_url | * | string, if not set, will use `Permalink` as default
disqus_identifier | * | string, if not set, will use `RelPermalink` as default
disqus_title | * | string, if not set, will use `Title` as default

*: see https://gohugo.io/content-management/front-matter/
   and https://gohugo.io/templates/internal/#configure-disqus

### 更多

我将会写一篇通俗易懂的教程，教你如何从 Hexo 迁移到 Hugo，并会说明它们之间的一些不同之处。

## Awesome MemE

请看 [#2](https://github.com/reuixiy/hugo-theme-meme/issues/2)。

## 说明

事实上，我开发 MemE 主题的原因其实很简单——我想将[我的博客](https://io-oi.me/)从 [Hexo](https://hexo.io/) 平滑地迁移到 [Hugo](https://gohugo.io/)。于是，我开始研究 Hugo 的文档并 Google 一切。最终，我做到了！

由于我之前使用的 Hexo 博客主题是基于 [NexT](https://github.com/theme-next/hexo-theme-next) 的，所以 MemE 主题也是继承了 NexT 的一些布局和样式的。

对于我参考过的代码，我都已经在源码中标明来源。稍后，我也会在此处添加一个完整的列表。
