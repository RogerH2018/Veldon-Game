function sitePageUrl(href, base = document.baseURI) {
  const url = new URL(href, base);
  const relativePage = !/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href);
  if (relativePage && document.documentElement.lang === "en" && !url.searchParams.has("lang")) {
    url.searchParams.set("lang", "en");
  }
  return url.href;
}

function showSiteLanguage() {
  const url = new URL(location.href);
  let language = url.searchParams.get("lang");
  try {
    if (language === "en" || language === "zh") {
      localStorage.setItem("veldon-language", language);
    } else {
      language = localStorage.getItem("veldon-language");
    }
  } catch {
    // The URL still selects the language when browser storage is unavailable.
  }

  const english = language === "en";
  document.documentElement.lang = english ? "en" : "zh-CN";
  if (english) {
    for (const element of document.querySelectorAll("[data-en]")) {
      element.textContent = element.dataset.en;
    }
    for (const element of document.querySelectorAll("[data-en-label]")) {
      element.setAttribute("aria-label", element.dataset.enLabel);
    }
    for (const element of document.querySelectorAll("[data-en-content]")) {
      element.setAttribute("content", element.dataset.enContent);
    }
    for (const link of document.querySelectorAll("a[href]:not([data-language-switch])")) {
      link.href = sitePageUrl(link.getAttribute("href"));
    }
  }

  const switchLink = document.querySelector("[data-language-switch]");
  const nextLanguage = english ? "zh-CN" : "en";
  url.searchParams.set("lang", english ? "zh" : "en");
  switchLink.href = url.href;
  switchLink.lang = nextLanguage;
  switchLink.hreflang = nextLanguage;
  switchLink.textContent = english ? "中文" : "English";
}

showSiteLanguage();
