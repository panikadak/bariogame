function CGame(oData, iLevel){
    var _bStartGame;
    var _bDamaged;
    var _bCollision;
    
    var _iStartCountDown;
    var _iTimeElaps;
    var _iLevel;
    var _iScore;    
    var _iGameState;
    var _oPrevSegment;

    var _aSegments;

    var _oInterface;
    var _oEndPanel = null;
    var _oParent;

    var _oPlayer;
    var _oRoad;
    var _oRoadDrawingLevel;
    var _oElementContainer;
    var _oHorizon;
                        
    var _aCars;
    
    this._init = function(iLevel){

        _iLevel = iLevel;

        _aSegments = new Array();

        _oHorizon = new CHorizon(_iLevel);

        _oRoadDrawingLevel = new createjs.Shape();
        s_oStage.addChild(_oRoadDrawingLevel);

        _oElementContainer = new createjs.Container();
        s_oStage.addChild(_oElementContainer);

        _oRoad = new CRoad(_oRoadDrawingLevel, _oElementContainer, _iLevel);

        _oPlayer = new CPlayer(CANVAS_WIDTH/2, 980, s_oStage);

        _aSegments = _oRoad.getSegments();
        TRACK_LENGTH = _oRoad.getTrackLength();


        _oInterface = new CInterface();        

        _aCars = new Array();
        new CLevelBuilder(_oPlayer, _aCars, _oElementContainer, iLevel);


        this.resetParams();
    };

    this.getWorldCameraPos = function(){
        var oZPosition = _oPlayer.getPosition().z;
        
        var baseSegmentPos = _aSegments[(this.findSegment(oZPosition).index)].p1.world;
        var nextSegmentPos = _aSegments[(this.findSegment(oZPosition+SEGMENT_LENGTH).index)].p1.world;
        
        var iPercent = (oZPosition - baseSegmentPos.z)/SEGMENT_LENGTH;
        
        var iX = Util.interpolate(baseSegmentPos.x, nextSegmentPos.x, iPercent);
        var iY = Util.interpolate(baseSegmentPos.y, nextSegmentPos.y, iPercent);

        return {x: iX, y: iY};
    };

    function _onKeyboardUp(evt){
        evt.preventDefault();
        s_oGame.onKeyUp(evt.keyCode);
    }
    
    function _onKeyboardDown(evt){
        if(!evt){ 
            evt = window.event; 
        } 
        evt.preventDefault();
        
        s_oGame.onKeyDown(evt.keyCode);
    }

    this.onKeyUp = function(iKey) {
        if(!_bStartGame){
            return;
        }
        
        switch(iKey) {
           // left  
           case KEY_LEFT: {
                   _oPlayer.stopLeft();
                   break; 
               }               
           case KEY_UP: {
                   _oPlayer.stopAccelerate();
                   break; 
               }                         
           // right  
           case KEY_RIGHT: {
                   _oPlayer.stopRight();
                   break; 
               }
           case KEY_DOWN: {
                   _oPlayer.stopBrake();
                   break; 
               }     
        }
    };
    
    this.onKeyDown = function(iKey) { 
        if(!_bStartGame){
            return;
        }
        
        switch(iKey) {
            // left  
            case KEY_LEFT: {
                    _oPlayer.moveLeft();
                    break; 
                }               
            case KEY_UP: {
                    _oPlayer.moveAccelerate();
                    break; 
                }                         
            // right  
            case KEY_RIGHT: {
                    _oPlayer.moveRight();
                    break; 
                }
            case KEY_DOWN: {
                    _oPlayer.moveBrake();
                    break; 
                }     
        }
    };
    
    this.resetParams = function(){
        _bStartGame = false;
        stopSound(s_aSounds["game_soundtrack"]);

        if(_iLevel === 0){
            new CHelpPanel();
        } else {
            _bStartGame = true;
            stopSound(s_aSounds["menu_soundtrack"]);
            playSound("game_soundtrack", 1, true);
            
            $(s_oMain).trigger("start_level",_iLevel);
            
            var oFade = new createjs.Shape();
            oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            oFade.alpha = 1;
            s_oStage.addChild(oFade);

            new createjs.Tween.get(oFade).to({alpha:0},750).call(function(){
                s_oStage.removeChild(oFade);
            });
            
        }
        
        _iGameState = STATE_GAME_START;
        _iScore = 0;
        _iTimeElaps = LEVEL_INFO[_iLevel].time;
        _iStartCountDown = START_COUNTDOWN;
        
        _oHorizon.restart();
        _oInterface.refreshTimer(_iTimeElaps);
        _oInterface.refreshCurTime(0);
        
        var iWorld = Math.floor(_iLevel/NUM_WORLDS);
        var iTrack = _iLevel%NUM_TRACKS_PER_WORLD;
        _oInterface.setLevelInfo(s_oSpriteLibrary.getSprite('but_world'+iWorld), iTrack+1);
        
        if(s_aTimeScore[_iLevel] < LEVEL_INFO[_iLevel].time && s_aTimeScore[_iLevel] !== 0 ){
            _oInterface.setBestTime(s_aTimeScore[_iLevel])
        } else {
            _oInterface.setBestTime(LEVEL_INFO[_iLevel].time)
        }

        
        if(!s_bMobile){
            document.onkeydown   = _onKeyboardDown; 
            document.onkeyup   = _onKeyboardUp; 
        }
        
        _oRoad.clearVisual(_oPlayer.getPosition());
        
        _oPrevSegment = _oPlayer.getPlayerSegment();
        _oPlayer.reset();

    };
                                    
    this.restartGame = function () {
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("restart_level", _iLevel);

        this.resetParams();
    };        
    
    this.unload = function(){
        
        _oInterface.unload();
        if(_oEndPanel !== null){
            _oEndPanel.unload();
        }
        
        stopSound(s_aSounds["menu_soundtrack"]);
        stopSound(s_aSounds["game_soundtrack"]);
        stopSound(s_aSounds["engine"]);
        stopSound(s_aSounds["brake"]);
        stopSound(s_aSounds["engine_reverse"]);
        stopSound(s_aSounds["engine_stall"]);
        
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();    
    };
   
   this.checkDamage = function(){
        if(_oPlayer.getCurSpeed() > PLAYER_MIN_SPEED_DAMAGE){
            ///// WE SHOULD USE A LIMITED TIME OF INVULNERABILITY TO PREVENT MULTIPLE DAMAGE
            if(_bDamaged){
                return;
            }
            _bDamaged = true;
            
            _oPlayer.damageAnim();
            
            new CTremble(s_oStage, 250, 20, 5);
            
        }
    };
   
    this.endDamageTime = function(){
        _bDamaged = false;
    };
   
    this.trackCompleted = function(){
        _oHorizon.resetPos();
        
        if(_iGameState === STATE_GAME_END){
            ///TIME ALREADY ENDS
            return;
        }
        $(s_oMain).trigger("end_level",_iLevel);
        $(s_oMain).trigger("show_interlevel_ad");
        _iGameState = STATE_GAME_END;
        
        s_oGame.stopPlayer();
        
        _iScore = Math.floor(_iTimeElaps/1000*POINTS_PER_SECONDS);
        
        //////NEXTLEVELPANEL
        new CNextLevelPanel(_iTimeElaps, _iScore, _iLevel);
    };
 
    this._countDown = function(){
        _iStartCountDown -= s_iTimeElaps;
        _oInterface.refreshCountdown(_iStartCountDown);
        if(_iStartCountDown <= 0){
            _iStartCountDown = 0;
            _iGameState = STATE_GAME_RACE;
            _oInterface.countDownGo();
        }
    };
 
    this.nextLevel = function(){
        _iLevel++;
        if(_iLevel < NUM_TRACKS_PER_WORLD*NUM_WORLDS){
            this.unload();
            this._init(_iLevel);
        } else {
            this.gameOver();
        }
    };
 
    this.trackLose = function(){
        _iGameState = STATE_GAME_END;
        s_oGame.stopPlayer();
        
        $(s_oMain).trigger("end_level",_iLevel);
        $(s_oMain).trigger("show_interlevel_ad");
        
        var oLosePanel = new CLosePanel(s_oSpriteLibrary.getSprite('msg_box'));
        oLosePanel.show(_iScore);
    };
 
    this.stopPlayer = function(){
        _oPlayer.stopAll();
        
        if(!s_bMobile){
            document.onkeydown   = null; 
            document.onkeyup   = null; 
        }
    };
 
    this.onExit = function(){
        s_oGame.unload();
        $(s_oMain).trigger("end_session");
        
        playSound("menu_soundtrack", 1, true);
        
        s_oMain.gotoMenu();
        
    };
    
    this._onExitHelp = function () {
        _bStartGame = true;
        stopSound(s_aSounds["menu_soundtrack"]);
        playSound("game_soundtrack", 1, true);
         
        $(s_oMain).trigger("start_level",1);
    };
    
    this.gameOver = function(){
        _oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite('msg_box'));
        _oEndPanel.show(_iScore);
    };

    this.setPause = function(){
        _bStartGame = false;
        _oPlayer.stopAll();
    };
    
    this.setResume = function(){
        _bStartGame = true;
    };
    
    this.update = function(){
        var iDt = 1/s_iCurFps;
        
        switch(_iGameState){
            case STATE_GAME_START:{
                    if(_bStartGame){
                        this._countDown();
                    }
                    
                    break;
            }
            case STATE_GAME_RACE:{
                    
                    if(!_bStartGame){
                        return;
                    }
                    
                    _iTimeElaps-=s_iTimeElaps;
                    if(_iTimeElaps < 0){
                        _iTimeElaps = 0;
                        /////GAME OVER
                        this.trackLose();
                    }
                    _oInterface.refreshTimer(_iTimeElaps);
                    _oInterface.refreshCurTime(LEVEL_INFO[_iLevel].time - _iTimeElaps);

                    _oPlayer.update(iDt);

                    break;
            }
            case STATE_GAME_END:{
                    
                    _oPlayer.update(iDt);
                    _oPlayer.autoPilot();
                    
                    break;
            }
        }

        _oInterface.refreshSpeed(_oPlayer.getCurSpeed()*PLAYER_SPEED_CONVERSION_RATIO);
        
        _oRoad.update(_oPlayer.getPosition());

        _oHorizon.move(this.getWorldCameraPos());

        for(var i=0; i<_aCars.length; i++){
            _aCars[i].update(iDt, _oPlayer);
        }
        
        _bCollision = false;
        ///CHECK COLLISION
        this._ambientCollision();
        this._carsCollision();
        
        _oPrevSegment = _oPlayer.getPlayerSegment();

    };

    this._ambientCollision = function(){
        if(_oPlayer.isOutOfRoad()){
            
            var iPlayerSegment = _oPlayer.getPlayerSegment().index;
            ////THIS ITERATION PREVENT CAR PIERCING ON ELEMENT
            for(var i=_oPrevSegment.index; i<=iPlayerSegment; i++){
                var segment = _aSegments[i];
                for(var n = 0 ; n < segment.sprites.length ; n++) {
                    var sprite  = segment.sprites[n];

                    var bOverlap = Util.overlap(_oPlayer.getPosition().x, _oPlayer.getPlayerWidth(), sprite.collision.center, sprite.collision.width);
                    if (bOverlap) {
                        this.checkDamage();
                        _oPlayer.setCurSpeed( PLAYER_ACCELERATION );
                        _oPlayer.setPosition( Util.increase(segment.p1.world.z, -PLAYER_Z_FROMCAMERA, TRACK_LENGTH) ); // stop in front of sprite (at front of segment)

                        _bCollision = true;
                        _oPlayer.stopEngineSound();

                        break;
                    }
                }
            }; 
        };
    };
    
    this._carsCollision = function(){
        var car;
        var carW;
        
        var iPlayerSegment = _oPlayer.getPlayerSegment().index;
        ////THIS ITERATION PREVENT CAR PIERCING ON ELEMENT
        for(var i=_oPrevSegment.index; i<=iPlayerSegment; i++){
            var segment = _aSegments[i];
            for(var n = 0 ; n < segment.cars.length ; n++) {
                car  = segment.cars[n];
                carW = car.getSprite().width * SPRITES.SCALE;

                if (_oPlayer.getCurSpeed() > car.getSpeed() ) {
                    if (Util.overlap(_oPlayer.getPosition().x, _oPlayer.getPlayerWidth(), car.getOffset(), carW, 0.8)) {
                            this.checkDamage();
                            _oPlayer.setCurSpeed( car.getSpeed() * (car.getSpeed()/_oPlayer.getCurSpeed()) );
                            _oPlayer.setPosition( Util.increase(car.getZ(), -PLAYER_Z_FROMCAMERA, TRACK_LENGTH) );

                            _bCollision = true;
                            _oPlayer.stopEngineSound();
                          
                          break;
                    }
                }
            }
        }
            
    };

    this.playerCollide = function(){
        return _bCollision;
    };

    this.findSegment = function(z) {
        return _oRoad.findSegment(z);
    };

    this.getSegments = function(){
        return _aSegments;
    };
    
    s_oGame=this;
    
    PLAYER_MAX_SPEED = oData.player_max_speed;
    PLAYER_ACCELERATION = PLAYER_MAX_SPEED/5; 
    PLAYER_DECELERATION = PLAYER_MAX_SPEED/8;
    PLAYER_MIN_SPEED_DAMAGE = PLAYER_MAX_SPEED/3;   // player minimum speed to being damaged

    PLAYER_REAL_MAX_SPEED = oData.player_maxspeed_indicator;
    PLAYER_SPEED_CONVERSION_RATIO = PLAYER_REAL_MAX_SPEED/PLAYER_MAX_SPEED;
    
    CENTRIFUGAL_FORCE = oData.player_centrifugal_force;
    
    POINTS_PER_SECONDS = oData.points_per_seconds_remaining;
    
    _oParent=this;
    this._init(iLevel);
}

var s_oGame;
