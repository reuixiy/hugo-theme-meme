简体中文 |
[繁體中文](https://github.com/reuixiy/hugo-theme-meme/blob/master/README.zh-tw.md) |
[English](https://github.com/reuixiy/hugo-theme-meme/blob/master/README.md)

<div align="center"><img src="https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/static/icons/apple-touch-icon.png" /></div>

# <div align="center">MemE</div>

## 简介

MemE 是一个强大且可高度定制的 [GoHugo](https://github.com/gohugoio/hugo) 博客主题，专为个人博客设计，专注于优雅、简约、现代，以及代码之最佳实践。

## 预览

[![tn.png](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/tn.png)](https://io-oi.me/hugo-theme-meme/)

### 文档

[Hugo 主题 MemE 文档](https://io-oi.me/tech/documentation-of-hugo-theme-meme/)

### 浏览器支持

MemE 广泛地使用了 [CSS 变量](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)和 [let 声明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)。这些特性被以下浏览器所支持：

- Chrome 49+
- Firefox 44+
- Edge 15+
- Opera 36+
- Safari 10+

IE（Internet Explorer）浏览器不支持 CSS 变量。

## 快速开始

https://gohugo.io/getting-started/quick-start/

### 安装 Hugo（`extended` 扩展版）

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
~/blog $ git submodule add --depth 1 https://github.com/reuixiy/hugo-theme-meme.git themes/meme
```

### 开始写作

1. 将 `config.toml` 替换为[示例配置](https://github.com/reuixiy/hugo-theme-meme/blob/master/config-examples/zh-cn/config.toml)。

   ```sh
   ~/blog $ rm config.toml && cp themes/meme/config-examples/zh-cn/config.toml config.toml
   ```

2. 新建一篇文章和一个关于页面：

   ```sh
   ~/blog $ hugo new "posts/hello-world.md"
   ~/blog $ hugo new "about/_index.md"
   ```

3. 现在：

   ```sh
   ~/blog $ hugo server -D
   ```

## 定制 MemE

MemE 通过 Hugo 管道实现使用 SCSS 生成 CSS，而非静态的 CSS 文件，同时提供一个 [`_custom.scss`](https://github.com/reuixiy/hugo-theme-meme/blob/master/assets/scss/custom/_custom.scss) 文件以供用户定制。

直接新建一个 `~/blog/assets/scss/custom/_custom.scss` 并将你自己的样式加入其中，就能覆盖主题的 `~/blog/themes/meme/assets/scss/custom/_custom.scss` 文件，且其会正确地被应用。

事实上，在 Hugo 中你可以覆盖主题的任何模板，见这个非官方的镜像网页：<https://gohugobrasil.netlify.com/themes/customizing/>

## 更新 MemE

```sh
~/blog $ git submodule update --rebase --remote
```

如果失败了，请尝试：

1. 删除 `meme` 文件夹，比如

   ```sh
   ~/blog $ rm -rf themes/meme
   ```

2. 重新克隆 MemE

   ```sh
   ~/blog $ git clone --depth 1 https://github.com/reuixiy/hugo-theme-meme.git themes/meme
   ```

**特别注意**：MemE 主题有时会新增一些全新功能或一些毁灭改动，所以在你更新完后，请务必检查 [`config.toml` 的改动历史](https://github.com/reuixiy/hugo-theme-meme/commits/master/config-examples)并将相应内容也更新！

## Awesome MemE

请看 [#2](https://github.com/reuixiy/hugo-theme-meme/issues/2)。

## 支持的 Front Matter

请看 <https://github.com/reuixiy/hugo-theme-meme#supported-front-matter>。
