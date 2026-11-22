async function showVisitorCount() {
  const footer = document.querySelector(".site-footer");
  if (!footer || location.origin !== "https://www.veldongame.com") return;

  let visitors;
  try {
    const response = await fetch("https://cdn.busuanzi.cc/api.php", {
      method: "POST",
      body: JSON.stringify({ url: `${location.origin}/`, referrer: "" }),
      credentials: "omit",
      referrerPolicy: "no-referrer",
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return;
    ({ busuanzi_site_uv: visitors } = await response.json());
  } catch {
    return;
  }

  if (!Number.isSafeInteger(visitors) || visitors < 0) return;

  const counter = document.createElement("small");
  counter.textContent = `累计访客 ${visitors.toLocaleString("zh-CN")} 人次`;
  footer.append(counter);
}

showVisitorCount();
