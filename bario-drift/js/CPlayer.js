function CPlayer(iX, iY, oParentContainer){
    var _bKeyLeft;
    var _bKeyRight;
    var _bKeyAccelerate;
    var _bKeyBrake;
    var _bOutOfRoad;
    var _bDamageAnim;
    
    var _iCurPositionZ;
    var _iCurPositionX;
    var _iCurSpeed;
    var _iMaxSpeed;
    var _iAccelerationRate;     // acceleration rate - tuned until it 'felt' right
    var _iBrakingRate;         // deceleration rate when braking
    var _iDecelerationRate;     // 'natural' deceleration rate when neither accelerating, nor braking
    var _iOffRoadDecel;             // off road deceleration is somewhere in between
    var _iOffRoadLimit;             // limit when off road deceleration no longer applies (e.g. you can always go at least this speed even when off road)
    var _iPlayerWidth;
    var _iXInertia;
    
    var _oPlayer;
    var _oPlayerSegment;
    var _oDamageSprite;
    
    this._init = function(iX, iY, oParentContainer){
        
        this.reset();
        
        _iMaxSpeed = PLAYER_MAX_SPEED;
        _iAccelerationRate = PLAYER_ACCELERATION;
        
        _iBrakingRate = -_iMaxSpeed;
        _iDecelerationRate = -PLAYER_DECELERATION;

        _iOffRoadDecel  = -_iMaxSpeed/2;
        _iOffRoadLimit  =  _iMaxSpeed/4;
        
        var oSprite = s_oSpriteLibrary.getSprite('baloon_mc');
        _oDamageSprite = createBitmap(oSprite);
        _oDamageSprite.regX = oSprite.width/2;
        _oDamageSprite.regY = oSprite.height/2;
        _oDamageSprite.x = iX;
        _oDamageSprite.y = iY -260;
        _oDamageSprite.alpha = 0;
        oParentContainer.addChild(_oDamageSprite);
        
        var oSprite = s_oSpriteLibrary.getSprite('player');
        var iWidth = oSprite.width/3;
        var iHeight = oSprite.height;
        var oData = {   
                        images: [oSprite],
                        // width, height & registration point of each sprite
                        frames: {width: iWidth, height: iHeight, regX: iWidth/2, regY: iHeight}, 
                        animations: {left:[0],right:[1], straight:[2]}
                   };
                   
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oPlayer = createSprite(oSpriteSheet, "straight",iWidth/2,iHeight,iWidth,iHeight);
        _oPlayer.x = iX;
        _oPlayer.y = iY; 
        oParentContainer.addChild(_oPlayer);

        
        _iPlayerWidth = PLAYER_COLLIDER_WIDTH;


    };

    this.reset = function(){
        _bKeyLeft = false;
        _bKeyRight = false;
        _bKeyAccelerate = false;
        _bKeyBrake = false;
        _bDamageAnim = false;
        
        _bOutOfRoad = false;  
        
        _iCurPositionZ = 0;
        _iCurPositionX = 0;
        _iCurSpeed = 0;
        _iXInertia = 0;
        
        _oPlayerSegment = s_oGame.findSegment(_iCurPositionZ + PLAYER_Z_FROMCAMERA);
    };

    this.setAcceleration = function(iVal){
        _iAccelerationRate = iVal;
    };
    
    this.setMaxSpeed = function(iVal){
        _iMaxSpeed = iVal;

        _iBrakingRate = -_iMaxSpeed;
        _iDecelerationRate = -PLAYER_DECELERATION;

        _iOffRoadDecel  = -_iMaxSpeed/2;
        _iOffRoadLimit  =  _iMaxSpeed/4;
    };
    
    this.stopAll = function(){
        this.stopLeft();
        this.stopRight();
        this.stopAccelerate();
    };
    
    this.stopLeft = function(){
        if(!_bKeyLeft){
            return;
        }
        _bKeyLeft = false;
        _oPlayer.gotoAndStop("straight");
        stopSound(s_aSounds["brake"]);
    };
    
    this.stopRight = function(){
        if(!_bKeyRight){
            return;
        }
        _bKeyRight = false;
        _oPlayer.gotoAndStop("straight");
        stopSound(s_aSounds["brake"]);
    };
    
    this.stopAccelerate = function(){
        _bKeyAccelerate = false;
        stopSound(s_aSounds["engine"]);
    };
    
    this.stopBrake = function(){
        _bKeyBrake = false;
    };
    
    this.moveLeft = function(){
        if(_iCurSpeed === 0){
            return;
        }
        if(!soundPlaying(s_aSounds["brake"])){
            playSound("brake", 0.5, false);
        }
        _bKeyRight = false;
        _bKeyLeft = true;
        _oPlayer.gotoAndStop("left");
    };
    
    this.moveRight = function(){
        if(_iCurSpeed === 0){
            return;
        }
        if(!soundPlaying(s_aSounds["brake"])){
            playSound("brake", 0.5, false);
        }
        _bKeyLeft = false;
        _bKeyRight = true;
        _oPlayer.gotoAndStop("right");
    };
    
    this.moveAccelerate = function(){
        _bKeyBrake = false;
        _bKeyAccelerate = true;       
    };
    
    this.moveBrake = function(){
        _bKeyAccelerate = false;
        _bKeyBrake = true;
    };
    
    this._increase = function(start, increment, max) { // with looping
        var result = start + increment;
        while (result >= max){
            result -= max;
            s_oGame.trackCompleted();
        }
          
        while (result < 0){
            result += max;
        }
          
        return result;
    };
    
    this._accelerate = function(v, accel, dt){ 
        return v + (accel * dt);                                       
    };
    
    this._limit = function(value, min, max){
        return Math.max(min, Math.min(value, max));
    };
    
    this.getPlayerWidth = function(){
        return _iPlayerWidth;
    };
    
    this.getPosition = function(){
        return {x: _iCurPositionX, z:_iCurPositionZ};
    };
    
    this.setPosition = function(iValue){
        _iCurPositionZ = iValue;
    };
    
    this.autoPilot = function(){
        if(_iCurPositionX > 0.5){
            _bKeyRight = false;
            _bKeyLeft = true;
        } else if(_iCurPositionX < -0.5){
            _bKeyRight = true;
            _bKeyLeft = false;
        } else if(_iCurPositionX <= 0.1 && _iCurPositionX >= -0.1){
            _bKeyLeft = false;
            _bKeyRight = false;
        }
    };
    
    this.getMaxSpeed = function(){
        return _iMaxSpeed;
    };
    
    this.getCurSpeed = function(){
        return _iCurSpeed;
    };
    
    this.setCurSpeed = function(iValue){
        _iCurSpeed = iValue;
    };
    
    this.getPlayerSegment = function(){
        return _oPlayerSegment;
    };
    
    this.getFrontPlayerSegment = function(){
        return s_oGame.findSegment(_iCurPositionZ+SEGMENT_LENGTH + PLAYER_Z_FROMCAMERA);
    };
    
    this.damageAnim = function(){
        if(_bDamageAnim){
            return;
        };
        _bDamageAnim = true;
        playSound("crash", 1, false);
        createjs.Tween.get(_oDamageSprite, {override:true}).to({alpha:1}, 250, createjs.Ease.cubicOut).to({alpha:0}, 250, createjs.Ease.cubicIn).call(function(){
            _bDamageAnim = false;
        });
    };
    
    this.isOutOfRoad = function(){
        return _bOutOfRoad;
    };
    
    this.stopEngineSound = function(){
        stopSound(s_aSounds["engine"]);
        stopSound(s_aSounds["engine_stall"]);
        
    };
    
    this._updateXMovement = function(dx, iSpeedRatio){
        var iCurveCentrifugalForce;
        iCurveCentrifugalForce = (dx * iSpeedRatio * iSpeedRatio * _oPlayerSegment.curve * CENTRIFUGAL_FORCE)/TERRAIN_ADHERENCE;

        if (_bKeyLeft){
            _iXInertia -= TERRAIN_INCREASE_INERTIA*iSpeedRatio;
            if(_iXInertia<-TERRAIN_MAX_INERTIA){
                _iXInertia = -TERRAIN_MAX_INERTIA;
            }

            _iCurPositionX = _iCurPositionX - iCurveCentrifugalForce - dx;
        }else if (_bKeyRight){
            _iXInertia += TERRAIN_INCREASE_INERTIA*iSpeedRatio;
            if(_iXInertia>TERRAIN_MAX_INERTIA){
                _iXInertia = TERRAIN_MAX_INERTIA;
            }

            _iCurPositionX = _iCurPositionX - iCurveCentrifugalForce + dx;
        } else {           

            _iCurPositionX = _iCurPositionX - iCurveCentrifugalForce + _iXInertia;
        }

        if(_iXInertia>0){
            _iXInertia-= TERRAIN_DECREASE_INERTIA;
            if(_iXInertia < 0){
                _iXInertia = 0;
            }
        }else if(_iXInertia<0){
            _iXInertia+= TERRAIN_DECREASE_INERTIA;
            if(_iXInertia > 0){
                _iXInertia = 0;
            }
        }
    };
    
    this.update = function(dt){
        
        _oPlayerSegment = s_oGame.findSegment(_iCurPositionZ + PLAYER_Z_FROMCAMERA);
        var iSpeedRatio = _iCurSpeed/_iMaxSpeed;
        
        _iCurPositionZ = this._increase(_iCurPositionZ, dt * _iCurSpeed, TRACK_LENGTH);

        var dx = dt * 2*TERRAIN_ADHERENCE * iSpeedRatio; // at top speed, should be able to cross from left to right (-1 to 1) in 1 second


        this._updateXMovement(dx, iSpeedRatio);


        if (_bKeyAccelerate){
          _iCurSpeed = this._accelerate(_iCurSpeed, _iAccelerationRate, dt);
     
            if(iSpeedRatio === 1){
                if(!soundPlaying(s_aSounds["engine_stall"])){
                    stopSound(s_aSounds["engine"]);
                    stopSound(s_aSounds["engine_reverse"]);
                    playSound("engine_stall", 0.7, true);
                }
            } else {
                if(_iCurSpeed>0 && !soundPlaying(s_aSounds["engine"]) && !s_oGame.playerCollide()){
                    stopSound(s_aSounds["brake"]);
                    stopSound(s_aSounds["engine_stall"]);
                    stopSound(s_aSounds["engine_reverse"]);
                    playSound("engine", 0.7, false);
                    var iStartAudio = linearFunction(iSpeedRatio, 0,1,0,soundDuration(s_aSounds["engine"]));
                    
                    soundSeek(s_aSounds["engine"], iStartAudio);
                }
            }
     
            
        
        }else if (_bKeyBrake) {
          _iCurSpeed = this._accelerate(_iCurSpeed, _iBrakingRate, dt);
          
            if(_iCurSpeed > 0){
                stopSound(s_aSounds["engine"]);
                stopSound(s_aSounds["engine_stall"]);
                stopSound(s_aSounds["engine_reverse"]);
                if(!soundPlaying(s_aSounds["brake"])){
                    playSound("brake", 0.5, false);
                }
            }
      
        }else{
          _iCurSpeed = this._accelerate(_iCurSpeed, _iDecelerationRate, dt);
          
          if(_iCurSpeed > 0 && !soundPlaying(s_aSounds["engine_reverse"])){
                stopSound(s_aSounds["brake"]);
                stopSound(s_aSounds["engine_stall"]);
                stopSound(s_aSounds["engine"]);
                playSound("engine_reverse", 0.7, false);
                var iStartAudio = linearFunction(iSpeedRatio, 0,1,soundDuration(s_aSounds["engine_reverse"]),0);

                soundSeek(s_aSounds["engine_reverse"], iStartAudio);
            }
          
        }

        _bOutOfRoad = false;  
        if ( (_iCurPositionX < -1) || (_iCurPositionX > 1) ){
            if(_iCurSpeed > _iOffRoadLimit){
                _iCurSpeed = this._accelerate(_iCurSpeed, _iOffRoadDecel, dt);
            }
            
            _bOutOfRoad = true;
            
        }
          

        _iCurPositionX = this._limit(_iCurPositionX, -ROAD_BOUNDS, ROAD_BOUNDS);     // dont ever let player go too far out of bounds
        _iCurSpeed   = this._limit(_iCurSpeed, 0, _iMaxSpeed); // or exceed _iMaxSpeed
    };
    
    this._init(iX, iY, oParentContainer);
}


