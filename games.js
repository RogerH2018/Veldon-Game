// 添加 url 后作品会显示「开始试玩」，否则显示「未上线」。相对路径以网站首页为基准。
// 示例：{ title: "游戏名", description: "玩法简介", cover: "assets/game.webp", url: "games/original/my-game/index.html" }
const games = {
  original: [
    {
      title: "001 · 三国小将·虎牢争锋",
      description: "百位 Q 版三国人物会战虎牢关。三百套专属连招，快击、突进与重破相互克制。",
      cover: "https://rogerh2018.github.io/veldon-001-original-hulao-showdown/assets/cover.jpg",
      url: "https://rogerh2018.github.io/veldon-001-original-hulao-showdown/",
      source: "https://github.com/RogerH2018/veldon-001-original-hulao-showdown",
      en: {
        title: "001 · Hulao Showdown",
        description: "A hundred chibi Three Kingdoms fighters clash at Hulao Pass. Explore 300 signature combos built around quick strikes, rushes, and guard breaks.",
      },
    },
    {
      title: "002 · 霓虹堆栈",
      description: "在赛博朋克都市里堆叠方块、消除横行，挑战最高分。支持键盘、触屏和滑动手势。",
      cover: "games/original/neon-stack/cover.jpg",
      url: "games/original/neon-stack/",
      en: {
        title: "002 · Neon Stack",
        description: "Stack falling blocks and clear lines in a neon-lit city. Play with a keyboard, touch controls, or swipe gestures.",
      },
    },
    { title: "自制游戏预留位", en: { title: "Next Original Game" } },
  ],
  "open-source": [
    {
      title: "3D Hartwig Chess Set",
      description: "Julian Garnier 制作的 3D 国际象棋，支持同屏双人对弈。",
      url: "https://rogerh2018.github.io/veldon-001-open-hartwig-chess/",
      source: "https://github.com/RogerH2018/veldon-001-open-hartwig-chess",
      en: { description: "A 3D chess game for two players on one screen, created by Julian Garnier." },
    },
    {
      title: "002 · VDrift Web",
      description: "基于 VDrift 车辆动力学的浏览器试玩。在原创铜线赛道上练习漂移，挑战最快单圈。",
      cover: "https://rogerh2018.github.io/veldon-002-open-vdrift/cover.jpg",
      url: "https://rogerh2018.github.io/veldon-002-open-vdrift/",
      source: "https://github.com/RogerH2018/veldon-002-open-vdrift/tree/web-trial",
      en: {
        description: "A browser trial built on VDrift's physics. Drift around the original Copperline Circuit and beat your best lap.",
        url: "https://rogerh2018.github.io/veldon-002-open-vdrift/?lang=en",
      },
    },
    { title: "开源游戏预留位", en: { title: "Next Open-Source Game" } },
  ],
};

const siteRoot = new URL(".", document.currentScript.src);
const catalogLanguage = document.documentElement.lang;
const englishCatalog = catalogLanguage === "en";
const catalogLabels = englishCatalog
  ? { status: "Coming soon", play: "Play", source: "View source" }
  : { status: "未上线", play: "开始试玩", source: "查看源码" };
const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = `
  <li class="game-card">
    <div class="game-thumbnail" aria-hidden="true">
      <span class="cartridge"></span>
      <img class="game-cover" alt="" loading="lazy" hidden>
    </div>
    <div class="game-details">
      <p class="game-title"></p>
      <p class="game-description" hidden></p>
      <p class="game-status">${catalogLabels.status}</p>
      <div class="game-actions">
        <a class="secondary-link game-link" hidden>${catalogLabels.play}</a>
        <a class="text-link game-source" hidden>${catalogLabels.source}</a>
      </div>
    </div>
  </li>
`;

for (const catalog of document.querySelectorAll("[data-game-category]")) {
  const entries = games[catalog.dataset.gameCategory];
  const published = entries.filter((game) => game.url);
  const ordered = [...published, ...entries.filter((game) => !game.url)];
  const limit = Number(catalog.dataset.gameLimit ?? entries.length);
  const grid = catalog.querySelector(".game-grid");
  const count = catalog.querySelector("[data-published-count]");

  if (count) count.textContent = published.length.toLocaleString(catalogLanguage);

  for (const game of ordered.slice(0, limit)) {
    const card = cardTemplate.content.cloneNode(true);
    const translation = englishCatalog ? game.en : undefined;
    const title = translation?.title ?? game.title;
    const description = translation?.description ?? game.description;
    card.querySelector(".game-title").textContent = title;

    if (description) {
      const descriptionElement = card.querySelector(".game-description");
      descriptionElement.textContent = description;
      descriptionElement.hidden = false;
    }

    if (game.cover) {
      const image = card.querySelector(".game-cover");
      image.src = new URL(game.cover, siteRoot).href;
      image.hidden = false;
    }

    if (game.url) {
      const playLink = card.querySelector(".game-link");
      playLink.href = sitePageUrl(translation?.url ?? game.url, siteRoot);
      playLink.setAttribute("aria-label", englishCatalog ? `Play ${title}` : `试玩《${title}》`);
      playLink.hidden = false;
      card.querySelector(".game-status").hidden = true;
    }

    if (game.source && !catalog.hasAttribute("data-game-limit")) {
      const sourceLink = card.querySelector(".game-source");
      sourceLink.href = game.source;
      sourceLink.setAttribute("aria-label", englishCatalog ? `View source for ${title}` : `查看《${title}》的源码`);
      sourceLink.hidden = false;
    }

    grid.append(card);
  }
}
