function CTachometer(iX, iY){
    
    var _oTachometer;
    var _oSpeed;
    
    var _pStartPos;
    
    this._init = function(iX, iY){
        _pStartPos = {x: iX, y: iY};
        
        _oTachometer = new createjs.Container();
        _oTachometer.x = _pStartPos.x;
        _oTachometer.y = _pStartPos.y;
        s_oStage.addChild(_oTachometer);
        
        var oSprite = s_oSpriteLibrary.getSprite('tachometer');
        var oTachometer = createBitmap(oSprite);
        oTachometer.regX = oSprite.width/2;
        oTachometer.regY = oSprite.height;
        _oTachometer.addChild(oTachometer);

        
        var oSpeedText = new CTLText(_oTachometer, 
                    -70, -115, 140, 40, 
                    40, "center", "#ffcc00", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_SPEED_INDICATOR,
                    true, true, false,
                    false );
                    


        var oBackSpeed = new CTLText(_oTachometer, 
                    -45, -73, 90, 60, 
                    60, "right", "#222222", SECONDARY_FONT, 1,
                    0, 0,
                    "888",
                    true, true, false,
                    false );


        _oSpeed = new CTLText(_oTachometer, 
                    -45, -73, 90, 60, 
                    60, "right", "#fff", SECONDARY_FONT, 1,
                    0, 0,
                    "0",
                    true, true, false,
                    false );

        
    };
    
    this.setSpeedIndicator = function(iValue){
        _oSpeed.refreshText(Math.floor(iValue));
    };
    
    this.updateOffset = function(iXPos, iYPos){
        _oTachometer.x = _pStartPos.x + iXPos;
        _oTachometer.y = _pStartPos.y - iYPos;
    };
    
    this._init(iX, iY);
}


