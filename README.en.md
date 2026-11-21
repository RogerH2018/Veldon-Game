<p align="center">
  <img src="assets/veldon-game.png" width="84" height="84" alt="A game cartridge in boots runs to the right, with a V in the corner of its label.">
</p>

<h1 align="center">Veldon Game</h1>

<p align="center">Let’s make 1,000 original games with AI, inspired by the games we grew up playing.</p>

<p align="center"><a href="README.md" lang="zh-CN">简体中文</a> · <strong>English</strong></p>

## Contents

- [About and vision](#en-vision)
- [Repository structure](#en-structure)
- [Weekly game updates](#en-updates)
- [Project roadmap](#en-roadmap)
- [Join the discussion](#en-discuss)
- [Copyright](#en-rights)

<a name="en-vision"></a>

## About and vision

When we were kids, we’d find a secret passage in a game and sketch its entrance on scrap paper for a friend at recess the next day. We want to use AI to make games with surprises worth sharing. Each game starts with a simple rule. We share the first playable version early, then keep refining it with feedback from players.

We’ll publish all 1,000 games on the **Veldon Game website** as they’re ready, so you can play each one right on its page. Over time, we want to share the tools we use. You’ll be able to turn an idea into a game with AI, publish it on the same site, and talk to your players about what to change in the next version.

<a name="en-structure"></a>

## Repository structure

`Veldon-Game` maintains the main website and its game catalog. Independently hosted games keep their code, assets, and licenses in their own repositories. The website can link to a deployed game or embed it in a play page.

| File or directory | Purpose |
| --- | --- |
| [`index.html`](index.html) | Website homepage |
| [`games.js`](games.js) | Catalog entries for original and open-source games, including descriptions, covers, and play URLs |
| [`games/original/`](games/original/) · [`games/open-source/`](games/open-source/) | Category listings and play pages |
| [`assets/`](assets/) | Website styles and images |
| [`progress/`](progress/) | Weekly logs for original games and updates on open-source games |

Standalone game repositories use `veldon-number-category-game-name`, with `open` for open-source games and `original` for our own games. Each category starts at `001`. Use at least three digits for the number and lowercase letters, digits, and hyphens for the game name.

**001** in the original collection is *Hulao Showdown*, a Three Kingdoms fighting game featuring 100 chibi generals, 300 signature combos, solo CPU matches, and local two-player play. [Game repository](https://github.com/RogerH2018/veldon-001-original-hulao-showdown) · [Play Hulao Showdown](https://rogerh2018.github.io/Veldon-Game/games/original/hulao-showdown/)

Open-source game `001` is 3D Hartwig Chess Set. The game runs from its own deployment, and the main website embeds the board and displays the credits. [Game repository](https://github.com/RogerH2018/veldon-001-open-hartwig-chess) · [Play directly](https://rogerh2018.github.io/veldon-001-open-hartwig-chess/)

Add a new game to its category in `games.js`. Set `url` to the full play URL or a play page under `games/`. For open-source games, set `source` to the original author's source repository.

<a name="en-updates"></a>

## Weekly game updates

**We aim to release or update at least one game each week.** The weekly log covers new releases and changes to existing games, with links to play them on the project website. Each original game counts toward the 1,000-game goal when first listed and keeps its number across updates. Open-source games have their own numbering.

[Browse the weekly game log →](progress/README.md)

<a name="en-roadmap"></a>

## Project roadmap

| Feature | What you’ll be able to do |
| --- | --- |
| Generate games with AI | Describe your idea and let AI build the first playable version. Try it out, then adjust the rules, code, and assets. |
| Publish games | Publish the version you choose on the Veldon Game website. Friends can visit its game page and play even after you close the studio. |
| Play games | Open a link to play. If you like the game, pass it on to a friend. |
| Community for players and creators | Tell the creator which level you loved or where you got stuck, or find someone to make a game with. |

<a name="en-discuss"></a>

## Join the discussion

Which level from your childhood would you most like to redesign, and how would you make it play differently? If you’ve tried one of our games, share its number and a detail you’d keep or a rule you’d change. English and Chinese are both welcome. [Join GitHub Discussions](https://github.com/RogerH2018/Veldon-Game/discussions)

<a name="en-rights"></a>

## Copyright

© 2026 Veldon Game
