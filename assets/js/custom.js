window.addEventListener("DOMContentLoaded", () => {
  const pagefindEnabled = {{ .Site.Params.enablePagefindSearch | default false }}
  if (!pagefindEnabled) {
    return
  }

  const searchPath = "{{ .Site.Params.pagefindSearchPath | default "/search/" }}"
  const normalizedPath = `${window.location.pathname.replace(/\/+$/, "")}/`
  const normalizedSearchPath = `${searchPath.replace(/\/+$/, "")}/`

  if (normalizedPath !== normalizedSearchPath) {
    return
  }

  const searchContainer = document.getElementById("search")
  const statusNode = document.getElementById("search-status")

  if (!searchContainer) {
    return
  }

  if (typeof window.PagefindUI !== "function") {
    if (statusNode) {
      statusNode.textContent = "{{ i18n "pagefindSearchUnavailable" }}"
    }
    return
  }

  try {
    new window.PagefindUI({
      element: "#search"
    })

    const input = searchContainer.querySelector('input[type="search"], input[type="text"]')
    if (input) {
      if (!input.id) {
        input.id = "search-input"
      }
      if (!input.getAttribute("aria-label")) {
        input.setAttribute("aria-label", "{{ i18n "pagefindSearchInputLabel" }}")
      }
    }

    if (statusNode) {
      statusNode.textContent = "{{ i18n "pagefindSearchHint" }}"
    }
  } catch (error) {
    if (statusNode) {
      statusNode.textContent = "{{ i18n "pagefindSearchUnavailable" }}"
    }
    console.error("[search] Pagefind initialization failed", error)
  }
}, { once: true })
