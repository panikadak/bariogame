GUI = function() { 
    Phaser.Sprite.call(this , game, 0, 0, '');

    this.anchor.setTo(0.5);

    this.scoreBg = game.add.image(20, 20, 'atlas1', 'score_bg');
    game.groups.gui.add(this.scoreBg);

    this.scoreText = game.add.text(165, 36, '0');
    game.groups.gui.add(this.scoreText);
    this.scoreText.fill = '#FFFFFF';
    this.scoreText.anchor.x = 1;
    this.scoreText.align = 'right';
    this.scoreText.fontSize = 20;
    this.scoreText.font = 'Press Start 2P';
    this.scoreText.fontFamily = '"Press Start 2P", sans-serif';
    this.score = 0;
    this.scoreToShow = 0;

    this.hearts = [];

    for (var i = 0; i < 5; i++) {
        var _heart = game.add.sprite(26 + 53 * i, 74, 'atlas1', 'heart_0');
        game.groups.gui.add(_heart);
        this.hearts.push(_heart);
    }
    game.add.existing(this);
    game.groups.gui.add(this);
}

GUI.prototype = Object.create(Phaser.Sprite.prototype);
GUI.prototype.constructor = GUI;

GUI.prototype.addScore = function(_value) {
    if (!game.plane.alive) return;
    game.add.tween(this).to({scoreToShow: this.score + _value }, 200, 'Linear', true).onComplete.add(function() {this.scoreToShow = this.score}, this)
    this.score += _value;
}

GUI.prototype.removeHeart = function() {
    var _heart = this.hearts.pop();
    _heart.destroy();
}

GUI.prototype.update = function() {
    this.scoreText.text = Math.floor(this.scoreToShow);
}
