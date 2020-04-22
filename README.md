English | 
[简体中文](https://github.com/reuixiy/hugo-theme-meme/blob/master/README.zh-cn.md)

<div align="center"><img src="https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/static/icons/apple-touch-icon.png" /></div>

# <div align="center">MemE</div>

## Description

MemE is a powerful and highly customizable [GoHugo](https://github.com/gohugoio/hugo) theme for personal blogs. MemE focuses on elegance, simplicity, modernity, and code correctness. Also, I hope you would enjoy MemE like a meme and share MemE like a meme! Just like what your blog and articles do! 😝

## Preview

![tn.png](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/tn.png)

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
~/blog $ git submodule add --depth 1 https://github.com/reuixiy/hugo-theme-meme.git themes/meme
```

### Blogging

1. Replace `config.toml` with [config examples](https://github.com/reuixiy/hugo-theme-meme/blob/master/config-examples/en/config.toml).
   ```sh
   ~/blog $ rm config.toml && cp themes/meme/config-examples/en/config.toml config.toml
   ```

2. Create a new post and the about page:
   ```sh
   ~/blog $ hugo new "posts/hello-world.md"
   ~/blog $ hugo new "about/_index.md"
   ```

3. Now:
   ```sh
   ~/blog $ hugo server -D
   ```

## Customize MemE

MemE uses SCSS via [Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/) to generate CSS instead of static CSS file and provides a [`_custom.scss`](https://github.com/reuixiy/hugo-theme-meme/blob/master/assets/scss/custom/_custom.scss) for customization.

Just create a `~/blog/assets/scss/custom/_custom.scss` and add your own styles into this file. Your `_custom.scss` will override `~/blog/themes/meme/assets/scss/custom/_custom.scss` and your custom CSS will be applied correctly.

Actually, you can override any template of theme in Hugo, see this *unofficial mirror* page: https://gohugobrasil.netlify.com/themes/customizing/

## Update MemE

```sh
~/blog $ git submodule update --rebase --remote
```

If failed, try:

1. Delete `meme` folder, e.g.
   ```sh
   ~/blog $ rm -rf themes/meme
   ```

2. Clone MemE again
   ```sh
   ~/blog $ git clone --depth 1 https://github.com/reuixiy/hugo-theme-meme.git themes/meme
   ```

**Note that** MemE makes some brand new features or *breaking changes* sometimes, so please be sure to check [the modification history of `config.toml`](https://github.com/reuixiy/hugo-theme-meme/commits/master/config-examples) and update the related items after the update!

## Awesome MemE

See [#2](https://github.com/reuixiy/hugo-theme-meme/issues/2).

## Supported Front Matter

Name | Description | Notes
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
tocNum | display TOC number | boolean, override `displayTOCNum` in `config.toml`, MemE only
displayCopyright | display post-copyright | boolean, override `displayPostCopyright` in `config.toml`, MemE only
badge | display updated-badge | boolean, override `displayUpdatedBadge` in `config.toml`, MemE only
gitinfo | display post-gitinfo | boolean, override `displayPostGitInfo` in `config.toml`, MemE only
share | display post-share | boolean, override `displayPostShare` in `config.toml`, MemE only
related | display related-posts | boolean, override `displayRelatedPosts` in `config.toml`, MemE only
katex | add KaTeX support | boolean, override `enableKaTeX` in `config.toml`, MemE only
mathjax | add MathJax support | boolean, override `enableMathJax` in `config.toml`, MemE only
mermaid | add Mermaid support | boolean, override `enableMermaid` in `config.toml`, MemE only
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
