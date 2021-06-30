import Phaser from 'phaser';
import Leaderboard from '../leaderboardAPI/leaderboardAPI';
import config from '../config/config';
import Button from '../Objects/Button';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)');
    this.api = new Leaderboard();

    this.drawLeaderboardTitle();
    const scores = this.api.getScores();
    scores.then(data => {
      const players = data.result.sort((a, b) => b.score - a.score);
      this.drawTop5Player(players.slice(0, 5));
    });

    const menuButton = new Button(this, config.width / 2, config.height / 2 + 80, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.add.existing(menuButton);
  }

  drawLeaderboardTitle() {
    this.add.text(
      config.width / 2 - 50,
      config.height / 2 - 100,
      'Leaderboard',
      { color: '#fff', fontSize: 15 },
    );

    const graphics = this.add.graphics();
    graphics.lineStyle(1, 0xffffff, 1);

    graphics.beginPath();

    graphics.moveTo(
      config.width / 2 - 70,
      config.height / 2 - 80,
    );
    graphics.lineTo(
      config.width / 2 + 70,
      config.height / 2 - 80,
    );
    graphics.strokePath();
  }

  drawTop5Player(players) {
    for (let index = 0; index < players.length; index += 1) {
      const player = players[index];
      this.add.text(
        config.width / 2 - 70,
        config.height / 2 - 70 + (index * 20),
        `${index + 1}. `,
        { color: '#fff', fontSize: 15 },
      );
      this.add.text(
        config.width / 2 - 50,
        config.height / 2 - 70 + (index * 20),
        player.user,
        { color: '#fff', fontSize: 15 },
      );

      this.add.text(
        config.width / 2 + 40,
        config.height / 2 - 70 + (index * 20),
        player.score,
        { color: '#fff', fontSize: 15 },
      );
    }
  }
}
