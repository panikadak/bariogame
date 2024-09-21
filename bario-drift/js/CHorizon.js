function CHorizon(iLevel){
    
    var _oPrevCameraPos;
    
    var _aLevelBG;
    
    var _oHorizon;

    this._init = function(iLevel){
        
        _oPrevCameraPos = {x: 0, y: 0};
        
        _oHorizon = new createjs.Container();
        s_oStage.addChild(_oHorizon);
        
        _aLevelBG = new Array();

        var iWorldNum = Math.floor(iLevel/NUM_TRACKS_PER_WORLD);
        var szSprite0 = "w"+iWorldNum+"_bg0"
        var szSprite1 = "w"+iWorldNum+"_bg1"

        var oSprite = s_oSpriteLibrary.getSprite(szSprite0);
        this._addBG(oSprite);
        
        var oSprite = s_oSpriteLibrary.getSprite(szSprite1);
        this._addBG(oSprite);

    };
    
    this._addBG = function(oSprite){
       
        var oBg = new CBackground(oSprite, _oHorizon);
       
        
        _aLevelBG.push(oBg);
    };
    
    this.resetPos = function(){
        _oPrevCameraPos = {x: 0, y: 0};
    };
    
    this.restart = function(){
        for(var i=0; i<_aLevelBG.length; i++){
            _aLevelBG[i].restart();
        }
    };
    
    this.move = function(oCameraPos){
        var oPosXToAdd  = _oPrevCameraPos.x - oCameraPos.x;//, y: oCameraPos.y - _oPrevCameraPos.y}; ////X IS INCREMENTAL, CAUSE WHEN THE TRACK ENDS, THE X IS NOT 0

        if(oPosXToAdd > 30 || oPosXToAdd < -30){
            _oPrevCameraPos = {x: oCameraPos.x, y: oCameraPos.y};
            return;
        }

        _aLevelBG[0].moveX(oPosXToAdd);
        _aLevelBG[1].moveX(oPosXToAdd*PARALLAX_RATIO_X);
        
        _aLevelBG[0].moveY(oCameraPos.y*PARALLAX_RATIO_Y_0);    ///Y IT'S NOT INCREMENTAL, CAUSE WILL BE ALWAYS 0 TO THE END OF TRACK
        _aLevelBG[1].moveY(oCameraPos.y*PARALLAX_RATIO_Y_1);


        _oPrevCameraPos = {x: oCameraPos.x, y: oCameraPos.y};
    };
    
    this._init(iLevel);
}


