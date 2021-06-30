import Phaser from 'phaser';
import config from '../config/config';
export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader')
  }

init () {
  this.readyCount = 0;
}
 	

ready () {
this.scene.start('Title');
  this.readyCount++;
  if (this.readyCount === 2) {
    this.scene.start('Title');
  }
}

  preload () {
   // add logo image
  this.add.image(400, 200, 'logo');
 
  // display progress bar
  var progressBar = this.add.graphics();
  var progressBox = this.add.graphics();
  progressBox.fillStyle(0x222222, 0.8);
  progressBox.fillRect(240, 270, 320, 50);
  
  var width = this.cameras.main.width;
  var height = this.cameras.main.height;
 
  var percentText = this.make.text({
    x: width / 2,
    y: height / 2 - 5,
    text: '0%',
    style: {
      font: '18px monospace',
      fill: '#ffffff'
    }
  });
  percentText.setOrigin(0.5, 0.5);
 
  var assetText = this.make.text({
    x: width / 2,
    y: height / 2 + 50,
    text: '',
    style: {
      font: '18px monospace',
      fill: '#ffffff'
    }
  });
  assetText.setOrigin(0.5,0.5 );
 
  // update progress bar
  this.load.on('progress', function (value) {
    percentText.setText(parseInt(value * 100) + '%');
    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(250, 280, 300 * value, 30);
  });
 
  // update file progress text
  this.load.on('fileprogress', function (file) {
    assetText.setText('Loading asset: ' + file.key);
  });
 
 // remove progress bar when complete
this.load.on('complete', function () {
  progressBar.destroy();
  progressBox.destroy();
  // loadingText.destroy();
  percentText.destroy();
  assetText.destroy();
  this.ready();
}.bind(this));
 
this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
 
  // load assets needed in our game
  this.load.image('blueButton1', './assets/ui/blue_button02.png');
  this.load.image('blueButton2', './assets/ui/blue_button03.png');
// every other asset
  this.load.image('box', './assets/ui/grey_box.png');
  this.load.image('checkedBox', './assets/ui/blue_boxCheckmark.png');
  this.load.audio('bgMusic', ['./assets/TownTheme.mp3']);
   this.load.image('tiles', './assets/map/spritesheet.png');
    this.load.tilemapTiledJSON('map', './assets/map/map.json');
    this.load.spritesheet('player', './assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.image('blueDragon', './assets/dragonblue.png');
    this.load.image('orangeDragon', './assets/dragonorange.png');
// sounds
    this.load.audio('dragonAttackSound', ['./assets/music/fire.wav']);
    this.load.audio('heroAttackSound', ['./assets/music/attack.wav']);
  }

  create () {
    this.scene.start('Title')
  }

 

};