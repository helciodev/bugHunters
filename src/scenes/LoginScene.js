import Phaser from 'phaser';
import config from '../config/config';
import Button from '../Objects/Button';

export default class Login extends Phaser.Scene {
  constructor(){
    super('Login')
  }

  create() {
    this.model = this.sys.game.globals.model;
    this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)');
    const menuButton = new Button(this, config.width / 2, config.height / 2 + 80, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.add.existing(menuButton);
   const title = document.querySelector('.title');
    const playerLoginForm = document.getElementById('player-login')
    const nameGetter = document.getElementById('name-getter');
    if(!this.model.username){
    title.style.display = 'block';
    }else {
      this.scene.start('Game');
    }
    let name = '';
    playerLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if(nameGetter.value === null || nameGetter.value === '') return
      name = nameGetter.value.trim();
      nameGetter.value = null;
      this.model.username = name;
      this.scene.start('Game');
    })
  }
};