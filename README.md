English | 
<a href="https://github.com/reuixiy/hugo-theme-meme/blob/master/README.zh-cn.md">简体中文</a>

<div align="center"><img src="https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/static/icons/apple-touch-icon.png" /></div>

# <div align="center">MemE</div>

## Description

MemE is a powerful and highly customizable [GoHugo](https://github.com/gohugoio/hugo) theme for personal blogs. MemE focuses on elegance, simplicity, modernity, and code correctness. Also, I hope you would enjoy MemE like a meme and share MemE like a meme! Just like what your blog and articles do! 😝 Live demo: https://meme-test.netlify.com

## Features

- InstantClick
- Dark Mode
- PWA
- JSON-LD
- Multilingual
- Atom / RSS
- TOC
- Drop Cap & Small Caps
- KaTeX
- Google Analytics
- Disqus
- IPFS supported
- ...

## Lighthouse Report

![lighthouse-report.png](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/lighthouse-report.png)

You can check this [report](https://www.webpagetest.org/result/190827_95_55731f51a7aecf418c2f4de3ce7c14b4/) online or [test again](https://www.webpagetest.org/lighthouse) by yourself.

## Details

### Home page layout

For home page layout, MemE has three different kinds: posts, poetry, footage.

1. [Posts](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/home-layout-posts.png), live demo: https://meme-test.netlify.com
2. [Poetry](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/home-layout-poetry.png), live demo: https://io-oi.me
3. [Footage](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/home-layout-footage.png), live demo: https://yixiuer.me

Also, you can set `homeLayout` equal to `page` and add `_index.md` to site’s content folder, which will get a layout like normal page/post.

### Good for lazy bloggers

MemE has some special features for lazy bloggers. Such as:

1. Auto detect images for JSON-LD and Open Graph
2. Use posts’ taxonomies — such as categories and tags — or sections as keywords
3. Use GitHub flavored code fences instead of highlight shortcode for Syntax Highlighting
4. Use images’ title for caption instead of shortcode
5. Insert videos like images in Markdown
6. Use Hugo’s default Markdown engine for mathematical notation rendering instead of Mmark
7. ...

### Typography

MemE is highly customizable in typography. You can customize font family, font size, line height, and even content width by yourself.

MemE has Drop Cap & Small Caps features. You can set drop cap or enable drop cap after every horizontal rule tag (`<hr />`) — behaved like *[The New Yorker](https://www.newyorker.com/)* — for your posts. You can also set Small Caps for your posts’ headings.

Moreover, MemE has two different paragraph style: margin and indent. You would get a paragraph style like a book if you set paragraph style to `indent`. Also, MemE has a special layout for poetry.

For Chinese users, MemE has a new Markdown syntax to render [emphasis point](https://en.wikipedia.org/wiki/Emphasis_point). How to use it? `..文字..`. Of course, you can set `enableEmphasisPoint` to `false` if you don't use it.

Another special feature for Chinese users is glyph correction. It’s very useful if you set English fonts before Chinese fonts, which makes some Chinese punctuation glyphs incorrect.

## Documentation

This theme’s documentation is still under development, you can *watch* MemE if you are interested.

### Installation

https://gohugo.io/getting-started/quick-start/

#### Hugo

For Arch Linux users:

```
~ $ sudo pacman -S hugo
~ $ hugo new site blog
```

For users of other systems, see: https://gohugo.io/getting-started/installing/

#### MemE

```
~ $ cd blog
~/blog $ git init
~/blog $ git submodule add https://github.com/reuixiy/hugo-theme-meme.git themes/meme
```

How to update MemE to the latest version?

```
~/blog $ git submodule update --rebase --remote
```

### Blogging

1. Replace `config.toml` with demo site’s [config.toml](https://github.com/reuixiy/meme-test/blob/master/config.toml).

2. Add some files to `content` directory or just copy demo site’s [content](https://github.com/reuixiy/meme-test/tree/master/content).

3. ```
   ~/blog $ hugo server -D
   ```

### Configuration

#### Basic

See [config.toml](https://github.com/reuixiy/meme-test/blob/master/config.toml).

#### Service Worker

MemE uses [Workbox](https://developers.google.com/web/tools/workbox/) (via workbox-build & gulp) to generate sw.js, see: https://github.com/reuixiy/meme-test

#### Supported Front Matter

Name | Description | Note
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
smallCaps | small caps? | boolean, override `enableSmallCaps` in `config.toml`, theme only
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

### More

I will write an easy-to-understand tutorial about how to migrate from Hexo to Hugo and the differences between them.

## Awesome MemE

See [#2](https://github.com/reuixiy/hugo-theme-meme/issues/2).

## Footnotes

Actually, the reason I developed MemE is simply because I want to migrate [my blog](https://io-oi.me/) from [Hexo](https://hexo.io/) to [Hugo](https://gohugo.io/) smoothly. So I started to research Hugo’s documentation and google everything. In the end, I did it!

Since my previous Hexo blog theme is based on [NexT](https://github.com/theme-next/hexo-theme-next), MemE inherits some of NexT’s layouts and styles.

For the code I have referenced, I have indicated the source in the code. And I will add a full list here later.
