let Jonah = sprites.create(assets.image`Birdie`, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(Jonah)
scene.cameraFollowSprite(Jonah)
tiles.placeOnRandomTile(Jonah, sprites.builtin.forestTiles0)
effects.confetti.endScreenEffect()
