function updateState() {
    let hasInstance = document.getElementById("instance").value.trim() != "";
    document.getElementById("submit").disabled = !hasInstance;
}

function getSoftwareName(instance) {
    for (let option of document.querySelectorAll("#fediverse-domains > option"))
        if (option.value == instance)
            return Promise.resolve(option.getAttribute("data-project"));

    return fetch(`https://${instance}/.well-known/nodeinfo`).then(response => response.json()).then(response => {
        if (response && Array.isArray(response.links))
            for (let link of response.links)
                if (link.rel == "http://nodeinfo.diaspora.software/ns/schema/2.0" && typeof link.href == "string")
                    return fetch(link.href);
        throw new Exception(".well-known/nodeinfo file does not contain a nodeinfo link");
    }).then(response => response.json()).then(response => {
        if (response && response.software && typeof response.software.name == "string")
            return response.software.name;
        throw new Exception("nodeinfo link does not contain a software name");
    }).catch(error => {
        console.error(error);

        // Download probably failed due to CORS error, assume Mastodon or compatible
        return "mastodon";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let params = new URLSearchParams(location.hash.slice(1));
    document.getElementById("title").value = params.get("title");
    document.getElementById("url").value = params.get("url");

    let description = params.get("description");
    if (description.length > 250)
        description = description.slice(0, 249) + "…";
    document.getElementById("description").value = description;

    if ("mastodonInstance" in localStorage) {
        document.getElementById("instance").value = localStorage.mastodonInstance;
        document.getElementById("rememberInstance").checked = true;
    }

    document.getElementById("shareForm").addEventListener("submit", event => {
        event.preventDefault();

        if (event.target.disabled)
            return;

        let instance = document.getElementById("instance").value.trim();

        // Fix URLs mistakenly entered into the instance field
        instance = instance.replace(/^\w+:[\/\\]*/, "");
        instance = instance.replace(/[\/\\].*/, "");
        document.getElementById("instance").value = instance;

        if (instance == "")
            return;

        if (document.getElementById("rememberInstance").checked)
            localStorage.mastodonInstance = instance;
        else
            delete localStorage.mastodonInstance;

        let title = document.getElementById("title").value.trim();
        let description = document.getElementById("description").value.trim();
        let url = document.getElementById("url").value.trim();
        let text = title + "\n" + description + "\n" + url;

        getSoftwareName(instance).then(name => {
            let projects = JSON.parse(document.body.getAttribute("data-projects"));
            let endpoint = projects.hasOwnProperty(name) ? projects[name] : projects.mastodon;
            endpoint = endpoint.replace("{title}", encodeURIComponent(title));
            endpoint = endpoint.replace("{description}", encodeURIComponent(description));
            endpoint = endpoint.replace("{url}", encodeURIComponent(url));
            endpoint = endpoint.replace("{text}", encodeURIComponent(text));
            location.href = `https://${instance}/${endpoint}`;
        });
    });

    document.getElementById("instance").addEventListener("input", updateState);
    updateState();
});
