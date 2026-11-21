<p align="center">
  <img src="assets/veldon-game.png" width="84" height="84" alt="一张穿着短靴向右奔跑的游戏卡带，标签左上角印着 V">
</p>

<h1 align="center">Veldon Game</h1>

<p align="center">用 AI 一起做 1,000 款原创游戏，致敬童年。</p>

<p align="center"><a href="https://www.veldongame.com/"><strong>官网 · www.veldongame.com</strong></a></p>

<p align="center"><strong>简体中文</strong> · <a href="README.en.md" lang="en">English</a></p>

## 目录

- [网站介绍](#zh-website)
- [项目与愿景](#zh-vision)
- [仓库结构](#zh-structure)
- [每周游戏更新](#zh-updates)
- [项目功能规划](#zh-roadmap)
- [参与讨论](#zh-discuss)
- [版权说明](#zh-rights)

<a name="zh-website"></a>

## 网站介绍

Veldon Game 是一个网页游戏合集。我们用 AI 制作原创游戏，也分享来自开源社区的作品。打开游戏目录，点「开始试玩」就能在浏览器里玩。

- 首款自制游戏《三国小将·虎牢争锋》支持单人挑战和双人同屏。 [浏览自制游戏](https://www.veldongame.com/games/original/)
- 开源目录收录了 3D Hartwig Chess Set，提供试玩和源码入口。 [浏览开源游戏](https://www.veldongame.com/games/open-source/)
- 周报记录每周的新作和版本更新。 [自制游戏周报](https://www.veldongame.com/progress/original/) · [开源游戏周报](https://www.veldongame.com/progress/open-source/)
- AI 游戏工作室正在开发中，计划支持用 AI 把玩法点子做成可试玩的网页游戏。 [AI 游戏工作室](https://www.veldongame.com/studio/)

<a name="zh-vision"></a>

## 项目与愿景

小时候，在游戏里发现一条密道，第二天课间就想找张草稿纸，把入口画给朋友看。我们想用 AI 把这份发现和分享的乐趣带进新游戏里。每款作品都从一条简单的规则开始，做出第一版就请大家试玩，再根据反馈一点点改进。

这 1,000 款 AI 创作的游戏将陆续收录到 Veldon Game 的自制游戏目录。我们也想把创作中用到的工具逐步开放给大家。以后，你可以在这里用 AI 把点子做成游戏，发布自己的作品，再和玩家一起琢磨下一版怎么改。

<a name="zh-structure"></a>

## 仓库结构

`Veldon-Game` 是主站仓库，负责游戏目录、周报和试玩入口。各款游戏的代码、素材和许可证在自己的仓库维护，目录里的试玩按钮直接打开独立发布的游戏。

| 文件或目录 | 用途 |
| --- | --- |
| [`index.html`](index.html) | 主站首页 |
| [`games.js`](games.js) | 自制和开源游戏的目录数据，包括简介、封面和试玩地址 |
| [`games/original/`](games/original/) · [`games/open-source/`](games/open-source/) | 分类列表和旧试玩地址的跳转页 |
| [`assets/`](assets/) | 主站样式和图片 |
| [`progress/`](progress/) | 自制游戏周报和开源游戏动态 |
| [`studio/`](studio/) | AI 游戏工作室页面 |

独立游戏仓库统一使用 `veldon-编号-类别-游戏名`。开源游戏用 `open`，自制游戏用 `original`。两类各自从 `001` 编号，编号至少三位，游戏名用小写字母、数字和连字符。

自制游戏 **001** 是《三国小将·虎牢争锋》。百位 Q 版三国人物在虎牢关交锋，每人有三套专属连招，支持单人挑战、双人同屏和自定义按键。 [游戏仓库](https://github.com/RogerH2018/veldon-001-original-hulao-showdown) · [网页试玩](https://rogerh2018.github.io/veldon-001-original-hulao-showdown/)

开源游戏 `001` 是 Julian Garnier 制作的 3D Hartwig Chess Set，棋具由 Josef Hartwig 设计，走棋规则由 Chess.js 提供。主站目录直接链接到独立部署的试玩页。 [游戏仓库](https://github.com/RogerH2018/veldon-001-open-hartwig-chess) · [独立试玩](https://rogerh2018.github.io/veldon-001-open-hartwig-chess/)

新增游戏时，在 `games.js` 的对应分类登记，将独立试玩地址填入 `url`。由 Veldon Game 维护的开源游戏用 `source` 链接对应的 GitHub Fork。

<a name="zh-updates"></a>

## 每周游戏更新

**每周至少更新一款游戏。** 周报会列出新作和已有游戏的改动，附上网页试玩链接。自制游戏在首次收录时计入 1,000 款目标，后续版本沿用原编号。开源游戏按自己的编号记录。

[查看每周游戏进度目录 →](progress/README.md)

<a name="zh-roadmap"></a>

## 项目功能规划

| 功能 | 你可以做什么 |
| --- | --- |
| AI 生成游戏 | 写下玩法点子，让 AI 搭出第一版。玩上一轮，再调整规则、代码和素材。 |
| 发布游戏 | 把选定的版本发布到 Veldon Game 项目网站。关掉创作工作台后，朋友也能在游戏页面直接试玩。 |
| 玩游戏 | 玩家打开链接就能试玩，也能把喜欢的一款发给朋友。 |
| 玩家与创作者社区 | 告诉作者哪一关最好玩、哪里容易卡住，或找个搭档一起做游戏。 |

<a name="zh-discuss"></a>

## 参与讨论

小时候玩的哪一关，你最想亲手改一改？来讨论区聊聊你会怎么改。如果试玩过我们的作品，带上游戏编号，说说你想保留的一个细节，或最想改的一条规则。中文、英文都欢迎。[进入 GitHub Discussions](https://github.com/RogerH2018/Veldon-Game/discussions)

<a name="zh-rights"></a>

## 版权说明

© 2026 Veldon Game
