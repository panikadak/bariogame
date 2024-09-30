PU = function(_x, _y) {
    Phaser.Sprite.call(this, game, _x, _y, 'atlas1', 'pu_0');
    this.anchor.setTo(0.5);
    
    this.animations.add('idle', Phaser.Animation.generateFrameNames('pu_', 0, 9));
    this.animations.play('idle', 15, true);
     
    this.speed = 5;
    
    game.add.existing(this);
    game.groups.powerups.add(this);
}

PU.prototype = Object.create(Phaser.Sprite.prototype);
PU.prototype.constructor = PU;

PU.prototype.update = function() {
    this.x -= this.speed;
    if (this.x < -this.width / 2) this.destroy();
}