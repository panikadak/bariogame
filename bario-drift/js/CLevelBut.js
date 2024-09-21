function CLevelBut(iXPos,iYPos,oSprite, bActive, iLevel, oParentContainer){
    
    var _bDisabled;
    
    var _iScaleFactor;
    
    var _aCbCompleted;
    var _aCbOwner;
    var _aParams = [];
    
    var _oButton;
    var _oFgContainer;

    var _oInfoStroke;
    var _oInfo;
    var _oLevelStroke = null;
    var _oLevel = null;
    var _oBg;
    var _oTween;
    var _oParent;
    
    
    this._init =function(iXPos,iYPos, oSprite, oParentContainer){
        _bDisabled = false;
        
        _iScaleFactor = 1;
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oButton = new createjs.Container();
        _oButton.x = iXPos;
        _oButton.y = iYPos; 
        _oButton.scaleX = _oButton.scaleY = _iScaleFactor;
        oParentContainer.addChild(_oButton);       
        
        _oFgContainer = new createjs.Container();
        _oFgContainer.x = iXPos;
        _oFgContainer.y = iYPos; 
        _oFgContainer.scaleX = _oButton.scaleY = _iScaleFactor;
        oParentContainer.addChild(_oFgContainer);     

        var iWidth = oSprite.width/2;
        var iHeight = oSprite.height;
        var oData = {   
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: iWidth, height: iHeight, regX: iWidth/2, regY: iHeight/2}, 
                        animations: {on:[0], off:[1]}
                   };
                   
         var oSpriteSheet = new createjs.SpriteSheet(oData);
	_oBg = createSprite(oSpriteSheet, "on",iWidth/2,iHeight/2,iWidth,iHeight); 
        _oButton.addChild(_oBg);
        
        if(bActive){
            _oBg.gotoAndStop("on");
        } else {
            _oBg.gotoAndStop("off");
        }

        this._initListener();
        
    };
    
    this.unload = function(){
        if(s_bMobile){
            _oButton.off("mousedown", this.buttonDown);
            _oButton.off("pressup" , this.buttonRelease);
        } else {
            _oButton.off("mousedown", this.buttonDown);
            _oButton.off("mouseover", this.buttonOver);
            _oButton.off("pressup" , this.buttonRelease);
        }
        
       oParentContainer.removeChild(_oButton);
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this.enable = function(){
        _oBg.gotoAndStop("on");
        _bDisabled = false;
        if(_oLevel !== null){
            _oLevelStroke.color = "#000000";
            _oLevel.color = "#ffffff";
        }
    };
    
    this.disable = function(){
        _bDisabled = true;
        _oBg.gotoAndStop("off");
        if(_oLevel !== null){
            _oLevelStroke.color = "#000000";
            _oLevel.color = "#a8a8a8";
        }
    };
    
    this.setClickable = function(bVal){
        _bDisabled = !bVal;
    };
    
    this.addInfo = function(iInfo){
        _oInfoStroke = new createjs.Text(iInfo," 24px "+PRIMARY_FONT, "#000000");
        _oInfoStroke.x = oSprite.height/2-24;
        _oInfoStroke.y = -oSprite.height/2+10;
        _oInfoStroke.textAlign = "center";
        _oInfoStroke.textBaseline = "middle";
        _oInfoStroke.lineWidth = 200;
        _oInfoStroke.outline = 4;
        _oInfoStroke.rotation = 30;
        _oButton.addChild(_oInfoStroke);

        _oInfo = new createjs.Text(iInfo," 24px "+PRIMARY_FONT, "#ffffff");
        _oInfo.x = _oInfoStroke.x;
        _oInfo.y = _oInfoStroke.y;
        _oInfo.textAlign = "center";
        _oInfo.textBaseline = "middle";
        _oInfo.lineWidth = 200;
        _oInfo.rotation = _oInfoStroke.rotation;
        _oButton.addChild(_oInfo);
    };
    
    this.addScore = function(iScore){
        var oScoreStroke = new createjs.Text(formatTime(iScore)," 30px "+PRIMARY_FONT, "#000000");
        oScoreStroke.y = oSprite.height/2+12;
        oScoreStroke.textAlign = "center";
        oScoreStroke.textBaseline = "middle";
        oScoreStroke.lineWidth = 200;
        oScoreStroke.outline = 4;
        _oFgContainer.addChild(oScoreStroke);

        var oScore = new createjs.Text(formatTime(iScore)," 30px "+PRIMARY_FONT, "#ffffff");
        oScore.y = oScoreStroke.y;
        oScore.textAlign = "center";
        oScore.textBaseline = "middle";
        oScore.lineWidth = 200;
        _oFgContainer.addChild(oScore);
    };
    
    this.addLevelText = function(iLevel){
        _oLevelStroke = new createjs.Text(iLevel," 80px "+PRIMARY_FONT, "#000000");
        _oLevelStroke.y = 2;
        _oLevelStroke.textAlign = "center";
        _oLevelStroke.textBaseline = "middle";
        _oLevelStroke.lineWidth = 200;
        _oLevelStroke.outline = 8;
        _oButton.addChild(_oLevelStroke);

        _oLevel = new createjs.Text(iLevel," 80px "+PRIMARY_FONT, "#ffd800");
        _oLevel.y = 2;
        _oLevel.textAlign = "center";
        _oLevel.textBaseline = "middle";
        _oLevel.lineWidth = 200;
        _oButton.addChild(_oLevel);
    };
    
    this._initListener = function(){
        if(s_bMobile){
            _oButton.on("mousedown", this.buttonDown);
            _oButton.on("pressup" , this.buttonRelease);
        } else {
            _oButton.on("mousedown", this.buttonDown);
            _oButton.on("mouseover", this.buttonOver);
            _oButton.on("pressup" , this.buttonRelease);
        }     
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.addEventListenerWithParams = function(iEvent,cbCompleted, cbOwner,aParams){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };
    
    this.buttonRelease = function(){
        if(_bDisabled){
            return;
        }
        _oButton.scaleX = _iScaleFactor;
        _oButton.scaleY = _iScaleFactor;

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP], _aParams);
        }
    };
    
    this.buttonDown = function(){
        
        if(_bDisabled){
            return;
        }
        playSound("click",1,0);
        _oButton.scaleX = _iScaleFactor*0.9;
        _oButton.scaleY = _iScaleFactor*0.9;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN], _aParams);
       }
    };
    
    this.buttonOver = function(evt){
        if(!s_bMobile){
            if(_bDisabled){
                return;
            }
            evt.target.cursor = "pointer";
        }  
    };
    
    this.pulseAnimation = function () {
        _oTween = createjs.Tween.get(_oButton).to({scaleX: _iScaleFactor*1.1, scaleY: _iScaleFactor*1.1}, 850, createjs.Ease.quadOut).to({scaleX: _iScaleFactor, scaleY: _iScaleFactor}, 650, createjs.Ease.quadIn).call(function () {
            _oParent.pulseAnimation();
        });
    };

    this.trembleAnimation = function () {
        _oTween = createjs.Tween.get(_oButton).to({rotation: 5}, 75, createjs.Ease.quadOut).to({rotation: -5}, 140, createjs.Ease.quadIn).to({rotation: 0}, 75, createjs.Ease.quadIn).wait(750).call(function () {
            _oParent.trebleAnimation();
        });
    };
    
    this.setImage = function(oSprite){
        
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
    };
    
    this.setScale = function(iScale){
        _iScaleFactor = iScale;
        _oButton.scaleX = _oButton.scaleY = iScale;
    };
    
    this.setX = function(iXPos){
         _oButton.x = iXPos;
    };
    
    this.setY = function(iYPos){
         _oButton.y = iYPos;
    };
    
    this.getButtonImage = function(){
        return _oButton;
    };

    this.getX = function(){
        return _oButton.x;
    };
    
    this.getY = function(){
        return _oButton.y;
    };

    _oParent = this;
    this._init(iXPos,iYPos,oSprite, oParentContainer);
    
    return this;
}


