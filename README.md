English |
[简体中文](https://github.com/reuixiy/hugo-theme-meme/blob/master/README.zh-cn.md) |
[繁體中文](https://github.com/reuixiy/hugo-theme-meme/blob/master/README.zh-tw.md)

<div align="center"><img src="https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/static/icons/apple-touch-icon.png" /></div>

# <div align="center">MemE</div>

## Description

MemE is a powerful and highly customizable [GoHugo](https://github.com/gohugoio/hugo) theme for personal blogs, which focuses on elegance, simplicity, modernity, and best practices in coding.

## Preview

[![tn.png](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/tn.png)](https://io-oi.me/hugo-theme-meme/)

### Browser support

MemE uses [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and [let statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) extensively. These features are supported by the following browsers:

- Chrome 49+
- Firefox 44+
- Edge 15+
- Opera 36+
- Safari 10+

Internet Explorer does not support CSS variables.

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

1. Replace `hugo.toml` with [config examples](https://github.com/reuixiy/hugo-theme-meme/blob/master/config-examples/en/config.toml).

   ```sh
   ~/blog $ rm hugo.toml && cp themes/meme/config-examples/en/hugo.toml hugo.toml
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

Actually, you can override any template of theme in Hugo, see this _unofficial mirror_ page: https://gohugobrasil.netlify.com/themes/customizing/

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

**Note that** MemE makes some brand new features or _breaking changes_ sometimes, so please be sure to check [the modification history of `hugo.toml`](https://github.com/reuixiy/hugo-theme-meme/commits/master/config-examples) and update the related items after the update!

## Awesome MemE

See [#2](https://github.com/reuixiy/hugo-theme-meme/issues/2).

## Supported Front Matter

<details>
  <summary>Click to expand!</summary>

  | Name                                        | Description                                                                                              | Notes                                                                        |
  | ------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
  | title                                       | \*                                                                                                       | string                                                                       |
  | linkTitle                                   | \*                                                                                                       | string                                                                       |
  | subtitle                                    | displayed below the title                                                                                | string, Markdown supported                                                   |
  | date                                        | \*                                                                                                       | string                                                                       |
  | lastmod                                     | \*                                                                                                       | string                                                                       |
  | publishDate                                 | \*                                                                                                       | string                                                                       |
  | expiryDate                                  | \*                                                                                                       | string                                                                       |
  | `<taxonomies>` eg: categories, tags, series | \*                                                                                                       | array                                                                        |
  | description                                 | \*                                                                                                       | string, Markdown supported                                                   |
  | summary                                     | \*                                                                                                       | string, Markdown supported                                                   |
  | images                                      | \*                                                                                                       | array                                                                        |
  | slug                                        | \*                                                                                                       | string                                                                       |
  | url                                         | \*                                                                                                       | string                                                                       |
  | draft                                       | \*                                                                                                       | boolean                                                                      |
  | isCJKLanguage                               | \*                                                                                                       | boolean                                                                      |
  | weight                                      | \*                                                                                                       | integer                                                                      |
  | type                                        | \*                                                                                                       | string, if equal to "poetry", will use a special layout for it               |
  | layout                                      | \*                                                                                                       | string                                                                       |
  | outputs                                     | \*                                                                                                       | array                                                                        |
  | aliases                                     | \*                                                                                                       | array                                                                        |
  | markup                                      | \*                                                                                                       | string                                                                       |
  | hideInHomepage                              | hide this post in homepage posts list                                                                    | boolean, valid for "posts" homepage with `enableHideInHomepage` enabled      |
  | languageCode                                | add `lang` attribute with this value to `<article>`                                                      | string                                                                       |
  | meta                                        | set `false` to disable post-meta                                                                         | boolean, override `enablePostMeta` in `hugo.toml`                          |
  | displayPublishedDate                        | display published date in post-meta                                                                      | boolean, override `displayPublishedDate` in `hugo.toml`                    |
  | displayModifiedDate                         | display modified date in post-meta                                                                       | boolean, override `displayModifiedDate` in `hugo.toml`                     |
  | displayExpiryDate                           | display expiry date in post-meta                                                                         | boolean, override `displayExpiryDate` in `hugo.toml`                       |
  | displayCategory                             | display category in post-meta                                                                            | boolean, override `displayCategory` in `hugo.toml`                         |
  | displayWordCount                            | display word count in post-meta                                                                          | boolean, override `displayWordCount` in `hugo.toml`                        |
  | displayReadingTime                          | display reading time in post-meta                                                                        | boolean, override `displayReadingTime` in `hugo.toml`                      |
  | displayBusuanziPagePV                       | display page views in post-meta                                                                          | boolean, override `displayBusuanziPagePV` in `hugo.toml`                   |
  | toc                                         | display TOC                                                                                              | boolean, override `enableTOC` in `hugo.toml`                               |
  | tocNum                                      | display TOC number                                                                                       | boolean, override `displayTOCNum` in `hugo.toml`                           |
  | anchor                                      | enable headings anchor                                                                                   | boolean, override `enableHeadingsAnchor` in `hugo.toml`                    |
  | displayCopyright                            | display post-copyright                                                                                   | boolean, override `displayPostCopyright` in `hugo.toml`                    |
  | badge                                       | display updated-badge                                                                                    | boolean, override `displayUpdatedBadge` in `hugo.toml`                     |
  | gitinfo                                     | display post-gitinfo                                                                                     | boolean, override `displayPostGitInfo` in `hugo.toml`                      |
  | share                                       | display post-share                                                                                       | boolean, override `displayPostShare` in `hugo.toml`                        |
  | related                                     | display related-posts                                                                                    | boolean, override `displayRelatedPosts` in `hugo.toml`                     |
  | katex                                       | add KaTeX support                                                                                        | boolean, override `enableKaTeX` in `hugo.toml`                             |
  | mathjax                                     | add MathJax support                                                                                      | boolean, override `enableMathJax` in `hugo.toml`                           |
  | mermaid                                     | add Mermaid support                                                                                      | boolean, override `enableMermaid` in `hugo.toml`                           |
  | comments                                    | set `false` to disable comments in mainSections or set `true` to enable comments in non-mainSections     | boolean                                                                      |
  | smallCaps                                   | small caps?                                                                                              | boolean, override `enableSmallCaps` in `hugo.toml`                         |
  | dropCap                                     | drop cap?                                                                                                | boolean, override `enableDropCap` in `hugo.toml`                           |
  | dropCapAfterHr                              | drop cap after every horizontal rule tag?                                                                | boolean, override `enableDropCapAfterHr` in `hugo.toml`                    |
  | deleteHrBeforeDropCap                       | delete horizontal rule tag before drop cap?                                                              | boolean, override `deleteHrBeforeDropCap` in `hugo.toml`                   |
  | indent                                      | indent instead of margin?                                                                                | boolean, override `paragraphStyle` in `hugo.toml`                          |
  | indentFirstParagraph                        | indent the first paragraph?                                                                              | boolean, override `indentFirstParagraph` in `hugo.toml`                    |
  | align                                       | normal, justify, center                                                                                  | string, if equal to "normal", will override `enableJustify` in `hugo.toml` |
  | original                                    | original? You can add the following 8 terms if you set `false`. The `author` is required, other optional | boolean, override `original` in `hugo.toml`                                |
  | author                                      | author of original post                                                                                  | string                                                                       |
  | link                                        | link of original post                                                                                    | string, URL                                                                  |
  | copyright                                   | license of the post                                                                                      | string, Markdown supported                                                   |
  | website                                     | author’s website                                                                                         | string                                                                       |
  | email                                       | author’s email                                                                                           | string                                                                       |
  | motto                                       | author’s description                                                                                     | string                                                                       |
  | avatar                                      | author’s avatar                                                                                          | string, URL                                                                  |
  | twitter                                     | author’s twitter id                                                                                      | string                                                                       |
  | disqus_url                                  | \*                                                                                                       | string, if not set, will use `Permalink` as default                          |
  | disqus_identifier                           | \*                                                                                                       | string, if not set, will use `RelPermalink` as default                       |
  | disqus_title                                | \*                                                                                                       | string, if not set, will use `Title` as default                              |

  \*: see https://gohugo.io/content-management/front-matter/  
      and https://gohugo.io/templates/internal/#configure-disqus
</details>
