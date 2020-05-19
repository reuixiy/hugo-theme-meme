(function initLunr() {
    let index = null;
    let lookup = null;
    let queuedTerm = null;

    const form = document.getElementById("search");
    const input = document.getElementById("search-input");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let term = input.value.trim();
        if (!term) {
            return;
        }

        form.setAttribute("data-running", "true");
        if (index) {
            search(term);
        }
        else if (queuedTerm) {
            queuedTerm = term;
        }
        else {
            queuedTerm = term;
            initIndex();
        }
    }, false);

    function searchDone() {
        form.removeAttribute("data-running");
    }

    function initIndex() {
        let request = new XMLHttpRequest();
        request.open("GET", "{{ ((.Site.GetPage "").OutputFormats.Get "SearchIndex").RelPermalink }}");
        request.responseType = "json";
        request.addEventListener("load", function(event) {
            let documents = request.response;
            if (!documents)
            {
                console.error("Search index could not be downloaded, was it generated?");
                searchDone();
                return;
            }

            lookup = {};
            index = lunr(function() {
                this.ref("uri");
                this.field("title");
                this.field("subtitle");
                this.field("content");
                this.field("description");
                this.field("categories");
                this.field("tags");

                for (let document of documents) {
                    this.add(document);
                    lookup[document.uri] = document;
                }
            });

            search(queuedTerm);
        }, false);
        request.addEventListener("error", searchDone, false);
        request.send(null);
    }

    function search(term) {
        try {
            let results = index.search(term);

            let target = document.querySelector(".main-inner");
            while (target.firstChild) {
                target.removeChild(target.firstChild);
            }

            let title = document.createElement("h1");
            title.id = "search-results";
            title.className = "list-title";

            // This is an overly simple pluralization scheme, it will only work
            // for some languages.
            if (results.length == 0) {
                title.textContent = "{{ i18n "searchResultsNone" (dict "Term" "{}") }}".replace("{}", term);
            }
            else if (results.length == 1) {
                title.textContent = "{{ i18n "searchResultsTitle" (dict "Count" 1 "Term" "{}") }}".replace("{}", term);
            }
            else {
                title.textContent = "{{ i18n "searchResultsTitle" (dict "Count" 13579 "Term" "{}") }}".replace("{}", term).replace("13579", results.length);
            }
            target.appendChild(title);
            document.title = title.textContent;

            let template = document.getElementById("search-result");
            for (let result of results) {
                let doc = lookup[result.ref];

                let element = template.content.cloneNode(true);
                element.querySelector(".summary-title-link").href = element.querySelector(".read-more-link").href = doc.uri;
                element.querySelector(".summary-title-link").textContent = doc.title;
                element.querySelector(".summary").textContent = truncateToEndOfSentence(doc.content, 70);
                target.appendChild(element);
            }
            title.scrollIntoView(true);

            {{ if .Site.Params.enableNavToggle }}
                if (navToggleLabel.classList.contains("open")) {
                    document.getElementById(navToggleLabel.getAttribute("for")).click();
                }
            {{ end }}
        }
        finally {
            searchDone();
        }
    }

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
})();
