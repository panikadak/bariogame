function AudioController() {
    // create sound groups
    this.sounds = {};
    this.music = {};
    
    // initialize volumes for each group
    this.volume = {
        'sounds': game.storage.initItem('volumeSound', 1, 'float'),
        'music': game.storage.initItem('volumeMusic', 0.5, 'float')
    }
}

// sounds
AudioController.prototype.addSound = function(name, allowMultiple) {
    this.sounds[name] = game.add.audio(name, this.volume.sounds);
    this.sounds[name].allowMultiple = (typeof allowMultiple === 'undefined') ? false : true;
}

AudioController.prototype.playSound = function(name) {
    this.sounds[name].play();
}

AudioController.prototype.getVolumeSounds = function() {
    return this.volume.sounds;
}

AudioController.prototype.switchVolumeSounds = function() {
    this.volume.sounds = (this.volume.sounds == 0) ? 1 : 0;
    game.storage.setItem('volumeSound', this.volume.sounds);
    
    for (var _item in this.sounds) {
        this.sounds[_item].volume = this.volume.sounds;        
    }
    
    return this.volume.sounds;
}

// music
AudioController.prototype.addMusic = function(name) {
    this.music[name] = game.add.audio(name, this.volume.music);
}

AudioController.prototype.playMusic = function(name) {
    this.music[name].loopFull();
}

AudioController.prototype.getVolumeMusic = function() {
    return this.volume.music;
}

AudioController.prototype.switchVolumeMusic = function() {
    this.volume.music = (this.volume.music == 0) ? 0.5 : 0;
    game.storage.setItem('volumeMusic', this.volume.music);
    
    for (var _item in this.music) {
        this.music[_item].volume = this.volume.music;
    }
    
    return this.volume.music;
}