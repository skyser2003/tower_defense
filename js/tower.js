var Tower = function()
{
	this.x = 0;
	this.y = 0;

	this.attack = 10000;
	this.as = 1000;
	this.radius = 5;
	this.cooltime = 0;

	this.Init = function()
	{
		this.cooltime = this.as;
	};

	this.Update = function(ms)
	{
		if(this.cooltime > 0 )
		{
			this.cooltime -= ms;
		}
		
		if(this.cooltime <= 0)
		{
			for(var i in map.currentStage.enemies)
			{
				var enemy = map.currentStage.enemies[i];
				if(this.IsInRange(enemy) == true)
				{
					this.Attack(enemy);
					this.cooltime = this.as;

					break;
				}
			}
		}
	};

	this.IsInRange = function(enemy)
	{
		var pixelX = enemy.pixelX;
		var pixelY = enemy.pixelY;

		var thisPixelX = this.x * tileWidth;
		var thisPixelY = this.y * tileHeight;

		if(Math.pow(thisPixelX - pixelX, 2) + Math.pow(thisPixelY - pixelY, 2)
			<= Math.pow(this.radius * tileWidth, 2))
		{
			return true;
		}
		else
		{
			return false;
		}
	};

	this.Attack = function(enemy)
	{
		var damage = this.attack - enemy.defense;
		if(damage <= 0)
			damage = 1;

		enemy.hp -= damage;

		if(enemy.hp <= 0)
		{
			enemy.Die();
		}
	};
};