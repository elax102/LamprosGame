
var GameState = function() {};

GameState.prototype = {
	preload: function(){
		game.load.image('player-blob', 'assets/player/blob.png');
	},

	create: function() {
		//setup game world
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.gravity.y = 350;

		//create player
		this.player = game.add.sprite(200, 200, 'player-blob');
		game.physics.enable(this.player);
	}
};
