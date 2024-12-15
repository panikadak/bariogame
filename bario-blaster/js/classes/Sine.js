Sine = function(_x, _y) {
    Phaser.Sprite.call(this, game, _x, _y, 'atlas1', 'sine_0');
    this.anchor.setTo(0.5);
     
    this.animations.add('idle', Phaser.Animation.generateFrameNames('sine_', 0, 7));
    this.animations.play('idle', 15, true);
    
    this.speed = 9;
    this.health = 3;
    this.value = 15;
    
    game.add.tween(this).to({y: '100'}, 1000, 'Linear', true, 0, 7).yoyo(true);
    
    game.add.existing(this);
    game.groups.birds.add(this);
}

Sine.prototype = Object.create(Phaser.Sprite.prototype);
Sine.prototype.constructor = Sine;

Sine.prototype.update = function() {
    this.x -= this.speed;
    
    if (this.x < -this.width / 2) {
        this.destroy();
    }
}

Sine.prototype.getHit = function() {
    this.health--;
    this.flash();
    if (this.health <=0 ) {
        this.destroy();
        game.gui.addScore(this.value);
        
        var _exp = game.add.sprite(this.x - 20, this.y, 'atlas1', 'exp_0');
        _exp.anchor.setTo(0.5);
        
        _exp.animations.add('effect', Phaser.Animation.generateFrameNames('exp_', 0, 9));
        _exp.animations.play('effect', 35, false, true);
        
        game.emitter.x = this.x;
        game.emitter.y = this.y; 
        game.emitter.start(true, 1000, null, 20);
        game.emitter.minParticleSpeed.setTo(-100, -100);
        game.emitter.maxParticleSpeed.setTo(100, 100);
        
        game.audio.playSound('sndExplosion');        
    }
}

Sine.prototype.flash = function() {
    if (this.tint != 16777215) return;
    this.tint = 0xff0000;
    game.time.events.add(100, this.removeFlash, this);
}

Sine.prototype.removeFlash = function() {
    if (!this) return;
    this.tint = 16777215;
}