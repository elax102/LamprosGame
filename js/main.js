
var game = new Phaser.Game(1500, 800, Phaser.AUTO, '');
game.state.add('Menu', MenuState);
game.state.add('Game', GameState);
game.state.start('Game');
