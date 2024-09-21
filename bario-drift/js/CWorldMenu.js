function CWorldMenu(){
    
    var _aLevelScore;
    var _aLevelButton;
    
    var _oBg;
    var _oButExit;
    var _oScore;
    var _oAudioToggle;
    var _oButFullscreen;
    
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosExit;
    var _pStartPosScore;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    
    this._init = function(){

        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_select'));
        s_oStage.addChild(_oBg);
    

    
        var oTitle = new CTLText(s_oStage, 
                    CANVAS_WIDTH/2-300, CANVAS_HEIGHT/2-230, 600, 80, 
                    40, "center", "#ffffff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_SELECT_WORLD,
                    true, true, true,
                    false );
                    
   


        _aLevelScore = new Array();

        for(var i=0; i<NUM_WORLDS*NUM_TRACKS_PER_WORLD; i++){
            _aLevelScore[i] = s_aTimeScore[i];
        };

        _aLevelButton = new Array();
        var szTag = 'but_world';
        
        var iWidth = 500;
        for(var i=0; i<NUM_WORLDS; i++){
            var oFrameSprite = s_oSpriteLibrary.getSprite(szTag+i);
            var iXPos = CANVAS_WIDTH/2 -iWidth/2 + i*(iWidth/(NUM_WORLDS-1));
            var oEnabledSprite = s_oSpriteLibrary.getSprite('image_'+i);
            var oDisabledSprite = s_oSpriteLibrary.getSprite('cover_'+i);
            _aLevelButton[i] = new CLevelBut(iXPos, CANVAS_HEIGHT/2, oFrameSprite, oDisabledSprite, oEnabledSprite, s_oStage);
            _aLevelButton[i].addEventListenerWithParams(ON_MOUSE_UP, this._onLevelBut, this, i);
            _aLevelButton[i].disable();
        }
        this._setLevelActive();
    
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.width/2) - 12, y: (oSprite.height/2) + 16};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        var oExitX = _pStartPosExit.x - (oSprite.width)- 12;
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
            _pStartPosFullscreen = {x:(oSprite.width/4) + 12, y: (oSprite.height/2) + 16};   
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreenRelease,this);
        }

        _pStartPosScore = {x: 64, y: CANVAS_HEIGHT - 40};
        _oScore = new createjs.Container();
        _oScore.x = _pStartPosScore.x;
        _oScore.y = _pStartPosScore.y;
        s_oStage.addChild(_oScore);



        var oScore = new createjs.Text(" " +s_iTotalScore,"bold 30px "+PRIMARY_FONT, "#ffffff");
        oScore.textAlign = "left";
        oScore.textBaseline = "middle";
        oScore.lineWidth = 500;
        _oScore.addChild(oScore);
        
        var oSprite = s_oSpriteLibrary.getSprite('star');
        var oStar = createBitmap(oSprite);
        oStar.regX = oSprite.width/2;
        oStar.regY = oSprite.height/2;
        oStar.x = - oSprite.width/2;
        _oScore.addChild(oStar);
    
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        _oButExit.setPosition(_pStartPosExit.x - iNewX,iNewY + _pStartPosExit.y);
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled){
                _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX, _pStartPosFullscreen.y + iNewY);
        }
        
        _oScore.x = _pStartPosScore.x +iNewX;
        _oScore.y = _pStartPosScore.y -iNewY;
        
    };
    
    this.unload = function(){
        for(var i=0; i<_aLevelButton.length; i++){
            _aLevelButton[i].unload();
        }
        s_oWorldMenu = null;
        s_oStage.removeAllChildren();
        
        //stopSound(s_aSounds["menu_soundtrack"]);
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && screenfull.isEnabled){
                _oButFullscreen.unload();
        }
    };
    
    this._setLevelActive = function(){
        var iCurIndexActive = 0;
        for(var i=0; i<_aLevelScore.length; i++){
            if(_aLevelScore[i] > 0){
                iCurIndexActive = i+1;
            }
        }
        
        if(iCurIndexActive === NUM_TRACKS_PER_WORLD*_aLevelButton.length){
            for(var i=0; i<_aLevelButton.length; i++){
                _aLevelButton[i].enable();
            }
        } else {
            var iNumLevelActive = Math.floor(iCurIndexActive/NUM_TRACKS_PER_WORLD);
            
            for(var i=0; i<iNumLevelActive+1; i++){
                _aLevelButton[i].enable();
            }
            _aLevelButton[iNumLevelActive].pulseAnimation();
        }
    };
    
    this._onLevelBut = function(iWorld){
        var iStartIndex  = iWorld*NUM_TRACKS_PER_WORLD;
        
        var aScore = new Array();        
        aScore = [_aLevelScore[iStartIndex], _aLevelScore[iStartIndex+1], _aLevelScore[iStartIndex+2]];
        new CTrackMenu(iWorld, aScore);
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
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onExit = function(){
        $(s_oMain).trigger("end_session");
        this.unload();
        s_oMain.gotoMenu();
    };
    
    s_oWorldMenu = this;
    this._init();
};


var s_oWorldMenu = null;