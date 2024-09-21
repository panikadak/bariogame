var CANVAS_WIDTH = 1600;
var CANVAS_HEIGHT = 960;

var EDGEBOARD_X = 256;
var EDGEBOARD_Y = 100;

var FPS = 60;
var FPS_DT = 1/FPS;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;

var GAME_NAME = "car_rush";

var PRIMARY_FONT = "ArialBold";
var SECONDARY_FONT = "Digital";
var PRIMARY_FONT_COLOUR = "#000000";

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_HELP    = 1;
var STATE_GAME    = 3;

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_DRAG_START  = 4;
var ON_DRAG_END    = 5;

var STATE_GAME_START = 0;
var STATE_GAME_RACE = 1;
var STATE_GAME_END = 2;

var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_RIGHT = 39;
var KEY_LEFT = 37;
var KEY_SPACE = 32;

var NUM_WORLDS = 3;
var NUM_TRACKS_PER_WORLD = 3;

var START_COUNTDOWN = 3000;

////////////////////CAMERA SETTINGS ///////////////////////////////////
var FOV = 100;                  // angle (degrees) for field of view
var CAMERA_HEIGHT = 1000;       // z height of camera
var CAMERA_DEPTH = 1 / Math.tan((FOV/2) * Math.PI/180);         // z distance camera is from screen (computed)
var PLAYER_Z_FROMCAMERA = (CAMERA_HEIGHT * CAMERA_DEPTH);
var CAR_SIDEVIEW_OFFSET = 0.2;
var CAR_FARVIEW_OFFSET = 2600;
var CAR_CURVEVIEW_OFFSET = 0.4;

////////////////////PARALLAX SETTINGS ///////////////////////////////////
var PARALLAX_RATIO_X = 2;
var PARALLAX_RATIO_Y_0 = 0.004;
var PARALLAX_RATIO_Y_1 = 0.005;

////////////////// PLAYER SETTINGS  //////////////////////////////////
var PLAYER_MAX_SPEED;                        // player max speed
var PLAYER_ACCELERATION;       // player acceleration
var PLAYER_DECELERATION;       // player deceleration
var PLAYER_REAL_MAX_SPEED;


////////////////// PHYSICS SETTINGS //////////////////////////////////
var CENTRIFUGAL_FORCE   = 0.3;                     // centrifugal force multiplier when going around curves
var PLAYER_COLLIDER_WIDTH = 0.22;                    // collider width. the number is in respect to road width (1 = half road width)
var PLAYER_MIN_SPEED_DAMAGE;   // player minimum speed to being damaged

////////////////// TERRAIN SETTINGS  //////////////////////////////////
var TERRAIN_MAX_INERTIA = 0.03;                      //terrain inertia when steer
var TERRAIN_INCREASE_INERTIA = 0.005;                //terrain increase inertia
var TERRAIN_DECREASE_INERTIA = 0.002;                //terrain decrease inertia
var TERRAIN_ADHERENCE = 1;                           //terrain adherence


///////////////// ROAD SETTINGS //////////////////////////////////////
var DRAW_DISTANCE = 300;                     // number of segments to draw
var ROAD_WIDTH = 2000;                    // actually half the roads width, easier math if the road spans from -roadWidth to +roadWidth
var NUM_LANES = 4;                       // number of lanes
var SEGMENT_LENGTH = 200;                // length of a single segment
var RUMBLE_LENGTH = 3;                       // number of segments per red/white rumble strip
var TRACK_LENGTH;                       // z length of entire track (computed)
var ROAD_BOUNDS = 2;                    // ROAD CROSS LIMITS

//////////////// ENVIRONMENT SETTINGS ///////////////////////////////
var FOG_DENSITY = 5;                       // exponential fog density


var ROAD = {
    TYPE:   {STANDARD:0, CURVE_S:1, BUMPS:2, FINAL:3},
    LENGTH: { NONE: 0, SHORT:  25, MEDIUM:  50, LONG:  100, EXTRALONG: 200}, // num segments
    HILL:   { NONE: 0, LOW:    20, MEDIUM:  40, HIGH:   60, VERYHIGH:80 },
    CURVE:  { NONE: 0, EASY:    2, MEDIUM:   4, HARD:    6, VERYHARD:8 }
};

var AMBIENT = {
    DISPOSITION: {PRECISE:0, DENSITY:1},
    SIDE: {LEFT:-1, RIGHT:1, BOTH:2}
};

var COLORS = {
  LIGHT:  { road: '#6B6B6B', grass: "#96a54b", rumble: '#555555', lane: '#CCCCCC'  },
  DARK:   { road: '#696969', grass: "#7e8b3e", rumble: '#BBBBBB'                   },
  START:  { road: 'white',   grass: 'white',   rumble: 'white'                     },
  FINISH: { road: 'black',   grass: 'black',   rumble: 'black'                     }
};

var SPRITES = {
  
  TREE1:                  {name: "tree1",               collision:{center:240, width:70}},
  TREE2:                  {name: "tree2",               collision:{center:170, width:140}            },
  DEAD_TREE:              {name: "dead_tree",          collision:{center:90, width:15} },
  BUSH1:                  {name: "bush1",               collision:{width:50}            },
  BUSH2:                  {name: "bush2",               collision:{width:50}            },
  STUMP:                  {name: "stump",               collision:{width:70}            },
  
  PALM_TREE:              {name: "palm_tree",           collision:{center:156, width:6} },
  COLUMN:                 {name: "column"},
  CACTUS1:                {name: "cactus1",             collision:{width:100}            },
  CACTUS2:                {name: "cactus2",             collision:{center:48, width:70} },
  
  SIGN_CURVE_RIGHT:       {name: "sign_curve_right"},
  SIGN_CURVE_LEFT:        {name: "sign_curve_left"},
  SIGN_INDICATION:        {name: "sign_indication"},
  LAMP_LEFT:              {name: "lamp_left",               collision:{center:5, width:1}            },
  LAMP_RIGHT:             {name: "lamp_right",              collision:{center:75, width:1}            },
  HOUSE1:                 {name: "house1",                  collision:{width:300}            },
  HOUSE2:                 {name: "house2",                  collision:{width:300}            },
  
  BILLBOARD01:            {name: "billboard01"},
  BILLBOARD02:            {name: "billboard02"},
  BILLBOARD03:            {name: "billboard03"},
  BILLBOARD04:            {name: "billboard04"},
  BILLBOARD05:            {name: "billboard05"},

  BOULDER:               {name: "boulder",                  collision:{width:600}            },
  
  
  SEMI:                   {name: "semi"},
  BUS:                  {name: "bus"},
  CAR01:                  {name: "car01"},
  CAR02:                  {name: "car02"},
  CAR03:                  {name: "car03"}
  
};

SPRITES.SCALE = 0.00375;//0.3 * (1/SPRITES.PLAYER_STRAIGHT.w) // the reference sprite width should be 1/3rd the (half-)roadWidth

SPRITES.BILLBOARDS = [SPRITES.BILLBOARD01.name, SPRITES.BILLBOARD02.name, SPRITES.BILLBOARD03.name, SPRITES.BILLBOARD04.name, SPRITES.BILLBOARD05.name];
SPRITES.PLANTS     = [SPRITES.TREE1.name, SPRITES.TREE2.name, SPRITES.DEAD_TREE.name, SPRITES.PALM_TREE.name, SPRITES.BUSH1.name, SPRITES.BUSH2.name, SPRITES.CACTUS1.name, SPRITES.STUMP.name, SPRITES.BOULDER.name];
SPRITES.CARS       = [SPRITES.CAR01.name, SPRITES.CAR02.name, SPRITES.CAR03.name, SPRITES.SEMI.name, SPRITES.BUS.name];


/////////////////PARAMS FOR OPTIMIZATION
var HALF_CANVAS_WIDTH = CANVAS_WIDTH/2;
var HALF_CANVAS_HEIGHT = CANVAS_HEIGHT/2;
var ROAD_PER_HALF_CANVAS_WIDTH = HALF_CANVAS_WIDTH * ROAD_WIDTH;
var ROAD_PER_SCALE_PER_HALF_CANVAS_WIDTH = SPRITES.SCALE * ROAD_PER_HALF_CANVAS_WIDTH;
var PLAYER_SPEED_CONVERSION_RATIO = PLAYER_REAL_MAX_SPEED/PLAYER_MAX_SPEED; 

var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;

var SOUNDTRACK_VOLUME_IN_GAME  = 0.5;
var POINTS_PER_SECONDS;
var AD_SHOW_COUNTER;