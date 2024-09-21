function CLevelBuilder(oPlayer, aCars, oElementContainer, iLevel){
    
    var _iTotalCars;
    var _iCurLeftSegment;
    var _iCurRightSegment;

    this._init = function(oPlayer, aCars, oElementContainer, iLevel){
        _iTotalCars = LEVEL_INFO[iLevel].num_cars; // total number of cars on the road ///100
        
        _iCurLeftSegment = 0;
        _iCurRightSegment = 0;
        
        this._initTerrainInfo();
        this._initFinishLane();
        this._initSprites();
        this._initCars();
        
    };
    
    this._attachSprites = function(){
        for(var i=0; i<s_oGame.getSegments().length; i++){
            var aElements = s_oGame.getSegments()[i].sprites;
            for(var j=0; j<aElements.length; j++){
                oElementContainer.addChildAt(aElements[j].source,0);
            }
        };
    };

    this._addSprite = function(n, sprite, offset) {
        if(s_oGame.getSegments()[n] === undefined){
            return;
        }
        var oSprite = s_oSpriteLibrary.getSprite(sprite.name);

        var oElement = createBitmap(oSprite);
        oElement.visible = false;
        
        if(sprite.name === SPRITES.SIGN_INDICATION.name){
            oElement.regX = oSprite.width/2;
        }
        
        var iSpriteWidth = oSprite.width * SPRITES.SCALE;
        
        var iCollisionCenter = offset + iSpriteWidth/2* (offset > 0 ? 1 : -1);
        var iCollisionWidth = iSpriteWidth;
        if(sprite.collision){
            if(sprite.collision.center){
                iCollisionCenter = offset + ( offset > 0 ? sprite.collision.center : -(oSprite.width - sprite.collision.center) ) * SPRITES.SCALE;
            }
            if(sprite.collision.width){
                iCollisionWidth = sprite.collision.width * SPRITES.SCALE;
            }
        }

        s_oGame.getSegments()[n].sprites.push({ source: oElement, offset: offset, sprite:oSprite, collision:{center:iCollisionCenter, width:iCollisionWidth}});
    };

    this._addDensityElements = function(iSide, oSprite, iStartSegment, iFinalSegment, iPosition, iOccurrence, iRepetition){

        iOccurrence = iOccurrence || 100;
        iRepetition = iRepetition || 1;

        if(iSide === AMBIENT.SIDE.BOTH){
            /// RECURSIVE
            this._addDensityElements(AMBIENT.SIDE.RIGHT, oSprite, iStartSegment, iFinalSegment, iPosition, iOccurrence, iRepetition);
            this._addDensityElements(AMBIENT.SIDE.LEFT, oSprite, iStartSegment, iFinalSegment, iPosition, iOccurrence, iRepetition);
            
        } else {
            for(var i=iStartSegment; i<=iFinalSegment; i+=iRepetition){
                if(Math.random()*100 <= iOccurrence){
                    var iYPosition = i + Util.randomInt(0,5);
                    var iXPosition = iSide + iSide*iPosition  + iSide*(Math.random() * 2);
                    this._addSprite(iYPosition, oSprite, iXPosition);
                }
            }
        }
    };

    this._addPreciseElements = function(iSide, oSprite, iStartSegment, iFinalSegment, iPosition, iOccurrence, iRepetition){

        iOccurrence = iOccurrence || 100;
        iRepetition = iRepetition || 1;

        if(iSide === AMBIENT.SIDE.BOTH){
            /// RECURSIVE
            this._addPreciseElements(AMBIENT.SIDE.RIGHT, oSprite, iStartSegment, iFinalSegment, iPosition, iOccurrence, iRepetition);
            this._addPreciseElements(AMBIENT.SIDE.LEFT, oSprite, iStartSegment, iFinalSegment, iPosition, iOccurrence, iRepetition);
            
        } else {
            for(var i=iStartSegment; i<=iFinalSegment; i+=iRepetition){
                if(Math.random()*100 <= iOccurrence){
                    var iYPosition = i;
                    var iXPosition = iSide + iSide*iPosition;
                    this._addSprite(iYPosition, oSprite, iXPosition);
                }
            }
        }

        
    };

    this._initSprites = function() {
        var n, i;

        var oLevelInfo = AMBIENT_INFO[iLevel];
        
        for(var i=0; i<oLevelInfo.length; i++){
            
            var oAmbientArea = oLevelInfo[i];
            
            var iStartSegment;
            var iFinalSegment;
            if(oAmbientArea.segments.constructor === Array){
                iStartSegment = oAmbientArea.segments[0];
                iFinalSegment = oAmbientArea.segments[1];
            } else {
                iStartSegment = oAmbientArea.segments;
                iFinalSegment = oAmbientArea.segments;
            }
            

            switch(oAmbientArea.disposition){
                case AMBIENT.DISPOSITION.PRECISE:{
                        this._addPreciseElements(oAmbientArea.side, oAmbientArea.sprite, iStartSegment, iFinalSegment, oAmbientArea.position, oAmbientArea.occurrence, oAmbientArea.repetitionevery) 
                        break;
                }
                case AMBIENT.DISPOSITION.DENSITY:{
                        this._addDensityElements(oAmbientArea.side, oAmbientArea.sprite, iStartSegment, iFinalSegment, oAmbientArea.position, oAmbientArea.occurrence, oAmbientArea.repetitionevery);
                        
                        break;
                }
            }
        }
       
        this._attachSprites();
    };
    
    /*
    this._initCoins = function(){
        for(var n=30; n<200; n+=4){
          //this._addCoin(n);
          
            if(s_oGame.getSegments()[n] === undefined){
                return;
            }
          
          var oCoin = new CCoin(oElementContainer);
        
          s_oGame.getSegments()[n].coins.push({ source: oCoin.getContainer(), offset: 0.8-n*0.003, sprite:oCoin.getContainer().getBounds(), class: oCoin});
        }        
    };
    */        
    
    this._initFinishLane = function(){        
        var oSprite = s_oSpriteLibrary.getSprite("finish");

        var oElement = createBitmap(oSprite);
        oElement.visible = false;
        oElement.regX = oSprite.width/2;

        s_oGame.getSegments()[s_oGame.getSegments().length-1].sprites.push({ source: oElement, offset: 0, sprite:oSprite});
    };

    this._initCars = function() {
        var n, car, segment, offset, z, sprite, speed;
        for (var n = 0 ; n < _iTotalCars ; n++) {
            offset = Math.random() * Util.randomChoice([-0.8, 0.8]);
            z      = Math.floor(Math.random() * s_oGame.getSegments().length) * SEGMENT_LENGTH;

            sprite = Util.randomChoice(SPRITES.CARS);
            speed  = oPlayer.getMaxSpeed()/4 + Math.random() * oPlayer.getMaxSpeed()/(sprite == SPRITES.SEMI ? 4 : 2);

            var oCar = new CCar(sprite, offset, z, speed, oElementContainer);

            segment = s_oGame.findSegment(z);
            segment.cars.push(oCar);
            aCars.push(oCar);
        }        
    };
    
    this._initTerrainInfo = function(){
        
        COLORS.LIGHT.road = LEVEL_INFO[iLevel].terrain.color.light.road;
        COLORS.LIGHT.grass = LEVEL_INFO[iLevel].terrain.color.light.grass;
        COLORS.LIGHT.rumble = LEVEL_INFO[iLevel].terrain.color.light.rumble;
        COLORS.LIGHT.lane = LEVEL_INFO[iLevel].terrain.color.light.lane;
        
        COLORS.DARK.road = LEVEL_INFO[iLevel].terrain.color.dark.road;
        COLORS.DARK.grass = LEVEL_INFO[iLevel].terrain.color.dark.grass;
        COLORS.DARK.rumble = LEVEL_INFO[iLevel].terrain.color.dark.rumble;
        
        
        TERRAIN_ADHERENCE = LEVEL_INFO[iLevel].terrain.adherence;
        TERRAIN_MAX_INERTIA = LEVEL_INFO[iLevel].terrain.max_inertia;
        
        NUM_LANES = LEVEL_INFO[iLevel].terrain.num_lanes;
        
        ROAD_BOUNDS = LEVEL_INFO[iLevel].terrain.roadbounds;
    };
    
    this._init(oPlayer, aCars, oElementContainer, iLevel);
}


