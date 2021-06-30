import Phaser from 'phaser';

import config from './config/config';
import GameScene from './scenes/GameScene';

class Game extends Phaser.Game {
  constructor () {
    super(config);

  }
}

window.game = new Game();