<p align="center"><a href="https://arthurdufour.com" target="_blank" rel="noopener noreferrer"><img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="GitHub Logo"></a></p>

<p align="center">
  <a href="https://dependabot.com/"><img src="https://api.dependabot.com/badges/status?host=github&amp;repo=Woosy/git-deploy" alt="Dependabot Status"></a>
  <a href="https://dependabot.com/"><img src="https://img.shields.io/david/Woosy/CalendarBot.svg?maxAge=3600" alt="Dependencies status"></a>
  <br>
  <br>
</p>

<h2 align="center">git-deploy</h2>

<p align="center">git-deploy is a really simple tool which I use to deploy some of my application (bots, apis, websites...) when pushing them to GitHub.</p>

---

## Presentation

git-deploy uses Node's default http server, with GitHub's webhooks, in order to detect changes on a repository, and then trigger some configurable actions.

* **100% safe**, *since it uses secret tokens which are set on your GitHub repository*
* **100% customizable**, *since you can call a bash/python script or whatever you want.*
* **100% light**, *since it doesn't require any external packages to work.*


## Issues & questions

If you're experiencing problems with git-deploy, feel free to submit an issue.

## Changelog

Detailed changes for each **release** are documented in the [release notes](https://github.com/Woosy/git-deploy/releases).

## Stay In Touch

- [Website](https://arthurdufour.com)
- [Twitter](https://twitter.com/Woosy__)

## Contribution

Because the [Contributing Guide](https://github.com/Woosy/git-deploy/blob/dev/.github/CONTRIBUTING.md) currently doesn't exist, feel free to submit a pull request and we'll review it!

## License

This project is not licensed.

***Copyright (c) 2018-present, Arthur Dufour (Woosy)***
