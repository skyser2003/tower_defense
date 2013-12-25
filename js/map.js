var TILE_WALL = "0";
var TILE_EMPTY = "1";

var Map = function()
{
	this.stages = [];

	this.Init = function()
	{
		var stage;

		// Stage 1
		stage = new Stage;
		stage.level = 0;
		stage.startX = 0;
		stage.startY = 10;
		var tiles = 
"00000000000000000000" +
"00000000000000000000" +
"00000000000000000000" +
"00000000000000000000" +
"00000011111100000000" +
"00000010000100000000" +
"00000010000100000000" +
"00000010000100000000" +
"00000010000100000000" +
"00000010000100000000" +
"11111110000100000111" +
"00000000000100000100" +
"00000000000100000100" +
"00000000000100000100" +
"00000000000100000100" +
"00000000000100000100" +
"00000000000100000100" +
"00000000000111111100" +
"00000000000000000000" +
"00000000000000000000";
		for(var i=0; i<mapWidth; ++i)
		{
			stage.tiles[i] = [];

			for(var j=0; j<mapHeight; ++j)
			{
				stage.tiles[i][j] = tiles[j * mapWidth + i];
			}
		}

		stage.enemies = [
			new Enemy(1.5, 1, 100),
			new Enemy(1.5, 1, 101),
			new Enemy(1.5, 1, 102),
			new Enemy(1.5, 1, 103),
			new Enemy(1.5, 1, 104),
			new Enemy(1.5, 1, 105),
			new Enemy(1.5, 1, 106),
			new Enemy(1.5, 1, 107),
			new Enemy(1.5, 1, 108),
			new Enemy(1.5, 1, 109),
			new Enemy(1.5, 1, 110),
		];

		this.stages.push(stage)
	};
}

var Stage = function()
{
	this.level = 0;
	this.startX = 0;
	this.startY = 0;

	this.tiles = [];
	this.enemies = [];
	this.towers = [];
};