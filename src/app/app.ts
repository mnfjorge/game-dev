import * as Phaser from 'phaser'
import { PreloadScene } from './scenes/preloadScene';
import { GameScene } from './scenes/gameScene';

class Game {
  game: Phaser.Game

  constructor() {
    this.game = new Phaser.Game({
      title: 'Game Dev',
      version: '0.1',
      width: 800,
      height: 600,
      type: Phaser.AUTO,
      parent: 'content',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: [
        PreloadScene, GameScene
      ]
    })
  }
}

window.addEventListener("load", () => {
  var game = new Game();
});