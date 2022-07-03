# [5.0.0](https://github.com/reuixiy/hugo-theme-meme/compare/v4.5.0...v5.0.0) (2022-07-03)

It’s been two years since our last release, the world has changed a lot. Still, we’re happy to announce that MemE 5.0.0 is out!

Some highlights:

* 7 more languages support
* A live preview site via GitHub Actions
* Third-party libraries customization

Thanks to all the contributors who contributed to this release!


### Bug Fixes

* **a11y:** increase width of scrollbar ([d392ab1](https://github.com/reuixiy/hugo-theme-meme/commit/d392ab181418d8ed7224132f5e45b64564351bd3))
* build error ([74ea4db](https://github.com/reuixiy/hugo-theme-meme/commit/74ea4db7e788c3490d4a956addbefbbf9a503156))
* check before loading comments ([#374](https://github.com/reuixiy/hugo-theme-meme/issues/374)) ([1c0beed](https://github.com/reuixiy/hugo-theme-meme/commit/1c0beeddd73f59f6c82f792d0918d961b4069792))
* **css:** add transition for header ([342939d](https://github.com/reuixiy/hugo-theme-meme/commit/342939db7eaf273b12337c2748586e91ac4e591d))
* **css:** backdrop-filter supports at-rule for webkit ([37d8a68](https://github.com/reuixiy/hugo-theme-meme/commit/37d8a689bea8d81e4429eeed9e38a9474ff3c5fa))
* **css:** dim image in light mode ([#367](https://github.com/reuixiy/hugo-theme-meme/issues/367)) ([5e6c812](https://github.com/reuixiy/hugo-theme-meme/commit/5e6c8123a1d61fe5c097781ab1f1f45846467114)), closes [#365](https://github.com/reuixiy/hugo-theme-meme/issues/365)
* **css:** make code related backgound-color consistent ([32224aa](https://github.com/reuixiy/hugo-theme-meme/commit/32224aa24738389ac8773dbda04c3b4be1f62734))
* **css:** margin issue of nested ol/ul ([25de088](https://github.com/reuixiy/hugo-theme-meme/commit/25de088e9160a3cb0e00a39685487942490f259b))
* **css:** margin issue of post type poetry ([a65114a](https://github.com/reuixiy/hugo-theme-meme/commit/a65114aaa156e66e711f5856459b2b8c7fa90f4c))
* **css:** menu is not aligned on medium screen ([ed7e68b](https://github.com/reuixiy/hugo-theme-meme/commit/ed7e68ba0f5b4b6dbe3a246810bef682735d0900))
* **css:** svg icon get cut off on safari ([25e9e4d](https://github.com/reuixiy/hugo-theme-meme/commit/25e9e4d6bdde27293a92b1f61332b6743608d36c))
* **css:** url word-break for justify align ([8112664](https://github.com/reuixiy/hugo-theme-meme/commit/8112664a053ccb93d454540615ddbe37a420d186))
* declares the social url as a safe url ([#354](https://github.com/reuixiy/hugo-theme-meme/issues/354)) ([72212b2](https://github.com/reuixiy/hugo-theme-meme/commit/72212b2dd61224aeacf84d0f327ed5291e7bbc9b)), closes [#353](https://github.com/reuixiy/hugo-theme-meme/issues/353)
* deprecated warning for .Path ([e425890](https://github.com/reuixiy/hugo-theme-meme/commit/e4258903032a6a6b3b27ca3603652c11b167ace3)), closes [#369](https://github.com/reuixiy/hugo-theme-meme/issues/369)
* deprecation warning of !global assignments ([504ee32](https://github.com/reuixiy/hugo-theme-meme/commit/504ee327e93712f530dd0aad3e3b5a51dabccd81))
* drop cap to the identical paras only once ([#356](https://github.com/reuixiy/hugo-theme-meme/issues/356)) ([27ba8bb](https://github.com/reuixiy/hugo-theme-meme/commit/27ba8bbd6489226679c94548fb1429b71771fba8))
* escaped HTML in summary.html ([47cead2](https://github.com/reuixiy/hugo-theme-meme/commit/47cead29fe090c3a7ddb24d3e96826189a981d09)), closes [#213](https://github.com/reuixiy/hugo-theme-meme/issues/213)
* exclude medium-zoom for img tags directly under a tag ([#346](https://github.com/reuixiy/hugo-theme-meme/issues/346)) ([951b0ad](https://github.com/reuixiy/hugo-theme-meme/commit/951b0ad3c60ee2220de42cd5ddf1bff3fe2813c5))
* filter pages before limit ([7cf1577](https://github.com/reuixiy/hugo-theme-meme/commit/7cf157797f6857e99ef8b653f11d08ae2210d9bb))
* insertHrBySelf not working anymore ([293d9a0](https://github.com/reuixiy/hugo-theme-meme/commit/293d9a082903a16a686fd564c2310758e56cea95))
* make header width to 100vw to avoid change when scroll bar appears ([#351](https://github.com/reuixiy/hugo-theme-meme/issues/351)) ([adefef8](https://github.com/reuixiy/hugo-theme-meme/commit/adefef8bc638ace1d48a7ce5e75f8c2d9e3e53b3))
* modify start_url to meet the PWA's fast and reliable requirment ([#314](https://github.com/reuixiy/hugo-theme-meme/issues/314)) ([9be741a](https://github.com/reuixiy/hugo-theme-meme/commit/9be741a3238fe5c0d19bc77000057f0a4e1d1181))
* remove extra white space in summary.html ([8ebbfa8](https://github.com/reuixiy/hugo-theme-meme/commit/8ebbfa81a5a517038b24e20768b8db2dda812649))
* resolve the editURL problem on Windows ([#308](https://github.com/reuixiy/hugo-theme-meme/issues/308)) ([25be50d](https://github.com/reuixiy/hugo-theme-meme/commit/25be50d1a2d135b7912e6ae8ffc1e46d0acbf2a1)), closes [#279](https://github.com/reuixiy/hugo-theme-meme/issues/279)
* set app-mobile-web-app-status-bar-style to black ([91bba2a](https://github.com/reuixiy/hugo-theme-meme/commit/91bba2a624651f43bef20edc25473f191f73ef9f)), closes [#280](https://github.com/reuixiy/hugo-theme-meme/issues/280)
* **style:** margin issue in toc ([ca1d2b1](https://github.com/reuixiy/hugo-theme-meme/commit/ca1d2b1b5b80b7b8bf8b6fb6c7b4e9edc0fccafd))
* **style:** margin issue of nested ordered/unordered list ([b52d699](https://github.com/reuixiy/hugo-theme-meme/commit/b52d69953e61f62f20ef152bf4880cb928845a8a))
* **sw.js:** an object that was not a Response was passed to respondWith() ([159652e](https://github.com/reuixiy/hugo-theme-meme/commit/159652eafbd79a1956174be36989354686f08654))
* syntax error ([e781e17](https://github.com/reuixiy/hugo-theme-meme/commit/e781e176e3e73d42e685b3483f497e9d5fc0fab6))
* **third-party:** add tinyseg.js to scripts if japanese ([#305](https://github.com/reuixiy/hugo-theme-meme/issues/305)) ([ed7f353](https://github.com/reuixiy/hugo-theme-meme/commit/ed7f353f772edc281857b6ac34d0fb0489db1bd4))
* undefined loadComments() in homepage ([#326](https://github.com/reuixiy/hugo-theme-meme/issues/326)) ([c2d2200](https://github.com/reuixiy/hugo-theme-meme/commit/c2d220042cd0bc974f10c6b3880877fb27f33027))
* use network first strategy for sw.js ([cddaf25](https://github.com/reuixiy/hugo-theme-meme/commit/cddaf250b0e93c94697df6de77c873ccbf168c18))
* use pageref for internal links in menus ([2479717](https://github.com/reuixiy/hugo-theme-meme/commit/2479717386e82a8b3e2446e887a85d63592e1702)), closes [#343](https://github.com/reuixiy/hugo-theme-meme/issues/343)
* wrong glyph-correction URL when baseURL is set to sub-directory ([#291](https://github.com/reuixiy/hugo-theme-meme/issues/291)) ([28bcb78](https://github.com/reuixiy/hugo-theme-meme/commit/28bcb78fd9f396204930ae288e0581f00fa42705)), closes [#287](https://github.com/reuixiy/hugo-theme-meme/issues/287)


### Features

* add Algolia Search support ([#329](https://github.com/reuixiy/hugo-theme-meme/issues/329)) ([2dc1f8b](https://github.com/reuixiy/hugo-theme-meme/commit/2dc1f8bb184c36329375af3b4bafc445e2c2210d)), closes [#222](https://github.com/reuixiy/hugo-theme-meme/issues/222)
* add built-in service worker support ([5470cbe](https://github.com/reuixiy/hugo-theme-meme/commit/5470cbe6c4c8e726e81bba7cb5dc45863678281f))
* add copyleft 🄯 support ([8964306](https://github.com/reuixiy/hugo-theme-meme/commit/8964306e6cea55a8c7457a3ebace226db95ce107))
* add Gitalk comments support  ([#324](https://github.com/reuixiy/hugo-theme-meme/issues/324)) ([6941bd2](https://github.com/reuixiy/hugo-theme-meme/commit/6941bd28fbf17354247f993c71ea9259dfd56571))
* add html minify configuration ([72e1a9d](https://github.com/reuixiy/hugo-theme-meme/commit/72e1a9d03fdab80c2527a07c915422efe2384f48))
* add new config param displayBackToTopOnMobile ([9d7ce99](https://github.com/reuixiy/hugo-theme-meme/commit/9d7ce997307cfca6cc79f9d557a7ebe889e39186)), closes [#280](https://github.com/reuixiy/hugo-theme-meme/issues/280)
* add new front matter `anchor` ([e927542](https://github.com/reuixiy/hugo-theme-meme/commit/e927542dbe1cb8329acfe475bcd77df2361118f8)), closes [#276](https://github.com/reuixiy/hugo-theme-meme/issues/276)
* add new param `displayFooter` ([2d17152](https://github.com/reuixiy/hugo-theme-meme/commit/2d17152f2d79da3890f077600fc0f8af95fa0394))
* add support for `color-scheme` meta tag ([7d7c485](https://github.com/reuixiy/hugo-theme-meme/commit/7d7c4857fdd7d07d0018c397221db6cc6ee18453)), closes [#361](https://github.com/reuixiy/hugo-theme-meme/issues/361)
* add support for auto-hiding flex header ([6e7027e](https://github.com/reuixiy/hugo-theme-meme/commit/6e7027ea8d8971b0b07f442b7ca8d805a326647e)), closes [#293](https://github.com/reuixiy/hugo-theme-meme/issues/293)
* Add support for Yandex.Metrika ([#323](https://github.com/reuixiy/hugo-theme-meme/issues/323)) ([abd67d8](https://github.com/reuixiy/hugo-theme-meme/commit/abd67d8e27d9cf253b08dcd49d0af4f6de9dab07))
* Adjust post markup to conform to h-entry spec ([#253](https://github.com/reuixiy/hugo-theme-meme/issues/253)) ([cb4fb52](https://github.com/reuixiy/hugo-theme-meme/commit/cb4fb527ac93fb19591f0292a622bb3b6c5a3a98))
* **i18n:** add 'id' Bahasa ([#388](https://github.com/reuixiy/hugo-theme-meme/issues/388)) ([790d2ab](https://github.com/reuixiy/hugo-theme-meme/commit/790d2ab1432bb0aee4cc4ddcc12977676c9e0447))
* **i18n:** add FR lang support ([#233](https://github.com/reuixiy/hugo-theme-meme/issues/233)) ([a7c47aa](https://github.com/reuixiy/hugo-theme-meme/commit/a7c47aa5f4f33373068a24fb9f735a2b8dfee501))
* **i18n:** Add Hungarian language file ([#363](https://github.com/reuixiy/hugo-theme-meme/issues/363)) ([d1d3472](https://github.com/reuixiy/hugo-theme-meme/commit/d1d347204552e3a49052a504705450829439ed86))
* **i18n:** add Japanese support ([#311](https://github.com/reuixiy/hugo-theme-meme/issues/311)) ([6c8faec](https://github.com/reuixiy/hugo-theme-meme/commit/6c8faeca509c809704b2dbe8db3bc05d0796e58b))
* **i18n:** add polish language support ([#273](https://github.com/reuixiy/hugo-theme-meme/issues/273)) ([f49ac2c](https://github.com/reuixiy/hugo-theme-meme/commit/f49ac2cf19ab1ef44b72b0cc4c0e60125470d502))
* **i18n:** add zh-TW lang support ([#270](https://github.com/reuixiy/hugo-theme-meme/issues/270)) ([e051e0c](https://github.com/reuixiy/hugo-theme-meme/commit/e051e0ce95024fc71b51f59f1711bd7c9ba60c45))
* **i18n:** Added support for Russian language ([#322](https://github.com/reuixiy/hugo-theme-meme/issues/322)) ([eb0aecd](https://github.com/reuixiy/hugo-theme-meme/commit/eb0aecd3a6e694491e7c98ab499427c7958ffa82))
* ignore suffix slash of image host ([#358](https://github.com/reuixiy/hugo-theme-meme/issues/358)) ([d8af0e0](https://github.com/reuixiy/hugo-theme-meme/commit/d8af0e0d6c89afc4cc79982cb73a8c094cf5ee5e))
* ignore suffix slash of video host ([597d20d](https://github.com/reuixiy/hugo-theme-meme/commit/597d20db75e696f75a1c4e30a0791aa3a5266478))
* Make SRI for scripts and styles enabled separately from fingerprinting ([#215](https://github.com/reuixiy/hugo-theme-meme/issues/215)) ([b9869e7](https://github.com/reuixiy/hugo-theme-meme/commit/b9869e7a3df34dc721d99d79b0f5771cc57973a6))
* new config param customizeScrollbar ([2c06353](https://github.com/reuixiy/hugo-theme-meme/commit/2c06353fb886101ff4be5c23ec0e44f135afb8ef))
* set up github actions for pages  ([#278](https://github.com/reuixiy/hugo-theme-meme/issues/278)) ([8e0d1b5](https://github.com/reuixiy/hugo-theme-meme/commit/8e0d1b56a711ed26495465283ba12ed55ad15d8b)), closes [#277](https://github.com/reuixiy/hugo-theme-meme/issues/277)
* support directly load the comments after pages loaded ([#325](https://github.com/reuixiy/hugo-theme-meme/issues/325)) ([29e4726](https://github.com/reuixiy/hugo-theme-meme/commit/29e472630bfe632299cb595e432acce179b644f8))
* support host customization for third-party libraries ([#389](https://github.com/reuixiy/hugo-theme-meme/issues/389)) ([a6111f9](https://github.com/reuixiy/hugo-theme-meme/commit/a6111f9f8c04484000214c5d5c21b2bcbe4368bf))
* support hugo v0.73.0 ([f1e3503](https://github.com/reuixiy/hugo-theme-meme/commit/f1e35035e0b92d80881743adbbfa523839e27019)), closes [#207](https://github.com/reuixiy/hugo-theme-meme/issues/207)


### BREAKING CHANGES

* enableFingerprint config parameter no longer enables Subresource Integrity. If you need it, you have to specify enableSRI parameter as well
* MemE now requires Hugo v0.73.0+.



# [4.5.0](https://github.com/reuixiy/hugo-theme-meme/compare/v4.4.0...v4.5.0) (2020-06-24)


### Bug Fixes

* Avoid double escaping when using post description ([#190](https://github.com/reuixiy/hugo-theme-meme/issues/190)) ([44d4198](https://github.com/reuixiy/hugo-theme-meme/commit/44d4198))
* Do not load the script in 404 page ([#200](https://github.com/reuixiy/hugo-theme-meme/issues/200)) ([87e8586](https://github.com/reuixiy/hugo-theme-meme/commit/87e8586)), closes [#199](https://github.com/reuixiy/hugo-theme-meme/issues/199)
* make dark theme brighter ([#195](https://github.com/reuixiy/hugo-theme-meme/issues/195)) ([4e9c8fe](https://github.com/reuixiy/hugo-theme-meme/commit/4e9c8fe))
* mermaidConfig is not defined error ([f0b87b2](https://github.com/reuixiy/hugo-theme-meme/commit/f0b87b2))
* missing read-more on home-posts page ([#198](https://github.com/reuixiy/hugo-theme-meme/issues/198)) ([831d8fb](https://github.com/reuixiy/hugo-theme-meme/commit/831d8fb))
* Safari doesn't support addEventListener on media queries ([#184](https://github.com/reuixiy/hugo-theme-meme/issues/184)) ([0fccbcc](https://github.com/reuixiy/hugo-theme-meme/commit/0fccbcc))
* Search index should include sections & co. if these have content ([#192](https://github.com/reuixiy/hugo-theme-meme/issues/192)) ([e2948b2](https://github.com/reuixiy/hugo-theme-meme/commit/e2948b2))
* Unrelated localStorage changes would cause switch to light theme ([#194](https://github.com/reuixiy/hugo-theme-meme/issues/194)) ([db102eb](https://github.com/reuixiy/hugo-theme-meme/commit/db102eb))
* wrong utterances theme ([9a041c1](https://github.com/reuixiy/hugo-theme-meme/commit/9a041c1))


### Code Refactoring

* Do not use inline scripts ([#173](https://github.com/reuixiy/hugo-theme-meme/issues/173)) ([f160158](https://github.com/reuixiy/hugo-theme-meme/commit/f160158)), closes [#145](https://github.com/reuixiy/hugo-theme-meme/issues/145)
* Improve code highlighting ([#188](https://github.com/reuixiy/hugo-theme-meme/issues/188)) ([cf603f3](https://github.com/reuixiy/hugo-theme-meme/commit/cf603f3)), closes [#169](https://github.com/reuixiy/hugo-theme-meme/issues/169)
* Make title.html partial more readable, fix title for taxonomy pages ([#187](https://github.com/reuixiy/hugo-theme-meme/issues/187)) ([ea09a86](https://github.com/reuixiy/hugo-theme-meme/commit/ea09a86))
* Rename $Deliver into $ for clarity ([#177](https://github.com/reuixiy/hugo-theme-meme/issues/177)) ([81a773d](https://github.com/reuixiy/hugo-theme-meme/commit/81a773d))


### Features

* allow to limit the number of tree posts ([#196](https://github.com/reuixiy/hugo-theme-meme/issues/196)) ([6f3aeba](https://github.com/reuixiy/hugo-theme-meme/commit/6f3aeba)), closes [#97](https://github.com/reuixiy/hugo-theme-meme/issues/97)
* apply `markdownify` to post title ([#183](https://github.com/reuixiy/hugo-theme-meme/issues/183)) ([1322fdd](https://github.com/reuixiy/hugo-theme-meme/commit/1322fdd)), closes [#179](https://github.com/reuixiy/hugo-theme-meme/issues/179)
* support dark theme for mermaid ([066138a](https://github.com/reuixiy/hugo-theme-meme/commit/066138a)), closes [#205](https://github.com/reuixiy/hugo-theme-meme/issues/205)
* support override system preferences for dark mode ([29bd11e](https://github.com/reuixiy/hugo-theme-meme/commit/29bd11e)), closes [#201](https://github.com/reuixiy/hugo-theme-meme/issues/201)
* **i18n:** add Malaysian and Norwegian languages ([#202](https://github.com/reuixiy/hugo-theme-meme/issues/202)) ([f782a59](https://github.com/reuixiy/hugo-theme-meme/commit/f782a59))


### BREAKING CHANGES

* Highlighting customization now works by overriding CSS variables, no longer by overriding theme-specific files
* Markdown in page titles will be processed now
* `Deliver` parameter to various templates is now called `$`
* custom.js is loaded at the top of the page now, before the page elements are available



# [4.4.0](https://github.com/reuixiy/hugo-theme-meme/compare/v4.3.1...v4.4.0) (2020-05-23)

MemE `v4.4.0` comes with some big code refactoring by @palant, which makes MemE even more faster. Big thanks!

Also, make sure to follow [the instructions](https://github.com/reuixiy/hugo-theme-meme#update-meme) when you update MemE to the latest version!


### Bug Fixes

* allow `.Params.indent` to override global settings ([188fc17](https://github.com/reuixiy/hugo-theme-meme/commit/188fc17))
* Do not rely on JavaScript to determine header width ([#168](https://github.com/reuixiy/hugo-theme-meme/issues/168)) ([820e0ab](https://github.com/reuixiy/hugo-theme-meme/commit/820e0ab))
* generation failed error caused by `readFile` ([62f6934](https://github.com/reuixiy/hugo-theme-meme/commit/62f6934)), closes [#133](https://github.com/reuixiy/hugo-theme-meme/issues/133)
* Get rid of unnecessary safeHTML usage ([#135](https://github.com/reuixiy/hugo-theme-meme/issues/135)) ([91e84a1](https://github.com/reuixiy/hugo-theme-meme/commit/91e84a1)), closes [#134](https://github.com/reuixiy/hugo-theme-meme/issues/134)
* Improve accessibility of the theme switcher ([#160](https://github.com/reuixiy/hugo-theme-meme/issues/160)) ([e5e6230](https://github.com/reuixiy/hugo-theme-meme/commit/e5e6230))
* Make sure to turn relative links absolute in feeds ([#170](https://github.com/reuixiy/hugo-theme-meme/issues/170)) ([4c6097a](https://github.com/reuixiy/hugo-theme-meme/commit/4c6097a)), closes [#141](https://github.com/reuixiy/hugo-theme-meme/issues/141)
* pass `$Content` to custom/content.html ([df739fa](https://github.com/reuixiy/hugo-theme-meme/commit/df739fa))
* Remove unnecessary safeJS/safeURL calls ([a94cc42](https://github.com/reuixiy/hugo-theme-meme/commit/a94cc42))
* Respect user's preferred theme even when JavaScript isn't enabled ([#169](https://github.com/reuixiy/hugo-theme-meme/issues/169)) ([46522c6](https://github.com/reuixiy/hugo-theme-meme/commit/46522c6))
* search on mobile and make url relative ([#172](https://github.com/reuixiy/hugo-theme-meme/issues/172)) ([5a3470a](https://github.com/reuixiy/hugo-theme-meme/commit/5a3470a)), closes [#171](https://github.com/reuixiy/hugo-theme-meme/issues/171)
* Typos in README ([#161](https://github.com/reuixiy/hugo-theme-meme/issues/161)) ([0cd2733](https://github.com/reuixiy/hugo-theme-meme/commit/0cd2733))
* When scrolling to an anchor, account for the header height ([#158](https://github.com/reuixiy/hugo-theme-meme/issues/158)) ([115914a](https://github.com/reuixiy/hugo-theme-meme/commit/115914a)), closes [#146](https://github.com/reuixiy/hugo-theme-meme/issues/146)
* **a11y:** delete `maximum-scale` ([37632a7](https://github.com/reuixiy/hugo-theme-meme/commit/37632a7))
* **json-ld:** missing `image` in non-mainSections page ([26baf9d](https://github.com/reuixiy/hugo-theme-meme/commit/26baf9d))
* **post-copyright:** missing colon when `website` param is not set ([86bfc77](https://github.com/reuixiy/hugo-theme-meme/commit/86bfc77)), closes [#116](https://github.com/reuixiy/hugo-theme-meme/issues/116)
* **style:** add tab-size support for firefox ([afb0b4a](https://github.com/reuixiy/hugo-theme-meme/commit/afb0b4a)), closes [#105](https://github.com/reuixiy/hugo-theme-meme/issues/105)
* **style:** font-size bug in mobile safari ([4094ff7](https://github.com/reuixiy/hugo-theme-meme/commit/4094ff7)), closes [#109](https://github.com/reuixiy/hugo-theme-meme/issues/109)
* **style:** make color in dark mode less dazzling ([9d35969](https://github.com/reuixiy/hugo-theme-meme/commit/9d35969))
* **style:** make color in dark mode less dazzling ([e580a16](https://github.com/reuixiy/hugo-theme-meme/commit/e580a16))
* **style:** margin issue of caption in layout "poetry" ([3754acc](https://github.com/reuixiy/hugo-theme-meme/commit/3754acc))
* **style:** margin issues of layout "poetry" ([bbef0de](https://github.com/reuixiy/hugo-theme-meme/commit/bbef0de))
* **style:** overflow and font-size bug in safari ([e2646e3](https://github.com/reuixiy/hugo-theme-meme/commit/e2646e3)), closes [#109](https://github.com/reuixiy/hugo-theme-meme/issues/109)
* unescaped ampersand(&) in xml ([b1890ee](https://github.com/reuixiy/hugo-theme-meme/commit/b1890ee)), closes [#103](https://github.com/reuixiy/hugo-theme-meme/issues/103)


### Code Refactoring

* Make templates return results properly ([#153](https://github.com/reuixiy/hugo-theme-meme/issues/153)) ([418f72d](https://github.com/reuixiy/hugo-theme-meme/commit/418f72d)), closes [#137](https://github.com/reuixiy/hugo-theme-meme/issues/137)


### Features

* add hashtags to share URLs ([#100](https://github.com/reuixiy/hugo-theme-meme/issues/100)) ([a323e45](https://github.com/reuixiy/hugo-theme-meme/commit/a323e45))
* Added search capability via lunr ([#165](https://github.com/reuixiy/hugo-theme-meme/issues/165)) ([fb54c61](https://github.com/reuixiy/hugo-theme-meme/commit/fb54c61)), closes [#163](https://github.com/reuixiy/hugo-theme-meme/issues/163)
* Allow customization of post metadata ([#138](https://github.com/reuixiy/hugo-theme-meme/issues/138)) ([6cc1621](https://github.com/reuixiy/hugo-theme-meme/commit/6cc1621)), closes [#136](https://github.com/reuixiy/hugo-theme-meme/issues/136)
* Allow extending header ([#142](https://github.com/reuixiy/hugo-theme-meme/issues/142)) ([5353fec](https://github.com/reuixiy/hugo-theme-meme/commit/5353fec))
* Allow to limit the number of articles listed per taxonomy entry ([#148](https://github.com/reuixiy/hugo-theme-meme/issues/148)) ([f3d9ad0](https://github.com/reuixiy/hugo-theme-meme/commit/f3d9ad0)), closes [#147](https://github.com/reuixiy/hugo-theme-meme/issues/147)
* support social media icons ([fd1546e](https://github.com/reuixiy/hugo-theme-meme/commit/fd1546e)), closes [#123](https://github.com/reuixiy/hugo-theme-meme/issues/123)
* **i18n:** add Brazilian Portuguese translations ([#102](https://github.com/reuixiy/hugo-theme-meme/issues/102)) ([c4adfc5](https://github.com/reuixiy/hugo-theme-meme/commit/c4adfc5))


### BREAKING CHANGES

* Various templates under `utils/partials/` will return results directly rather than via `.Scratch` now.



## [4.3.1](https://github.com/reuixiy/hugo-theme-meme/compare/v4.3.0...v4.3.1) (2020-04-03)


### Bug Fixes

* **style:** add transition, fix color contrast ([e9880d7](https://github.com/reuixiy/hugo-theme-meme/commit/e9880d7))
* **style:** font-size of copy button ([ed015a9](https://github.com/reuixiy/hugo-theme-meme/commit/ed015a9))
* **style:** make color in dark mode less dazzling ([c0e0927](https://github.com/reuixiy/hugo-theme-meme/commit/c0e0927))
* **style:** make color in dark mode less dazzling ([cef984d](https://github.com/reuixiy/hugo-theme-meme/commit/cef984d))
* **style:** make the bg-color of dark mode darker ([676fee1](https://github.com/reuixiy/hugo-theme-meme/commit/676fee1))
* clipboard polyfill ([05a365b](https://github.com/reuixiy/hugo-theme-meme/commit/05a365b))
* i18n of script and style ([e7871bb](https://github.com/reuixiy/hugo-theme-meme/commit/e7871bb))
* make dark mode more gorgeous ([06f79af](https://github.com/reuixiy/hugo-theme-meme/commit/06f79af))
* make dark mode respect system preferences ([10d6cca](https://github.com/reuixiy/hugo-theme-meme/commit/10d6cca))


### Features

* change default highlight theme ([e7e61d4](https://github.com/reuixiy/hugo-theme-meme/commit/e7e61d4))



# [4.3.0](https://github.com/reuixiy/hugo-theme-meme/compare/v4.2.1...v4.3.0) (2020-03-20)


MemE v4.3.0 makes some brand new features and *breaking changes*, so please be sure to check [the modification history of `config.toml`](https://github.com/reuixiy/hugo-theme-meme/commits/master/config-examples) and update the related items after the update!


### Bug Fixes

* add “contributors” to license ([f58f9aa](https://github.com/reuixiy/hugo-theme-meme/commit/f58f9aa))
* add backdrop-filter support for safari ([fae1f2a](https://github.com/reuixiy/hugo-theme-meme/commit/fae1f2a))
* add fallback for backdrop-filter ([60f611b](https://github.com/reuixiy/hugo-theme-meme/commit/60f611b))
* correct favicon's MIME type ([f8ba8aa](https://github.com/reuixiy/hugo-theme-meme/commit/f8ba8aa))
* correct zh-cn translation of license ([070b1d3](https://github.com/reuixiy/hugo-theme-meme/commit/070b1d3))
* emphasis point position U+2022 `•` ([1cc02c3](https://github.com/reuixiy/hugo-theme-meme/commit/1cc02c3))
* google fonts style loading fails on firefox ([e5ad6fe](https://github.com/reuixiy/hugo-theme-meme/commit/e5ad6fe))
* header layout flex ([44b352e](https://github.com/reuixiy/hugo-theme-meme/commit/44b352e))
* hide back-to-top on mobile ([4c670b5](https://github.com/reuixiy/hugo-theme-meme/commit/4c670b5))
* improve post-copyright style ([a498cad](https://github.com/reuixiy/hugo-theme-meme/commit/a498cad))
* increase the margin of toc-num ([8d9bad0](https://github.com/reuixiy/hugo-theme-meme/commit/8d9bad0))
* missing div tag in dark mode's regex ([c1cda8b](https://github.com/reuixiy/hugo-theme-meme/commit/c1cda8b))
* optimize header-inner's display experience ([fd95216](https://github.com/reuixiy/hugo-theme-meme/commit/fd95216))
* optimize user experience ([e9f6d90](https://github.com/reuixiy/hugo-theme-meme/commit/e9f6d90))
* remove `subset=chinese-simplified` ([de4def3](https://github.com/reuixiy/hugo-theme-meme/commit/de4def3))
* remove crappy param `compatibleWithLaTeX` ([dc0c4ef](https://github.com/reuixiy/hugo-theme-meme/commit/dc0c4ef)), closes [#50](https://github.com/reuixiy/hugo-theme-meme/issues/50)
* render links only if it exists ([fc0fae8](https://github.com/reuixiy/hugo-theme-meme/commit/fc0fae8))
* style of header when `enableNavToggle = false` ([6c3356e](https://github.com/reuixiy/hugo-theme-meme/commit/6c3356e))
* style of langs on mobile ([83f1046](https://github.com/reuixiy/hugo-theme-meme/commit/83f1046))
* style of medium zoom ([5f49a0e](https://github.com/reuixiy/hugo-theme-meme/commit/5f49a0e))
* style of menu bar ([0845e86](https://github.com/reuixiy/hugo-theme-meme/commit/0845e86))
* use `em` tag for emphasis point ([a599634](https://github.com/reuixiy/hugo-theme-meme/commit/a599634))


### Code Refactoring

* remove i18n's region subtag ([9f5916a](https://github.com/reuixiy/hugo-theme-meme/commit/9f5916a))


### Features

* add autohide param for copy button ([bdb6077](https://github.com/reuixiy/hugo-theme-meme/commit/bdb6077))
* add copy button and scroll for code blocks ([94d7e05](https://github.com/reuixiy/hugo-theme-meme/commit/94d7e05)), closes [#76](https://github.com/reuixiy/hugo-theme-meme/issues/76)
* add mermaid support ([#75](https://github.com/reuixiy/hugo-theme-meme/issues/75)) ([431ef63](https://github.com/reuixiy/hugo-theme-meme/commit/431ef63))
* added german translation ([#74](https://github.com/reuixiy/hugo-theme-meme/issues/74)) ([19892fc](https://github.com/reuixiy/hugo-theme-meme/commit/19892fc))
* brand new header layout flex ([a11c06a](https://github.com/reuixiy/hugo-theme-meme/commit/a11c06a))
* new param `displayFooterInHome` ([075c8d2](https://github.com/reuixiy/hugo-theme-meme/commit/075c8d2))
* new param `tocNum` ([f30d684](https://github.com/reuixiy/hugo-theme-meme/commit/f30d684)), closes [#71](https://github.com/reuixiy/hugo-theme-meme/issues/71)
* responsive table & set its width to 100% ([a995897](https://github.com/reuixiy/hugo-theme-meme/commit/a995897))
* support instant page ([6a9876b](https://github.com/reuixiy/hugo-theme-meme/commit/6a9876b))
* support unordered toc ([9093207](https://github.com/reuixiy/hugo-theme-meme/commit/9093207))
* update google fonts css api to v2 ([67bb2c5](https://github.com/reuixiy/hugo-theme-meme/commit/67bb2c5))


### Performance Improvements

* add throttle for scroll and resize listener ([6945afd](https://github.com/reuixiy/hugo-theme-meme/commit/6945afd))
* defer google fonts and add preconnect rel ([5ff821d](https://github.com/reuixiy/hugo-theme-meme/commit/5ff821d))
* drop instantclick support ([b9cea3b](https://github.com/reuixiy/hugo-theme-meme/commit/b9cea3b))
* remove outdated keywords meta ([fa5bf38](https://github.com/reuixiy/hugo-theme-meme/commit/fa5bf38))
* replace `calc()` with `rem` ([acf1cae](https://github.com/reuixiy/hugo-theme-meme/commit/acf1cae))
* use cilent side js selector for medium zoom ([4eb0408](https://github.com/reuixiy/hugo-theme-meme/commit/4eb0408))


### BREAKING CHANGES

* `compatibleWithLaTeX` is removed

If you have enabled this param before, you can replace this feature with HTML `<div>` or `<span>` tag, e.g.

```html
<div>
$$
...
$$
</div>
```

inline math `<span>$...$</span>`

...which prevents LaTeX code from being processed by the Markdown renderer.

Sorry for the inconvenience *again* :(



## [4.2.1](https://github.com/reuixiy/hugo-theme-meme/compare/v4.2.0...v4.2.1) (2020-02-20)


### Revert

* cancel use `Page.GetTerms` ([1331c92](https://github.com/reuixiy/hugo-theme-meme/commit/1331c92))



# [4.2.0](https://github.com/reuixiy/hugo-theme-meme/compare/v4.1.0...v4.2.0) (2020-02-20)


### Bug Fixes

* correct zh-cn translation of weibo ([9937e20](https://github.com/reuixiy/hugo-theme-meme/commit/9937e20))
* drop cap after hr ([223b67b](https://github.com/reuixiy/hugo-theme-meme/commit/223b67b))
* emphasis point position U+2022 `•` ([b07107b](https://github.com/reuixiy/hugo-theme-meme/commit/b07107b))
* fonts-src.scss & drop outdated code ([ebccc0f](https://github.com/reuixiy/hugo-theme-meme/commit/ebccc0f))
* generate qrcode fails when url is too long ([73a0d30](https://github.com/reuixiy/hugo-theme-meme/commit/73a0d30))
* json-ld, open-graph ([6dc995a](https://github.com/reuixiy/hugo-theme-meme/commit/6dc995a))
* make color in dark mode less dazzling ([262ddb1](https://github.com/reuixiy/hugo-theme-meme/commit/262ddb1))
* render minimal-footer-about only if it exists ([3be7996](https://github.com/reuixiy/hugo-theme-meme/commit/3be7996))
* style of blockquote ([a31369a](https://github.com/reuixiy/hugo-theme-meme/commit/a31369a))
* style of footnote-icon, drop-cap ([ac0684c](https://github.com/reuixiy/hugo-theme-meme/commit/ac0684c))
* style of layout home-poetry, home-footage ([76018fb](https://github.com/reuixiy/hugo-theme-meme/commit/76018fb)), closes [#59](https://github.com/reuixiy/hugo-theme-meme/issues/59)
* style of qrcode ([5c81c01](https://github.com/reuixiy/hugo-theme-meme/commit/5c81c01))
* style of qrcode again ([1e6791b](https://github.com/reuixiy/hugo-theme-meme/commit/1e6791b))
* style of text-decoration, scrollbar, code ([b553842](https://github.com/reuixiy/hugo-theme-meme/commit/b553842))
* style of tree categories page ([d2ea8c0](https://github.com/reuixiy/hugo-theme-meme/commit/d2ea8c0))
* subset glyph-correction ([ffc6aa7](https://github.com/reuixiy/hugo-theme-meme/commit/ffc6aa7))
* tree-categories, tree-sections ([04bde37](https://github.com/reuixiy/hugo-theme-meme/commit/04bde37))
* twitter-cards ([123eea1](https://github.com/reuixiy/hugo-theme-meme/commit/123eea1))


### Code Refactoring

* main.scss and scss folder structure ([abba97f](https://github.com/reuixiy/hugo-theme-meme/commit/abba97f)), closes [#52](https://github.com/reuixiy/hugo-theme-meme/issues/52)
* restructure partials folder ([299c218](https://github.com/reuixiy/hugo-theme-meme/commit/299c218)), closes [#68](https://github.com/reuixiy/hugo-theme-meme/issues/68)


### Features

* add `displayShareOnText` param ([77d1ee4](https://github.com/reuixiy/hugo-theme-meme/commit/77d1ee4))
* support share on socials ([#62](https://github.com/reuixiy/hugo-theme-meme/issues/62)) ([eae4359](https://github.com/reuixiy/hugo-theme-meme/commit/eae4359))
* use `Page.GetTerms` ([110064a](https://github.com/reuixiy/hugo-theme-meme/commit/110064a)), closes [#67](https://github.com/reuixiy/hugo-theme-meme/issues/67)
* **third-party:** update mathjax to v3.0.1 ([d6ea45b](https://github.com/reuixiy/hugo-theme-meme/commit/d6ea45b))


### BREAKING CHANGES

* partials folder structure is changed
* scss folder structure is changed



# [4.1.0](https://github.com/reuixiy/hugo-theme-meme/compare/v4.0.1...v4.1.0) (2020-01-30)


### Bug Fixes

* `homePoster`, `fofPoster` in main.scss ([e6105a9](https://github.com/reuixiy/hugo-theme-meme/commit/e6105a9)), closes [#51](https://github.com/reuixiy/hugo-theme-meme/issues/51)
* data-attributes.scss ([67bf0f5](https://github.com/reuixiy/hugo-theme-meme/commit/67bf0f5))
* delimit function ([1ab41b1](https://github.com/reuixiy/hugo-theme-meme/commit/1ab41b1))
* do not justify if its type is poetry ([0bd42e7](https://github.com/reuixiy/hugo-theme-meme/commit/0bd42e7))
* regex of compatibleWithLaTeX ([b2bed6b](https://github.com/reuixiy/hugo-theme-meme/commit/b2bed6b))
* regex of compatibleWithLaTeX again ([af1de8b](https://github.com/reuixiy/hugo-theme-meme/commit/af1de8b))
* regex of content.html ([6bb169d](https://github.com/reuixiy/hugo-theme-meme/commit/6bb169d))
* regex of drop cap and indent ([e4d4fd8](https://github.com/reuixiy/hugo-theme-meme/commit/e4d4fd8))
* regex of external links and hosting ([ca47e40](https://github.com/reuixiy/hugo-theme-meme/commit/ca47e40))
* regex of indent ([d49e3a6](https://github.com/reuixiy/hugo-theme-meme/commit/d49e3a6))
* regex of indent again ([09f4e53](https://github.com/reuixiy/hugo-theme-meme/commit/09f4e53))
* regex of markdownify.html ([853db3d](https://github.com/reuixiy/hugo-theme-meme/commit/853db3d))
* regex of paragraph indent ([c7ce9bb](https://github.com/reuixiy/hugo-theme-meme/commit/c7ce9bb))
* regex of paragraph indent again ([88ea2c6](https://github.com/reuixiy/hugo-theme-meme/commit/88ea2c6))
* style of medium zoom ([8918a4b](https://github.com/reuixiy/hugo-theme-meme/commit/8918a4b))
* style of table and highlight ([5e7b9cc](https://github.com/reuixiy/hugo-theme-meme/commit/5e7b9cc))
* styles related to text-align and indent ([0c46faa](https://github.com/reuixiy/hugo-theme-meme/commit/0c46faa))


### Code Refactoring

* load highlight, emphasis-point on demand ([bd6ca2b](https://github.com/reuixiy/hugo-theme-meme/commit/bd6ca2b))
* simplify service worker notification ([ff1d110](https://github.com/reuixiy/hugo-theme-meme/commit/ff1d110))


### Features

* do not indent the first paragraph ([eaefda4](https://github.com/reuixiy/hugo-theme-meme/commit/eaefda4)), closes [#36](https://github.com/reuixiy/hugo-theme-meme/issues/36)


### Performance Improvements

* remove useless video regex ([011fc32](https://github.com/reuixiy/hugo-theme-meme/commit/011fc32))



## [4.0.1](https://github.com/reuixiy/hugo-theme-meme/compare/v4.0.0...v4.0.1) (2020-01-09)


### Bug Fixes

* missing `<p>` tag when content has one line ([d7f4b8f](https://github.com/reuixiy/hugo-theme-meme/commit/d7f4b8f)), closes [#49](https://github.com/reuixiy/hugo-theme-meme/issues/49)
* regex of content.html ([01039b7](https://github.com/reuixiy/hugo-theme-meme/commit/01039b7))
* style of footnotes ([f4a3dd0](https://github.com/reuixiy/hugo-theme-meme/commit/f4a3dd0))



# [4.0.0](https://github.com/reuixiy/hugo-theme-meme/compare/v3.4.5...v4.0.0) (2020-01-08)


As I described in [#26](https://github.com/reuixiy/hugo-theme-meme/issues/26), I want to make MemE support Hugo's new default Markdown rendering engine Goldmark, and this is it. In this version, MemE will support Goldmark and *no longer support* Blackfriday.

### Notes

1. Goldmark problems, see [#43 (comment)](https://github.com/reuixiy/hugo-theme-meme/issues/43#issuecomment-571074162)

2. Compatibility with LaTeX, see [gohugoio/hugo#6544](https://github.com/gohugoio/hugo/issues/6544)

    [Previously](https://github.com/reuixiy/hugo-theme-meme/issues/12), I suggested adding some backslashes to escape some characters to solve the syntax conflict between Markdown and LaTeX. Now, I think that is not the *right* way -- it's troublesome and stupid.

    In v4.0.0, MemE adds a new `compatibleWithLaTeX` option as a temporary workaround. But note that it has some limitations, such as it can't exclude equations inside code block, it supports `$ ... $` and `$$ ... $$` only.

    And at last, apology for my wrong suggestion, which may take some of your time to modify the equations again.

3. With Hugo brand new Markdown renderer Goldmark, [#14](https://github.com/reuixiy/hugo-theme-meme/issues/14) should be fixed.

### ATTENTION

**MemE v4.0.0 requires Hugo v0.62.2 or higher.**



## [3.4.5](https://github.com/reuixiy/hugo-theme-meme/compare/v3.3.9...v3.4.5) (2020-01-08)


### Bug Fixes

* cannot change highlight theme in dark-mode.js ([b81d551](https://github.com/reuixiy/hugo-theme-meme/commit/b81d551))
* style of back-to-top ([e5bda3a](https://github.com/reuixiy/hugo-theme-meme/commit/e5bda3a))
* style of post-meta, busuanzi-site-uv-and-pv ([a4e4137](https://github.com/reuixiy/hugo-theme-meme/commit/a4e4137))
* style related to flex ([ad0f403](https://github.com/reuixiy/hugo-theme-meme/commit/ad0f403))
* Use .Permalink instead of combining URLs ([f1d4906](https://github.com/reuixiy/hugo-theme-meme/commit/f1d4906))
* wrong utterances theme after theme is changed ([4389ddf](https://github.com/reuixiy/hugo-theme-meme/commit/4389ddf))


### Features

* add "custom/content.html" partial ([3cc100b](https://github.com/reuixiy/hugo-theme-meme/commit/3cc100b))
* add "custom/script.html" partial ([d442001](https://github.com/reuixiy/hugo-theme-meme/commit/d442001))
* autohide back-to-top toggle ([6659f25](https://github.com/reuixiy/hugo-theme-meme/commit/6659f25))
* medium zoom for images ([b7cf602](https://github.com/reuixiy/hugo-theme-meme/commit/b7cf602))
* new `disableMathJaxMenu` option ([b759b6e](https://github.com/reuixiy/hugo-theme-meme/commit/b759b6e))
* smooth scroll ([aaa5a42](https://github.com/reuixiy/hugo-theme-meme/commit/aaa5a42))
* support `tab-size` CSS property ([56a9e1d](https://github.com/reuixiy/hugo-theme-meme/commit/56a9e1d))
* support busuanzi view counter [#40](https://github.com/reuixiy/hugo-theme-meme/issues/40) ([09e9976](https://github.com/reuixiy/hugo-theme-meme/commit/09e9976))
* support utterances and a couple of bug fixes ([8339f71](https://github.com/reuixiy/hugo-theme-meme/commit/8339f71))



## [3.3.9](https://github.com/reuixiy/hugo-theme-meme/compare/v3.2.7...v3.3.9) (2019-12-18)


### Bug Fixes

* add `MathJax.texReset();` ([fc08a2c](https://github.com/reuixiy/hugo-theme-meme/commit/fc08a2c))
* change margin of `<blockquote>` to `2em, 0` ([d04efe7](https://github.com/reuixiy/hugo-theme-meme/commit/d04efe7)), closes [#39](https://github.com/reuixiy/hugo-theme-meme/issues/39)
* chaos caused by unreset `.Scratch` ([3e862b4](https://github.com/reuixiy/hugo-theme-meme/commit/3e862b4))
* load fonts-src on demand ([d4edbff](https://github.com/reuixiy/hugo-theme-meme/commit/d4edbff))
* minimal-footer style ([6729a2e](https://github.com/reuixiy/hugo-theme-meme/commit/6729a2e))
* missing license info in json-ld ([20f7eef](https://github.com/reuixiy/hugo-theme-meme/commit/20f7eef))
* srcollbar style ([288a00d](https://github.com/reuixiy/hugo-theme-meme/commit/288a00d))
* style of code in pre ([dce3462](https://github.com/reuixiy/hugo-theme-meme/commit/dce3462))
* style of mathjax ([8efdca6](https://github.com/reuixiy/hugo-theme-meme/commit/8efdca6))
* style of thead, th, td, dt ([6a11b06](https://github.com/reuixiy/hugo-theme-meme/commit/6a11b06))
* ugly encoded URLs in post-copyright ([0efad4c](https://github.com/reuixiy/hugo-theme-meme/commit/0efad4c)), closes [#24](https://github.com/reuixiy/hugo-theme-meme/issues/24)
* use greater width for max-width ([8c4aae2](https://github.com/reuixiy/hugo-theme-meme/commit/8c4aae2))
* use U+0020 instead of `&nbsp;` No-Break Space ([46660e2](https://github.com/reuixiy/hugo-theme-meme/commit/46660e2))
* valine comment [#22](https://github.com/reuixiy/hugo-theme-meme/issues/22) ([935c9d5](https://github.com/reuixiy/hugo-theme-meme/commit/935c9d5))
* wrong whitespace position ([56578ac](https://github.com/reuixiy/hugo-theme-meme/commit/56578ac))


### Code Refactoring

* modular instantclick & fix a mistake ([6a49a25](https://github.com/reuixiy/hugo-theme-meme/commit/6a49a25))
* simplify dark mode ([cc7b36b](https://github.com/reuixiy/hugo-theme-meme/commit/cc7b36b))
* using data attributes ([13a67ac](https://github.com/reuixiy/hugo-theme-meme/commit/13a67ac))
* better responsive design ([c4dad06](https://github.com/reuixiy/hugo-theme-meme/commit/c4dad06))
* use `justify-content` ([a9ccb77](https://github.com/reuixiy/hugo-theme-meme/commit/a9ccb77)), closes [#38](https://github.com/reuixiy/hugo-theme-meme/issues/38)
* separate `maxWidth` from responsive.scss ([88e66e1](https://github.com/reuixiy/hugo-theme-meme/commit/88e66e1))
* modular homepage for better customization ([4aeb5e2](https://github.com/reuixiy/hugo-theme-meme/commit/4aeb5e2))


### Features

* *reactive* dark mode! ([8d24690](https://github.com/reuixiy/hugo-theme-meme/commit/8d24690))
* add something for better customization ([0679e3b](https://github.com/reuixiy/hugo-theme-meme/commit/0679e3b))
* Force HTTPS Redirection ([355e0c8](https://github.com/reuixiy/hugo-theme-meme/commit/355e0c8))
* new data attribute `data-layout` ([1a8df79](https://github.com/reuixiy/hugo-theme-meme/commit/1a8df79))
* support Google AdSense [#23](https://github.com/reuixiy/hugo-theme-meme/issues/23) ([9cbb874](https://github.com/reuixiy/hugo-theme-meme/commit/9cbb874))
* support Valine comment [#22](https://github.com/reuixiy/hugo-theme-meme/issues/22) ([15a86ac](https://github.com/reuixiy/hugo-theme-meme/commit/15a86ac))
* support video footnote ([8324b3d](https://github.com/reuixiy/hugo-theme-meme/commit/8324b3d))
* Version 3.0 of MathJax [#34](https://github.com/reuixiy/hugo-theme-meme/issues/34) ([8746889](https://github.com/reuixiy/hugo-theme-meme/commit/8746889))
* vertical bar structure for minimal footer ([12a326b](https://github.com/reuixiy/hugo-theme-meme/commit/12a326b)), closes [#35](https://github.com/reuixiy/hugo-theme-meme/issues/35)


### Performance Improvements

* load valine.js only when button is clicked ([dee283f](https://github.com/reuixiy/hugo-theme-meme/commit/dee283f))



## [3.2.7](https://github.com/reuixiy/hugo-theme-meme/compare/v3.0.0...v3.2.7) (2019-11-19)


### Bug Fixes

* chmod 644 instantclick.js ([02f130f](https://github.com/reuixiy/hugo-theme-meme/commit/02f130f))
* link text of tags in minimal-footer ([5806692](https://github.com/reuixiy/hugo-theme-meme/commit/5806692))
* missing categories problem ([5c44452](https://github.com/reuixiy/hugo-theme-meme/commit/5c44452))
* missing tags when its name is complicated ([aa106a7](https://github.com/reuixiy/hugo-theme-meme/commit/aa106a7))
* whitespace problem in site-info in footer ([f471af6](https://github.com/reuixiy/hugo-theme-meme/commit/f471af6))
* wrong keywords when its name has whitespaces ([c8d534e](https://github.com/reuixiy/hugo-theme-meme/commit/c8d534e))


### Code Refactoring

* use `mainSections` and more ([c6a38e5](https://github.com/reuixiy/hugo-theme-meme/commit/c6a38e5)), closes [gohugoio/hugoThemes#756](https://github.com/gohugoio/hugoThemes/issues/756)
* modular for better customization ([0f1f9ca](https://github.com/reuixiy/hugo-theme-meme/commit/0f1f9ca))


### BREAKING CHANGES

* postSections & feedSections is removed



# [3.0.0](https://github.com/reuixiy/hugo-theme-meme/compare/v2.3.7...v3.0.0) (2019-11-09)

MemE has a brand new `config.toml` (in config-examples folder) with detailed instructions now! I highly recommend you replace your existing config.toml with it. Although this may take a while to reconfigure the configuration.

Moreover, MemE modifies the color values ​​of dark mode to make dark mode less depressed. Please change `primaryColorDark` to `201, 65%, 62%` if you are not using the latest version of `config.toml`.

MemE 主题现在有一个全新的 `config.toml` 了（在 config-examples 文件夹内），且里面包含详细的说明！我强烈建议你用它替换你现有的 config.toml 文件，尽管这可能需要一些时间重新配置。

此外，MemE 主题修改了一些深色模式的颜色值，以使深色模式不那么压抑。对于这点，如果你没有使用最新版本的 `config.toml`，请你将其中的 `primaryColorDark` 设置为 `201, 65%, 62%`。

### Bug Fixes

* contrast ratio of highlight style ([39da81c](https://github.com/reuixiy/hugo-theme-meme/commit/39da81c))
* contrast ratio of highlight style ([22480e6](https://github.com/reuixiy/hugo-theme-meme/commit/22480e6))
* headings link style ([fc99fc6](https://github.com/reuixiy/hugo-theme-meme/commit/fc99fc6))
* make the color less depressed ([4c37e04](https://github.com/reuixiy/hugo-theme-meme/commit/4c37e04))
* post-copyright style ([a7dedde](https://github.com/reuixiy/hugo-theme-meme/commit/a7dedde))
* post-copyright style again ([37d275e](https://github.com/reuixiy/hugo-theme-meme/commit/37d275e))
* regex of emphasis point ([6babe81](https://github.com/reuixiy/hugo-theme-meme/commit/6babe81))


### Features

* new image filter for dark mode ([5beb752](https://github.com/reuixiy/hugo-theme-meme/commit/5beb752))
* new option for current menu item ([edc7dc8](https://github.com/reuixiy/hugo-theme-meme/commit/edc7dc8))
* **#15:** new home page layout `page` ([7ae2902](https://github.com/reuixiy/hugo-theme-meme/commit/7ae2902)), closes [#15](https://github.com/reuixiy/hugo-theme-meme/issues/15)


### BREAKING CHANGES

* `darkImage` option is removed
You can delete `darkImage` in config.toml or post’s Front Matter now.

* config.toml changed
Please change `primaryColorDark` to `201, 65%, 62%` by yourself.



## [2.3.7](https://github.com/reuixiy/hugo-theme-meme/compare/v2.1.5...v2.3.7) (2019-10-09)


### Bug Fixes

* display post-nav in postsSection only ([5e503e6](https://github.com/reuixiy/hugo-theme-meme/commit/5e503e6))
* move `<script>` to the front of `</body>` ([0323fda](https://github.com/reuixiy/hugo-theme-meme/commit/0323fda))
* post-gitinfo style ([8dd960f](https://github.com/reuixiy/hugo-theme-meme/commit/8dd960f))
* post-nav style ([7402415](https://github.com/reuixiy/hugo-theme-meme/commit/7402415))



## [2.1.5](https://github.com/reuixiy/hugo-theme-meme/compare/v2.1.3...v2.1.5) (2019-10-04)


### Bug Fixes

* **#11:** glyph-correction on WebKit ([5e4e934](https://github.com/reuixiy/hugo-theme-meme/commit/5e4e934)), closes [#11](https://github.com/reuixiy/hugo-theme-meme/issues/11)
* **#11:** U+00B7 ([76f6371](https://github.com/reuixiy/hugo-theme-meme/commit/76f6371)), closes [#11](https://github.com/reuixiy/hugo-theme-meme/issues/11)
* footnote `hr` style ([5f8598b](https://github.com/reuixiy/hugo-theme-meme/commit/5f8598b))
* use relURL for fonts ([de6916f](https://github.com/reuixiy/hugo-theme-meme/commit/de6916f))


### Code Refactoring

* separate fonts src from `fonts.scss` ([8de3b8d](https://github.com/reuixiy/hugo-theme-meme/commit/8de3b8d))
* separate the video from hosting ([10e8ff3](https://github.com/reuixiy/hugo-theme-meme/commit/10e8ff3))


### Features

* add `enableFingerprint` for style & script ([ebaa065](https://github.com/reuixiy/hugo-theme-meme/commit/ebaa065))
* change some URLs to relative to support IPFS ([6b678da](https://github.com/reuixiy/hugo-theme-meme/commit/6b678da))
* video hosting URL ([9b15d2e](https://github.com/reuixiy/hugo-theme-meme/commit/9b15d2e))


### BREAKING CHANGES

* fonts.scss changed

If you have customized `fonts.scss`, be sure to check this change before updating.
* config.toml option changed
```
 # Image Hosting
 # Only support absolute URLs relative to root,
 # eg: /../../*.jpg
 enableImageHost = false
 imageHostURL = "https://example.com/"
 # Use host URL for head meta tags also
 headAlso = false

 # Video Hosting
 # Only support absolute URLs relative to root,
 # eg: /../../*.mp4
 enableVideoHost = false
 videoHostURL = "https://example.com/"
```



## [2.1.3](https://github.com/reuixiy/hugo-theme-meme/compare/v2.0.0...v2.1.3) (2019-09-09)


### Bug Fixes

* delete duplicate site title ([77a80fd](https://github.com/reuixiy/hugo-theme-meme/commit/77a80fd))
* delete duplicate site title again ([5ac16dd](https://github.com/reuixiy/hugo-theme-meme/commit/5ac16dd))
* drop cap style ([0843057](https://github.com/reuixiy/hugo-theme-meme/commit/0843057))
* minimal footer style ([b7b45e5](https://github.com/reuixiy/hugo-theme-meme/commit/b7b45e5))
* minimal-footer-about style ([5e33b95](https://github.com/reuixiy/hugo-theme-meme/commit/5e33b95))


### Features

* PWA Update Notification ([1998160](https://github.com/reuixiy/hugo-theme-meme/commit/1998160))



# [2.0.0](https://github.com/reuixiy/hugo-theme-meme/compare/v1.0.0...v2.0.0) (2019-09-01)


### Bug Fixes

* 404 page style ([14cd035](https://github.com/reuixiy/hugo-theme-meme/commit/14cd035))
* add a reference link ([527ee80](https://github.com/reuixiy/hugo-theme-meme/commit/527ee80))
* add anchorize ([863a920](https://github.com/reuixiy/hugo-theme-meme/commit/863a920))
* add anchorize ([fcfa11e](https://github.com/reuixiy/hugo-theme-meme/commit/fcfa11e))
* anchor icon style ([7461bf5](https://github.com/reuixiy/hugo-theme-meme/commit/7461bf5))
* contents-title-indent style ([0cae9d8](https://github.com/reuixiy/hugo-theme-meme/commit/0cae9d8))
* default primary color ([b2d3d27](https://github.com/reuixiy/hugo-theme-meme/commit/b2d3d27))
* delete anchorize ([f0dc4a9](https://github.com/reuixiy/hugo-theme-meme/commit/f0dc4a9))
* empty title when set `slug` in _index.md ([f25707d](https://github.com/reuixiy/hugo-theme-meme/commit/f25707d))
* footnotes style ([b26ed8e](https://github.com/reuixiy/hugo-theme-meme/commit/b26ed8e))
* home layout poetry style ([6838af8](https://github.com/reuixiy/hugo-theme-meme/commit/6838af8))
* list-item style ([5d16c7d](https://github.com/reuixiy/hugo-theme-meme/commit/5d16c7d))
* logic thing ([84d8306](https://github.com/reuixiy/hugo-theme-meme/commit/84d8306))
* overflow ([61952a2](https://github.com/reuixiy/hugo-theme-meme/commit/61952a2))
* poetry style ([bc2f1ae](https://github.com/reuixiy/hugo-theme-meme/commit/bc2f1ae))
* post gitinfo style ([8ecbc1a](https://github.com/reuixiy/hugo-theme-meme/commit/8ecbc1a))
* post-gitinfo style ([ef34487](https://github.com/reuixiy/hugo-theme-meme/commit/ef34487))
* post-gitinfo style ([916e77e](https://github.com/reuixiy/hugo-theme-meme/commit/916e77e))
* post-gitinfo style ([90daf2a](https://github.com/reuixiy/hugo-theme-meme/commit/90daf2a))
* pre font-size ([c1ed711](https://github.com/reuixiy/hugo-theme-meme/commit/c1ed711))
* pre style ([23ba309](https://github.com/reuixiy/hugo-theme-meme/commit/23ba309))
* **Atom, RSS:** use original content ([3abc6bd](https://github.com/reuixiy/hugo-theme-meme/commit/3abc6bd))
* some styles ([ec683a9](https://github.com/reuixiy/hugo-theme-meme/commit/ec683a9))
* some styles ([a1bbece](https://github.com/reuixiy/hugo-theme-meme/commit/a1bbece))
* some styles ([d778034](https://github.com/reuixiy/hugo-theme-meme/commit/d778034))


### Features

* add `displayPostGitInfo` option ([5d395f9](https://github.com/reuixiy/hugo-theme-meme/commit/5d395f9))
* add fontFamilyMenu option ([1269b9c](https://github.com/reuixiy/hugo-theme-meme/commit/1269b9c))
* add variables to help users customize ([043127a](https://github.com/reuixiy/hugo-theme-meme/commit/043127a))
* new `related` Front Matter ([dc983e5](https://github.com/reuixiy/hugo-theme-meme/commit/dc983e5))
* new Front Matter options ([b1326cd](https://github.com/reuixiy/hugo-theme-meme/commit/b1326cd))


### BREAKING CHANGES

* You must add `displayRelatedPosts = true` in
config.toml



# [1.0.0](https://github.com/reuixiy/hugo-theme-meme/compare/a1f88d7...v1.0.0) (2019-08-23)


### Bug Fixes

* 404 page link multilingualize ([2dbe047](https://github.com/reuixiy/hugo-theme-meme/commit/2dbe047))
* add `repoEditURL` option ([3574d51](https://github.com/reuixiy/hugo-theme-meme/commit/3574d51))
* add back to top z-index value ([406e064](https://github.com/reuixiy/hugo-theme-meme/commit/406e064))
* add Chinese translation for minute ([a2eb95a](https://github.com/reuixiy/hugo-theme-meme/commit/a2eb95a))
* change `post-gitinfo` font-size ([fbfff7e](https://github.com/reuixiy/hugo-theme-meme/commit/fbfff7e))
* change post-gitinfo icon style ([8aa27f0](https://github.com/reuixiy/hugo-theme-meme/commit/8aa27f0))
* change syntax highlight style ([5f878db](https://github.com/reuixiy/hugo-theme-meme/commit/5f878db))
* correct translation ([bc84426](https://github.com/reuixiy/hugo-theme-meme/commit/bc84426))
* delete some testing files & update theme logo ([bed70d6](https://github.com/reuixiy/hugo-theme-meme/commit/bed70d6))
* delete useless space in footer ([5716c6d](https://github.com/reuixiy/hugo-theme-meme/commit/5716c6d))
* enable host only when env is production ([cec4264](https://github.com/reuixiy/hugo-theme-meme/commit/cec4264))
* fix dark-mode.js ([a1f88d7](https://github.com/reuixiy/hugo-theme-meme/commit/a1f88d7))
* fix katex & disqus ([8d25519](https://github.com/reuixiy/hugo-theme-meme/commit/8d25519))
* fontFamilyTitle ([ed69ee8](https://github.com/reuixiy/hugo-theme-meme/commit/ed69ee8))
* headings link style ([c6cc945](https://github.com/reuixiy/hugo-theme-meme/commit/c6cc945))
* headings link style ([c2b5784](https://github.com/reuixiy/hugo-theme-meme/commit/c2b5784))
* i18n reading time ([ab53e7d](https://github.com/reuixiy/hugo-theme-meme/commit/ab53e7d))
* image hosting ([35e51cb](https://github.com/reuixiy/hugo-theme-meme/commit/35e51cb))
* link style ([cd9f032](https://github.com/reuixiy/hugo-theme-meme/commit/cd9f032))
* list link ([2fc2416](https://github.com/reuixiy/hugo-theme-meme/commit/2fc2416))
* list style ([a4ef7cb](https://github.com/reuixiy/hugo-theme-meme/commit/a4ef7cb))
* minimal footer link style ([828eb4f](https://github.com/reuixiy/hugo-theme-meme/commit/828eb4f))
* open graph ([56971af](https://github.com/reuixiy/hugo-theme-meme/commit/56971af))
* post copyright ([c14b26c](https://github.com/reuixiy/hugo-theme-meme/commit/c14b26c))
* post-nav style ([0996696](https://github.com/reuixiy/hugo-theme-meme/commit/0996696))
* post-tags style ([3688a7e](https://github.com/reuixiy/hugo-theme-meme/commit/3688a7e))
* reading time bug ([23aaaf0](https://github.com/reuixiy/hugo-theme-meme/commit/23aaaf0))
* related-link style ([ad7836d](https://github.com/reuixiy/hugo-theme-meme/commit/ad7836d))
* replace .Pages with .Site.RegularPages ([d49918f](https://github.com/reuixiy/hugo-theme-meme/commit/d49918f))
* replace .Site.RegularPages with .Pages ([6c1f263](https://github.com/reuixiy/hugo-theme-meme/commit/6c1f263))
* reverse ([d95f896](https://github.com/reuixiy/hugo-theme-meme/commit/d95f896))
* section list empty title ([f5ce845](https://github.com/reuixiy/hugo-theme-meme/commit/f5ce845))
* support caption markdown ([9109b5b](https://github.com/reuixiy/hugo-theme-meme/commit/9109b5b))
* sw.js & footnote link ([9e7589b](https://github.com/reuixiy/hugo-theme-meme/commit/9e7589b))
* syntax highlight style ([08b7d94](https://github.com/reuixiy/hugo-theme-meme/commit/08b7d94))
* syntax highlight style ([3111b2e](https://github.com/reuixiy/hugo-theme-meme/commit/3111b2e))
* syntax highlight style ([6b2f4f5](https://github.com/reuixiy/hugo-theme-meme/commit/6b2f4f5))
* table link style ([2d33f2c](https://github.com/reuixiy/hugo-theme-meme/commit/2d33f2c))
* table style ([1e2f8ce](https://github.com/reuixiy/hugo-theme-meme/commit/1e2f8ce))
* table style ([38fb35c](https://github.com/reuixiy/hugo-theme-meme/commit/38fb35c))
* title font family ([3ce0486](https://github.com/reuixiy/hugo-theme-meme/commit/3ce0486))
* toc link ([4180784](https://github.com/reuixiy/hugo-theme-meme/commit/4180784))
* update logo again ([3c8174e](https://github.com/reuixiy/hugo-theme-meme/commit/3c8174e))
* use monospace font for `post-gitinfo` ([5e7156b](https://github.com/reuixiy/hugo-theme-meme/commit/5e7156b))


### Code Refactoring

* change header and menu option ([4baf725](https://github.com/reuixiy/hugo-theme-meme/commit/4baf725))


### Features

* add back to top support ([bf4d8a3](https://github.com/reuixiy/hugo-theme-meme/commit/bf4d8a3))
* add displayPostDescription option ([af94d6d](https://github.com/reuixiy/hugo-theme-meme/commit/af94d6d))
* add Service Worker support ([76ba288](https://github.com/reuixiy/hugo-theme-meme/commit/76ba288))
* add syntax highlight option ([2ca9432](https://github.com/reuixiy/hugo-theme-meme/commit/2ca9432))


### BREAKING CHANGES

* config.toml option changed
displayHeader -> enableHeader
displayMenu   -> enableMenu
