
var MenuState = function() {};

MenuState.prototype = {
	preload: function() {
		game.load.image('logo', 'assets/phaser.png');
	},

	create: function() {
		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
	}
};
