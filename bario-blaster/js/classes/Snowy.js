Snowy = function(_x, _y) {
    Phaser.Sprite.call(this, game, _x, _y, 'atlas1', 'snowy_0');
    this.anchor.setTo(0.5);
    
    this.animations.add('idle', Phaser.Animation.generateFrameNames('snowy_', 0, 3));
    this.animations.play('idle', 15, true);
     
    this.speed = 8;
    this.health = 5;
    this.flag1 = false;
    this.flag2 = false;
    this.value = 40;
    
    game.add.existing(this);
    game.groups.birds.add(this);
}

Snowy.prototype = Object.create(Phaser.Sprite.prototype);
Snowy.prototype.constructor = Snowy;

Snowy.prototype.update = function() {    
    if ((!this.flag1) && (this.x < 300)) {
        this.flag1 = true;
        game.add.tween(this).to({x: 1200, y: '-300'}, 2000, 'Linear', true).onComplete.add(function() {
            this.flag2 = true;
        }, this);
    } 
    
    if ((!this.flag1) && (!this.flag2)) {
        this.x -= this.speed;
    }
    
    if (this.flag2) {
        this.x -= this.speed;
        if (this.x < -this.width / 2) this.destroy();
    }
}

Snowy.prototype.getHit = function() {
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

Snowy.prototype.flash = function() {
    if (this.tint != 16777215) return;
    this.tint = 0xff0000;
    game.time.events.add(100, this.removeFlash, this);
}

Snowy.prototype.removeFlash = function() {
    if (!this) return;
    this.tint = 16777215;
}