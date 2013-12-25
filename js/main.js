var tileWidth = 50;
var tileHeight = 50;
var mapWidth = 20;
var mapHeight = 20;

var mapWidthPixel = tileWidth * mapWidth;
var mapHeightPixel = tileHeight * mapHeight;

var ctx;
var map;
var game;

$(document).ready(function()
{
	game = new Game;
	game.Init();
	game.Run();
});

var Game = function()
{
	this.stageLevel = 0;
	this.stage = null;

	this.Init = function()
	{
		ctx = document.getElementById("canvas").getContext('2d');
		map = new Map;
		map.Init();

		this.stage = map.stages[this.stageLevel];
		this.stage.Init();
	};

	this.Run = function()
	{
		var game = this;
		setInterval("game.Update()", 1000 / 60);
	};
	this.Update = function()
	{
		var stage = this.stage;
		for(var i in stage.enemies)
		{
			var enemy = stage.enemies[i];
			enemy.Update(1000 / 60);
		}

		this.Draw();
	};
	this.Draw = function()
	{
		var stage = this.stage;

		for(var i=0; i<mapWidth; ++i)
		{
			for(var j=0; j<mapHeight; ++j)
			{
				if(stage.tiles[i][j] == TILE_EMPTY)
				{
					drawEmptyTile(i, j);
				}
				else if(stage.tiles[i][j] == TILE_WALL)
				{
					drawWall(i, j);
				}
			}
		}

		drawStartTile(stage.startX, stage.startY);

		for(var i in stage.enemies)
		{
			drawEnemy(stage.enemies[i].pixelX, stage.enemies[i].pixelY);
		}
	}
};

function drawTower(x, y)
{
	ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}
function drawStartTile(x, y)
{
	ctx.fillStyle="#0000FF";
	ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}
function drawWall(x, y)
{
	ctx.fillStyle="#000000";
	ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}
function drawEmptyTile(x, y)
{
	ctx.fillStyle="#FF0000";
	ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}

function drawEnemy(x, y)
{
	ctx.fillStyle="#00FFFF";
	ctx.fillRect(x, y, tileWidth, tileHeight);
}