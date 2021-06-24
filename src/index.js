import 'phaser';

import SimpleScene from './scenes/SimpleScene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene,
};

const GAME = new Phaser.Game(gameConfig);
GAME();