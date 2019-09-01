+++
author = "Hugo Authors"
title = "Emoji Support"
date = "2019-03-05"
description = "Guide to emoji usage in Hugo"
categories = ["themes"]
tags = ["emoji"]
dropCap = false
original = false
website = "https://gohugo.io/"
link = "https://git.io/fjbhZ"
copyright = "[Some rights reserved.](https://github.com/gohugoio/hugoBasicExample/blob/master/LICENSE)"
+++

Emoji can be enabled in a Hugo project in a number of ways.

<!--more-->

The [`emojify`](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes). 

To enable emoji globally, set `enableEmoji` to `true` in your site’s [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files; e.g.

🙈 `\:see_no_evil\:`  
🙉 `\:hear_no_evil\:`  
🙊 `\:speak_no_evil\:`

The [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) is a useful reference for emoji shorthand codes.

***

**N.B.** The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack; e.g.

```css
.emoji {
	font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
```
