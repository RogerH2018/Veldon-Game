<p align="center">
  <img src="assets/veldon-game.png" width="84" height="84" alt="A game cartridge in boots runs to the right, with a V in the corner of its label.">
</p>

<h1 align="center">Veldon Game</h1>

<p align="center">Let’s make 1,000 original games with AI, inspired by the games we grew up playing.</p>

<p align="center"><a href="https://www.veldongame.com/"><strong>Official website · www.veldongame.com</strong></a></p>

<p align="center"><a href="README.md" lang="zh-CN">简体中文</a> · <strong>English</strong></p>

## Contents

- [Website](#en-website)
- [About and vision](#en-vision)
- [Repository structure](#en-structure)
- [Weekly game updates](#en-updates)
- [Project roadmap](#en-roadmap)
- [Get involved](#en-discuss)
- [Copyright](#en-rights)

<a name="en-website"></a>

## Website

Veldon Game is a collection of browser games. We build original games with AI and share games from the open-source community. Pick a game from the catalog to play in your browser.

- Our first original game, *Hulao Showdown*, supports solo matches against the CPU and local two-player play. [Browse original games](https://www.veldongame.com/games/original/)
- The open-source catalog includes *3D Hartwig Chess Set*, with links to play and browse its source code. [Browse open-source games](https://www.veldongame.com/games/open-source/)
- The weekly logs cover new releases and updates. [Original game log](https://www.veldongame.com/progress/original/) · [Open-source game log](https://www.veldongame.com/progress/open-source/)
- The AI Game Studio is in development. The goal is to help you turn a game idea into a playable browser game with AI. [AI Game Studio](https://www.veldongame.com/studio/)

<a name="en-vision"></a>

## About and vision

When we were kids, we’d find a secret passage in a game and sketch its entrance on scrap paper for a friend at recess the next day. We want to use AI to make games with surprises worth sharing. Each game starts with a simple rule. We share the first playable version early, then keep refining it with feedback from players.

We’ll add all 1,000 games to the original game catalog as they’re ready. Over time, we want to share the tools we use. You’ll be able to turn an idea into a game with AI, publish it on the same site, and talk to your players about what to change in the next version.

<a name="en-structure"></a>

## Repository structure

`Veldon-Game` maintains the website, game catalogs, and weekly logs. Games keep their code, assets, and licenses in their own repositories. Each play button opens the independently hosted game.

| File or directory | Purpose |
| --- | --- |
| [`index.html`](index.html) | Website homepage |
| [`games.js`](games.js) | Catalog entries for original and open-source games, including descriptions, covers, and play URLs |
| [`games/original/`](games/original/) · [`games/open-source/`](games/open-source/) | Category listings and redirects for old play URLs |
| [`assets/`](assets/) | Website styles and images |
| [`progress/`](progress/) | Weekly logs for original games and updates on open-source games |
| [`studio/`](studio/) | AI Game Studio page |

Standalone game repositories use `veldon-number-category-game-name`, with `open` for open-source games and `original` for our own games. Each category starts at `001`. Use at least three digits for the number and lowercase letters, digits, and hyphens for the game name.

**001** in the original collection is *Hulao Showdown*, a Three Kingdoms fighting game featuring 100 chibi generals, 300 signature combos, solo CPU matches, and local two-player play. [Game repository](https://github.com/RogerH2018/veldon-001-original-hulao-showdown) · [Play Hulao Showdown](https://rogerh2018.github.io/veldon-001-original-hulao-showdown/)

Open-source game `001` is Julian Garnier’s 3D Hartwig Chess Set, with pieces designed by Josef Hartwig and move validation provided by Chess.js. The main catalog links directly to the standalone game. [Game repository](https://github.com/RogerH2018/veldon-001-open-hartwig-chess) · [Play directly](https://rogerh2018.github.io/veldon-001-open-hartwig-chess/)

Add a new game to its category in `games.js` and set `url` to the game's standalone play URL. For open-source games maintained by Veldon Game, set `source` to the corresponding GitHub fork.

<a name="en-updates"></a>

## Weekly game updates

**We aim to release or update at least one game each week.** The weekly log covers new releases and changes to existing games, with links to play in your browser. Each original game counts toward the 1,000-game goal when first listed and keeps its number across updates. Open-source games have their own numbering.

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

## Get involved

Players and creators are welcome to make games with us at Veldon Game. Try an early build, share an idea for a game mechanic, or help with level design, art, sound, or code. If you’re looking for someone to work with, tell us about the game you’d like to make in Discussions.

Which level from your childhood would you most like to redesign, and how would you make it play differently? If you’ve tried one of our games, share its number and a detail you’d keep or a rule you’d change. English and Chinese are both welcome. [Join GitHub Discussions](https://github.com/RogerH2018/Veldon-Game/discussions)

<a name="en-rights"></a>

## Copyright

© 2026 Veldon Game
