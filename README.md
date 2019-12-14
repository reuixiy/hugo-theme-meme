English | 
[简体中文](https://github.com/reuixiy/hugo-theme-meme/blob/master/README.zh-cn.md)

<div align="center"><img src="https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/static/icons/apple-touch-icon.png" /></div>

# <div align="center">MemE</div>

## Description

MemE is a powerful and highly customizable [GoHugo](https://github.com/gohugoio/hugo) theme for personal blogs. MemE focuses on elegance, simplicity, modernity, and code correctness. Also, I hope you would enjoy MemE like a meme and share MemE like a meme! Just like what your blog and articles do! 😝

## Lighthouse Report

![lighthouse-report.png](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/lighthouse-report.png)

## Quick Start

https://gohugo.io/getting-started/quick-start/

### Install Hugo (`extended` version)

For Arch Linux users:

```sh
~ $ sudo pacman -S hugo
~ $ hugo new site blog
```

For users of other systems, see: https://gohugo.io/getting-started/installing/

### Install MemE

```sh
~ $ cd blog
~/blog $ git init
~/blog $ git submodule add https://github.com/reuixiy/hugo-theme-meme.git themes/meme
```

How to update MemE to the latest version?

```sh
~/blog $ git submodule update --rebase --remote
```

### Blogging

1. Replace `config.toml` with [config.toml](https://github.com/reuixiy/hugo-theme-meme/blob/master/config-examples/en-us/config.toml).

2. Create a new post and the about page:
   ```sh
   ~/blog $ hugo new "posts/hello-world.md"
   ~/blog $ hugo new "about/_index.md"
   ```

3. Now:
   ```sh
   ~/blog $ hugo server -D
   ```

## Awesome MemE

See [#2](https://github.com/reuixiy/hugo-theme-meme/issues/2).

## Supported Front Matter

Name | Description | Notes
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
mathjax | add MathJax support | boolean, override `enableMathJax` in `config.toml`, theme only
comments | set `false` to disable comments in mainSections or set `true` to enable comments in non-mainSections | boolean, theme only
smallCaps | small caps? | boolean, override `enableSmallCaps` in `config.toml`, theme only
dropCap | drop cap? | boolean, override `enableDropCap` in `config.toml`, theme only
dropCapAfterHr | drop cap after every horizontal rule tag? | boolean, override `enableDropCapAfterHr` in `config.toml`, theme only
deleteHrBeforeDropCap | delete horizontal rule tag before drop cap? | boolean, override `deleteHrBeforeDropCap` in `config.toml`, theme only
indent | indent instead of margin? | boolean, override `paragraphStyle` in `config.toml`, theme only
align | normal, justify, center | srting, if euqal to "normal", will override `enableJustify` in `config.toml`, theme only
original | original? You can add the following 8 terms if you set `false`. The `author` is required, other optional | boolean, override `original` in `config.toml`, theme only
author | author of original post | string, theme only
link | link of original post | string, URL, theme only
copyright | license of the post | string, Markdown supported, theme only
website | author’s website | string, theme only
email | author’s email | string, theme only
motto | author’s description | string, theme only
avatar | author’s avatar | string, URL, theme only
twitter | author’s twitter id | string, theme only
disqus_url | * | string, if not set, will use `Permalink` as default
disqus_identifier | * | string, if not set, will use `RelPermalink` as default
disqus_title | * | string, if not set, will use `Title` as default

*: see https://gohugo.io/content-management/front-matter/  
   and https://gohugo.io/templates/internal/#configure-disqus
