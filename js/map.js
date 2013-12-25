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
		stage.startY = 0;
		var tiles = 
"11000000000000000000" +
"01111111111111110000" +
"00000000000000010000" +
"00000000000000010000" +
"00000011111111110000" +
"00000010000000000000" +
"00000010000000000000" +
"00000010000000000000" +
"00000010000000000000" +
"00000010000000000000" +
"01111110000000000111" +
"01000000000000000100" +
"01000000000000000100" +
"01000000000001111100" +
"01000000000001000000" +
"01000000000001000000" +
"01000000000001000000" +
"01111111111111000000" +
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

	this.IsValidTile = function(x, y)
	{
		if(0 <= x && x < mapWidth
		 && 0 <= y && y < mapHeight)
		{
			return true;
		}
		else
		{
			return false;
		}
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

	this.Init = function()
	{
		for(var i in this.enemies)
		{
			this.enemies[i].SetPos(this.startX, this.startY);
		}
	};
};