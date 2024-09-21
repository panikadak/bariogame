var ROAD_INFO = new Array();
var AMBIENT_INFO = new Array();
var LEVEL_INFO = new Array();

//////////////////////////////////////// WORLD 1 ///////////////////////////////////////////////
////////////////
ROAD_INFO[0] = [
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,     "curve":ROAD.CURVE.EASY},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.EASY},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,     "curve":-ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,     "curve":-ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,     "curve":-ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,     "curve":ROAD.CURVE.EASY},
    
    {"roadtype": ROAD.TYPE.FINAL, "length":ROAD.LENGTH.MEDIUM}
]
LEVEL_INFO[0] = {   "time":65000, "num_cars":10, 
                    "terrain":{"roadbounds":2, "num_lanes":3, "adherence":1, "max_inertia":0.03 , "color": {
                                                                                                    "light":  { road: '#7c4461', grass: "#feee97", rumble: '#fcaa4c', lane: '#fcaa4c'  },
                                                                                                    "dark":   { road: '#4b355b', grass: "#fbcc98", rumble: '#fcaa4c'                   }
                                                                                                } 
                                                            }
                };
AMBIENT_INFO[0] = [
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.TREE1, "segments":[0, 800], "position":0, "occurrence": 30, "repetitionevery": 1, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.TREE1, "segments":[800, 1200], "position":0, "occurrence": 30, "repetitionevery": 2, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BUSH1, "segments":[1000, 1200], "position":0, "occurrence": 10, "repetitionevery": 1, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BUSH1, "segments":[1200, 2000], "position":0, "occurrence": 10, "repetitionevery": 3, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BUSH2, "segments":[1600, 2600], "position":0, "occurrence": 10, "repetitionevery": 3, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.TREE1, "segments":[1200, 4000], "position":0.5, "occurrence": 10, "repetitionevery": 3, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.TREE1, "segments":[2000, 4000], "position":0.5, "occurrence": 30, "repetitionevery": 3, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD03, "segments":400, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD01, "segments":1200, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD01, "segments":[3000, 3200], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BOULDER, "segments":1800, "position":1, "disposition":AMBIENT.DISPOSITION.PRECISE}
]                        
////////////////
ROAD_INFO[1] = [
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,     "curve":ROAD.CURVE.EASY },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,     "curve":-ROAD.CURVE.EASY},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG},
    {"roadtype": ROAD.TYPE.CURVE_S,  "length":ROAD.LENGTH.LONG,     "curve":ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.CURVE_S, "length":ROAD.LENGTH.MEDIUM,    "curve":ROAD.CURVE.MEDIUM},
   
    {"roadtype": ROAD.TYPE.FINAL, "length":ROAD.LENGTH.MEDIUM,      "curve":-ROAD.CURVE.MEDIUM}
]
LEVEL_INFO[1] = {   "time":70000, "num_cars":15, 
                    "terrain":{"roadbounds":2, "num_lanes":3, "adherence":1, "max_inertia":0.03 , "color": {
                                                                                                    "light":  { road: '#7c4461', grass: "#feee97", rumble: '#fcaa4c', lane: '#fcaa4c'  },
                                                                                                    "dark":   { road: '#4b355b', grass: "#fbcc98", rumble: '#fcaa4c'                   }
                                                                                                } 
                                                            }
                };
AMBIENT_INFO[1] = [
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.TREE2, "segments":[0, 450], "position":0, "occurrence": 30, "repetitionevery": 2, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BUSH2, "segments":[0, 450], "position":0, "occurrence": 30, "repetitionevery": 2, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BOULDER, "segments":[0, 450], "position":0, "occurrence": 10, "repetitionevery": 3, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD02, "segments":[350, 450], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.TREE2, "segments":[450, 1500], "position":0, "occurrence": 40, "repetitionevery": 2, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BUSH2, "segments":[450, 1500], "position":0, "occurrence": 30, "repetitionevery": 4, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD04, "segments":[900, 1200], "position":0, "repetitionevery": 50, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD04, "segments":[925, 1225], "position":0, "repetitionevery": 50, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.TREE2, "segments":[1500, 3800], "position":1, "occurrence": 20, "repetitionevery": 4, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BOULDER, "segments":[1500, 2800], "position":0, "occurrence": 10, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.STUMP, "segments":[1500, 2800], "position":0, "occurrence": 10, "repetitionevery": 15, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.TREE1, "segments":[2400, 3200], "position":0, "occurrence": 30, "repetitionevery": 5, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BUSH2, "segments":[3200, 3800], "position":0, "occurrence": 20, "repetitionevery": 4, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD03, "segments":1700, "position":5, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD01, "segments":2000, "position":4, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD04, "segments":2300, "position":5, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD02, "segments":2600, "position":6, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD03, "segments":2900, "position":3, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD03, "segments":3650, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
]
////////////////
ROAD_INFO[2] = [
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,    "curve":-ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,    "curve":ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,    "curve":-ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,    "curve":ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,    "curve":-ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,    "curve":ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,    "curve":-ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,     "curve":-ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,     "curve":ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,     "curve":-ROAD.CURVE.EASY},
    
    {"roadtype": ROAD.TYPE.FINAL, "length":ROAD.LENGTH.MEDIUM}
]
LEVEL_INFO[2] = {   "time":70000, "num_cars":15, 
                    "terrain":{"roadbounds":2, "num_lanes":3, "adherence":1, "max_inertia":0.03 , "color": {
                        "light":  { road: '#7c4461', grass: "#feee97", rumble: '#fcaa4c', lane: '#fcaa4c'  },
                        "dark":   { road: '#4b355b', grass: "#fbcc98", rumble: '#fcaa4c'                   }
                                                                                                } 
                                                            }
                };
AMBIENT_INFO[2] = [
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.TREE2, "segments":[0, 700], "position":0, "occurrence": 30, "repetitionevery": 3, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.TREE1, "segments":[0, 1700], "position":0, "occurrence": 30, "repetitionevery": 4, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BUSH1, "segments":[480, 1700], "position":0, "occurrence": 30, "repetitionevery": 4, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.TREE1, "segments":[1700, 2300], "position":0, "occurrence": 20, "repetitionevery": 5, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.DEAD_TREE, "segments":[1700, 2700], "position":0, "occurrence": 40, "repetitionevery": 5, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.DEAD_TREE, "segments":[2300, 3700], "position":0, "occurrence": 40, "repetitionevery": 5, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.TREE1, "segments":[3400, 3700], "position":0, "occurrence": 20, "repetitionevery": 6, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BOULDER, "segments":[1500, 3700], "position":0, "occurrence": 10, "repetitionevery": 16, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD01, "segments":[1700, 2000], "position":0, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD01, "segments":[1725, 2025], "position":0, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD03, "segments":1300, "position":0, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD05, "segments":[2400, 2800], "position":0, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD01, "segments":[3100, 3400], "position":0.5, "repetitionevery": 50, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD05, "segments":2300, "position":0, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.PRECISE},
    //{"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD03, "segments":[60, 60], "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE}
] 
                
                
//////////////////////////////////////// WORLD 2 ///////////////////////////////////////////////
////////////////
ROAD_INFO[3] = [
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,    "curve":-ROAD.CURVE.EASY},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,    "curve":ROAD.CURVE.EASY,    "hill":ROAD.HILL.LOW},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,    "curve":-ROAD.CURVE.EASY,    "hill":ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,    "curve":-ROAD.CURVE.MEDIUM,    "hill":ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,    "curve":ROAD.CURVE.MEDIUM,    "hill":ROAD.HILL.MEDIUM},
    
    {"roadtype": ROAD.TYPE.FINAL, "length":ROAD.LENGTH.LONG}
]
LEVEL_INFO[3] = {   "time":73000, "num_cars":20, 
                    "terrain":{"roadbounds":2, "num_lanes":2, "adherence":0.5, "max_inertia":0 , "color": {
                        "light":  { road: '#565551', grass: "#deec4e", rumble: '#fcaa4c', lane: '#fcaa4c'  },
                        "dark":   { road: '#364153', grass: "#c8d321", rumble: '#fcaa4c'                   }
                                                                                                } 
                                                            }
                };
AMBIENT_INFO[3] = [
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.PALM_TREE, "segments":[0, 800], "position":0, "repetitionevery": 16, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.PALM_TREE, "segments":[0, 800], "position":0, "repetitionevery": 13, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.PALM_TREE, "segments":[800, 1600], "position":2, "occurrence": 20, "repetitionevery": 20, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.CACTUS1, "segments":[1400, 2600], "position":0.5, "occurrence": 20, "repetitionevery": 5, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BOULDER, "segments":[0, 2800], "position":2, "occurrence": 10, "repetitionevery": 13, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD01, "segments":[2200, 2500], "position":0, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD02, "segments":[2800, 3200], "position":0, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
]
////////////////
ROAD_INFO[4] = [
    
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,                                "hill":ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,       "curve":-ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.BUMPS, "length":ROAD.LENGTH.SHORT/2, "curve":-ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.BUMPS, "length":ROAD.LENGTH.SHORT/2, "curve":ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.CURVE_S, "length":ROAD.LENGTH.MEDIUM, "curve":ROAD.CURVE.HARD, "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.CURVE_S, "length":ROAD.LENGTH.LONG, "curve":-ROAD.CURVE.MEDIUM, "hill":-ROAD.HILL.HIGH},
   
    {"roadtype": ROAD.TYPE.FINAL, "length":ROAD.LENGTH.LONG}
]
LEVEL_INFO[4] = {   "time":78000, "num_cars":20, 
                    "terrain":{"roadbounds":2, "num_lanes":2, "adherence":0.5, "max_inertia":0 , "color": {
                        "light":  { road: '#432e54', grass: "#7ef87f", rumble: '#fcaa4c', lane: '#fcaa4c'  },
                        "dark":   { road: '#382447', grass: "#55cf56", rumble: '#fcaa4c'                   }
                                                                                                } 
                                                            }
                };
AMBIENT_INFO[4] = [
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BOULDER, "segments":[0, 3900], "position":2, "occurrence":10, "repetitionevery": 20, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BOULDER, "segments":[0, 3900], "position":5, "occurrence":5, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD04, "segments":770, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.COLUMN, "segments":[780, 1400], "position":0, "repetitionevery": 14, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.CACTUS1, "segments":[1800, 3200], "position":5, "occurrence":30, "repetitionevery": 15, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD04, "segments":1650, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD02, "segments":2000, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.CACTUS1, "segments":[2400, 3600], "position":0, "occurrence":70, "repetitionevery": 15, "disposition":AMBIENT.DISPOSITION.DENSITY},
]
////////////////
ROAD_INFO[5] = [
    
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,                                "hill":ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,                               "hill":ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT/2, "curve":-ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT/2, "curve":ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT/2, "curve":-ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT, "curve":ROAD.CURVE.HARD,     "hill":-ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT/2, "curve":ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT/2, "curve":-ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT/2, "curve":ROAD.CURVE.HARD},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT, "curve":-ROAD.CURVE.HARD,     "hill":ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.BUMPS, "length":ROAD.LENGTH.SHORT/2},
    {"roadtype": ROAD.TYPE.BUMPS, "length":ROAD.LENGTH.SHORT, "curve":-ROAD.CURVE.EASY},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM, "curve":ROAD.CURVE.EASY},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG, "curve":-ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG, "curve":-ROAD.CURVE.HARD},

    {"roadtype": ROAD.TYPE.FINAL, "length":ROAD.LENGTH.LONG}
]
LEVEL_INFO[5] = {   "time":60000, "num_cars":25, 
                    "terrain":{"roadbounds":2, "num_lanes":2, "adherence":0.5, "max_inertia":0 , "color": {
                        "light":  { road: '#16737a', grass: "#d53910", rumble: '#fcaa4c', lane: '#fcaa4c'  },
                        "dark":   { road: '#295c6f', grass: "#9e0517", rumble: '#fcaa4c'                   }
                                                                                        } 
                                                            }
                };
AMBIENT_INFO[5] = [
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD05, "segments":20, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BOULDER, "segments":[0, 3900], "position":2, "occurrence":10, "repetitionevery": 20, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BOULDER, "segments":[0, 3900], "position":5, "occurrence":5, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.CACTUS2, "segments":[40, 1600], "position":0, "occurrence":70, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.CACTUS2, "segments":[1600, 3900], "position":1, "occurrence":35, "repetitionevery": 20, "disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD03, "segments":[1500, 1700], "position":0, "repetitionevery": 40, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD04, "segments":[1525, 1725], "position":0, "repetitionevery": 40, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BOULDER, "segments":[2200, 2650], "position":0, "occurrence":70, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BOULDER, "segments":[2200, 2650], "position":0, "occurrence":40, "repetitionevery": 8, "disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BOULDER, "segments":[2200, 2650], "position":0, "occurrence":30, "repetitionevery": 7, "disposition":AMBIENT.DISPOSITION.DENSITY},
]
//////////////////////////////////////// WORLD 2 ///////////////////////////////////////////////
////////////////
ROAD_INFO[6] = [
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,    "curve":ROAD.CURVE.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,                            "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG, "curve":ROAD.CURVE.HARD,   "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM, "curve":-ROAD.CURVE.MEDIUM,   "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM, "curve":ROAD.CURVE.HARD,   "hill":-ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,                               "hill":-ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,  "curve":ROAD.CURVE.HARD                             },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG, "curve":ROAD.CURVE.VERYHARD,   "hill":-ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG, "curve":-ROAD.CURVE.VERYHARD,   "hill":-ROAD.HILL.LOW},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,                                "hill":-ROAD.HILL.LOW},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,     "curve":ROAD.CURVE.VERYHARD,   "hill":-ROAD.HILL.MEDIUM},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG},
    
    {"roadtype": ROAD.TYPE.FINAL, "length":ROAD.LENGTH.LONG}
]
LEVEL_INFO[6] = {   "time":90000, "num_cars":60, 
                    "terrain":{"roadbounds":2, "num_lanes":4, "adherence":1, "max_inertia":0.03 , "color": {
                                                                                                            "light":  { road: '#19092d', grass: "#30012f", rumble: '#19092d', lane: '#fcaa4c'  },
                                                                                                            "dark":   { road: '#120627', grass: "#24052f", rumble: '#fcaa4c'                   }
                                                                                                        } 
                                                            }
                };
AMBIENT_INFO[6] = [

    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.HOUSE1, "segments":[0, 5000], "position":5, "occurrence":20, "repetitionevery": 100,"disposition":AMBIENT.DISPOSITION.DENSITY},

    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.SIGN_INDICATION, "segments":[900, 5000], "position":-1, "repetitionevery": 900, "disposition":AMBIENT.DISPOSITION.PRECISE},

    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.SIGN_CURVE_RIGHT, "segments":[3845, 3900], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.SIGN_CURVE_RIGHT, "segments":[2100, 2550], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.SIGN_CURVE_LEFT, "segments":[2700, 3150], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.LAMP_LEFT, "segments":[300, 850], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.LAMP_RIGHT, "segments":[300, 850], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.LAMP_LEFT, "segments":[3950, 4500], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.LAMP_RIGHT, "segments":[3965, 4500], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
]
////////////////
ROAD_INFO[7] = [
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,                                 "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,                                 "hill":-ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,     "curve":ROAD.CURVE.MEDIUM,  "hill":-ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.HARD  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.HARD  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.HARD,  "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.HARD,    "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.VERYHARD,  "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.VERYHARD,    "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.VERYHARD,  "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.VERYHARD,    "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.VERYHARD,  "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.VERYHARD,    "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,   "curve":-ROAD.CURVE.VERYHARD,  "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,   "curve":ROAD.CURVE.VERYHARD,    "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,   "curve":-ROAD.CURVE.VERYHARD,  "hill":ROAD.HILL.HIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,   "curve":ROAD.CURVE.VERYHARD,    "hill":-ROAD.HILL.HIGH  },

    //{"roadtype": ROAD.TYPE.BUMPS,    "length":ROAD.LENGTH.LONG,   "curve":ROAD.CURVE.VERYHARD },
    
    {"roadtype": ROAD.TYPE.FINAL, "length":ROAD.LENGTH.LONG}
]
LEVEL_INFO[7] = {   "time":110000, "num_cars":70, 
                    "terrain":{"roadbounds":2, "num_lanes":4, "adherence":1, "max_inertia":0.03 , "color": {
                        "light":  { road: '#19092d', grass: "#30012f", rumble: '#19092d', lane: '#fcaa4c'  },
                        "dark":   { road: '#120627', grass: "#24052f", rumble: '#fcaa4c'                   }
                                                                                                        } 
                                                            }
                };
AMBIENT_INFO[7] = [

    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.LAMP_LEFT, "segments":[0, 5000], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.LAMP_RIGHT, "segments":[15, 5000], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},

    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.HOUSE1, "segments":[50, 5000], "position":5, "occurrence":20, "repetitionevery": 100,"disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.HOUSE2, "segments":[0, 5000], "position":5, "occurrence":20, "repetitionevery": 100,"disposition":AMBIENT.DISPOSITION.DENSITY},

    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.SIGN_INDICATION, "segments":[1100, 5000], "position":-1, "repetitionevery": 1100, "disposition":AMBIENT.DISPOSITION.PRECISE},

    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD01, "segments":[10, 650], "position":0, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.PRECISE},
    //{"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD02, "segments":[0, 625], "position":0, "repetitionevery": 60, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.SIGN_CURVE_LEFT, "segments":[3070, 3270], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.SIGN_CURVE_RIGHT, "segments":[3400, 3570], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.SIGN_CURVE_LEFT, "segments":[3700, 4100], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.SIGN_CURVE_RIGHT, "segments":[4300, 4700], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
]
////////////////
ROAD_INFO[8] = [
    
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM, "hill":ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,   "curve":-ROAD.CURVE.MEDIUM, "hill":ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,   "curve":ROAD.CURVE.HARD, "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,                            "hill":ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.MEDIUM, "hill":ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.MEDIUM, "hill":ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,                                "hill":ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,                                "hill":ROAD.HILL.VERYHIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,    "curve":ROAD.CURVE.MEDIUM,   "hill":ROAD.HILL.VERYHIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,    "curve":ROAD.CURVE.HARD,   "hill":ROAD.HILL.VERYHIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,    "curve":-ROAD.CURVE.VERYHARD,   "hill":-ROAD.HILL.VERYHIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,    "curve":-ROAD.CURVE.VERYHARD,   "hill":ROAD.HILL.VERYHIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,    "curve":-ROAD.CURVE.EASY,   "hill":ROAD.HILL.VERYHIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,    "curve":-ROAD.CURVE.VERYHARD,   "hill":-ROAD.HILL.VERYHIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,    "curve":-ROAD.CURVE.EASY},
    
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":ROAD.CURVE.MEDIUM, "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,   "curve":ROAD.CURVE.MEDIUM, "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,   "curve":-ROAD.CURVE.HARD, "hill":ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,                            "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM, "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,   "curve":-ROAD.CURVE.MEDIUM, "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,                                "hill":-ROAD.HILL.HIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,                                "hill":-ROAD.HILL.VERYHIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,    "curve":-ROAD.CURVE.MEDIUM,   "hill":-ROAD.HILL.VERYHIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.LONG,    "curve":-ROAD.CURVE.HARD,   "hill":-ROAD.HILL.VERYHIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,    "curve":ROAD.CURVE.VERYHARD,   "hill":ROAD.HILL.VERYHIGH  },
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.EXTRALONG,    "curve":ROAD.CURVE.VERYHARD,   "hill":-ROAD.HILL.VERYHIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.SHORT,    "curve":ROAD.CURVE.EASY,   "hill":-ROAD.HILL.VERYHIGH},
    {"roadtype": ROAD.TYPE.STANDARD, "length":ROAD.LENGTH.MEDIUM,    "curve":ROAD.CURVE.VERYHARD,   "hill":ROAD.HILL.VERYHIGH},    
    
    {"roadtype": ROAD.TYPE.FINAL, "length":ROAD.LENGTH.EXTRALONG/*, "curve":ROAD.CURVE.MEDIUM*/}
]
LEVEL_INFO[8] = {   "time":130000, "num_cars":80, 
                    "terrain":{"roadbounds":4, "num_lanes":4, "adherence":1, "max_inertia":0.03 , "color": {
                        "light":  { road: '#19092d', grass: "#30012f", rumble: '#19092d', lane: '#fcaa4c'  },
                        "dark":   { road: '#120627', grass: "#24052f", rumble: '#fcaa4c'                   }
                                                                                                        } 
                                                            }
                };
AMBIENT_INFO[8] = [

    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.HOUSE2, "segments":[0, 7000], "position":5, "occurrence":20, "repetitionevery": 50,"disposition":AMBIENT.DISPOSITION.DENSITY},
    
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.HOUSE1, "segments":[2500, 3700], "position":1, "occurrence":40, "repetitionevery": 12,"disposition":AMBIENT.DISPOSITION.DENSITY},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.HOUSE2, "segments":[2505, 3700], "position":1, "occurrence":40, "repetitionevery": 12,"disposition":AMBIENT.DISPOSITION.DENSITY},

    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.LAMP_LEFT, "segments":[0, 2400], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.LAMP_RIGHT, "segments":[15, 2400], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},

    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD04, "segments":2480, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.LAMP_LEFT, "segments":[2500, 3680], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.LAMP_RIGHT, "segments":[2500, 3680], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.BOTH, "sprite": SPRITES.BILLBOARD04, "segments":3700, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},

    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.LAMP_LEFT, "segments":[3750, 6570], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.LAMP_RIGHT, "segments":[3765, 6585], "position":0, "repetitionevery": 30, "disposition":AMBIENT.DISPOSITION.PRECISE},

    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.SIGN_INDICATION, "segments":[900, 6000], "position":-1, "repetitionevery": 900, "disposition":AMBIENT.DISPOSITION.PRECISE},

    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.SIGN_CURVE_RIGHT, "segments":[1500, 1700], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.SIGN_CURVE_LEFT, "segments":[2000, 2400], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},

    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.SIGN_CURVE_LEFT, "segments":[4800, 5000], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},

    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.SIGN_CURVE_RIGHT, "segments":[5100, 5200], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.SIGN_CURVE_RIGHT, "segments":[5300, 5700], "position":0.3, "repetitionevery": 10, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD01, "segments":6100, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD02, "segments":6200, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD03, "segments":6300, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD04, "segments":6400, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.LEFT, "sprite": SPRITES.BILLBOARD05, "segments":6500, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD01, "segments":6150, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD02, "segments":6250, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD03, "segments":6350, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD04, "segments":6450, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},
    {"side":AMBIENT.SIDE.RIGHT, "sprite": SPRITES.BILLBOARD05, "segments":6550, "position":0, "disposition":AMBIENT.DISPOSITION.PRECISE},

];