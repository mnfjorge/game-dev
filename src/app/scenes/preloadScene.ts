import { Scene } from 'phaser'

export class PreloadScene extends Scene {
  constructor() {
    super({
      key: 'PreloadScene'
    })
  }

  update() {
    this.game.scene.start('GameScene')
  }
}