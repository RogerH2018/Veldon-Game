// 按希望在游戏库中展示的顺序添加已发布的作品。封面与试玩链接可使用相对于首页的路径。
// 示例：{ title: "游戏名", description: "一句话介绍玩法", cover: "games/my-game/cover.webp", url: "games/my-game/index.html" }
const games = [];

if (games.length > 0) {
  const grid = document.getElementById("game-grid");
  const template = document.getElementById("game-card");

  for (const game of games) {
    const card = template.content.cloneNode(true);
    card.querySelector(".game-cover").src = game.cover;
    card.querySelector(".game-title").textContent = game.title;
    card.querySelector(".game-description").textContent = game.description;

    const playLink = card.querySelector(".game-link");
    playLink.href = game.url;
    playLink.setAttribute("aria-label", `试玩《${game.title}》`);
    grid.append(card);
  }

  document.getElementById("game-count").textContent = games.length.toLocaleString("zh-CN");
  document.getElementById("empty-library").hidden = true;
  grid.hidden = false;
}
