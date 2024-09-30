var PreloadState = {
    preload: function() {
        // show logo and progress bar
        game.preloadLogo = game.add.image(game.world.width/2, game.world.height/2-100, 'preload', 'logo');
        game.preloadLogo.anchor.setTo(0.5);
        
        game.preloadBar = game.add.sprite(game.world.width/2, game.world.height/2+100, 'preload', 'progress');
        game.preloadBar.x -= game.preloadBar.width/2;
        game.load.setPreloadSprite(game.preloadBar);
        
        // load assets 
       game.load.atlasJSONHash(
            'atlas1',
            'assets/images/atlas1.png',
            'assets/images/atlas1.json'           
        );        
        
        game.load.image('gameover_bg', 'assets/images/gameover_bg.png');
        game.load.image('main_menu_bg', 'assets/images/main_menu_bg.png');
        
        game.load.audio('sndFire', ['assets/audio/machinegun.mp3', 'assets/audio/machinegun.ogg']);
        game.load.audio('sndHit', ['assets/audio/hit.mp3', 'assets/audio/hit.ogg']);
        game.load.audio('sndExplosion', ['assets/audio/explosion.mp3', 'assets/audio/explosion.ogg']);
        game.load.audio('sndCoin', ['assets/audio/coin.mp3', 'assets/audio/coin.ogg']);
        game.load.audio('sndPowerup', ['assets/audio/powerup.mp3', 'assets/audio/powerup.ogg']);
        
        game.load.audio('musicOst', ['assets/audio/ost.mp3', 'assets/audio/ost.ogg']);
    },
    
    create: function() {
        game.audio.addSound('sndFire', true);
        game.audio.addSound('sndHit', true);
        game.audio.addSound('sndExplosion', true);
        game.audio.addSound('sndCoin', true);
        game.audio.addSound('sndPowerup', true);
        
        game.audio.addMusic('musicOst');
        game.audio.playMusic('musicOst');
        
        // start game
        game.state.start('MainMenuState');
    }
};