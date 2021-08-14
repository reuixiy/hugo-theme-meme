window.addEventListener("DOMContentLoaded", event => {
    let origContent = null;

    const search = instantsearch({
        appId: "{{ .Site.Params.algoliaAppId }}",
        apiKey: "{{ .Site.Params.algoliaApiKey }}",
        indexName: "{{ .Site.Params.algoliaIndexName }}",
    });

    search.addWidget({
        init: function (opts) {
            const helper = opts.helper;
            const input = document.getElementById("search-input");

            input.addEventListener("input", function (e) {
                helper
                .setQuery(e.currentTarget.value) // update the parameters
                .search(); // launch the query
          });
        },
    });

    search.addWidget({
        render: function (opts) {
            let term = opts.state.query
            if (!term) {
                return
            }

            const results = opts.results.hits;

            let target = document.querySelector(".main-inner") || document.querySelector("main.home");
            let replaced = [];

            while (target.firstChild) {
                replaced.push(target.firstChild);
                target.removeChild(target.firstChild);
            }

            if (!origContent) {
                origContent = replaced;
            }

            let title = document.createElement("h1");

            title.id = "search-results";
            title.className = "list-title";

            if (results.length == 0) {
                title.textContent = "{{ i18n "searchResultsNone" (dict "Term" "{}") }}".replace("{}", term);
            } else if (results.length == 1) {
                title.textContent = "{{ i18n "searchResultsTitle" (dict "Count" 1 "Term" "{}") }}".replace("{}", term);
            } else {
                title.textContent = "{{ i18n "searchResultsTitle" (dict "Count" 13579 "Term" "{}") }}".replace("{}", term).replace("13579", results.length);
            }

            target.appendChild(title);
            document.title = title.textContent;

            let template = document.getElementById("search-result");
            for (let result of results) {
                let element = template.content.cloneNode(true);
                element.querySelector(".summary-title-link").href = element.querySelector(".read-more-link").href = result.url;
                element.querySelector(".summary-title-link").textContent = result.title;
                element.querySelector(".summary").textContent = truncateToEndOfSentence(result.summary, 70);
                target.appendChild(element);
            }
            title.scrollIntoView(true);

            {{ if .Site.Params.enableNavToggle }}
                let navToggleLabel = document.querySelector('.nav-toggle');
                if (navToggleLabel && navToggleLabel.classList.contains("open")) {
                    document.getElementById(navToggleLabel.getAttribute("for")).click();
                }
            {{ end }}
        },
    });

    search.start();

    // This matches Hugo's own summary logic:
    // https://github.com/gohugoio/hugo/blob/b5f39d23b86f9cb83c51da9fe4abb4c19c01c3b7/helpers/content.go#L543
    function truncateToEndOfSentence(text, minWords)
    {
        let match;
        let result = "";
        let wordCount = 0;
        let regexp = /(\S+)(\s*)/g;
        while (match = regexp.exec(text)) {
            wordCount++;
            if (wordCount <= minWords) {
                result += match[0];
            }
            else
            {
                let char1 = match[1][match[1].length - 1];
                let char2 = match[2][0];
                if (/[.?!"]/.test(char1) || char2 == "\n") {
                    result += match[1];
                    break;
                }
                else {
                    result += match[0];
                }
            }
        }
        return result;
    }
}, {once: true});
