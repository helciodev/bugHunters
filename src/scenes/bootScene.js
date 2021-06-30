import 'phaser';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 

  preload () {
    this.load.image('logo', 'public/assets/bug-hunter-logo.png');
  }
  
  create () {
    this.scene.start('Preloader');
  }
 
};