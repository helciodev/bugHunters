# 🐛 Bug Hunters 🐞

## Table of contents

- [About](#about)
- [Game design](#game-design)
- [Gameplay](#how-to-play)
- [Features](#features)
- [Live Demo](#live-demo)
- [Built with](#built-with)
- [Getting started](#getting-started)
  - [Installation instructions](#installation-instructions)
- [testing](#tests)
- [Author](#author)
- [Show your support](#show-your-support)
- [Acknowledgments](#acknowledgments)
- [License](#-license)

---

## About

Bug Hunters is game built with the phaser engine, the game is played on the browser, the objective is to help junior and senior dev destroy all bugs.

![Screenshot-main-page](src/assets/bugHunter.gif)

## Game design

The first step was to look for What is an RPG game?. After all this process, I started to brainstorm and just picked, the ones that looked realistic to build in 3 days, because 2 days were for study. Also, after reading the following readings, feel free to check it out: The 3 Primary Principles of Game Design, Beginner’s Guide to Game Mechanics, The Ultimate Guide to Level Design, I generated the following questions to myself: who are going to be the main character?, who are going to be the bad guys?, how many bad guys will be there?, what type of skills?, what is the objective of the game?, how the user will interact with the game?

And so on. This bunch of questions helped a lot to design the game. Also checking many resources in Open Game Art, gave me and inspired me with more ideas.

### Gameplay

To play the game follow the instruction below:

**Movement instruction:**
- Player can use the `left` (&#8592;) arrow key to move left.
- Player can use the `right` (&#8594;) arrow key to move right.
- Player can use the `up` (&#8593;) arrow key to move up in the map.
- Player can use the `down` (&#11107;) arrow key to move up in the map.

**Battle instruction**
- player can use up (&#8593;) and down(&#8595;) arrow keys to choose bug to perform attack in  the battle menu.
- Player can use the `space bar` to perform the attack once the bug is selected.

## Features

The features of this project are :

- Player should enter the username to play the game.
- Player can move a character around the map and collide with the bug to start the battle.
- Player should fight the bug and get the score.
- When all characters die the game is over and the score will be updated in the leaderboard.
- When a player kills all the bugs they will be back to the map and fight with another bug.
- Player can view the leaderboard from the main menu. Only the top five players will be displayed on the leaderboard.
- Player can change the options from the options menu to enable or disable background music and sound.
- Player can view the information about the game by clicking on the credits button in the menu.

## Live Demo

This project is hosted on Netilify.

[Live demo link](https://bughunters.netlify.app/)

## Built With

- [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
- [![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
- [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
- Phaser game engine
- webpack bundler

## Getting Started

### Installation instructions

Follow along the steps below to get a copy at your local machine.

- Navigate to the directory where you want this project to clone and then clone it

  ```
  git clone git@github.com:helciodev/bugHunters.git
  ```

- Navigate to the `bugHunters` directory

  ```
  cd bugHunters
  ```

- Install the npm package with `npm install`
- Start the server with `npm run start`
- The site should automatically open in your browser at http://localhost:8080/ if it didn't then open your browser with that link.

### tests
 To run tests run npm run tests in your command line
  ``` 
  npm run tests
   ```
## Author

😎 **Helcio André**

- GitHub: [@helciodev](https://github.com/helciodev)
- Twitter: [@helcio_bruno](https://twitter.com/helcio_bruno)
- Linkedin: [Helcio Andre](https://www.linkedin.com/in/helcio-andre/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Game was built by following the tutorial [Turn based RPG game](https://gamedevacademy.org/how-to-create-a-turn-based-rpg-game-in-phaser-3-part-1/)
- Login scene form used from [here](https://github.com/photonstorm/phaser3-examples/blob/master/public/assets/text/loginform.html)
- Assets used in this game are from [Open game art](https://opengameart.org/) and [free sound](https://freesound.org/)


## 📝 License

This project is [MIT](./LICENSE) licensed.
