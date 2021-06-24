import 'phaser';

class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', '../assets/cokecan.png');
  }

  create() {
    this.add.image(100, 200, 'cokecan');
    this.add.text(100, 100, 'Hello, world', { fill: '#0f0' });
  }
}

export default SimpleScene;