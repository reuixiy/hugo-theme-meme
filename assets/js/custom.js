window.addEventListener("DOMContentLoaded", async () => {
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

  const waitForPagefindUI = async () => {
    const timeoutMs = 2000
    const intervalMs = 50
    const maxTries = Math.ceil(timeoutMs / intervalMs)

    for (let i = 0; i < maxTries; i++) {
      if (typeof window.PagefindUI === "function") {
        return true
      }
      await new Promise((resolve) => setTimeout(resolve, intervalMs))
    }

    return false
  }

  const pagefindReady = await waitForPagefindUI()
  if (!pagefindReady) {
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
      statusNode.textContent = ""
    }
  } catch (error) {
    if (statusNode) {
      statusNode.textContent = "{{ i18n "pagefindSearchUnavailable" }}"
    }
    console.error("[search] Pagefind initialization failed", error)
  }
}, { once: true })
