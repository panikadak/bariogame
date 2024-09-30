Coin = function(_x, _y) {
    Phaser.Sprite.call(this, game, _x, _y, 'atlas1', 'coin_0');
    this.anchor.setTo(0.5);
    
    this.animations.add('idle', Phaser.Animation.generateFrameNames('coin_', 0, 5));
    this.animations.play('idle', 15, true);
     
    this.speed = 5;
    
    game.add.existing(this);
    game.groups.coins.add(this);
}

Coin.prototype = Object.create(Phaser.Sprite.prototype);
Coin.prototype.constructor = Coin;

Coin.prototype.update = function() {
    this.x -= this.speed;
    if (this.x < -this.width / 2) this.destroy();
}