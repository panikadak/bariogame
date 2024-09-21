function CRoad(oRoadDrawingLevel, oElementContainer, iLevel){    
    var _iTrackLength;      // z length of entire track (computed)
    var _iCameraDepth;
    
    var _aSegments;         // array of road segments
    
    this._init = function(oRoadDrawingLevel, oElementContainer, iLevel){
        _iTrackLength = null;
        _iCameraDepth = CAMERA_DEPTH;
        
        _aSegments = new Array();
        
        this.resetRoad();
    };

    this.findSegment = function(z) {
        return _aSegments[Math.floor(z/SEGMENT_LENGTH) % _aSegments.length];
    };
   
    //=========================================================================
    // BUILD ROAD GEOMETRY
    //=========================================================================

    this.lastX = function(){
        return (_aSegments.length === 0) ? 0 : _aSegments[_aSegments.length-1].p2.world.x;
    };

    this.lastY = function() { 
        return (_aSegments.length === 0) ? 0 : _aSegments[_aSegments.length-1].p2.world.y; 
    };

    this.addSegment = function(curve, y) {
      var n = _aSegments.length;
      _aSegments.push({
         index: n,
            p1: { world: {x: this.lastX(), y: this.lastY(),  z:  n   *SEGMENT_LENGTH }, camera: {}, screen: {} },
            p2: { world: {x: this.lastX() + curve , y: y,        z: (n+1)*SEGMENT_LENGTH }, camera: {}, screen: {} },
         curve: curve,
         sprites: [],
         cars: [],
         coins: [],
         color: Math.floor(n/RUMBLE_LENGTH)%2 ? COLORS.DARK : COLORS.LIGHT
      });
    };

    this.addRoad = function(enter, hold, leave, curve, y) {
        var startY   = this.lastY();
        var endY     = startY + (Util.toInt(y, 0) * SEGMENT_LENGTH);
        var n, total = enter + hold + leave;

        for(n = 0 ; n < enter ; n++)
          this.addSegment(Util.easeIn(0, curve, n/enter), Util.easeInOut(startY, endY, n/total));
        for(n = 0 ; n < hold  ; n++)
          this.addSegment(curve, Util.easeInOut(startY, endY, (enter+n)/total));
        for(n = 0 ; n < leave ; n++)
          this.addSegment(Util.easeInOut(curve, 0, n/leave), Util.easeInOut(startY, endY, (enter+hold+n)/total));
    };

    this.addStraight = function(num) {
        num = num || ROAD.LENGTH.MEDIUM;
        this.addRoad(num, num, num, 0);
    };

    this.addHill = function(num, height) {
        num    = num    || ROAD.LENGTH.MEDIUM;
        height = height || ROAD.HILL.MEDIUM;
        this.addRoad(num, num, num, 0, height);
    };

    this.addCurve = function(num, curve, height) {
        num    = num    || ROAD.LENGTH.MEDIUM;
        curve  = curve  || ROAD.CURVE.MEDIUM;
        height = height || ROAD.HILL.NONE;
        this.addRoad(num, num, num, curve);
    };
    
    this.addStandardRoad = function(num, curve, height){
        num    = num    || ROAD.LENGTH.MEDIUM;
        curve  = curve  || ROAD.CURVE.NONE;
        height = height || ROAD.HILL.NONE;
        this.addRoad(num, num, num, curve, height);
    };
    
    this.addLowRollingHills = function(num, height) {
        num    = num    || ROAD.LENGTH.SHORT;
        height = height || ROAD.HILL.LOW;
        this.addRoad(num, num, num,  0,  height/2);
        this.addRoad(num, num, num,  0, -height);
        this.addRoad(num, num, num,  ROAD.CURVE.EASY,  height);
        this.addRoad(num, num, num,  0,  0);
        this.addRoad(num, num, num,  -ROAD.CURVE.EASY,  height/2);
        this.addRoad(num, num, num,  0,  0);        
    };
                            
    this.addSCurves = function(num, firstCurve, firstHill) {

        num    = num    || ROAD.LENGTH.MEDIUM;
        firstCurve  = firstCurve  || ROAD.CURVE.MEDIUM;
        firstHill = firstHill || ROAD.HILL.NONE;
        
        var iCurveDir;
        if(firstCurve >= 0){
            iCurveDir = 1;
        } else {
            iCurveDir = -1;
        }

        var iHillDir;
        if(firstHill >= 0){
            iHillDir = 1;
        } else {
            iHillDir = -1;
        }

        firstCurve = Math.abs(firstCurve);
        firstHill = Math.abs(firstHill);


        var iLightCurveParam;
        var iHeavyCurveParam;
        switch(firstCurve){
            case ROAD.CURVE.EASY:{
                    iLightCurveParam = ROAD.CURVE.NONE;
                    iHeavyCurveParam = ROAD.CURVE.EASY;
                    break;
            }
            case ROAD.CURVE.MEDIUM:{
                    iLightCurveParam = ROAD.CURVE.EASY;
                    iHeavyCurveParam = ROAD.CURVE.MEDIUM;
                    break;
            }
            case ROAD.CURVE.HARD:{
                    iLightCurveParam = ROAD.CURVE.MEDIUM;
                    iHeavyCurveParam = ROAD.CURVE.HARD;
                    break;
            }
        }
        
        var iLightHillParam;
        var iHeavyHillParam;
        switch(firstHill){
            case ROAD.HILL.EASY:{
                    iLightHillParam = ROAD.HILL.NONE;
                    iHeavyHillParam = ROAD.HILL.LOW;
                    break;
            }
            case ROAD.HILL.MEDIUM:{
                    iLightHillParam = ROAD.HILL.LOW;
                    iHeavyHillParam = ROAD.HILL.MEDIUM;
                    break;
            }
            case ROAD.HILL.HIGH:{
                    iLightHillParam = ROAD.HILL.MEDIUM;
                    iHeavyHillParam = ROAD.HILL.HIGH;
                    break;
            }
        }

        this.addRoad(num, num, num,   iCurveDir*iLightCurveParam,   ROAD.HILL.NONE);
        this.addRoad(num, num, num,   iCurveDir*iHeavyCurveParam,   iHillDir*iHeavyHillParam);
        this.addRoad(num, num, num,   iCurveDir*iLightCurveParam,   -iHillDir*iLightHillParam);
        this.addRoad(num, num, num,  -iCurveDir*iLightCurveParam,   iHillDir*iHeavyHillParam);
        this.addRoad(num, num, num,  -iCurveDir*iHeavyCurveParam,   -iHillDir*iLightHillParam);
    };

    this.addBumps = function(num, curve) {
        
        num    = num    || ROAD.LENGTH.SHORT/2;
        curve  = curve  || ROAD.CURVE.NONE;

        this.addRoad(num, num, num, 0,  num/2.5);
        this.addRoad(num, num, num, 0, -num/6.25);
        this.addRoad(num, num, num, curve, -num/2.5);
        this.addRoad(num, num, num, 0,  num/1,5625);
        this.addRoad(num, num, num, 0,  num/2.5);
        this.addRoad(num, num, num, -curve, -num/1.785);
        this.addRoad(num, num, num, 0,  num/2.5);
        this.addRoad(num, num, num, 0, -num/6.25);
    };

    this.addDownhillToEnd = function(num, curve) {
        num = num || 200;
        curve  = curve  || ROAD.CURVE.NONE;
        
        this.addRoad(num, num, num, curve, -Math.round(this.lastY()/SEGMENT_LENGTH));
    };

    this.resetRoad = function() {
        _aSegments = [];
        
        
        var oLevelInfo = ROAD_INFO[iLevel];
        
        for(var i=0; i<oLevelInfo.length; i++){
            
            var oRoadSegment = oLevelInfo[i];

            switch(oRoadSegment.roadtype){
                case ROAD.TYPE.STANDARD:{
                        this.addStandardRoad(oRoadSegment.length, oRoadSegment.curve, oRoadSegment.hill);
                        break;
                }
                case ROAD.TYPE.CURVE_S:{
                        this.addSCurves(oRoadSegment.length, oRoadSegment.curve, oRoadSegment.hill);
                        break;
                }
                case ROAD.TYPE.BUMPS:{
                        this.addBumps(oRoadSegment.length, oRoadSegment.curve);
                        break;
                }
                case ROAD.TYPE.FINAL:{
                        this.addDownhillToEnd(oRoadSegment.length, oRoadSegment.curve);
                        break;
                }
                
            }
        }

        _aSegments[this.findSegment(PLAYER_Z_FROMCAMERA).index + 2].color = COLORS.START;
        _aSegments[this.findSegment(PLAYER_Z_FROMCAMERA).index + 3].color = COLORS.START;
        for(var n = 0 ; n < RUMBLE_LENGTH ; n++)
          _aSegments[_aSegments.length-1-n].color       = COLORS.FINISH;

        _iTrackLength = _aSegments.length * SEGMENT_LENGTH;
    };
   
    this.setCameraDepth = function(iValue){
        _iCameraDepth = iValue;
    };
   
    this.clearVisual = function(oPlayerPos){
        oRoadDrawingLevel.graphics.clear();
        
        var oZPosition = oPlayerPos.z;
        var baseSegment = this.findSegment(oZPosition);
        
        var n, segment, car, sprite;
        for(n = (DRAW_DISTANCE-1) ; n > 0 ; n--) {
            segment = _aSegments[(baseSegment.index + n) % _aSegments.length];
            //////////////////RENDER CARS
            for(var i = 0 ; i < segment.cars.length ; i++) {
                car         = segment.cars[i];
                car.setVisible(false);
            }
            
            //////////////////RENDER ELEMENTS
            for(var i = 0 ; i < segment.sprites.length ; i++) {
                sprite      = segment.sprites[i];
                sprite.source.visible= false;
            }
        }
    };
   
    this.update = function(oPlayerPos){
        oRoadDrawingLevel.graphics.clear();
        
        var oZPosition = oPlayerPos.z;
        var oXPosition = oPlayerPos.x;

        var baseSegment = this.findSegment(oZPosition);
        var basePercent = Util.percentRemaining(oZPosition, SEGMENT_LENGTH);

        var playerSegment = this.findSegment(oZPosition+PLAYER_Z_FROMCAMERA);
        var playerPercent = Util.percentRemaining(oZPosition+PLAYER_Z_FROMCAMERA, SEGMENT_LENGTH);
        var playerY       = Util.interpolate(playerSegment.p1.world.y, playerSegment.p2.world.y, playerPercent);
        
        var maxy        = CANVAS_HEIGHT;

        var x = 0;
        var dx = -(baseSegment.curve * basePercent);

        var n, segment;

        var xProject = oXPosition * ROAD_WIDTH;
        var yProject = playerY + CAMERA_HEIGHT;
        for(n = 0 ; n < DRAW_DISTANCE ; n++) {
            segment        = _aSegments[(baseSegment.index + n) % _aSegments.length];
            segment.looped = segment.index < baseSegment.index;
            segment.clip   = maxy;

            var zProject = oZPosition - (segment.looped ? _iTrackLength : 0);

            Util.project(segment.p1, xProject - x,        yProject, zProject, _iCameraDepth);
            Util.project(segment.p2, xProject - x - dx,   yProject, zProject, _iCameraDepth);

            x = x + dx;
            dx = dx + segment.curve;

            
            if ((segment.p1.camera.z <= _iCameraDepth) || // behind us
                (segment.p2.screen.y >= segment.p1.screen.y) || // back face cull
                (segment.p2.screen.y >= maxy))          // clip by (already rendered) segment
              continue;

            Render.segment(oRoadDrawingLevel, CANVAS_WIDTH, NUM_LANES,
                           segment.p1.screen.x,
                           segment.p1.screen.y,
                           segment.p1.screen.w,
                           segment.p2.screen.x,
                           segment.p2.screen.y,
                           segment.p2.screen.w,
                           segment.color);

            maxy = segment.p2.screen.y;
        }

        var car;
        var sprite;
        var spriteScale;
        var spriteX;
        var spriteY;
        
        var iDepth = 0;
        for(n = (DRAW_DISTANCE-1) ; n > 0 ; n--) {
            segment = _aSegments[(baseSegment.index + n) % _aSegments.length];
            //////////////////RENDER CARS
            for(var i = 0 ; i < segment.cars.length ; i++) {
                car         = segment.cars[i];

                var iRelativeZ = car.getZ() - oZPosition;
                var iRelativeXPos = car.getOffset() - oXPosition;
                
                if(iRelativeZ > CAR_FARVIEW_OFFSET){
                    if(segment.curve > -CAR_CURVEVIEW_OFFSET && segment.curve < CAR_CURVEVIEW_OFFSET){
                        car.setDirection(CAR_CENTER);
                    } else if(segment.curve < CAR_CURVEVIEW_OFFSET){
                        car.setDirection(CAR_LEFT);
                    } else {
                        car.setDirection(CAR_RIGHT);
                    }
                } else {
                    if(iRelativeXPos > -CAR_SIDEVIEW_OFFSET && car.getOffset() - oXPosition < CAR_SIDEVIEW_OFFSET){
                        car.setDirection(CAR_CENTER);
                    } else if (iRelativeXPos < -CAR_SIDEVIEW_OFFSET){
                        car.setDirection(CAR_RIGHT);
                    } else {
                        car.setDirection(CAR_LEFT);
                    }
                }
                        

                sprite      = car.getSprite();
                spriteScale = Util.interpolate(segment.p1.screen.scale, segment.p2.screen.scale, car.getPercent());
                spriteX     = Util.interpolate(segment.p1.screen.x,     segment.p2.screen.x,     car.getPercent()) + (spriteScale * car.getOffset() * ROAD_PER_HALF_CANVAS_WIDTH);
                spriteY     = Util.interpolate(segment.p1.screen.y,     segment.p2.screen.y,     car.getPercent());

                car.setVisible(true);
                oElementContainer.setChildIndex(car.getCar(), iDepth++);

                Render.sprite(sprite, car.getCar(), spriteScale, spriteX, spriteY, -0.5, -1, segment.clip);
            }
            
            //////////////////RENDER ELEMENTS            
            for(var i = 0 ; i < segment.sprites.length ; i++) {
                sprite      = segment.sprites[i];
                spriteScale = segment.p1.screen.scale;
                spriteX     = segment.p1.screen.x + (spriteScale * sprite.offset * ROAD_PER_HALF_CANVAS_WIDTH);
                spriteY     = segment.p1.screen.y;

                sprite.source.visible= true;
                oElementContainer.setChildIndex(sprite.source, iDepth++);

                Render.sprite(sprite.sprite, sprite.source, spriteScale, spriteX, spriteY, (sprite.offset < 0 ? -1 : 0), -1, segment.clip);
            }
        }

        //CLEAN SPRITES BEHIND
        var iLookBehind = 25;
        var iStartIndex = (baseSegment.index - iLookBehind) % _aSegments.length;
        if(iStartIndex>0){
            for(var j=0; j<iLookBehind; j++){
                segment = _aSegments[iStartIndex+j];
                //segment = _aSegments[j];
                for(var i = 0 ; i < segment.sprites.length ; i++) {
                    sprite      = segment.sprites[i];
                    sprite.source.visible= false;
                }
                for(var i = 0 ; i < segment.cars.length ; i++) {
                    car      = segment.cars[i];
                    car.setVisible(false);
                }
            }
        }else {
            ////END OF TRACK
            var iNewStartIndex = _aSegments.length + iStartIndex -1;
            for(var j=iNewStartIndex; j<_aSegments.length; j++){
                segment = _aSegments[j];
                //segment = _aSegments[j];
                for(var i = 0 ; i < segment.sprites.length ; i++) {
                    sprite      = segment.sprites[i];
                    sprite.source.visible= false;
                }
                for(var i = 0 ; i < segment.cars.length ; i++) {
                    car      = segment.cars[i];
                    car.setVisible(false);
                }
            }
        }
        
    };
   
    this.exponentialFog =   function(distance, density) {
        return 1 / (Math.pow(Math.E, (distance * distance * density))); 
    };
   
    this.getTrackLength = function(){
        return _iTrackLength;
    };
   
    this.getSegments = function(){
        return _aSegments;
    };
   
    this._init(oRoadDrawingLevel, oElementContainer, iLevel);
}


