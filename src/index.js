import Phaser from 'phaser';
import Model from './Models/Model';
import config from './config/config';
import BootScene from './scenes/bootScene';
import GameScene from './scenes/GameScene';
import CreditsScene from './scenes/CreditsScene';
import OptionsScene from './scenes/OptionsScene';
import PreloaderScene from './scenes/preloaderScene';
import TitleScene from './scenes/TitleScene';
import LoginScene from './scenes/LoginScene';
import BattleScene from './scenes/BattleScene';
import GameUIScene from './scenes/gameUIScene';
import GameOverScene from './scenes/GameOverScene';
import ScoreScene from './scenes/scoreScene';
import LeaderBoardScene from './scenes/LeaderBoardScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Login', LoginScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Battle', BattleScene);
    this.scene.add('gameUI', GameUIScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('LeaderBoard', LeaderBoardScene);
    this.scene.add('Score', ScoreScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();