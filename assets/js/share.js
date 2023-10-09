function updateState()
{
    let hasInstance = document.getElementById("instance").value.trim() != "";
    document.getElementById("submit").disabled = !hasInstance;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("text").value = decodeURIComponent(location.hash.slice(1));
    if ("mastodonInstance" in localStorage) {
        document.getElementById("instance").value = localStorage.mastodonInstance;
        document.getElementById("rememberInstance").checked = true;
    }

    document.getElementById("shareForm").addEventListener("submit", event => {
        event.preventDefault();

        let instance = document.getElementById("instance").value.trim();
        if (instance == "")
            return;

        if (document.getElementById("rememberInstance").checked)
            localStorage.mastodonInstance = instance;
        else
            delete localStorage.mastodonInstance;

        let text = document.getElementById("text").value.trim();
        location.href = "https://" + instance + "/share?text=" + encodeURIComponent(text);
    });

    document.getElementById("instance").addEventListener("input", updateState);
    updateState();
});
