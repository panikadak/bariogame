var Render = {

  polygon: function(ctx, x1, y1, x2, y2, x3, y3, x4, y4, color) {

    
    ctx.graphics.beginFill(color);
    ctx.graphics.moveTo(x1, y1);
    ctx.graphics.lineTo(x2, y2);
    ctx.graphics.lineTo(x3, y3);
    ctx.graphics.lineTo(x4, y4);

  },

  //---------------------------------------------------------------------------

  segment: function(ctx, width, lanes, x1, y1, w1, x2, y2, w2, color) {

    var r1 = Render.rumbleWidth(w1, lanes),
        r2 = Render.rumbleWidth(w2, lanes),
        l1 = Render.laneMarkerWidth(w1, lanes),
        l2 = Render.laneMarkerWidth(w2, lanes),
        lanew1, lanew2, lanex1, lanex2, lane;
    
    ///COMMENT IF YOU DON'T WANT SHOWN GRASS
    ctx.graphics.beginFill(color.grass);
    ctx.graphics.drawRect(0, y2, width, y1 - y2);
    ////////////////
    
    Render.polygon(ctx, x1-w1-r1, y1, x1-w1, y1, x2-w2, y2, x2-w2-r2, y2, color.rumble);
    Render.polygon(ctx, x1+w1+r1, y1, x1+w1, y1, x2+w2, y2, x2+w2+r2, y2, color.rumble);
    Render.polygon(ctx, x1-w1,    y1, x1+w1, y1, x2+w2, y2, x2-w2,    y2, color.road);
    
    if (color.lane) {
      lanew1 = w1*2/lanes;
      lanew2 = w2*2/lanes;
      lanex1 = x1 - w1 + lanew1;
      lanex2 = x2 - w2 + lanew2;
      for(lane = 1 ; lane < lanes ; lanex1 += lanew1, lanex2 += lanew2, lane++)
        Render.polygon(ctx, lanex1 - l1/2, y1, lanex1 + l1/2, y1, lanex2 + l2/2, y2, lanex2 - l2/2, y2, color.lane);
    }
    
  },

  //---------------------------------------------------------------------------

  background: function(ctx, background, width, height, layer, rotation, offset) {

    rotation = rotation || 0;
    offset   = offset   || 0;

    var imageW = layer.w/2;
    var imageH = layer.h;

    var sourceX = layer.x + Math.floor(layer.w * rotation);
    var sourceY = layer.y
    var sourceW = Math.min(imageW, layer.x+layer.w-sourceX);
    var sourceH = imageH;
    
    var destX = 0;
    var destY = offset;
    var destW = Math.floor(width * (sourceW/imageW));
    var destH = height;

    ctx.drawImage(background, sourceX, sourceY, sourceW, sourceH, destX, destY, destW, destH);
    if (sourceW < imageW)
      ctx.drawImage(background, layer.x, sourceY, imageW-sourceW, sourceH, destW-1, destY, width-destW, destH);
  },

  //---------------------------------------------------------------------------   
  sprite: function(sprite, sprites, scale, destX, destY, offsetX, offsetY, clipY) {

        var iProportion =  scale * ROAD_PER_SCALE_PER_HALF_CANVAS_WIDTH;
        
        //  scale for projection AND relative to roadWidth (for tweakUI)
        var destW  = (sprite.width * iProportion);
        var destH  = (sprite.height * iProportion);

        var iScale = (destH/sprite.height);

        destX = destX + (destW * (offsetX || 0));
        destY = destY + (destH * (offsetY || 0));

        var clipH = clipY ? Math.max(0, destY+destH-clipY) : 0;
        if (clipH < destH){
            sprites.x = destX;
            sprites.y = destY;

            sprites.scaleX = sprites.scaleY = iScale;
            
            var iClipHeight = sprite.height - (sprite.height*clipH/destH);

            var oRect = new createjs.Rectangle(0,0,sprite.width,iClipHeight);
            sprites.sourceRect = oRect;
            
        } else {
            sprites.visible = false;
        }
  },  
   
  //---------------------------------------------------------------------------


  rumbleWidth:     function(projectedRoadWidth, lanes) { return projectedRoadWidth/Math.max(6,  2*lanes); },
  laneMarkerWidth: function(projectedRoadWidth, lanes) { return projectedRoadWidth/Math.max(32, 8*lanes); }

}
