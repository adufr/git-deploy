# git-deploy

![GitHub issues](https://img.shields.io/github/issues-raw/woosy/git-deploy.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/woosy/git-deploy.svg)

## What is git-deploy

git-deploy is a really simple tool I made in order to optimize my workflow, via auto-deploying my projects to my VPS.
It uses both Github's webhooks and a really simple NodeJS powered HTTP server, and it is able to execute any shell command you want.

## How to use it

- **Requirements**

  - [NodeJS](https://nodejs.org/en/) (8 or later)
  - [Git](https://git-scm.com/) (`apt-get install git`)
  - [PM2](http://pm2.keymetrics.io/) (`npm i pm2 -g`)

- **Setup**
  - Clone the project: `git clone https://github.com/Woosy/git-deploy`
  - Go to your github repository, and add a webhook
    - Content type: JSON
    - Secret: any secure password
    - Tick the 'active' checkbox
  - Rename the config file to `config.json`
  - Configure the `config.json` as you want

- **Run**
  - Start the webserver with pm2: `pm2 start server.js --name git-deploy`
  - Enjoy :)

## Author(s)

- **Arthur Dufour** - [Woosy](https://github.com/Woosy) ![Follow me on Twitter](https://img.shields.io/twitter/follow/woosy__.svg?style=social&label=Follow)

*[Contributors](https://github.com/woosy/WBot/contributors)*

## Trello

*You can follow my work on [Trello](https://trello.com/b/U2pDtPqb/git-deploy).*
