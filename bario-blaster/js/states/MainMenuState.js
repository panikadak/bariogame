var MainMenuState = {
    create: function () {
        game.stage.backgroundColor = '#fff';
        game.storage.initItem('highscore', 0, 'int');
        game.add.image(0, 0, 'main_menu_bg');
        game.input.onDown.addOnce(function() {game.state.start('GameState');}, this);
    },
};