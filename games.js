// 添加 url 后作品会显示「开始试玩」，否则显示「未上线」。相对路径以网站首页为基准。
// 示例：{ title: "游戏名", description: "玩法简介", cover: "assets/game.webp", url: "games/original/my-game/index.html" }
const games = {
  original: [
    {
      title: "001 · 三国小将·虎牢争锋",
      description: "百位 Q 版三国人物会战虎牢关。三百套专属连招，快击、突进与重破相互克制。",
      cover: "https://rogerh2018.github.io/veldon-001-original-arc-harbor/assets/cover.jpg",
      url: "https://rogerh2018.github.io/veldon-001-original-arc-harbor/",
      source: "https://github.com/RogerH2018/veldon-001-original-arc-harbor",
    },
    { title: "自制游戏预留位" },
  ],
  "open-source": [
    {
      title: "3D Hartwig Chess Set",
      description: "Julian Garnier 制作的 3D 国际象棋，支持同屏双人对弈。",
      url: "games/open-source/hartwig-chess/index.html",
      source: "https://github.com/juliangarnier/3D-Hartwig-chess-set",
    },
    { title: "开源游戏预留位" },
  ],
};

const siteRoot = new URL(".", document.currentScript.src);
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
      <p class="game-status">未上线</p>
      <div class="game-actions">
        <a class="secondary-link game-link" hidden>开始试玩</a>
        <a class="text-link game-source" hidden>查看源码</a>
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

  if (count) count.textContent = published.length.toLocaleString("zh-CN");

  for (const game of ordered.slice(0, limit)) {
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector(".game-title").textContent = game.title;

    if (game.description) {
      const description = card.querySelector(".game-description");
      description.textContent = game.description;
      description.hidden = false;
    }

    if (game.cover) {
      const image = card.querySelector(".game-cover");
      image.src = new URL(game.cover, siteRoot).href;
      image.hidden = false;
    }

    if (game.url) {
      const playLink = card.querySelector(".game-link");
      playLink.href = new URL(game.url, siteRoot).href;
      playLink.setAttribute("aria-label", `试玩《${game.title}》`);
      playLink.hidden = false;
      card.querySelector(".game-status").hidden = true;
    }

    if (game.source && !catalog.hasAttribute("data-game-limit")) {
      const sourceLink = card.querySelector(".game-source");
      sourceLink.href = game.source;
      sourceLink.setAttribute("aria-label", `查看《${game.title}》的源码`);
      sourceLink.hidden = false;
    }

    grid.append(card);
  }
}
