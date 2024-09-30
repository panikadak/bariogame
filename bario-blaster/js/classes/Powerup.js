Powerup = function(_x, _y) {
    Phaser.Sprite.call(this, game, _x, _y, 'atlas1', 'powerup_0');
    this.anchor.setTo(0.5);
    
    this.animations.add('idle', Phaser.Animation.generateFrameNames('powerup_', 0, 1));
    this.animations.play('idle', 5, true);
     
    this.speed = 2;
    this.health = 10;
    this.value = 100;
    
    game.add.existing(this);
    game.groups.birds.add(this);
}

Powerup.prototype = Object.create(Phaser.Sprite.prototype);
Powerup.prototype.constructor = Powerup;

Powerup.prototype.update = function() {
    this.y -= this.speed;
    
    if (this.y < -this.height / 2) {
        this.destroy();
    }
}

Powerup.prototype.getHit = function() {
    this.health--;
    this.flash();
    if (this.health <= 0) {
        game.gui.addScore(this.value);
        new PU(this.x, this.y);
        this.destroy();
        
        var _exp = game.add.sprite(this.x - 20, this.y, 'atlas1', 'exp_0');
        _exp.anchor.setTo(0.5);
        
        _exp.animations.add('effect', Phaser.Animation.generateFrameNames('exp_', 0, 9));
        _exp.animations.play('effect', 35, false, true);
        
        game.audio.playSound('sndExplosion');        
    }
}

Powerup.prototype.flash = function() {
    if (this.tint != 16777215) return;
    this.tint = 0xff0000;
    game.time.events.add(100, this.removeFlash, this);
}

Powerup.prototype.removeFlash = function() {
    if (!this) return;
    this.tint = 16777215;
}