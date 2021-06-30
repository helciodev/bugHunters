import Phaser from 'phaser';
import Leaderboard from '../leaderboardAPI/leaderboardAPI';
import config from '../config/config';
import Button from '../Objects/Button';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.api = new Leaderboard();
    this.api.setScore(
      {
        user: this.model.username,
        score: this.model.score,
      },
    ).then(() => {
      const menuButton = new Button(this, config.width / 2, config.height / 2 + 50, 'blueButton1', 'blueButton2', 'Lead', 'LeaderBoard');
      this.add.existing(menuButton);
    });

    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
    this.scene.scene.add.text(
      config.width / 2 - 80,
      config.height / 2 - 80,
      'Game Over',
      { color: 'red', fontSize: 32 },
    );

    const replayButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Replay', 'Game');
    this.add.existing(replayButton);

    this.model.score = 0;
  }
}
