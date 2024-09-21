function CRollingText(oScoreText, iScore, iTime, bFormatTime) {

    var _oTweenText = null;

    var _oValue;

    this._init = function (oScoreText, iScore, iTime) {
        _oValue = {value: parseInt(oScoreText.text)};

        _oTweenText = createjs.Tween.get(_oValue, {override: true}).to({value: iScore}, iTime, createjs.Ease.cubicInOut).addEventListener("change", function () {
            if(!bFormatTime){
                oScoreText.text = "+"+Math.floor(_oValue.value);
            } else {
                oScoreText.text = formatTime(_oValue.value);
            }
            
        }).call(function () {
            createjs.Tween.removeTweens(_oTweenText);
        });
    };

    this._init(oScoreText, iScore, iTime);

    return this;
}