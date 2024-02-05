繁體中文 |
[简体中文](https://github.com/reuixiy/hugo-theme-meme/blob/master/README.zh-cn.md) |
[English](https://github.com/reuixiy/hugo-theme-meme/blob/master/README.md)

<div align="center"><img src="https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/static/icons/apple-touch-icon.png" /></div>

# <div align="center">MemE</div>

## 簡介

MemE 是一個強大且可高度客制化的 [GoHugo](https://github.com/gohugoio/hugo) 部落格主題，專為個人部落格設計，專注於優雅、簡約、現代，以及程式碼之最佳實踐。

## 預覽

[![tn.png](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/tn.png)](https://io-oi.me/hugo-theme-meme/)

### 文檔

[Hugo 主題 MemE 文檔](https://io-oi.me/tech/documentation-of-hugo-theme-meme/)

### 瀏覽器支援

MemE 廣泛地使用了 [CSS 變數](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)和 [let 宣告](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)。這些特性被以下瀏覽器所支援：

- Chrome 49+
- Firefox 44+
- Edge 15+
- Opera 36+
- Safari 10+

IE（Internet Explorer）瀏覽器不支援 CSS 變數。

## 快速開始

https://gohugo.io/getting-started/quick-start/

### 安裝 Hugo（`extended` 擴充套件版）

對於 Arch Linux 的使用者：

```sh
~ $ sudo pacman -S hugo
~ $ hugo new site blog
```

對於其它作業系統的使用者，請檢視：https://gohugo.io/getting-started/installing/

### 安裝 MemE

```sh
~ $ cd blog
~/blog $ git init
~/blog $ git submodule add --depth 1 https://github.com/reuixiy/hugo-theme-meme.git themes/meme
```

### 開始寫作

1. 將 `config.toml` 替換為[示例配置](https://github.com/reuixiy/hugo-theme-meme/blob/master/config-examples/zh-cn/config.toml)。

   ```sh
   ~/blog $ rm config.toml && cp themes/meme/config-examples/zh-cn/config.toml config.toml
   ```

2. 新建一篇文章和一個關於頁面：

   ```sh
   ~/blog $ hugo new "posts/hello-world.md"
   ~/blog $ hugo new "about/_index.md"
   ```

3. 現在：

   ```sh
   ~/blog $ hugo server -D
   ```

## 定製 MemE

MemE 透過 Hugo 管道實現使用 SCSS 生成 CSS，而非靜態的 CSS 檔案，同時提供一個 [`_custom.scss`](https://github.com/reuixiy/hugo-theme-meme/blob/master/assets/scss/custom/_custom.scss) 檔案以供使用者定製。

直接新建一個 `~/blog/assets/scss/custom/_custom.scss` 並將你自己的樣式加入其中，就能覆蓋主題的 `~/blog/themes/meme/assets/scss/custom/_custom.scss` 檔案，且其會正確地被應用。

事實上，在 Hugo 中你可以覆蓋主題的任何模板，見這個非官方的映象網頁：<https://gohugobrasil.netlify.com/themes/customizing/>

## 更新 MemE

```sh
~/blog $ git submodule update --rebase --remote
```

如果失敗了，請嘗試：

1. 刪除 `meme` 資料夾，比如

   ```sh
   ~/blog $ rm -rf themes/meme
   ```

2. 重新克隆 MemE

   ```sh
   ~/blog $ git clone --depth 1 https://github.com/reuixiy/hugo-theme-meme.git themes/meme
   ```

**特別注意**：MemE 主題有時會新增一些全新功能或一些毀滅改動，所以在你更新完後，請務必檢查 [`config.toml` 的改動歷史](https://github.com/reuixiy/hugo-theme-meme/commits/master/config-examples)並將相應內容也更新！

## Awesome MemE

請看 [#2](https://github.com/reuixiy/hugo-theme-meme/issues/2)。

## 支援的 Front Matter

請看 <https://github.com/reuixiy/hugo-theme-meme#supported-front-matter>。
