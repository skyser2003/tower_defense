var UP = {x : 0, y : -1};
var DOWN = {x : 0, y : 1};
var LEFT = {x : -1, y : 0};
var RIGHT = {x : 1, y : 0};

var Enemy = function(moveSpeed, defense, hp)
{
	this.x = 0;
	this.y = 0;
	this.pixelX = 0;
	this.pixelY = 0;

	this.moveSpeed = moveSpeed;
	this.defense = defense;
	this.hp = hp;
	this.direction = RIGHT;
	this.map = map;

	this.SetPos = function(x, y)
	{
		this.x = x;
		this.y = y;
		this.pixelX = x * tileWidth;
		this.pixelY = y * tileHeight;
	};
	this.SetPixelPos = function(pixelX, pixelY)
	{
		this.pixelX = pixelX;
		this.pixelY = pixelY;

		this.x = Math.floor(this.pixelX / tileWidth);
		this.y = Math.floor(this.pixelY / tileHeight);
	}
	this.Die = function()
	{
		var index = this.map.currentStage.enemies.indexOf(this);
		this.map.currentStage.enemies.splice(index, 1);
		console.log("DEAD!");
	}
	this.Update = function(ms)
	{
		var direction = this.direction;
		var dx = ms / 1000 * this.moveSpeed * tileWidth * direction.x;
		var dy = ms / 1000 * this.moveSpeed * tileHeight * direction.y;

		this.SetPixelPos(this.pixelX + dx, this.pixelY + dy);

		var distance = Math.pow(this.x * tileWidth - this.pixelX, 2) +
		Math.pow(this.y * tileHeight - this.pixelY, 2);
		var isInCircle = distance <= Math.pow(tileWidth / 10, 2);

		if(isInCircle)
		{
			this.GoNextTile();
		}
	};
	this.GoNextTile = function()
	{
		var direction = this.direction;
		var tiles = this.map.currentStage.tiles;
		var nextX = this.x + direction.x;
		var nextY = this.y + direction.y;

		if(this.map.IsValidTile(nextX, nextY) == false)
		{
			return;
		}

		var nextTile = tiles[this.x + direction.x][this.y + direction.y];
		if(nextTile == TILE_WALL)
		{
			var leftX = this.x - direction.y;
			var leftY = this.y + direction.x;

			var rightX = this.x + direction.y;
			var rightY = this.y - direction.x;

			if(this.map.IsValidRoad(leftX, leftY))
			{
				this.direction =
				{
					x : leftX - this.x,
					y : leftY - this.y
				};

				this.x = leftX;
				this.y = leftY;
			}
			else if(this.map.IsValidRoad(rightX, rightY))
			{
				this.direction =
				{
					x : rightX - this.x,
					y : rightY - this.y
				};

				this.x = rightX;
				this.y = rightY;
			}
		}
		else if(nextTile = TILE_EMPTY)
		{
			this.x += direction.x;
			this.y += direction.y;
		}
	};
};