import Phaser from 'phaser';
import config from '../config/config';
import Button from '../Objects/Button';
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title')
  }

    create () {
      const title = document.querySelector('.title');
      title.style.display = 'none';
      const credit = document.getElementById('credits');
      credit.style.display = 'none';
      // Game
      this.gameButton = new Button(this, config.width / 2, config.height / 2 - 80, 'blueButton1', 'blueButton2', 'Play', 'Login');
      // leaderboard
       this.lead = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Lead', 'LeaderBoard');
      // Options
      this.optionsButton = new Button(this, config.width/2, config.height/2 + 70, 'blueButton1', 'blueButton2', 'Options', 'Options');
     
      // Credits
      this.creditsButton = new Button(this, config.width/2, config.height/2 + 150, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
     
      this.model = this.sys.game.globals.model;
      if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
        this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
        this.bgMusic.play();
        this.model.bgMusicPlaying = true;
        this.sys.game.globals.bgMusic = this.bgMusic;
      }
    }

};
