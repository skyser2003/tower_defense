var UP = {x : 0, y : -1};
var DOWN = {x : 0, y : 1};
var LEFT = {x : -1, y : 0};
var RIGHT = {x : 1, y : 0};

var Enemy = function(moveSpeed, defense, hp)
{
	this.x = 0;
	this.y = 0;

	this.moveSpeed = 0;
	this.defense = 1;
	this.hp = 100;
	this.direction = RIGHT;
	this.map = null;

	this.Update = function()
	{
		var tiles = map.tiles;
		var nextTile = tiles[this.x + direction.x][this.y + direction.y];
		if(nextTile == TILE_WALL)
		{
			var leftTile;
			var rightTile;
		}
		else if(nextTile = TILE_EMPTY)
		{
			this.x += direction.x;
			this.y += direction.y;
		}
	};
};