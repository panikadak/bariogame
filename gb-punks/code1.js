gdjs.Level1Code = {};
gdjs.Level1Code.localVariables = [];
gdjs.Level1Code.forEachCount0_3 = 0;

gdjs.Level1Code.forEachCount1_3 = 0;

gdjs.Level1Code.forEachCount2_3 = 0;

gdjs.Level1Code.forEachCount3_3 = 0;

gdjs.Level1Code.forEachIndex2 = 0;

gdjs.Level1Code.forEachIndex3 = 0;

gdjs.Level1Code.forEachObjects2 = [];

gdjs.Level1Code.forEachObjects3 = [];

gdjs.Level1Code.forEachTemporary2 = null;

gdjs.Level1Code.forEachTotalCount2 = 0;

gdjs.Level1Code.forEachTotalCount3 = 0;

gdjs.Level1Code.GDMonsterObjects1= [];
gdjs.Level1Code.GDMonsterObjects2= [];
gdjs.Level1Code.GDMonsterObjects3= [];
gdjs.Level1Code.GDMonsterObjects4= [];
gdjs.Level1Code.GDMonsterObjects5= [];
gdjs.Level1Code.GDShape1Objects1= [];
gdjs.Level1Code.GDShape1Objects2= [];
gdjs.Level1Code.GDShape1Objects3= [];
gdjs.Level1Code.GDShape1Objects4= [];
gdjs.Level1Code.GDShape1Objects5= [];
gdjs.Level1Code.GDShape2Objects1= [];
gdjs.Level1Code.GDShape2Objects2= [];
gdjs.Level1Code.GDShape2Objects3= [];
gdjs.Level1Code.GDShape2Objects4= [];
gdjs.Level1Code.GDShape2Objects5= [];
gdjs.Level1Code.GDShape3Objects1= [];
gdjs.Level1Code.GDShape3Objects2= [];
gdjs.Level1Code.GDShape3Objects3= [];
gdjs.Level1Code.GDShape3Objects4= [];
gdjs.Level1Code.GDShape3Objects5= [];
gdjs.Level1Code.GDShape4Objects1= [];
gdjs.Level1Code.GDShape4Objects2= [];
gdjs.Level1Code.GDShape4Objects3= [];
gdjs.Level1Code.GDShape4Objects4= [];
gdjs.Level1Code.GDShape4Objects5= [];
gdjs.Level1Code.GDScoreLabelObjects1= [];
gdjs.Level1Code.GDScoreLabelObjects2= [];
gdjs.Level1Code.GDScoreLabelObjects3= [];
gdjs.Level1Code.GDScoreLabelObjects4= [];
gdjs.Level1Code.GDScoreLabelObjects5= [];
gdjs.Level1Code.GDLifeObjects1= [];
gdjs.Level1Code.GDLifeObjects2= [];
gdjs.Level1Code.GDLifeObjects3= [];
gdjs.Level1Code.GDLifeObjects4= [];
gdjs.Level1Code.GDLifeObjects5= [];
gdjs.Level1Code.GDObstacleObjects1= [];
gdjs.Level1Code.GDObstacleObjects2= [];
gdjs.Level1Code.GDObstacleObjects3= [];
gdjs.Level1Code.GDObstacleObjects4= [];
gdjs.Level1Code.GDObstacleObjects5= [];
gdjs.Level1Code.GDShape4ExplosionObjects1= [];
gdjs.Level1Code.GDShape4ExplosionObjects2= [];
gdjs.Level1Code.GDShape4ExplosionObjects3= [];
gdjs.Level1Code.GDShape4ExplosionObjects4= [];
gdjs.Level1Code.GDShape4ExplosionObjects5= [];
gdjs.Level1Code.GDShape3ExplosionObjects1= [];
gdjs.Level1Code.GDShape3ExplosionObjects2= [];
gdjs.Level1Code.GDShape3ExplosionObjects3= [];
gdjs.Level1Code.GDShape3ExplosionObjects4= [];
gdjs.Level1Code.GDShape3ExplosionObjects5= [];
gdjs.Level1Code.GDShape2ExplosionObjects1= [];
gdjs.Level1Code.GDShape2ExplosionObjects2= [];
gdjs.Level1Code.GDShape2ExplosionObjects3= [];
gdjs.Level1Code.GDShape2ExplosionObjects4= [];
gdjs.Level1Code.GDShape2ExplosionObjects5= [];
gdjs.Level1Code.GDShape1ExplosionObjects1= [];
gdjs.Level1Code.GDShape1ExplosionObjects2= [];
gdjs.Level1Code.GDShape1ExplosionObjects3= [];
gdjs.Level1Code.GDShape1ExplosionObjects4= [];
gdjs.Level1Code.GDShape1ExplosionObjects5= [];


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects2[i].getCenterXInScene() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) + 5 ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDMonsterObjects2[k] = gdjs.Level1Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects1[i].getCenterXInScene() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 5 ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDMonsterObjects1[k] = gdjs.Level1Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


};gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape1Objects2ObjectsGDgdjs_9546Level1Code_9546GDShape2Objects2ObjectsGDgdjs_9546Level1Code_9546GDShape3Objects2ObjectsGDgdjs_9546Level1Code_9546GDShape4Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects2, "Shape2": gdjs.Level1Code.GDShape2Objects2, "Shape3": gdjs.Level1Code.GDShape3Objects2, "Shape4": gdjs.Level1Code.GDShape4Objects2});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.Level1Code.GDObstacleObjects1});
gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShapeCreation") > 1.3;
if (isConditionTrue_0) {
gdjs.Level1Code.GDShape1Objects2.length = 0;

gdjs.Level1Code.GDShape2Objects2.length = 0;

gdjs.Level1Code.GDShape3Objects2.length = 0;

gdjs.Level1Code.GDShape4Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape1Objects2ObjectsGDgdjs_9546Level1Code_9546GDShape2Objects2ObjectsGDgdjs_9546Level1Code_9546GDShape3Objects2ObjectsGDgdjs_9546Level1Code_9546GDShape4Objects2Objects, "Shape" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 4)), gdjs.randomInRange(80, 640 - 80), -(100), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects2[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects2[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects2[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects2[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects2[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects2[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects2[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects2[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ObstacleCreation") > 5;
if (isConditionTrue_0) {
gdjs.Level1Code.GDObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDObstacleObjects1Objects, gdjs.randomInRange(80, 640 - 80), -(100), "");
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].setZOrder(4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}}

}


};gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects2);
{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects2[i].addForce(0, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects2[i].addForce(0, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects2[i].addForce(0, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects2[i].addForce(0, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects2[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects2[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects2[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects2[i].rotate(90, runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects2[i].addPolarForce(90, 1.5 * runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).add(7 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape1Objects3ObjectsGDgdjs_9546Level1Code_9546GDShape2Objects3ObjectsGDgdjs_9546Level1Code_9546GDShape3Objects3ObjectsGDgdjs_9546Level1Code_9546GDShape4Objects3Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects3, "Shape2": gdjs.Level1Code.GDShape2Objects3, "Shape3": gdjs.Level1Code.GDShape3Objects3, "Shape4": gdjs.Level1Code.GDShape4Objects3});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDMonsterObjects3Objects = Hashtable.newFrom({"Monster": gdjs.Level1Code.GDMonsterObjects3});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape1Objects3Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects3});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape1ExplosionObjects4Objects = Hashtable.newFrom({"Shape1Explosion": gdjs.Level1Code.GDShape1ExplosionObjects4});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape2Objects3Objects = Hashtable.newFrom({"Shape2": gdjs.Level1Code.GDShape2Objects3});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape2ExplosionObjects4Objects = Hashtable.newFrom({"Shape2Explosion": gdjs.Level1Code.GDShape2ExplosionObjects4});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape3Objects3Objects = Hashtable.newFrom({"Shape3": gdjs.Level1Code.GDShape3Objects3});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape3ExplosionObjects4Objects = Hashtable.newFrom({"Shape3Explosion": gdjs.Level1Code.GDShape3ExplosionObjects4});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape4Objects3Objects = Hashtable.newFrom({"Shape4": gdjs.Level1Code.GDShape4Objects3});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape4ExplosionObjects4Objects = Hashtable.newFrom({"Shape4Explosion": gdjs.Level1Code.GDShape4ExplosionObjects4});
gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape1Objects3Objects) != 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level1Code.GDShape1Objects3, gdjs.Level1Code.GDShape1Objects4);

gdjs.Level1Code.GDShape1ExplosionObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape1ExplosionObjects4Objects, (( gdjs.Level1Code.GDShape1Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects4[0].getCenterXInScene()), (( gdjs.Level1Code.GDShape1Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects4[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape1ExplosionObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1ExplosionObjects4[i].setParticleSize1((( gdjs.Level1Code.GDShape1Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects4[0].getWidth()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape2Objects3Objects) != 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level1Code.GDShape2Objects3, gdjs.Level1Code.GDShape2Objects4);

gdjs.Level1Code.GDShape2ExplosionObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape2ExplosionObjects4Objects, (( gdjs.Level1Code.GDShape2Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects4[0].getCenterXInScene()), (( gdjs.Level1Code.GDShape2Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects4[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape2ExplosionObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2ExplosionObjects4[i].setParticleSize1((( gdjs.Level1Code.GDShape2Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects4[0].getWidth()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape3Objects3Objects) != 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level1Code.GDShape3Objects3, gdjs.Level1Code.GDShape3Objects4);

gdjs.Level1Code.GDShape3ExplosionObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape3ExplosionObjects4Objects, (( gdjs.Level1Code.GDShape3Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects4[0].getCenterXInScene()), (( gdjs.Level1Code.GDShape3Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects4[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape3ExplosionObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3ExplosionObjects4[i].setParticleSize1((( gdjs.Level1Code.GDShape3Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects4[0].getWidth()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape4Objects3Objects) != 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level1Code.GDShape4Objects3, gdjs.Level1Code.GDShape4Objects4);

gdjs.Level1Code.GDShape4ExplosionObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape4ExplosionObjects4Objects, (( gdjs.Level1Code.GDShape4Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects4[0].getCenterXInScene()), (( gdjs.Level1Code.GDShape4Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects4[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape4ExplosionObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4ExplosionObjects4[i].setParticleSize1((( gdjs.Level1Code.GDShape4Objects4.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects4[0].getWidth()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreLabel"), gdjs.Level1Code.GDScoreLabelObjects4);
gdjs.copyArray(gdjs.Level1Code.GDShape1Objects3, gdjs.Level1Code.GDShape1Objects4);

gdjs.copyArray(gdjs.Level1Code.GDShape2Objects3, gdjs.Level1Code.GDShape2Objects4);

gdjs.copyArray(gdjs.Level1Code.GDShape3Objects3, gdjs.Level1Code.GDShape3Objects4);

gdjs.copyArray(gdjs.Level1Code.GDShape4Objects3, gdjs.Level1Code.GDShape4Objects4);

{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects4.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects4[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects4.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects4[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects4.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects4[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects4.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "monster.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDScoreLabelObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreLabelObjects4[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.Level1Code.GDObstacleObjects2});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.Level1Code.GDMonsterObjects2});
gdjs.Level1Code.eventsList5 = function(runtimeScene) {

};gdjs.Level1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects2);

gdjs.Level1Code.forEachTotalCount3 = 0;
gdjs.Level1Code.forEachObjects3.length = 0;
gdjs.Level1Code.forEachCount0_3 = gdjs.Level1Code.GDShape1Objects2.length;
gdjs.Level1Code.forEachTotalCount3 += gdjs.Level1Code.forEachCount0_3;
gdjs.Level1Code.forEachObjects3.push.apply(gdjs.Level1Code.forEachObjects3,gdjs.Level1Code.GDShape1Objects2);
gdjs.Level1Code.forEachCount1_3 = gdjs.Level1Code.GDShape2Objects2.length;
gdjs.Level1Code.forEachTotalCount3 += gdjs.Level1Code.forEachCount1_3;
gdjs.Level1Code.forEachObjects3.push.apply(gdjs.Level1Code.forEachObjects3,gdjs.Level1Code.GDShape2Objects2);
gdjs.Level1Code.forEachCount2_3 = gdjs.Level1Code.GDShape3Objects2.length;
gdjs.Level1Code.forEachTotalCount3 += gdjs.Level1Code.forEachCount2_3;
gdjs.Level1Code.forEachObjects3.push.apply(gdjs.Level1Code.forEachObjects3,gdjs.Level1Code.GDShape3Objects2);
gdjs.Level1Code.forEachCount3_3 = gdjs.Level1Code.GDShape4Objects2.length;
gdjs.Level1Code.forEachTotalCount3 += gdjs.Level1Code.forEachCount3_3;
gdjs.Level1Code.forEachObjects3.push.apply(gdjs.Level1Code.forEachObjects3,gdjs.Level1Code.GDShape4Objects2);
for (gdjs.Level1Code.forEachIndex3 = 0;gdjs.Level1Code.forEachIndex3 < gdjs.Level1Code.forEachTotalCount3;++gdjs.Level1Code.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects3);
gdjs.Level1Code.GDShape1Objects3.length = 0;

gdjs.Level1Code.GDShape2Objects3.length = 0;

gdjs.Level1Code.GDShape3Objects3.length = 0;

gdjs.Level1Code.GDShape4Objects3.length = 0;


if (gdjs.Level1Code.forEachIndex3 < gdjs.Level1Code.forEachCount0_3) {
    gdjs.Level1Code.GDShape1Objects3.push(gdjs.Level1Code.forEachObjects3[gdjs.Level1Code.forEachIndex3]);
}
else if (gdjs.Level1Code.forEachIndex3 < gdjs.Level1Code.forEachCount0_3+gdjs.Level1Code.forEachCount1_3) {
    gdjs.Level1Code.GDShape2Objects3.push(gdjs.Level1Code.forEachObjects3[gdjs.Level1Code.forEachIndex3]);
}
else if (gdjs.Level1Code.forEachIndex3 < gdjs.Level1Code.forEachCount0_3+gdjs.Level1Code.forEachCount1_3+gdjs.Level1Code.forEachCount2_3) {
    gdjs.Level1Code.GDShape3Objects3.push(gdjs.Level1Code.forEachObjects3[gdjs.Level1Code.forEachIndex3]);
}
else if (gdjs.Level1Code.forEachIndex3 < gdjs.Level1Code.forEachCount0_3+gdjs.Level1Code.forEachCount1_3+gdjs.Level1Code.forEachCount2_3+gdjs.Level1Code.forEachCount3_3) {
    gdjs.Level1Code.GDShape4Objects3.push(gdjs.Level1Code.forEachObjects3[gdjs.Level1Code.forEachIndex3]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDShape1Objects3ObjectsGDgdjs_9546Level1Code_9546GDShape2Objects3ObjectsGDgdjs_9546Level1Code_9546GDShape3Objects3ObjectsGDgdjs_9546Level1Code_9546GDShape4Objects3Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDMonsterObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Level1Code.eventsList4(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);

for (gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDObstacleObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects2);
gdjs.Level1Code.GDObstacleObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDObstacleObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDObstacleObjects2.push(gdjs.Level1Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDObstacleObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].getBehavior("Health").Hit(1, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "killed.wav", false, 100, 1);
}}
}

}


};gdjs.Level1Code.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.Level1Code.GDMonsterObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDMonsterObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDMonsterObjects2[k] = gdjs.Level1Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Level1Code.asyncCallback13925140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Learderboard", false);
}gdjs.Level1Code.localVariables.length = 0;
}
gdjs.Level1Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level1Code.asyncCallback13925140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level1Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects2[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDMonsterObjects2[k] = gdjs.Level1Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level1Code.GDLifeObjects2);
/* Reuse gdjs.Level1Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects2[i].SetValue((( gdjs.Level1Code.GDMonsterObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDMonsterObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Level1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDMonsterObjects1[k] = gdjs.Level1Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13924292);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Animation").setAnimationName("MonsterDead");
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.25);
}
{ //Subevents
gdjs.Level1Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.Level1Code.eventsList1(runtimeScene);
}


{


gdjs.Level1Code.eventsList2(runtimeScene);
}


{


gdjs.Level1Code.eventsList3(runtimeScene);
}


{


gdjs.Level1Code.eventsList6(runtimeScene);
}


{


gdjs.Level1Code.eventsList9(runtimeScene);
}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDMonsterObjects1.length = 0;
gdjs.Level1Code.GDMonsterObjects2.length = 0;
gdjs.Level1Code.GDMonsterObjects3.length = 0;
gdjs.Level1Code.GDMonsterObjects4.length = 0;
gdjs.Level1Code.GDMonsterObjects5.length = 0;
gdjs.Level1Code.GDShape1Objects1.length = 0;
gdjs.Level1Code.GDShape1Objects2.length = 0;
gdjs.Level1Code.GDShape1Objects3.length = 0;
gdjs.Level1Code.GDShape1Objects4.length = 0;
gdjs.Level1Code.GDShape1Objects5.length = 0;
gdjs.Level1Code.GDShape2Objects1.length = 0;
gdjs.Level1Code.GDShape2Objects2.length = 0;
gdjs.Level1Code.GDShape2Objects3.length = 0;
gdjs.Level1Code.GDShape2Objects4.length = 0;
gdjs.Level1Code.GDShape2Objects5.length = 0;
gdjs.Level1Code.GDShape3Objects1.length = 0;
gdjs.Level1Code.GDShape3Objects2.length = 0;
gdjs.Level1Code.GDShape3Objects3.length = 0;
gdjs.Level1Code.GDShape3Objects4.length = 0;
gdjs.Level1Code.GDShape3Objects5.length = 0;
gdjs.Level1Code.GDShape4Objects1.length = 0;
gdjs.Level1Code.GDShape4Objects2.length = 0;
gdjs.Level1Code.GDShape4Objects3.length = 0;
gdjs.Level1Code.GDShape4Objects4.length = 0;
gdjs.Level1Code.GDShape4Objects5.length = 0;
gdjs.Level1Code.GDScoreLabelObjects1.length = 0;
gdjs.Level1Code.GDScoreLabelObjects2.length = 0;
gdjs.Level1Code.GDScoreLabelObjects3.length = 0;
gdjs.Level1Code.GDScoreLabelObjects4.length = 0;
gdjs.Level1Code.GDScoreLabelObjects5.length = 0;
gdjs.Level1Code.GDLifeObjects1.length = 0;
gdjs.Level1Code.GDLifeObjects2.length = 0;
gdjs.Level1Code.GDLifeObjects3.length = 0;
gdjs.Level1Code.GDLifeObjects4.length = 0;
gdjs.Level1Code.GDLifeObjects5.length = 0;
gdjs.Level1Code.GDObstacleObjects1.length = 0;
gdjs.Level1Code.GDObstacleObjects2.length = 0;
gdjs.Level1Code.GDObstacleObjects3.length = 0;
gdjs.Level1Code.GDObstacleObjects4.length = 0;
gdjs.Level1Code.GDObstacleObjects5.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects5.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects5.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects5.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects5.length = 0;

gdjs.Level1Code.eventsList10(runtimeScene);
gdjs.Level1Code.GDMonsterObjects1.length = 0;
gdjs.Level1Code.GDMonsterObjects2.length = 0;
gdjs.Level1Code.GDMonsterObjects3.length = 0;
gdjs.Level1Code.GDMonsterObjects4.length = 0;
gdjs.Level1Code.GDMonsterObjects5.length = 0;
gdjs.Level1Code.GDShape1Objects1.length = 0;
gdjs.Level1Code.GDShape1Objects2.length = 0;
gdjs.Level1Code.GDShape1Objects3.length = 0;
gdjs.Level1Code.GDShape1Objects4.length = 0;
gdjs.Level1Code.GDShape1Objects5.length = 0;
gdjs.Level1Code.GDShape2Objects1.length = 0;
gdjs.Level1Code.GDShape2Objects2.length = 0;
gdjs.Level1Code.GDShape2Objects3.length = 0;
gdjs.Level1Code.GDShape2Objects4.length = 0;
gdjs.Level1Code.GDShape2Objects5.length = 0;
gdjs.Level1Code.GDShape3Objects1.length = 0;
gdjs.Level1Code.GDShape3Objects2.length = 0;
gdjs.Level1Code.GDShape3Objects3.length = 0;
gdjs.Level1Code.GDShape3Objects4.length = 0;
gdjs.Level1Code.GDShape3Objects5.length = 0;
gdjs.Level1Code.GDShape4Objects1.length = 0;
gdjs.Level1Code.GDShape4Objects2.length = 0;
gdjs.Level1Code.GDShape4Objects3.length = 0;
gdjs.Level1Code.GDShape4Objects4.length = 0;
gdjs.Level1Code.GDShape4Objects5.length = 0;
gdjs.Level1Code.GDScoreLabelObjects1.length = 0;
gdjs.Level1Code.GDScoreLabelObjects2.length = 0;
gdjs.Level1Code.GDScoreLabelObjects3.length = 0;
gdjs.Level1Code.GDScoreLabelObjects4.length = 0;
gdjs.Level1Code.GDScoreLabelObjects5.length = 0;
gdjs.Level1Code.GDLifeObjects1.length = 0;
gdjs.Level1Code.GDLifeObjects2.length = 0;
gdjs.Level1Code.GDLifeObjects3.length = 0;
gdjs.Level1Code.GDLifeObjects4.length = 0;
gdjs.Level1Code.GDLifeObjects5.length = 0;
gdjs.Level1Code.GDObstacleObjects1.length = 0;
gdjs.Level1Code.GDObstacleObjects2.length = 0;
gdjs.Level1Code.GDObstacleObjects3.length = 0;
gdjs.Level1Code.GDObstacleObjects4.length = 0;
gdjs.Level1Code.GDObstacleObjects5.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects5.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects5.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects5.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects5.length = 0;


return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
