Bullet = function(_x, _y, _angle) {
    Phaser.Sprite.call(this , game, _x, _y, 'atlas1', 'bullet');
    this.anchor.setTo(0.5);
    
    if (_angle === undefined) {
        var _yy = '0';
    } else {
        var _yy = String(_angle * 300);
        this.angle += _angle * 15;
    }
    
    game.add.tween(this).to({x: game.world.width + this.width / 2, y: _yy}, 500, 'Linear', true).onComplete.add(function() {this.destroy()}, this);
    
    game.add.existing(this);
    game.groups.bullets.add(this);
}

Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
    this.bounds = this.getBounds();
    for (var i = 0; i < game.groups.birds.children.length; i++) {
        var _enemy = game.groups.birds.children[i];
        if (this.checkOverlap(_enemy)) {
            this.toKill = true;
            _enemy.getHit();
            game.audio.playSound('sndHit');
        }
    }
    
    if (this.toKill) this.destroy();
}

Bullet.prototype.checkOverlap = function(_enemy) {
    var _enemyBounds = _enemy.getBounds();
    return Phaser.Rectangle.intersects(this.bounds, _enemyBounds);
}