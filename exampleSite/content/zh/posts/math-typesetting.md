+++
author = "Hugo Authors"
title = "Math Typesetting"
date = "2019-03-08"
description = "A brief guide to setup KaTeX"
katex = true
categories = [
    "math"
]
tags = [
    "themes",
    "katex"
]
toc = false
original = false
website = "https://gohugo.io/"
link = "https://git.io/fjbhZ"
copyright = "[Some rights reserved.](https://github.com/gohugoio/hugoBasicExample/blob/master/LICENSE)"
+++

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.

<!--more-->

In this example we will be using [${\KaTeX}$](https://katex.org/)

- Create a partial under `/layouts/partials/math.html`
- Within this partial reference the [Auto-render Extension](https://katex.org/docs/autorender.html) or host these scripts locally.
- Include the partial in your templates like so:  

```go-html-template
{{ if or .Params.math .Site.Params.math }}
    {{ partial "math.html" . }}
{{ end }}
```

- To enable KaTex globally set the parameter `math` to `true` in a project's configuration
- To enable KaTex on a per page basis include the parameter `math: true` in content files.

**Note:** Use the online reference of [Supported TeX Functions](https://katex.org/docs/supported.html)

## Examples

Inline math: $ \varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887… $

Block math:

$$
\varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$
