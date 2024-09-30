BirdSpawner = function() {
    Phaser.Sprite.call(this , game, 0, 0, '');

    // scout
    game.time.events.add(300, this.spawnScout, this);
    
    // bee
    game.time.events.add(3000, this.spawnBee, this);
    
    // sine
    game.time.events.add(6000, this.spawnSine, this);
    
    // snowy
    game.time.events.add(9000, this.spawnSnowy, this);
    
    // assault red
    game.time.events.add(12000, this.spawnAssaultRed, this);
    
    // dizzu
    game.time.events.add(15000, this.spawnDizzy, this);
    
    // coins
    game.time.events.add(10000, this.spawnCoin, this);
    
    // powerup
    game.time.events.add(10000, this.spawnPowerup, this)
    
    game.add.existing(this);
}

BirdSpawner.prototype = Object.create(Phaser.Sprite.prototype);
BirdSpawner.prototype.constructor = BirdSpawner;

BirdSpawner.prototype.spawnScout = function() {
    new Scout(1400, irandom_range(100, game.world.height - 100));
    game.time.events.add(2000, this.spawnScout, this);
}

BirdSpawner.prototype.spawnBee = function() {
    new Bee(1400, game.plane.y);
    game.time.events.add(3000, this.spawnBee, this);
}

BirdSpawner.prototype.spawnSine = function() {
    var _yy = irandom_range(300, game.world.height - 300);
    for (var i = 0; i < 5; i++) {
        game.time.events.add(i * 200 + 100, function(){
            new Sine(1400, _yy); 
        }, this)
    }
    game.time.events.add(6000, this.spawnSine, this);
}

BirdSpawner.prototype.spawnSnowy = function() {
    new Snowy(1400, irandom_range(400, game.world.height - 100));
        game.time.events.add(9000, this.spawnSnowy, this);
}

BirdSpawner.prototype.spawnAssaultRed = function() {
    for (var i = 0; i < 5; i++) {
        game.time.events.add(i * 700 + 100, function(){
            new AssaultRed(1400, -50); 
        }, this)
    }
    game.time.events.add(12000, this.spawnAssaultRed, this);
}

BirdSpawner.prototype.spawnDizzy = function() {
    new Dizzy(1400, irandom_range(400, game.world.height - 300));
        game.time.events.add(15000, this.spawnDizzy, this);
}

BirdSpawner.prototype.spawnCoin = function() {
    var _yy = irandom_range(200, game.world.height - 200);
    for (var i = 0; i < 5; i++) {
        game.time.events.add(i * 300 + 100, function(){
            new Coin(1400, _yy); 
        }, this)
    }
    game.time.events.add(10000, this.spawnCoin, this);   
}

BirdSpawner.prototype.spawnPowerup = function() {
    new Powerup(1000, 1000);
        game.time.events.add(20000, this.spawnPowerup, this);
}