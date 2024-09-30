var GameState = {
    create: function () {
        game.groups = {
            'background': game.add.group(),
            'plane': game.add.group(),
            'birds': game.add.group(),
            'coins': game.add.group(),
            'powerups': game.add.group(),
            'bullets': game.add.group(),
            'gui': game.add.group()
        }
        
        game.stage.backgroundColor = '#6196c8';
        game.bgClouds = game.add.tileSprite(0, 0, 1280, 720, 'atlas1', 'game_bg_clouds');
        game.bgMountains = game.add.tileSprite(0, 0, 1280, 720, 'atlas1', 'game_bg_mountains');
        game.groups.background.add(game.bgClouds);
        game.groups.background.add(game.bgMountains);
        
        game.plane = new Plane(); 
        new BirdSpawner();
        
        game.gui = new GUI();
        
        game.emitter = game.add.emitter(0, 0, 100);
        game.emitter.makeParticles('atlas1', 'feather');
        game.emitter.gravity = 200;
        
        game.emitter.minParticleScale = 0.3;
        game.emitter.maxParticleScale = 0.9;
        game.emitter.minParticleAlpha = 0.5;
        game.emitter.maxParticleAlpha = 1;
        
        var _icon = (game.audio.getVolumeSounds() == 0) ? 'icon_sound_off' : 'icon_sound_on';
        this.iconSound = game.add.sprite(game.world.width - 69, 40, 'atlas1', _icon);
        this.iconSound.anchor.setTo(0.5);

        this.iconSound.inputEnabled = true;
        this.iconSound.events.onInputDown.add(function(){
            var _icon = (game.audio.switchVolumeSounds() == 0) ? 'icon_sound_off' : 'icon_sound_on';
            this.iconSound.loadTexture('atlas1', _icon);
        }, this);

        var _icon = (game.audio.getVolumeMusic() == 0) ? 'icon_music_off' : 'icon_music_on';
        this.iconMusic = game.add.sprite(game.world.width - 32, 40, 'atlas1', _icon);
        this.iconMusic.anchor.setTo(0.5);    

        this.iconMusic.inputEnabled = true;
        this.iconMusic.events.onInputDown.add(function(){
            var _icon = (game.audio.switchVolumeMusic() == 0) ? 'icon_music_off' : 'icon_music_on';
            this.iconMusic.loadTexture('atlas1', _icon);
        }, this);            
    },
    
    update: function () {
        game.bgClouds.tilePosition.x -= 1;
        game.bgMountains.tilePosition.x -= 2;
    }
};
