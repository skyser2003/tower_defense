var tileWidth = 50;
var tileHeight = 50;
var mapWidth = 20;
var mapHeight = 20;

var mapWidthPixel = tileWidth * mapWidth;
var mapHeightPixel = tileHeight * mapHeight;

var ctx;
var map;
var game;
var img;
var imgTile;
var imgStartTile;
$(document).ready(function()
{
	$("img").hide();
	//$("#tile").hide();
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
		img = $("#bg")[0];
		imgTile = $("#tile")[0];
		imgStartTile = $("#startTile")[0];
		map = new Map;
		map.Init();

		this.stage = map.stages[this.stageLevel];
		map.currentStage = this.stage;
		this.stage.Init();

		$("#canvas").mousedown(function(obj)
		{
			var x = obj.offsetX;
			var y = obj.offsetY;

			var tileX = Math.floor(x / tileWidth);
			var tileY = Math.floor(y / tileHeight);

			map.AddTower(tileX, tileY);
		});
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
		for(var i in stage.towers)
		{
			var tower = stage.towers[i];
			tower.Update(1000 / 60);
		}

		this.Draw();
	};
	this.Draw = function()
	{
		var stage = this.stage;
		drawBackground();
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
					//drawWall(i, j);
				}
			}
		}

		drawStartTile(stage.startX, stage.startY);

		for(var i in stage.enemies)
		{
			drawEnemy(stage.enemies[i].pixelX, stage.enemies[i].pixelY);
		}
		for(var i in stage.towers)
		{
			drawTower(stage.towers[i].x, stage.towers[i].y);
		}
	}
};

function drawBackground()
{
	ctx.drawImage(img, 0,0, 1000, 1000);
}

function drawTower(x, y)
{
	ctx.fillStyle="#FF00FF";
	ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}
function drawStartTile(x, y)
{
	ctx.drawImage(imgStartTile, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
	//ctx.fillStyle="#0000FF";	
	//ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}
function drawWall(x, y)
{
	ctx.fillStyle="#000000";
	ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}
function drawEmptyTile(x, y)
{
	ctx.drawImage(imgTile, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
	//ctx.fillStyle="#FF0000";
	//ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}

function drawEnemy(x, y)
{
	ctx.fillStyle="#00FFFF";
	ctx.fillRect(x, y, tileWidth, tileHeight);
}