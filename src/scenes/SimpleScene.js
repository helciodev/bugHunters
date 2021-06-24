export class SimpleScene extends Phaser.Scene {
  
  load() {

  }
  create() {
    this.add.text(100, 100,'Hello, world', {fill: '#0f0'} )
  }

}