import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  dom: {
    createContainer: true,
  },
  pixelArt: true,
  physics: {
    default: 'arcade',
    acrade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};
