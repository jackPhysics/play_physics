var situationAddress="situations/Kr examples.pdf";
var tecAddress="charts/tec_krieg.html";
var crtAddress="charts/crtTables/CRT table n"; //"charts/goa crt.htm";
var crt2Address="charts/crt_RC_plusD6.html";//"charts/Kr CRT.pdf";
var crt3Address="charts/Kr CRT d12 noC 2x2t1.html";
var crtD6Address="charts/Kr CRT d6 yesC.html";
var crt4Address="charts/Kr CRT d6 yesC.html";
var crt5Address="charts/Kr CRT d12 yesC ExNOadv.html";
var crt6Address="charts/Kr CRT d12 yesC steps 2x2t1.html";
var crt7Address="charts/Kr CRT d12 yesC ExNadv.html";
var reinfAddress="charts/d20.htm"//reinforcments
var pbmAddress="charts/rallyCalculator.html"//PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt"//seq of play
var victoryAddress="situations/pharsalus_sit.html"//victory, situation
var weatherAddress="charts/Kr battle manual.pdf"//weather
var supplyAddress="charts/Kr supply.pdf"//supply
var rulesAddress="charts/RCrules.html"
var errataAddress="charts/RCrules.html"//extra rules
var manualAddress="charts/RCrules.html"//battle manual
var SPAREAddress="charts/goa victory.htm"//SPARE SLOT
var boardAddress = "boards/redCloud_board_2.png";//"boards/redCloud_board_4.png";situation9_03_size4.jpg
var presetupGameData = "";
var setupGameData ="0,0,104,0,0,0,487,45,3, 0,0,107,0,0,0,489,149,3, 0,0,110,0,0,0,31,253,3, 0,0,113,0,0,0,80,278,3, 0,0,116,0,0,0,28,303,3, 0,0,161,0,0,0,532,247,3, 0,0,158,0,0,0,536,251,3, 0,0,155,0,0,0,540,254,3, 0,0,152,0,0,0,544,258,3, 0,0,149,0,0,0,531,278,3, 0,0,146,0,0,0,535,282,3, 0,0,143,0,0,0,539,286,3, 0,0,140,0,0,0,543,290,3, 0,0,170,0,0,0,528,319,1, 0,0,167,0,0,0,532,323,1, 0,0,164,0,0,0,536,327,1, 0,0,128,0,0,0,540,330,1, 0,0,119,0,0,0,332,20,20, 0,0,125,0,0,0,528,156,TURN, 0,0,122,0,0,0,527,129,MOVE, 0,0,1,0,0,0,0,0,1,8,B,0,situations/Kr examples.pdf";

var setupGameData=new Array();
    setupGameData[0] = "0,0,104,0,0,0,487,45,3, 0,0,107,0,0,0,489,149,3, 0,0,110,0,0,0,31,253,3, 0,0,113,0,0,0,80,278,3, 0,0,116,0,0,0,28,303,3, 0,0,161,0,0,0,532,247,3, 0,0,158,0,0,0,536,251,3, 0,0,155,0,0,0,540,254,3, 0,0,152,0,0,0,544,258,3, 0,0,149,0,0,0,531,278,3, 0,0,146,0,0,0,535,282,3, 0,0,143,0,0,0,539,286,3, 0,0,140,0,0,0,543,290,3, 0,0,170,0,0,0,528,319,1, 0,0,167,0,0,0,532,323,1, 0,0,164,0,0,0,536,327,1, 0,0,128,0,0,0,540,330,1, 0,0,119,0,0,0,332,20,20, 0,0,125,0,0,0,528,156,TURN, 0,0,122,0,0,0,527,129,MOVE, 0,0,1,0,0,0,0,0,1,8,B,0,situations/Kr examples.pdf";
setupGameData[1] = "";
    setupGameData[2] = "";
    setupGameData[3] = "";
    var setUpGameNo = 0;
var maxNoOfSetUps = 1;
var unitLocation = "units/";//"units/"; "units3/";
var unitExtension = ".jpg";//".jpg"; ".png";
//var boardSize = 2;//start size of board 1=smallest; 8=largest

var deadPosA_X0 = (canvH0/2+238*0.28)*4;
var deadPosA_delX = (238*1.8)*4;
var deadPosA_Y0 = (canvH0-294+238*0.2)*4;
var deadPosA_delY = (276*0.7)*4;
var deadPosB_X0 = (238*1.3)*4;
var deadPosB_delX = (238*1.8)*4;
var deadPosB_Y0 = (canvH0-294+238*0.2)*4;
var deadPosB_delY = (276*0.7)*4;

var swidth=3000; //width of biggest board
var sheight=3000; //height of biggest board
var placePieceShift=400;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=0;//40 //no of pieces in game
var unitTotal=0;//17; //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=89; //index number of last piece - turn now
var gerNumber=42; //the index number of the first side B piece
var neutNumber=89; //index number of first neutral piece

//var Abase = ["#54ffff","#00ffff", "#000000"];
//var Bbase = ["#d60010","#bbbb00", "#009e00"];
var Apanic=9999;
var Bpanic=9999;
var maxTurns = 20;
//const nameA="Republic of Red";
//const nameB="United Black";
var colorA="#13cc6a";//"Red";
var colorAbx="#bbdfdc";
var textColorA="#ffffff";
var colorB="#82ff00";//"Blue";
var colorBbx="#a54316";
var textColorB="#000000";
var colorN="#999999";//"Silver";
var textColorN="Black";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "YellowGreen";
var DcolorFlag = false;

//unit sizes - 88 fits 3 to a hex, so hex=264, so if stackin=4 size = 264/4, if stacking=1 size =264 etc.
var unitSize = 120;
var deltaSize = 0;
var borderSize = 1.4;//this number gets multiplied by boardSize
var sunit=200; //unit width/height
//alert("here!");
var sunit2=150;
var sunitB=150; //unit width/height
var sunitB2=150;

var noOfItems=9; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

//RED: totalPts=155 totalCFs=105
//BLACK: totalPts=150 totalCFs=104
/*
var unitsA=[
"#54ffff/#000000/#bcf2cb/#000000","Artillery","9","4","n","art","10","2","xx",
"#54ffff/#000000/#bcf2cb/#000000","Armor","14","1","n","arm","13","4","xx",
"#54ffff/#000000/#bcf2cb/#000000","Special Forces","9","2","n","sf","6","3","xx",
"#54ffff/#000000/#bcf2cb/#000000","Paratroops","3","5","n","para","2","3","xx",
"#54ffff/#000000/#bcf2cb/#000000","Infantry","3","14","n","inf","3","3","xx",
"#54ffff/#000000/#bcf2cb/#000000","Infantry","6","7","n","inf","7","2","xx",
"#54ffff/#000000/#bcf2cb/#000000","supply","0","4","n","supply","0","10","xx",

"#538115/#ffffff/#69d97d/#538115","Artillery","8","3","n","art","9","2","xx",
"#538115/#ffffff/#69d97d/#538115","Armor","14","1","n","arm","11","6","xx",
"#538115/#ffffff/#69d97d/#538115","Special Forces","8","4","n","sf","3","5","xx",
"#538115/#ffffff/#69d97d/#538115","Paratroops","3","5","n","para","2","3","xx",
"#538115/#ffffff/#69d97d/#538115","Infantry","3","26","n","inf","2","4","xx",
"#538115/#ffffff/#69d97d/#538115","supply","0","4","n","supply","0","10","xx",

"x","A REPLC","1","0","x", "<--A x1", "REPL", "", "",
"x","A REPLC x10","1","0","x", "<--A x10", "REPL", "", "",
"x","B REPLC","1","0","x", "<--B x1", "REPL", "", "",
"x","B REPLC x10","1","0","x", "<--B x10", "REPL", "", "",
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", ""

];

var numbersA=["x","4","x","0","x","0","x","0","x","0","x","0","x","0","x","0","x","0",
"x","0","x","0","x","0","x","0","x","0","x","0","x","0","x","0","x","4","x","3","x","1"
];

//unitColor, textColor, boxColor, boxTextColor
//red and black
var coloring2=["#000000","#ffffff","#000000","#ffffff",
"#ff0000","#ffffff","#ff0000","#ffffff"
];

//other colours
var coloring=["#ff1ec0","#000000", "#a54316","#000000",
"#37c34e","#ffffff", "#6a1d6f","#ffffff"
];


var unitNamesA=[
];

var rangeA=[
];

var designateLA=["Cold", "Bad", "", "Good", "", "Cold", "Bad", "Cold",
 "Bad", "", "Good", "In", "Cold", "Bad", "", "Good", "In", "Hate",
  "Cold", "Bad", "", "Good", "In", "Hate", "Cold", "Bad", "Cold",
   "Bad", "", "Good", "In", "Hate", "Cold",  "s", "s", "s", "s",
  "Territorial", "Reserve", "Territorial", "", "Mercenary",
  "Territorial", "Reserve", "Mercenary", "", "Reserve",
  "Territorial", "", "Territorial", "", "", "Territorial",
  "Territorial", "", "", "Mercenary", "Mercenary", "Territorial",
  "Territorial", "Territorial", "Reserve", "Reserve", "Territorial",
  "Mercenary", "", "Mercenary", "Territorial", "Reserve", "Mercenary",
  "", "", "Mercenary", "", "Territorial",  "s", "s", "s", "s",
];

var designateRA=[
"1", "1", "1", "1", "1", "2", "2", "3", "3", "2",
 "2", "1", "4", "4", "3", "3", "2", "1", "5",
 "5", "4", "4", "3", "2", "6", "6", "7", "7",
 "5", "5", "4", "3", "8", "1", "2", "3", "4",

 "1", "2", "3", "4", "5", "6",
 "7", "8", "9", "10", "11", "12",
 "13", "14", "15", "16", "17",
 "18", "19", "20", "21", "22",
 "23", "24", "25", "26", "27",
 "28", "29", "30", "31", "32",
 "33", "34", "35", "36", "37",
 "38", "39",
 "1", "2", "3", "4",
];
//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces =18;
var rusPieces =7;
var gerPieces =6;
var neutPieces = 5;

//...calculated here...
var totUnits = 0;
var rusUnits = 0;
var gerUnits = 0;
var neutUnits =0;

var baseAlen = Abase.length;
var baseB1 = Bbase.slice(0,-1);
var loopLen = unitsA.length/noOfItems;

for(i=0;i<loopLen;i++){
  //alert("i="+i+"noOfItems="+noOfItems+"i*noOfItems="+(i*noOfItems)+"unitsA[i*noOfItems]="+unitsA[i*noOfItems])
  var dumBaseA = unitsA[i*noOfItems].split("/");
  var dumBase0 = dumBaseA[0];
  if(dumBase0==Abase[0]||dumBase0==Abase[1]||dumBase0==Abase[2]){//if not jap or not neutral
    rusUnits = 1*rusUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else if(dumBase0==Bbase[0]||dumBase0==Bbase[1]||dumBase0==Bbase[2]){//if neutral
  gerUnits = 1*gerUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else{
    neutUnits = 1*neutUnits + 1*unitsA[(i*noOfItems)+3];
  }
}

noOfPieces= rusUnits+gerUnits+neutUnits; //no of pieces in game
unitTotal= totalPieces; //number of types of pieces
lastIndex= rusUnits+gerUnits+neutUnits; //index number of last piece - north marker
gerNumber= rusUnits;//rusUnits+1; //the index number of the first german piece
neutNumber= rusUnits+gerUnits+1;//rusUnits+gerUnits+1; //index number of first neutral piece
*/
var board1 = "boards/situation9_03_size4.jpg";
var board_setup = "boards/situation9_03_size4.jpg";
var board2 = "boards/situation9_03_size4.jpg";
var board3 = "boards/situation9_03_size4.jpg";

var boardA = ["boards/situation9_03_size4.jpgg", "boards/situation9_03_size4.jpg",
"boards/situation9_03_size4.jpg", "boards/situation9_03_size4.jpg"]
