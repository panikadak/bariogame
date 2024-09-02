/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.BestScore = function()
{
	PIXI.DisplayObjectContainer.call( this );
    // Tüm işlevsellik kaldırıldı
}

GAME.BestScore.constructor = PIXI.Score;
GAME.BestScore.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.BestScore.prototype.setScore = function(score)
{
	// İşlev boşaltıldı
}

GAME.BestScore.prototype.jump = function()
{
	// İşlev boşaltıldı
}

GAME.BestScore.prototype.update = function()
{
	// İşlev boşaltıldı
}