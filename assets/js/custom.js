window.addEventListener("DOMContentLoaded", () => {
  const normalizedPath = `${window.location.pathname.replace(/\/+$/, "")}/`
  if (normalizedPath !== "/search/") {
    return
  }

  const searchContainer = document.getElementById("search")
  const statusNode = document.getElementById("search-status")

  if (!searchContainer) {
    return
  }

  if (typeof window.PagefindUI !== "function") {
    if (statusNode) {
      statusNode.textContent = "搜索暂不可用，请稍后再试。"
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
        input.setAttribute("aria-label", "站内搜索输入框")
      }
    }

    if (statusNode) {
      statusNode.textContent = "请输入关键词开始搜索。"
    }
  } catch (error) {
    if (statusNode) {
      statusNode.textContent = "搜索暂不可用，请稍后再试。"
    }
    console.error("[search] Pagefind 初始化失败", error)
  }
}, { once: true })
