window.addEventListener("DOMContentLoaded", event => {
    const commentsToggle = document.getElementById('load-comments');

    if (commentsToggle !== null) {
        commentsToggle.addEventListener('click', function () {
            loadComments();
            this.style = "display: none";
        });
    }
}, {once: true});
