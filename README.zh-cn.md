简体中文 | 
<a href="https://github.com/reuixiy/hugo-theme-meme/blob/master/README.md">English</a>

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

## 报告

![lighthouse-report.png](https://raw.githubusercontent.com/reuixiy/hugo-theme-meme/master/images/lighthouse-report.png)

你可以[在线查看这份 Lighthouse 报告](https://www.webpagetest.org/result/190827_95_55731f51a7aecf418c2f4de3ce7c14b4/)，或者你也可以[再自行测试](https://www.webpagetest.org/lighthouse)一下。

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
2. 将文章的类别名（比如：分类和标签）或分区名用于 keywords
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

由于文档还在码字中，为了中文用户的方便，先贴出 MemE 主题的单语言示例配置的简体中文版本：

```toml
baseURL = "https://example.com/"
theme = "meme"
title = "Hugo Theme MemE"
languageCode = "zh-CN"
copyright = "[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)"
hasCJKLanguage = true

defaultContentLanguage = "zh-cn"
defaultContentLanguageInSubdir = false

# 是否启用 Git 版本信息
enableGitInfo = false

# 是否复数化列表的标题
pluralizeListTitles = false

# 摘要文字的字数
summaryLength = 42

# 是否生成 robots.txt 文件
enableRobotsTXT = true

# 代码高亮相关配置
pygmentsCodefences = true
pygmentsUseClasses = true
pygmentsCodefencesGuessSyntax = true
pygmentsOptions = "linenos=table"

# 是否开启 GitHub 风格的 Emoji 书写方式
enableEmoji = true

# 脚注的返回链接
footnoteReturnLinkContents = "↩"

# 分页设置
paginate = 5

# 相关文章设置
[related]
threshold = 80
includeNewer = true
toLower = true
[[related.indices]]
name = "series"
weight = 100
[[related.indices]]
name = "categories"
weight = 100
[[related.indices]]
name = "tags"
weight = 95
[[related.indices]]
name = "keywords"
weight = 90
[[related.indices]]
name = "date"
weight = 10
pattern = "2006"

# 修改时间的设置
[frontmatter]
lastmod = ["lastmod", ":git", ":fileModTime", ":default"]

# Markdown 渲染器的设置
[blackfriday]
smartypants = false
fractions = false
hrefTargetBlank = true
extensionsmask = ["hardLineBreak", "backslashLineBreak"]

# 是否使用丑 URL（以 `.html` 结尾）
# uglyURLs = true

# URL 结构
[permalinks]
categories = "/categories/:slug/"
tags = "/tags/:slug/"

# 类别
[taxonomies]
category = "categories"
tag = "tags"

# Atom 输出设置
[mediaTypes."application/atom+xml"]
suffixes = ["xml"]

# Atom 输出设置
[outputFormats.SectionsAtom]
mediaType = "application/atom+xml"
baseName = "atom"

# RSS 输出设置
[outputFormats.SectionsRSS]
mediaType = "application/rss+xml"
baseName = "rss"

# 输出设置
[outputs]
page = ["HTML"]
home = ["HTML", "SectionsAtom", "SectionsRSS"]
section = ["HTML"]
taxonomyTerm = ["HTML"]
taxonomy = ["HTML"]

# 作者信息
[author]
name = "reuixiy"
email = "reuixiy@gmail.com"
motto = "Viva La Vida"
avatar = "/icons/apple-touch-icon.png"
website = "https://io-oi.me/"
twitter = "reuixiy"
facebook = "reuixiy"

# RSS & Atom 文章数设置
[services.rss]
limit = -1

# 菜单设置

# 菜单栏
[[menu.main]]
url = "/home/"
name = "Home"
weight = 1
pre = "internal"
post = "home"
identifier = "home"

[[menu.main]]
url = "/archives/"
name = "Archives"
weight = 2
pre = "internal"
post = "archive"
identifier = "archives"

[[menu.main]]
url = "/posts/"
name = "Posts"
weight = 3
pre = "internal"
post = "wpexplorer"
identifier = "posts"

[[menu.main]]
url = "/poetry/"
name = "Poetry"
weight = 4
pre = "internal"
post = "grav"
identifier = "poetry"

[[menu.main]]
url = "/categories/"
name = "Categories"
weight = 5
pre = "internal"
post = "th"
identifier = "categories"

[[menu.main]]
url = "/tags/"
name = "Tags"
weight = 6
pre = "internal"
post = "tags"
identifier = "tags"

[[menu.main]]
url = "/about/"
name = "About"
weight = 7
pre = "internal"
post = "user-circle"
identifier = "about"

# 「诗意人生」首页布局的底部链接（图标形式）
# [[menu.home]]
# url = "/life/"
# weight = 1
# pre = "internal"
# post = "grav"
# identifier = "life"

# [[menu.home]]
# url = "/tech/"
# weight = 2
# pre = "internal"
# post = "wpexplorer"
# identifier = "tech"

# [[menu.home]]
# url = "/about/"
# weight = 3
# pre = "internal"
# post = "user-circle"
# identifier = "about"

# 「诗意人生」首页布局的底部链接（文字形式）
# [[menu.home]]
# url = "/life/"
# name = "Life"
# weight = 1
# pre = "internal"
# identifier = "life"

# [[menu.home]]
# url = "https://t.me/yixiuer"
# name = "Telegram"
# weight = 2
# pre = "external"
# identifier = "telegram"

# [[menu.home]]
# url = "/atom.xml"
# name = "Feed"
# weight = 3
# pre = "external"
# identifier = "feed"

# 关于页面的极简页脚的左边部分
[[menu.socials]]
url = "https://github.com/reuixiy"
name = "GitHub"
weight = 1
pre = "external"
identifier = "github"

[[menu.socials]]
url = "https://twitter.com/reuixiy"
name = "Twitter"
weight = 2
pre = "external"
identifier = "twitter"

[[menu.socials]]
url = "https://www.spotify.com/"
name = "Music"
weight = 3
pre = "external"
identifier = "music"

# 关于页面的极简页脚的右边部分
[[menu.links]]
url = "/"
name = "HOME"
weight = 1
pre = "internal"
identifier = "home"

[[menu.links]]
url = "/series/"
name = "Series"
weight = 2
pre = "internal"
identifier = "series"

[[menu.links]]
url = "/atom.xml"
name = "Feed"
weight = 3
pre = "external"
identifier = "feed"

# 主题设置
[params]
# 是否显示顶栏
enableHeader = true
# 是否在首页显示顶栏
displayHeaderInHome = true

# 是否显示菜单栏
enableMenu = true
# 是否在首页显示菜单栏
displayMenuInHome = true

# 是否用 SVG 作为站点的品牌栏（在顶栏内）
# 如果是，请将你的 SVG 放到 `SVG.toml` 文件内
# 如果否，则会使用你的站点标题作为默认值
# 单位：px
siteBrandSVG = true
siteBrandSVGWidth = 250
siteBrandSVGHeight = 100
siteBrandSVGFill = "#fff"

# 当使用站点标题作为站点的品牌栏时
# 字体的大小和颜色
# 单位：em
siteBrandFontSize = 5
siteBrandFontColor = "#fff"

# 品牌栏的背景色
# siteBrandBackgroundColor = "hsl(240, 8%, 12%)"
# 品牌栏的背景图片
siteBrandBackgroundImage = "linear-gradient(90deg, #f79533 0, #f37055 15%, #ef4e7b 30%, #a166ab 44%, #5073b8 58%, #1098ad 72%, #07b39b 86%, #6dba82 100%)"

# 首页布局
# poetry, footage, posts, page
homeLayout = "posts"

# 「诗意人生」首页布局的设置
# 诗句，支持 Markdown
homePoetry = []
# 链接的内间距，单位：em
homeLinksPadding = 1

# 「视频片段」首页布局的设置
homePoster = ""
homeVideoWebm = ""
homeVideoMp4 = ""
homeLogo = ""
homeLogoLink = ""
homeTitle = ""
homeMotto = ""
homeDescription = ""
homeKeywords = ""
homeLinksDelimiter = ""

# 站点的 LOGO，用于 JSON-LD, Twitter Cards, Open Graph
siteLogo = "/icons/apple-touch-icon.png"
# 站点的描述，用于 HTML 的头部元数据
siteDescription = "MemE is a powerful and highly customizable GoHugo theme for personal blogs."
# 站点的关键词，如果为空，则会取站点的所有类别名作为默认值
siteKeywords = []
# 站点的创建时间，请保持此格式，更改数字
siteCreatedTime = "1969-07-20T20:17:43+00:00"
# 站点的推特帐号，用于 Twitter Cards
siteTwitter = "reuixiy"
# 站点的脸书帐号，用于 Open Graph
siteFacebook = "reuixiy"

# 分类方式
# sections or categories
# 注意：如果你设置为 `sections`，
# 请务必将此配置文件中的类别（taxonomies）中的 `categories` 删除
categoryBy = "categories"

# 分类页面
# 是否开启树状分类
# 注意：如果你设置 categoryBy 为 `sections`，则无法关闭树状分类
enableTree = true
# 是否显示文章
displayPosts = true
# 是否显示每一分类下的文章数
displayPostsCount = true

# 标签页面
# 是否开始标签云
enableTagCloud = true
fontUnit = "em"
largestFontSize = 2.5
smallestFontSize = 1

# 列表的宽度，单位：em
# 如果为空（""），则用 42 作为默认值
listWidth = 30
# 是否显示列表的标题
displayListTitle = true
# 列表的日期格式
# 请遵循格式：https://gohugo.io/functions/format/
listDateFormat = "January 2"
# 列表的日期的位置，left 或 right
listDatePosition = "right"
# 是否按月份分隔列表
groupByMonth = true
# 是否开启十二生肖
chineseZodiac = true
# 是否翻译年份
i18nYear = true
# 是否翻译月份
i18nMonth = true

# 类别列表
# 是否显示每一类别下的文章数
displayTaxonomyTermCount = true

# Override Hugo’s default value
mainSections = ["posts"]

# 文章的分区范围
postSections = ["posts", "poetry"]

# Atom & RSS
# 订阅的分区范围
feedSections = ["posts"]
# 是否包括全文内容，如果否，则只会包含文章的摘要
# 说明：你可以在文章的 Front Matter 中指定摘要，
# `summary` 或 `description`，但后者优先级高于前者
includeContent = true

# 深色模式
# 是否开启
enableDarkMode = true
# 默认模式
defaultTheme = "light"
# 是否隐藏模式切换开关
# 注意：如果开启了深色模式，即使你隐藏了开关，你的读者依然可能以深色模式
# 阅读你的博客，如果该读者的系统设置了深色模式的话（`prefers-color-scheme: dark`）
hideThemeToggle = false
# 是否在首页隐藏模式切换开关
hideThemeToggleInHome = false

# 网页应用
# 前往 https://realfavicongenerator.net/ 生成相关图标和文件
# 仅保留 android-chrome-512x512.png, apple-touch-icon.png, mstile-150x150.png,
# safari-pinned-tab.svg, favicon.ico, site.webmanifest 这些文件，删除其余
# 将这些文件移动到 ~/blog/static/icons/ 目录下，再将 favicon.ico, site.webmanifest 移动到 ~/blog/static/ 目录下
# 再将 site.webmanifest 重命名为 manifest.json，并检查和修改相关内容（图标的路径）
themeColor = "#fff"
themeColorDark = "#1c1c21"
safariMaskColor = "#2a6df4"
msApplicationTileColor = "#fff"

# 网页头部元数据、搜索引擎优化（SEO）、社交网络发现
# 注意：如果你设置 twitterCards 为 `true`，请务必开启 openGraph
# 否则，你的 Twitter Cards 信息将会不完整
jsonLD = true
openGraph = true
twitterCards = true
# 是否自动探测图片
autoDetectImages = true

# InstantClick
enableInstantClick = true

# 是否开启 Service Worker
# 需要第三方支持，暂见：https://io-oi.me/tech/pwa-via-workbox/
enableServiceWorker = true

# 是否开启 KaTeX
# 说明：建议在有需要的文章的 Front Matter 中设置 `katex` 为 `true`
#      不建议在此处开启
enableKaTeX = false

# 是否开启评论
enableComments = false
# 是否开启 Disqus
enableDisqus = false
disqusShortname = ""

# 是否开启谷歌分析
enableGoogleAnalytics = false
# 跟踪代码的类型
# `gtag` or `analytics`
trackingCodeType = "gtag"
trackingID = ""

googleSiteVerification = ""

# https://developers.facebook.com/apps/
# Used for Open Graph
facebookAppID = ""

# 文章设置

# 超链接的颜色变化持续时间
# 单位：秒
duration = 0.5

# 浅色模式的主色
# HSL 颜色值
primaryColorLight = "220, 90%, 56%"
# 深色模式的主色
primaryColorDark = "201, 65%, 62%"

# 文章的内容宽度
# 如果为空（""），则用 42 作为默认值
# 单位：em
postWidth = 32

# 文章是否为原创（会影响文章的作者和版权信息）
# 说明：如果有某篇文章为非原创，则在该文章的 Front Matter 中设置 `false`
original = true

# 是否显示文章描述
displayPostDescription = true

# 文章的相关信息
# 是否开启
enablePostMeta = true
# 是否在首页开启（仅对「文章摘要」首页布局有效）
enablePostMetaInHome = true
# 文章的相关信息的日期格式
postMetaDateFormat = "January 2, 2006"
# 是否显示发布时间
displayPublishedDate = true
# 发布时间的图标
publishedDateIcon = "calendar-alt"
# 是否显示修改时间
displayModifiedDate = true
# 修改时间的图标
modifiedDateIcon = "calendar-check"
# 是否显示过期时间
# 说明：仅当其值不为空时才会显示
displayExpiredDate = true
# 过期时间的图标
expiredDateIcon = "calendar-times"
# 是否显示分类
displayCategory = true
# 分类的图标
categoryIcon = "folder"
# 分类的分隔符
categoryDelimiter = "/"
# 是否显示字数统计
displayWordCount = true
# 字数统计的图标
wordCountIcon = "pencil-alt"
# 是否显示阅读时长
displayReadingTime = true
# 阅读时长的图标
readingTimeIcon = "clock"

# 文章的目录
# 是否开启（全局设置）
# 说明：文章的 Front Matter 中的 `toc` 的优先级高于此处
enableTOC = false
# 是否显示目录的标题
displayTOCTitle = true
# 是否链接文章的标题到目录
linkHeadingsToTOC = true

# 分节标题锚点╱分节标识
# 是否开启
enableHeadingsAnchor = true
# 分节标题级别的范围
# 正则格式，默认 1-6，即 1|2|3|4|5|6，即 h1-h6
headingsOpt = "1-6"
# 锚点符号
# 说明：锚点图标的优先级高于锚点符号
# 默认值：§
anchorSymbol = "#"
# 锚点图标
anchorIcon = "link"
# 是否开启锚点链接
enableAnchorLink = true
# 是否自动隐藏锚点
enableAnchorAutoHide = true

# 图片╱视频
# 是否开启说明文字，如果是，则会将 `title` 用于说明文字
enableCaption = true
# 说明文字的前缀
captionPrefix = "◎ "

# 图片外链
# 说明：只支持相对于站点根目录的绝对链接
# 比如：/../../*.jpg
# 是否开启
enableImageHost = false
# 图片外链地址
imageHostURL = "https://example.com/"
# 是否将 HTML 的头部元数据中的图片链接也替换为外链
headAlso = false

# 视频外链
# 说明：只支持相对于站点根目录的绝对链接
# 比如：/../../*.mp4
# 是否开启
enableVideoHost = false
# 视频外链地址
videoHostURL = "https://example.com/"

# 脚注
# 是否用方括号包裹脚注的引用链接
squareBrackets = true
# 替换脚注的返回链接为图标
# 如果不为空（""），则会用图标替换 `footnoteReturnLinkContents`
footnoteReturnLinkIcon = "angle-up"
# 是否自行插入分隔线
# 如果是，则会将自动添加的分隔线删除
# 说明：实际上，你添加的分隔线会被删除。如果你喜欢在 Markdown 中插入
# `---` 以将文章的正文内容与脚注内容分隔开来，这项设置将会非常有用
insertHrBySelf = true

# Markdown
# 着重号，新语法 `..text..`
# 是否开启
enableEmphasisPoint = false

# 字体排版

# 字号
# 单位：px
fontSize = 16
# 行间距
# 说明：只会应用到文章的段落和目录
lineHeight = 2

# 字体
# 说明：任何一项没有设置，则会回退到 `fontFamilyBody`
# 品牌栏字体
# 说明：如果你的品牌栏用的 SVG，则留空此项
fontFamilySiteBrand = ""
# 菜单栏字体
fontFamilyMenu = ""
# 文章标题字体
fontFamilyTitle = "Comfortaa, 'Noto Serif SC', serif"
# 分节标题字体
fontFamilyHeadings = "Comfortaa, 'Noto Serif SC', serif"
# 代码字体
fontFamilyCode = "'Source Code Pro', 'Noto Serif SC', monospace"
# 引用字体
fontFamilyQuote = ""
# 目录字体
fontFamilyTOC = ""
# 说明文字字体
fontFamilyCaption = ""
# 页脚字体
fontFamilyFooter = ""
# 主体字体
fontFamilyBody = "'EB Garamond', 'Noto Serif SC', serif"

# 字体链接
# 前往 https://fonts.google.com/ 获取
fontsLink = 'https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,700,700i|Noto+Serif+SC:400,700|Source+Code+Pro:400,400i,700,700i|Comfortaa:700&display=swap&subset=chinese-simplified'

# 是否开启中文标点符号字形纠正
enableChinesePunctuationGlyphCorrection = true

# 是否开启大型小写（仅限英文）
# 说明：只会应用到分节标题和目录标题
enableSmallCaps = false

# 是否开启首字下沉
enableDropCap = true
# 是否在每一条分隔线之后首字下沉
enableDropCapAfterHr = false
# 是否删除首字下沉前的分隔线
deleteHrBeforeDropCap = false

# 是否开启段首缩排
enableParagraphIndent = true
# 分段样式（全局设置）
# 段间距式（margin）或段首缩排（indent）
# 文章 Front Matter 中的 `indent` 的优先级高于此处
paragraphStyle = "margin"

# 是否开启两端对齐
enableJustify = false

# 文章版权
# 是否开启
enablePostCopyright = true
# 是否显示
displayPostCopyright = true

# 文章更新徽章
# 是否开启
enablePostUpdatedBadge = true
# 是否显示
displayUpdatedBadge = true
# 是否添加 `title`
enableBadgeTitle = true
# `title` 的前缀
badgeTitlePrefix = "Updated @ "

# 文章的 Git 版本信息
# 是否开启
enablePostGitInfo = false
# 是否显示
displayPostGitInfo = false
# 仓库地址
repoURL = "https://github.com/reuixiy/meme-test"
# 编辑地址
# 以下或 https://github.com/reuixiy/meme-test/edit/master
repoEditURL = "https://github.com/reuixiy/meme-test/blob/master"
# Git 的图标
gitIcon = "code-branch"
# 是否显示改动哈希
displayCommitHash = true
# 是否显示改动信息
displayCommitMessage = true
# 改动信息的图标
msgIcon = "info"
# 是否显示反馈链接
displayFeedback = true
# 反馈链接的图标
feedbackIcon = "question"
# 反馈链接的文本
feedbackText = "Feedback"
# 是否显示编辑链接
displayEditLink = true
# 编辑链接的图标
editIcon = "edit"
# 编辑链接的文本
editText = "Edit Me?"

# 相关文章
# 是否开启
enableRelatedPosts = true
# 是否显示
displayRelatedPosts = true
# 相关文章数
relatedPostsNumber = 5
# 相关文章图标
relatedPostsIcon = "plus-circle"

# 文章的标签
# 是否开启
enablePostTags = true
# 标签的图标
postTagsIcon = "tag"

# 是否开启极简页脚
enableMinimalFooter = false
# 是否开启关于页面的极简页脚
enableAboutPageMinimalFooter = true

# 文章上下篇
# 是否开启
enablePostNav = true
# 是否仅限于相同分区
postNavInSection = false

# 是否开启代码高亮
enableHighlight = true

# 返回顶部按钮
# 是否开启
enableBackToTop = true
# 按钮图标
backToTopIcon = "arrow-up"
# 是否在首页显示
displayBackToTopInHome = true

# 页脚
# 说明：「诗意人生」和「视频片段」首页布局没有页脚
# 是否开启页脚
enableFooter = true
# 是否显示版权符号
displayCopyrightSymbol = true
# 是否显示站点的创建年份
displaySiteCreatedYear = true
# 年份与作者之间的图标
iconBetweenYearAndAuthor = "heart"
# 图标颜色
iconColor = "#f06292"
# 是否开启图标的跳动效果
iconAnimation = true
# 是否显示 Hugo 和 MemE 的链接
displayPoweredBy = true
# 是否显示站点的版权信息
displaySiteCopyright = true
# 自定义页脚（支持 Markdown）
customFooter = ""

# 多语言
# 是否开启多语言按钮
enableLangToggle = false
# 是否自动隐藏多语言按钮，即仅当该文章有相应的翻译版本时才显示按钮
autoHideLangToggle = true
# 是否在首页隐藏多语言按钮
hideLangToggleInHome = false

# Style & Script
enableFingerprint = false

# 404 页面
# 说明：视频地址可留空
# 视频封面
fofPoster = "/images/flying-clouds-720p.jpg"
# 视频地址
fofVideoWebm = "/videos/flying-clouds-720p.webm"
fofVideoMp4 = "/videos/flying-clouds-720p.mp4"
```

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

### 更多

我将会写一篇通俗易懂的教程，教你如何从 Hexo 迁移到 Hugo，并会说明它们之间的一些不同之处。

## Awesome MemE

请看 [#2](https://github.com/reuixiy/hugo-theme-meme/issues/2)。

## 说明

事实上，我开发 MemE 主题的原因其实很简单——我想将[我的博客](https://io-oi.me/)从 [Hexo](https://hexo.io/) 平滑地迁移到 [Hugo](https://gohugo.io/)。于是，我开始研究 Hugo 的文档并 Google 一切。最终，我做到了！

由于我之前使用的 Hexo 博客主题是基于 [NexT](https://github.com/theme-next/hexo-theme-next) 的，所以 MemE 主题也是继承了 NexT 的一些布局和样式的。

对于我参考过的代码，我都已经在源码中标明来源。稍后，我也会在此处添加一个完整的列表。
