window.addEventListener("DOMContentLoaded", event => {
    {{ if .Site.Params.autoLoadComments }}
        loadComments()
    {{ else }}
        const commentsToggle = document.getElementById('load-comments');

        if (commentsToggle !== null) {
            commentsToggle.addEventListener('click', function () {
                loadComments();
                this.style = "display: none";
            });
        }
    {{  end }}
}, {once: true});
