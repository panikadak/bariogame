var Phaser = Phaser || {};
var gameWidth = 1280;
var gameHeight = 720;

var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS);
game.settings = {
    'lockOrientation': true, // should we prevent a player from playing using incorrect orientation?
    'displayOrientation': 'landscape', // portrait, landscape
    'storagePrefix': 'bow6_' // prefix for local storage items
}

game.state.add('BootState', BootState);
game.state.add('PreloadState', PreloadState);
game.state.add('MainMenuState', MainMenuState);
game.state.add('GameState', GameState);

game.state.start('BootState'); 

// inject js
addJS('js/classes/util/Orientation.js');
addJS('js/classes/util/Storage.js');
addJS('js/classes/util/AudioController.js');

addJS('js/classes/Snail.js');
addJS('js/classes/Bullet.js');
addJS('js/classes/Scout.js');
addJS('js/classes/Sine.js');
addJS('js/classes/Bee.js');
addJS('js/classes/Snowy.js');
addJS('js/classes/BirdSpawner.js');
addJS('js/classes/AssaultRed.js');
addJS('js/classes/Dizzy.js');
addJS('js/classes/Coin.js');
addJS('js/classes/GUI.js');
addJS('js/classes/GameOver.js');
addJS('js/classes/Powerup.js');
addJS('js/classes/PU.js');