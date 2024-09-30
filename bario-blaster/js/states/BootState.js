var BootState = {
    init: function() {
        // Responsive scaling
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        // Center the game
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        
    },
    
    preload: function() {
        game.load.atlasJSONHash(
            'preload',
            'assets/images/preload_atlas.png',
            'assets/images/preload_atlas.json'           
        );
    },
    
    create: function () {
        game.stage.backgroundColor = '#fff';
        
        // add orientation controller
        if (game.settings.lockOrientation) {
            game.orientation = new Orientation(game.settings.displayOrientation);   
            game.orientation.checkOrientation();
        }        
        
        // add storage controller
        game.storage = new Storage(game.settings.storagePrefix);
        
        // add audio controller
        game.audio = new AudioController();
        
        // start preload state
        game.state.start('PreloadState')
    }
};