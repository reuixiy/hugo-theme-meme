{{ $url := urls.Parse .Site.BaseURL }}
{{ $host := $url.Host }}

if (window.location.host == "{{ $host }}" && window.location.protocol != "https:") {
    window.location.protocol = "https";
}
