
var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('Menu', MenuState);
game.state.add('Game', GameState);
game.state.start('Game');
