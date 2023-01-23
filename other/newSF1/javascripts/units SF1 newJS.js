var situationAddress="charts/france40.htm";
var tecAddress="charts/tec.html";
var boardAddress = "boards/SF1_board";
var swidth=1184; //width of biggest board
var sheight=1100; //height of biggest board
var placePieceShift=300;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece
var noOfPieces=11 //no of pieces in game
var unitTotal=3; //number of types of pieces
var lastIndex=11; //index number of last piece - turn now
var gerNumber=7; //the index number of the first german piece
var neutNumber=11; //index number of first neutral piece

var Abase = "sov/";
var Bbase = "us/";
var Apanic=9999;
var Bpanic=9999;
var nameA="Soviet";
var nameB="NATO";
var maxTurns = 4;


var sunit=77; //unit width/height
var sunit2=77;
var sunitB=77; //unit width/height
var sunitB2=77;

var noOfItems=5; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//numbers of items of data per unit
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

var unitsA=[
"sov/sov_", "Soviet Company", "6", "n", "1",

"us/us_", "NATO company", "4", "n", "1",
"neut/gameturn", "GAME TURN", "1", "x", "0"
];
