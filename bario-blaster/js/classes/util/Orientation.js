function Orientation(orientation) {
    this.orientation = orientation;
    this.graphics = false;
    this.imagePhone = false;
    this.title = false;
    this.subtitle = false;
    
    game.scale.onOrientationChange.add(this.checkOrientation, this);
}

Orientation.prototype.checkOrientation = function() {
    // exit if on desktop
    if (game.device.desktop) return;
    
    if  (((game.scale.isLandscape) && (this.orientation === 'portrait')) || ((game.scale.isPortrait) && (this.orientation === 'landscape'))) {
        this.graphics = game.add.graphics(0, 0);
        this.graphics.beginFill(0x1b2639, 1);
        this.graphics.drawRect(0, 0, game.world.width, game.world.height);
        this.graphics.endFill();

        this.imagePhone = game.add.image(game.world.centerX, game.world.centerY - 150, 'preload', 'phone');
        this.imagePhone.anchor.setTo(0.5);
        if (this.orientation === 'landscape') this.imagePhone.angle = 90;

        this.title = game.add.text(game.world.centerX, game.world.centerY + 100, 'Please rotate your device');
        this.title.font = 'Verdana';
        this.title.fontSize = 40;
        this.title.fill = '#a4a8b0';
        this.title.fontWeight = 'bold';
        this.title.align = 'center';
        this.title.anchor.x = 0.5;

        this.subtitle = game.add.text(game.world.centerX, game.world.centerY + 180, 'This game is designed for \n' + this.orientation + ' mode');
        this.subtitle.font = 'Verdana';
        this.subtitle.fontSize = 30;
        this.subtitle.fill = '#a4a8b0';
        this.subtitle.align = 'center';
        this.subtitle.anchor.x = 0.5;            
            
        game.paused = true;
    } else {
        if(!game.paused) return;
        game.paused = false;            

        this.graphics.destroy();
        this.imagePhone.destroy();
        this.title.destroy();
        this.subtitle.destroy();        
    }
}