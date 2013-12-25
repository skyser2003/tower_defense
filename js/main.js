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
});

var Game = function()
{
	this.stage = 0;
	this.mapJSON = null;

	this.Init = function()
	{
		ctx = document.getElementById("canvas").getContext('2d');
		map = new Map;
		map.Init();

		var stage = map.stages[0];
		console.log(stage.tiles);

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
	};

	this.Run = function()
	{

	};
	this.Update = function()
	{

	};
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
	ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}