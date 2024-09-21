function CInterface(){
    var _oAudioToggle;
    var _oButExit;
    var _oFPSText;
    var _oTimeContainer;
    var _oTimer;
    var _oBestTime;
    var _oCurTime;
    var _oTachometer;
    var _oCountdownTextStroke;
    var _oCountdownText;
    var _oButUp;
    var _oButDown;
    var _oButLeft;
    var _oButRight;
    var _oButFullscreen;
    var _oLevelButton;
    
    var _aNumCountDown;
    
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosExit;
    var _pStartPosAudio;
    
    var _pStartPosUp;
    var _pStartPosDown;
    var _pStartPosLeft;
    var _pStartPosRight;
    var _pStartPosFullscreen;
    var _pStartPosTimePanel;
    var _pStartPosTimer;
    
    this._init = function(){                
        var oExitX;        
        
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.width/2) - 12, y: (oSprite.height/2) + 16};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        
        oExitX = _pStartPosExit.x - (oSprite.width)- 12;
        _pStartPosAudio = {x: oExitX, y: (oSprite.height/2) + 16};
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);     
            
            oExitX = _pStartPosAudio.x - (oSprite.width/2)- 12;
        }
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.isEnabled){
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {x:oExitX,y:(oSprite.height/2) + 16};
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreenRelease,this);
        }

        _pStartPosTimePanel = {x: 12, y: 16};
        _oTimeContainer = new  createjs.Container();
        s_oStage.addChild(_oTimeContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('time_panel');
        var oTimePanel = createBitmap(oSprite);
        _oTimeContainer.addChild(oTimePanel);

        ////////SET BESTTIME
        _oBestTime = new CTimer(110, 50, _oTimeContainer, 50, "#ffffff", "best_time", "#000000");
        
        ////////SET CURTIME
        _oCurTime = new CTimer(110, 120, _oTimeContainer, 50, "#ffffff", "timer", "#000000");

        ////////SET TIME COUNTER
        _pStartPosTimer = {x: CANVAS_WIDTH/2, y: 60};
        _oTimer = new CTimer(_pStartPosTimer.x, _pStartPosTimer.y, s_oStage, 100, "#fff000", null,"#000000");
        _oTimer.resetTextRelativePos();
        _oTimer.setAlign("center", "middle");
        

        ///////SET SPEED INDICATOR
        _oTachometer = new CTachometer(152, CANVAS_HEIGHT-12);

        _oCountdownTextStroke = new createjs.Text(""," 300px "+PRIMARY_FONT, "#3e240b");
        _oCountdownTextStroke.x = CANVAS_WIDTH/2;
        _oCountdownTextStroke.y = CANVAS_HEIGHT/2;
        _oCountdownTextStroke.textAlign = "center";
        _oCountdownTextStroke.textBaseline = "middle";
        _oCountdownTextStroke.lineWidth = 200;
        _oCountdownTextStroke.outline = 20;
        s_oStage.addChild(_oCountdownTextStroke);

        _oCountdownText = new createjs.Text(""," 300px "+PRIMARY_FONT, "rgba(255,224,0,1)");
        _oCountdownText.x = CANVAS_WIDTH/2;
        _oCountdownText.y = CANVAS_HEIGHT/2;
        _oCountdownText.textAlign = "center";
        _oCountdownText.textBaseline = "middle";
        _oCountdownText.lineWidth = 200;
        s_oStage.addChild(_oCountdownText);
        

        if(s_bMobile){
            var iY = CANVAS_HEIGHT-270;
            var iX = 180;
            
            ///////////// MOVEMENT
            var oSprite = s_oSpriteLibrary.getSprite('key_up');
            _pStartPosUp = {x: CANVAS_WIDTH-iX +oSprite.width/2, y: iY};
            _oButUp = new CGfxButton(_pStartPosUp.x, _pStartPosUp.y, oSprite, s_oStage);
            _oButUp.addEventListenerWithParams(ON_MOUSE_UP, s_oGame.onKeyUp, this, KEY_UP);
            _oButUp.addEventListenerWithParams(ON_MOUSE_DOWN, s_oGame.onKeyDown, this, KEY_UP);
            
            var oSprite = s_oSpriteLibrary.getSprite('key_down');
            _pStartPosDown = {x: CANVAS_WIDTH-iX -oSprite.width/2, y: iY};
            _oButDown = new CGfxButton(_pStartPosDown.x, _pStartPosDown.y, oSprite, s_oStage);
            _oButDown.addEventListenerWithParams(ON_MOUSE_UP, s_oGame.onKeyUp, this, KEY_DOWN);
            _oButDown.addEventListenerWithParams(ON_MOUSE_DOWN, s_oGame.onKeyDown, this, KEY_DOWN);
            
            ///////////// DIRECTION
            var oSprite = s_oSpriteLibrary.getSprite('key_left');
            _pStartPosLeft = {x:iX-oSprite.width/2, y: iY};
            _oButLeft = new CGfxButton(_pStartPosLeft.x, _pStartPosLeft.y, oSprite, s_oStage);
            _oButLeft.addEventListenerWithParams(ON_MOUSE_UP, s_oGame.onKeyUp, this, KEY_LEFT);
            _oButLeft.addEventListenerWithParams(ON_MOUSE_DOWN, s_oGame.onKeyDown, this, KEY_LEFT);
            
            var oSprite = s_oSpriteLibrary.getSprite('key_right');
            _pStartPosRight = {x:iX+oSprite.width/2, y: iY};
            _oButRight = new CGfxButton(_pStartPosRight.x, _pStartPosRight.y, oSprite, s_oStage);
            _oButRight.addEventListenerWithParams(ON_MOUSE_UP, s_oGame.onKeyUp, this, KEY_RIGHT);
            _oButRight.addEventListenerWithParams(ON_MOUSE_DOWN, s_oGame.onKeyDown, this, KEY_RIGHT);
            
        }

        _aNumCountDown = new Array();
        for(var i=0; i<=3; i++){
            _aNumCountDown[i] = false;
        }

        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this.unload = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && screenfull.isEnabled){
                _oButFullscreen.unload();
        }

        _oButExit.unload();

        s_oInterface = null;
        
        if(s_bMobile){
            _oButUp.unload();
            _oButDown.unload();
            _oButLeft.unload();
            _oButRight.unload();
        }
        
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        _oButExit.setPosition(_pStartPosExit.x - iNewX,iNewY + _pStartPosExit.y);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled){
                 _oButFullscreen.setPosition(_pStartPosFullscreen.x - iNewX, _pStartPosFullscreen.y + iNewY);
        }
        
        _oTimeContainer.x = _pStartPosTimePanel.x + iNewX;
        _oTimeContainer.y = _pStartPosTimePanel.y + iNewY;
        
        if(s_bMobile){
            _oButUp.setPosition(_pStartPosUp.x - iNewX, _pStartPosUp.y - iNewY);
            _oButDown.setPosition(_pStartPosDown.x - iNewX, _pStartPosDown.y - iNewY);
            _oButLeft.setPosition(_pStartPosLeft.x + iNewX, _pStartPosLeft.y - iNewY);
            _oButRight.setPosition(_pStartPosRight.x + iNewX, _pStartPosRight.y - iNewY);
        }
        _oTimer.setPos(_pStartPosTimer.x, _pStartPosTimer.y + iNewY);
        
        _oTachometer.updateOffset(iNewX, iNewY);
    };
    
    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.isEnabled){
		_oButFullscreen.setActive(s_bFullscreen);
	}
    };

        
    this._onFullscreenRelease = function(){
	if(s_bFullscreen) { 
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };

    this.refreshTimer = function(iValue){
        _oTimer.setIntTime(iValue);
    };

    this.setBestTime = function(iValue){
        _oBestTime.setDecimalTime(iValue);
    };

    this.refreshCurTime = function(iValue){
        _oCurTime.setDecimalTime(iValue);
    };

    this.refreshCountdown = function(iTime){
        var iIntNum = Math.ceil(iTime/1000);  
        var iNum = (iIntNum * 1000 - iTime)/1000;

        _oCountdownText.alpha = 1-iNum;
        _oCountdownText.scaleX = _oCountdownText.scaleY = iNum;
        _oCountdownText.text = Math.ceil(iTime/1000);

        _oCountdownTextStroke.alpha = _oCountdownText.alpha;
        _oCountdownTextStroke.scaleX = _oCountdownTextStroke.scaleY = iNum;
        _oCountdownTextStroke.text = _oCountdownText.text;

        
        if(iIntNum === 3 && !_aNumCountDown[3]){
            _aNumCountDown[3] = true;
            playSound('3', 1, 0);
        } else if(iIntNum === 2 && !_aNumCountDown[2]){
            _aNumCountDown[2] = true;
            playSound('2', 1, 0);
        } else if(iIntNum === 1 && !_aNumCountDown[1]){
            _aNumCountDown[1] = true;
            playSound('1', 1, 0);
        } else if(iIntNum === 0){
            _aNumCountDown[0] = true;
            playSound('go', 1, 0);
            
            for(var i=0; i<_aNumCountDown.length; i++){
                _aNumCountDown[i] = false;
            }
        }
        
    };
    
    this.refreshSpeed = function(iValue){
        _oTachometer.setSpeedIndicator(iValue);
    };
    
    this.countDownGo = function(){
        _oCountdownText.scaleX = _oCountdownText.scaleY = 1;
        _oCountdownTextStroke.scaleX = _oCountdownTextStroke.scaleY = _oCountdownText.scaleY;
        
        _oCountdownText.text = TEXT_GO;
        _oCountdownTextStroke.text = TEXT_GO;
        
        createjs.Tween.get(_oCountdownText).wait(500).to({alpha:0}, 1000, createjs.Ease.cubicIn);
        createjs.Tween.get(_oCountdownTextStroke).wait(500).to({alpha:0}, 1000, createjs.Ease.cubicIn);
        
    };
    
    this.setLevelInfo = function(oFrameSprite, iLevel){
        if(_oLevelButton){
            _oLevelButton.unload();
        }
        
        var oSprite = s_oSpriteLibrary.getSprite('time_panel');
        
        var iScale = 0.6;
        _oLevelButton = new CLevelBut(oFrameSprite.width/4*iScale + oSprite.width + 12, oFrameSprite.height/2*iScale, oFrameSprite, true, 0, _oTimeContainer);
        _oLevelButton.setScale(0.6);
        _oLevelButton.setClickable(false);
        _oLevelButton.addLevelText(iLevel);
    };

    this._onNitro = function(){
        _oButNitro.setVisible(false);
        s_oGame.setNitro(true);
    };

    this._onButRestartRelease = function(){
        
        _aNumCountDown = new Array();
        for(var i=0; i<=3; i++){
            _aNumCountDown[i] = false;
        }
        
        s_oGame.restartGame();
    };
    
    this.onExitFromHelp = function(){
        _oHelpPanel.unload();
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onExit = function(){
        s_oGame.setPause();
        new CAreYouSurePanel(s_oGame.onExit, s_oGame.setResume);
    };
    
    s_oInterface = this;
    
    this._init();
    
    return this;
}

var s_oInterface = null;