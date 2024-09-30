function parse(val) {
  var result = undefined;
  var tmp = [];
  location.search.substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

GameOver = function() {
    Phaser.Sprite.call(this, game, game.world.centerX, game.world.height + 400, 'gameover_bg');
    this.anchor.setTo(0.5);
    
    game.add.tween(this).to({y: game.world.centerY}, 500, 'Bounce', true).onComplete.add(this.showScore, this);
    
    this.highscore = game.storage.getItem('highscore', 'int');
    this.highscore = (game.gui.score > this.highscore) ? game.gui.score : this.highscore;
    game.storage.setItem('highscore', this.highscore);
    
    game.add.existing(this);
    game.groups.gui.add(this);
}

GameOver.prototype = Object.create(Phaser.Sprite.prototype);
GameOver.prototype.constructor = GameOver;

GameOver.prototype.showScore = function() {
    this.scoreText = game.add.text(game.world.centerX, game.world.centerY - 35, game.gui.score);
    game.groups.gui.add(this.scoreText);
    this.scoreText.fill = '#FF0000';
    this.scoreText.anchor.x = 0.5;
    this.scoreText.align = 'center';
    this.scoreText.font = 'Press Start 2P';
    this.scoreText.fontSize = 50;

    this.highScoreText = game.add.text(game.world.centerX, game.world.centerY + 86, this.highscore);
    game.groups.gui.add(this.highScoreText);
    this.highScoreText.fill = '#c06e3b';
    this.highScoreText.anchor.x = 0.5;
    this.highScoreText.align = 'center';
    this.highScoreText.font = 'Press Start 2P';
    this.highScoreText.fontSize = 40;
    this.highScoreText.fontWeight = 'bold';
    var uid = parse("uid");
    var msgid = parse("msgid");
    var chatid = parse("chatid");
    var iid = parse("iid");

    if (uid && msgid && chatid) {
      $.get(`/setscore/uid/${uid}/chat/${chatid}/msg/${msgid}/score/${game.gui.score}`);
    } else if (uid && iid) {
      $.get(`/setscore/uid/${uid}/iid/${iid}/score/${game.gui.score}`);
    }
    
    this.buttonReplay = game.add.button(game.world.centerX, game.world.centerY + 210, 'atlas1', function() {game.state.start('GameState')}, this, 'button_restart', 'button_restart', 'button_restart');
    this.buttonReplay.anchor.setTo(0.5);
}