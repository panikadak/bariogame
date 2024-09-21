function CTrackMenu(iLevel, aScore){
    
    var _aStageButton;
    
    var _oFade;
    var _oButBack;
    var _oPanelContainer;
    
    var _pStartPanelPos;
    
    this._init = function(iLevel, aScore){
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown",function(){});
        s_oStage.addChild(_oFade);
        
        new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        
        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(oPanel);   


        var oTitle = new CTLText(_oPanelContainer, 
                    -300, -133, 600, 40, 
                    40, "center", "#ffffff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_SELECT_TRACK,
                    true, true, false,
                    false );
                    

        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2 +70;
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2},500, createjs.Ease.quartIn)

        var oFrameSprite = s_oSpriteLibrary.getSprite('but_level');
        var oEnabledSprite = s_oSpriteLibrary.getSprite('image_'+iLevel);
        var oDisabledSprite = s_oSpriteLibrary.getSprite('cover_'+iLevel);
        _aStageButton = new Array();
        for(var i=0; i<NUM_TRACKS_PER_WORLD; i++){
            var szLevel = i+1;
            _aStageButton[i] = new CLevelBut(-180+i*180, 0,oFrameSprite, oDisabledSprite, oEnabledSprite, _oPanelContainer);
            _aStageButton[i].addEventListenerWithParams(ON_MOUSE_UP, this._onStageBut, this, i);
            _aStageButton[i].addLevelText(szLevel);
            _aStageButton[i].disable();
        }
        this._setStageInfo();
        

        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _oButBack = new CGfxButton(326, -200, oSprite, _oPanelContainer);
        _oButBack.addEventListener(ON_MOUSE_UP, this._onBack, this);
    };
    
    this.unload = function(){
        for(var i=0; i<NUM_TRACKS_PER_WORLD; i++){            
            _aStageButton[i].unload();
        }
        _oFade.off("mousedown",function(){});
        
        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oPanelContainer);
    };
    
    this._setStageInfo = function(){     
        var iCurIndexActive = 0;
        for(var i=0; i<aScore.length; i++){
            if(aScore[i] > 0){
                iCurIndexActive = i+1;
            }
        }
        
        if(iCurIndexActive < NUM_TRACKS_PER_WORLD){
            _aStageButton[iCurIndexActive].enable();
            _aStageButton[iCurIndexActive].addScore(LEVEL_INFO[iLevel * NUM_TRACKS_PER_WORLD + iCurIndexActive].time);
            _aStageButton[iCurIndexActive].pulseAnimation();
        }
        
        for(var i=0; i<iCurIndexActive; i++){
            _aStageButton[i].enable();
            _aStageButton[i].addScore(aScore[i]);
        }
        
    };
    
    this._onStageBut = function(iStage){
        this.unload();
        s_oWorldMenu.unload();
        s_oMain.gotoGame(iLevel * NUM_TRACKS_PER_WORLD + iStage);       
    };
    
    this._onBack = function(){
        for(var i=0; i<3; i++){            
            _aStageButton[i].setClickable();
        }
        _oButBack.setClickable();
        var oParent = this;

        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            oParent.unload();
        });
        
    };
    

    this._init(iLevel, aScore);
};

