var CAR_CENTER = 0;
var CAR_LEFT = 1;
var CAR_RIGHT = 2;

function CCar(oSprite, iOffset, iZ, iSpeed, oElementContainer){
    
    var _iOffset;
    var _iZ;
    var _iSpeed;
    var _iPercent;
    
    var _aSprite;
    
    var _oParent;
    var _oCar;
    var _oCurSprite;
    
    this._init = function(oSprite, iOffset, iZ, iSpeed, oElementContainer){
        _iOffset = iOffset;
        _iZ = iZ;
        _iSpeed = iSpeed;
        
        _aSprite = new Array();
        _aSprite[CAR_CENTER] = s_oSpriteLibrary.getSprite(oSprite+"_center");
        _aSprite[CAR_LEFT] = s_oSpriteLibrary.getSprite(oSprite+"_left");
        _aSprite[CAR_RIGHT] = s_oSpriteLibrary.getSprite(oSprite+"_right");

        _oCurSprite = _aSprite[CAR_CENTER];

        _oCar = createBitmap(_oCurSprite);
        _oCar.x = 500;
        _oCar.visible = false;
        oElementContainer.addChild(_oCar);
    };
    
    this.getCar = function(){
        return _oCar;
    };
    
    this.getSprite = function(){
        return _oCurSprite;
    };
    
    this.getOffset = function(){
        return _iOffset;
    };
    
    this.getZ = function(){
        return _iZ;
    };
    
    this.getSpeed = function(){
        return _iSpeed;
    };
    
    this.getPercent = function(){
        return _iPercent;
    };
    
    this.setDirection = function(iDir){
        _oCurSprite = _aSprite[iDir];
        _oCar.image = _aSprite[iDir];
    };
    
    this.setVisible = function(bVal){
        _oCar.visible = bVal;
    };
    
    this.updateCarOffset = function(carSegment, oPlayer) {

      var i, j, dir, segment, otherCar, otherCarW, lookahead = 20, carW = _oParent.getSprite().width * SPRITES.SCALE, aSegments;
      
      if ((carSegment.index - oPlayer.getPlayerSegment().index) > DRAW_DISTANCE){
            //////SET VISIBLE TO FALSE, PREVENT TO SEE CARS IF ARE NOT IN SIGHT VIEW. 
            _oCar.visible = false;
            return 0;
      }
        

      for(i = 1 ; i < lookahead ; i++) {
          aSegments = s_oGame.getSegments();
          segment = aSegments[(carSegment.index+i)%aSegments.length];

        if ((segment === oPlayer.getPlayerSegment()) && (_iSpeed > oPlayer.getCurSpeed()) && (Util.overlap(oPlayer.getPosition().x, oPlayer.getPlayerWidth(), _iOffset, carW, 1.2))) {

          if (oPlayer.getPosition().x > 0.5)
            dir = -1;
          else if (oPlayer.getPosition().x < -0.5)
            dir = 1;
          else
            dir = (_iOffset > oPlayer.getPosition().x) ? 1 : -1;

          return dir * 1/i * (_iSpeed-oPlayer.getCurSpeed())/oPlayer.getMaxSpeed(); // the closer the cars (smaller i) and the greated the speed ratio, the larger the offset
        }

        for(j = 0 ; j < segment.cars.length ; j++) {
          otherCar  = segment.cars[j];
          otherCarW = otherCar.getSprite().width * SPRITES.SCALE;

          if ((_iSpeed > otherCar.getSpeed()) && Util.overlap(_iOffset, carW, otherCar.getOffset(), otherCarW, 1.2)) {
            if (otherCar.getOffset() > 0.5)
              dir = -1;
            else if (otherCar.getOffset() < -0.5)
              dir = 1;
            else
              dir = (_iOffset > otherCar.getOffset()) ? 1 : -1;
            return dir * 1/i * (_iSpeed-otherCar.getSpeed())/oPlayer.getMaxSpeed();
          }
        }
      }

      // if no cars ahead, but I have somehow ended up off road, then steer back on
      if (_iOffset < -0.9)
        return 0.1;
      else if (_iOffset > 0.9)
        return -0.1;
      else
        return 0;
    };
    
    this.update = function(dt, oPlayer){
        var oldSegment  = s_oGame.findSegment(_iZ);
        
        _iOffset  = _iOffset + this.updateCarOffset(oldSegment, oPlayer);
        _iZ       = Util.increase(_iZ, dt * _iSpeed, TRACK_LENGTH);

        _iPercent = Util.percentRemaining(_iZ, SEGMENT_LENGTH); // useful for interpolation during rendering phase
        var newSegment  = s_oGame.findSegment(_iZ);
        if (oldSegment !== newSegment) {
          var index = oldSegment.cars.indexOf(_oParent);
          oldSegment.cars.splice(index, 1);
          newSegment.cars.push(_oParent);
        }
        
    };
    _oParent = this;
    this._init(oSprite, iOffset, iZ, iSpeed, oElementContainer);
}


