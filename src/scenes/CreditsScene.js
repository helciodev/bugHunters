import Phaser from 'phaser';
import config from '../config/config';
import Button from '../Objects/Button';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    const credit = document.getElementById('credits');
    credit.style.display = 'block';
    const menuButton = new Button(this, config.width / 2, config.height / 2 + 80, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.add.existing(menuButton);
  }
}