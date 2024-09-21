var LOCALSTORAGE_TIMES = "times";
var LOCALSTORAGE_TOTALSCORE = "totalscore";

var s_aTimeScore = new Array();
var s_iTotalScore = 0;



function CLocalStorage(szName){
    var _bLocalStorage = true;

    this._init = function(szName){   
        try{
            var bFlag = window.localStorage.getItem(szName);
            this.resetData();
            if(bFlag !== null && bFlag !== undefined){  
                this.loadData();
            }
        }catch(e){
            this.resetData();
        }        
        
    };

    this.isDirty = function(){
        for (var i = 0; i <s_aTimeScore.length; i++) {
            if(s_aTimeScore[i] > 0){
                return true;
            }
        }
        return false;
    };

    this.isUsed = function(){
        try{
            window.localStorage.setItem("ls_available","ok");
        }catch(evt){
            _bLocalStorage = false;
        }
        
        return _bLocalStorage;
    };

    this.resetData = function(){

        s_aTimeScore = new Array();
        for(var i=0; i<NUM_TRACKS_PER_WORLD*NUM_WORLDS; i++){
            s_aTimeScore[i] = 0;
        }
        
        s_iTotalScore = 0;

    };

    this.deleteData = function(){
        window.localStorage.removeItem(szName);
    };

    this.saveData = function(){
        var oJSONData = {};
        oJSONData[LOCALSTORAGE_TIMES] = s_aTimeScore;
        oJSONData[LOCALSTORAGE_TOTALSCORE] = s_iTotalScore;

        /*ADD MORE JSON THIS WAY
        var randB = "randomboolean";
        oJSONData[randB] = true;
        oJSONData["anothernestedjson"] = {pippo: 3, ciccio: 10};
        */

        window.localStorage.setItem(szName, JSON.stringify(oJSONData));
        
    };

    this.loadData = function(){
        var szData = JSON.parse(window.localStorage.getItem(szName));
        
        var aLoadedScore = szData[LOCALSTORAGE_TIMES];
        s_aTimeScore = new Array();
        for(var i=0; i<aLoadedScore.length; i++){
            s_aTimeScore[i] = parseInt(aLoadedScore[i]);
        }
        
        var iLoadedScore = szData[LOCALSTORAGE_TOTALSCORE];
        s_iTotalScore = parseInt(iLoadedScore);
        
    };

    this._init(szName);

}