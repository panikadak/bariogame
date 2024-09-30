Plane = function() {
    Phaser.Sprite.call(this, game, 200, game.world.height / 2, 'atlas1', 'plane_idle_0');
    this.anchor.setTo(0.5);
    
    // animations
    this.animations.add('idle', Phaser.Animation.generateFrameNames('plane_idle_', 0, 1));
    this.animations.add('fire', Phaser.Animation.generateFrameNames('plane_fire_', 0, 4));
    this.animations.add('dead', Phaser.Animation.generateFrameNames('plane_dead_', 0, 0));
    //this.animations.play('dead', 35, true);
    
    // stats
    this.speed = 6;
    this.firing = false;
    this.reloading = false;
    this.fireRate = 150;
    this.health = 3;
    this.invincible = false;
    this.invincibleTween = false;
    this.alive = true;
    
    game.input.maxPointers = 1;
    
    // init controls
    if (game.device.desktop) {
        this.arrowUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.arrowDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.keyFire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    } else {
        this.iconUp = game.add.sprite(50, game.world.height - 160, 'atlas1', 'icon_up');
        this.iconUp.alpha = 0.3;
        this.iconUp.inputEnabled = true;
        game.groups.gui.add(this.iconUp);

        this.iconDown = game.add.sprite(game.world.width - 178, game.world.height - 160, 'atlas1', 'icon_down');
        this.iconDown.alpha = 0.3;
        this.iconDown.inputEnabled = true;    
        game.groups.gui.add(this.iconDown);
    }    
    
    // powerups
    this.powerups = {
        'tripleFire': false,
        'doubleRate': false
    }
    
    game.add.existing(this);
    game.groups.plane.add(this);
}

Plane.prototype = Object.create(Phaser.Sprite.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.update = function() {
    if (!this.alive) return;
    this.bounds = this.getBounds();
    
    if (!game.device.desktop) {
        var _moveUp = 0;
        var _moveDown = 0;
        if (game.input.activePointer.isDown && this.iconUp.input.checkPointerOver(game.input.activePointer)) {
            var _moveUp = -1;
        }
        if (game.input.activePointer.isDown && this.iconDown.input.checkPointerOver(game.input.activePointer)) {
            var _moveDown = 1;
        }
        var _vsp = (_moveUp + _moveDown) * this.speed;
        this.y += _vsp;
        this.y = Phaser.Math.clamp(this.y, this.height / 2, game.world.height - this.height / 2);    
    } else {
        var _moveUp = (this.arrowUp.isDown) ? -1 : 0;
        var _moveDown = (this.arrowDown.isDown) ? 1 : 0;
        var _vsp = (_moveUp + _moveDown) * this.speed;
        this.y += _vsp;
        this.y = Phaser.Math.clamp(this.y, this.height / 2, game.world.height - this.height / 2);
    }    
    
    // fire controls
    if (game.device.desktop) {
        if (this.keyFire.isDown) {
            this.firing = true;
            this.animationSet('fire', 40);
            this.fire();
        } else {
            this.firing = false;
            this.animationSet('idle', 15);
        }
    } else {
        this.firing = true;
        this.animationSet('fire', 40);
        this.fire();        
    }
    
    // check for collision vs birds
    for (var i = 0; i < game.groups.birds.children.length; i++) {
        var _enemy = game.groups.birds.children[i];
        if (this.checkOverlap(_enemy)) this.getHit();
    }
    
    //check for collision vs coins
    for (var i = 0; i < game.groups.coins.children.length; i++) {
        var _coin = game.groups.coins.children[i]; 
        if (this.checkOverlap(_coin)) {
            _coin.destroy();
            game.gui.addScore(50);
            game.audio.playSound('sndCoin');
        }
    }
    
    // check for collision vs powerups
    for (var i = 0; i < game.groups.powerups.children.length; i++) {
        var _powerup = game.groups.powerups.children[i];
        if (this.checkOverlap(_powerup)) {
            this.powerups.tripleFire = true;
            this.powerups.doubleRate = true;
            game.time.events.add(5000, function() {
                this.powerups.tripleFire = false;
                this.powerups.doubleRate = false;
            }, this)
            _powerup.destroy(); 
            game.audio.playSound('sndPowerup');
        }
    }    
}

Plane.prototype.animationSet = function(_animationName, _fps) {
    if (this.animations.name === _animationName) return;
    this.animations.play(_animationName, _fps, true);
}

Plane.prototype.fire = function() {
    if (!this.alive) return;
    if ((!this.firing) || (this.reloading)) return;
    
    new Bullet(this.x + 70, this.y + 28);
    if (this.powerups.tripleFire) {
        new Bullet(this.x + 70, this.y + 28, -1);
        new Bullet(this.x + 70, this.y + 28, 1);
    }
    
    this.reloading = true;
    var _rate = (this.powerups.doubleRate) ? this.fireRate / 2 : this.fireRate;
    game.time.events.add(_rate, this.reload, this);
    
    game.audio.playSound('sndFire');
}

Plane.prototype.reload = function() {
    this.reloading = false;
}

Plane.prototype.getHit = function() {
    if ((this.invincible) || (!this.alive)) return;
    this.health--;
    
    var _exp = game.add.sprite(this.x - 20, this.y, 'atlas1', 'exp_0');
    _exp.anchor.setTo(0.5);

    _exp.animations.add('effect', Phaser.Animation.generateFrameNames('exp_', 0, 9));
    _exp.animations.play('effect', 35, false, true);
 
    game.emitter.maxParticleSpeed.setTo(100, 100);

    game.audio.playSound('sndExplosion');    
    
    game.gui.removeHeart();
    if (this.health <= 0) {
        this.die();
    } else {
        this.invincible = true;
        game.add.tween(this).to({alpha: 0}, 300, 'Linear', true, 0, 7)
            .yoyo(true)
            .onComplete.add(function() {this.invincible = false;}, this);
    }
}

Plane.prototype.die = function() {
    this.alive = false;
    this.animationSet('dead');
    game.add.tween(this).to({y: 2000}, 3000, 'Linear', true);
    new GameOver();
}

Plane.prototype.checkOverlap = function(_enemy) {
    var _enemyBounds = _enemy.getBounds();
    return Phaser.Rectangle.intersects(this.bounds, _enemyBounds);
}