gdjs.LearderboardCode = {};
gdjs.LearderboardCode.localVariables = [];
gdjs.LearderboardCode.GDScoreTextObjects1= [];
gdjs.LearderboardCode.GDScoreTextObjects2= [];
gdjs.LearderboardCode.GDScoreTextObjects3= [];
gdjs.LearderboardCode.GDPlayerNameInputObjects1= [];
gdjs.LearderboardCode.GDPlayerNameInputObjects2= [];
gdjs.LearderboardCode.GDPlayerNameInputObjects3= [];
gdjs.LearderboardCode.GDRestartButtonObjects1= [];
gdjs.LearderboardCode.GDRestartButtonObjects2= [];
gdjs.LearderboardCode.GDRestartButtonObjects3= [];
gdjs.LearderboardCode.GDMainMenuButtonObjects1= [];
gdjs.LearderboardCode.GDMainMenuButtonObjects2= [];
gdjs.LearderboardCode.GDMainMenuButtonObjects3= [];
gdjs.LearderboardCode.GDScoresButtonObjects1= [];
gdjs.LearderboardCode.GDScoresButtonObjects2= [];
gdjs.LearderboardCode.GDScoresButtonObjects3= [];
gdjs.LearderboardCode.GDGameOverObjects1= [];
gdjs.LearderboardCode.GDGameOverObjects2= [];
gdjs.LearderboardCode.GDGameOverObjects3= [];
gdjs.LearderboardCode.GDSubmitButtonObjects1= [];
gdjs.LearderboardCode.GDSubmitButtonObjects2= [];
gdjs.LearderboardCode.GDSubmitButtonObjects3= [];
gdjs.LearderboardCode.GDMonsterObjects1= [];
gdjs.LearderboardCode.GDMonsterObjects2= [];
gdjs.LearderboardCode.GDMonsterObjects3= [];


gdjs.LearderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LearderboardCode.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.LearderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LearderboardCode.GDPlayerNameInputObjects2[i].setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LearderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LearderboardCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "0";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LearderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LearderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LearderboardCode.GDPlayerNameInputObjects1[i].setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


};gdjs.LearderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "2e66ecc2-822b-4860-ae21-80d274657f1d", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LearderboardCode.GDPlayerNameInputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "2e66ecc2-822b-4860-ae21-80d274657f1d", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), (( gdjs.LearderboardCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.LearderboardCode.GDPlayerNameInputObjects2[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.LearderboardCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.LearderboardCode.GDPlayerNameInputObjects2[0].getText()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2e66ecc2-822b-4860-ae21-80d274657f1d", true);
}}

}


};gdjs.LearderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.LearderboardCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.LearderboardCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.LearderboardCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score   " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{ //Subevents
gdjs.LearderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LearderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LearderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LearderboardCode.GDPlayerNameInputObjects1[i].setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LearderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LearderboardCode.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.LearderboardCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LearderboardCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.LearderboardCode.GDRestartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LearderboardCode.GDRestartButtonObjects1[k] = gdjs.LearderboardCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.LearderboardCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.LearderboardCode.GDMainMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LearderboardCode.GDMainMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.LearderboardCode.GDMainMenuButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LearderboardCode.GDMainMenuButtonObjects1[k] = gdjs.LearderboardCode.GDMainMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.LearderboardCode.GDMainMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.LearderboardCode.GDSubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LearderboardCode.GDSubmitButtonObjects1.length;i<l;++i) {
    if ( gdjs.LearderboardCode.GDSubmitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LearderboardCode.GDSubmitButtonObjects1[k] = gdjs.LearderboardCode.GDSubmitButtonObjects1[i];
        ++k;
    }
}
gdjs.LearderboardCode.GDSubmitButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LearderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("2e66ecc2-822b-4860-ae21-80d274657f1d");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.LearderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LearderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LearderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LearderboardCode.GDScoreTextObjects3.length = 0;
gdjs.LearderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LearderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LearderboardCode.GDPlayerNameInputObjects3.length = 0;
gdjs.LearderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LearderboardCode.GDRestartButtonObjects2.length = 0;
gdjs.LearderboardCode.GDRestartButtonObjects3.length = 0;
gdjs.LearderboardCode.GDMainMenuButtonObjects1.length = 0;
gdjs.LearderboardCode.GDMainMenuButtonObjects2.length = 0;
gdjs.LearderboardCode.GDMainMenuButtonObjects3.length = 0;
gdjs.LearderboardCode.GDScoresButtonObjects1.length = 0;
gdjs.LearderboardCode.GDScoresButtonObjects2.length = 0;
gdjs.LearderboardCode.GDScoresButtonObjects3.length = 0;
gdjs.LearderboardCode.GDGameOverObjects1.length = 0;
gdjs.LearderboardCode.GDGameOverObjects2.length = 0;
gdjs.LearderboardCode.GDGameOverObjects3.length = 0;
gdjs.LearderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LearderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LearderboardCode.GDSubmitButtonObjects3.length = 0;
gdjs.LearderboardCode.GDMonsterObjects1.length = 0;
gdjs.LearderboardCode.GDMonsterObjects2.length = 0;
gdjs.LearderboardCode.GDMonsterObjects3.length = 0;

gdjs.LearderboardCode.eventsList2(runtimeScene);
gdjs.LearderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LearderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LearderboardCode.GDScoreTextObjects3.length = 0;
gdjs.LearderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LearderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LearderboardCode.GDPlayerNameInputObjects3.length = 0;
gdjs.LearderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LearderboardCode.GDRestartButtonObjects2.length = 0;
gdjs.LearderboardCode.GDRestartButtonObjects3.length = 0;
gdjs.LearderboardCode.GDMainMenuButtonObjects1.length = 0;
gdjs.LearderboardCode.GDMainMenuButtonObjects2.length = 0;
gdjs.LearderboardCode.GDMainMenuButtonObjects3.length = 0;
gdjs.LearderboardCode.GDScoresButtonObjects1.length = 0;
gdjs.LearderboardCode.GDScoresButtonObjects2.length = 0;
gdjs.LearderboardCode.GDScoresButtonObjects3.length = 0;
gdjs.LearderboardCode.GDGameOverObjects1.length = 0;
gdjs.LearderboardCode.GDGameOverObjects2.length = 0;
gdjs.LearderboardCode.GDGameOverObjects3.length = 0;
gdjs.LearderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LearderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LearderboardCode.GDSubmitButtonObjects3.length = 0;
gdjs.LearderboardCode.GDMonsterObjects1.length = 0;
gdjs.LearderboardCode.GDMonsterObjects2.length = 0;
gdjs.LearderboardCode.GDMonsterObjects3.length = 0;


return;

}

gdjs['LearderboardCode'] = gdjs.LearderboardCode;
