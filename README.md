<p align="center">
  <img src="assets/veldon-game.png" width="84" height="84" alt="一张穿着短靴向右奔跑的游戏卡带，标签左上角印着 V">
</p>

<h1 align="center">Veldon Game</h1>

<p align="center">用 AI 一起做 1,000 款原创游戏，致敬童年。</p>

<p align="center"><strong>简体中文</strong> · <a href="README.en.md" lang="en">English</a></p>

## 目录

- [项目与愿景](#zh-vision)
- [仓库结构](#zh-structure)
- [每周游戏更新](#zh-updates)
- [项目功能规划](#zh-roadmap)
- [参与讨论](#zh-discuss)
- [版权说明](#zh-rights)

<a name="zh-vision"></a>

## 项目与愿景

小时候，在游戏里发现一条密道，第二天课间就想找张草稿纸，把入口画给朋友看。我们想用 AI 把这份发现和分享的乐趣带进新游戏里。每款作品都从一条简单的规则开始，做出第一版就请大家试玩，再根据反馈一点点改进。

这 1,000 款 AI 创作的游戏将陆续发布在 **Veldon Game 项目网站**，打开作品页面就能玩。我们也想把创作中用到的工具逐步开放给大家。以后，你可以在这里用 AI 把点子做成游戏，发布自己的作品，再和玩家一起琢磨下一版怎么改。

<a name="zh-structure"></a>

## 仓库结构

`Veldon-Game` 是主站仓库，负责展示游戏目录和试玩入口。独立部署的游戏在各自的仓库维护代码、游戏素材和许可证。主站可以直接链接已发布的游戏，也可以在主站试玩页内嵌游戏。

| 文件或目录 | 用途 |
| --- | --- |
| [`index.html`](index.html) | 主站首页 |
| [`games.js`](games.js) | 自制和开源游戏的目录数据，包括简介、封面和试玩地址 |
| [`games/original/`](games/original/) · [`games/open-source/`](games/open-source/) | 分类列表和主站试玩页 |
| [`assets/`](assets/) | 主站样式和图片 |
| [`progress/`](progress/) | 自制游戏周报和开源游戏动态 |

独立游戏仓库统一使用 `veldon-编号-类别-游戏名`。开源游戏用 `open`，自制游戏用 `original`。两类各自从 `001` 编号，编号至少三位，游戏名用小写字母、数字和连字符。

开源游戏 `001` 是 3D Hartwig Chess Set。游戏在独立仓库部署，主站试玩页负责内嵌棋盘和展示署名。 [游戏仓库](https://github.com/RogerH2018/veldon-001-open-hartwig-chess) · [独立试玩](https://rogerh2018.github.io/veldon-001-open-hartwig-chess/)

新增游戏时，在 `games.js` 的对应分类登记。`url` 可以填完整的试玩地址，也可以指向 `games/` 下的主站试玩页。开源游戏用 `source` 链接原作者的源码仓库。

<a name="zh-updates"></a>

## 每周游戏更新

**每周至少更新一款游戏。** 周报会列出新作和已有游戏的改动，附上项目网站的试玩链接。自制游戏在首次收录时计入 1,000 款目标，后续版本沿用原编号。开源游戏按自己的编号记录。

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
