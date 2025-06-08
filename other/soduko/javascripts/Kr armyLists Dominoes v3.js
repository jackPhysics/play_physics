
var redArmyMax = 0;
var blackArmyMax = 1;
var addSupplyUnitsFlag = false;
//if(printArmiesFlag){addSupplyUnitsFlag = true;}
var addDummyUnitsFlag = false;

var allTheArmiesA = ["Republic of Red","United Black", "Sky Blue Social Democracy", "Green Jacket Junta",
 "Purple Reign", "Orange Orthodoxy", "Blue-Steel Legions","Guardians of the Green Grasslands",
"Cerulean Combined Clans", "Spearmint State", "Dune Democracy", "United Ultraviolet", "Democratic Blue",
"Fuchsia Fascists of Florida","The Scarlet Shires", "The Lavender Lands", "Plum Patriarchy",
"Khaki Marines", "Violet Valley Vassals", "Watermelon Micronations", "Ancient Armies Alliance",
"Dusty DAK", "Dusty DAK '43", "Edelweiss Eight Army", "Eight Army - Olive", "Eight Army - Olive - Late '42",
"Barbarossa Berry", "Barbarossa Black", "Frozen North All-Fours", "Fiery 4x4 Fields", "Countdown Country",
"Evergreen Even Eden", "Ochlocratic Order of Odd Overlords", "Silvery Moon Meritocracy",
"Rainbow Warriors", "Synthetic Technocracy Spectrum of States", "Infantry-only Indigo Intellectuals",
"Ivory Invisible Forces Intelligencia", "Firebrick Feudal Fallschirmjager",  "Maroon Great-Hate Mandate",
"Golden Ground Troops Government in Exile", "Day-Glo Dukedom", "Countdown Country #2"]

function findArmies(){

if(changeRedFlag&&redArmyNo==0||changeBlackFlag&&blackArmyNo==1){
var nameQ="The numbers";

var qbase = ["#000000","#000000", "#000000"];


var unitsQ=[
  "#000000/#ffffff/##000000/#000000","1", "1", "28", "x","numb",":::","","x",
];
//"#4b0082/#ffffff/##000000/#000000","8", "1", "9", "x","numb","8","","x",
//"#ee82ee/#000000/##000000/#000000","9", "1", "9", "x","numb","9","","x",


var designateLQ=[
  "Cheyenne","Arapaho","Oglala","Minneconjou","Brule"
];

var designateRQ=[
  "","","","",""];

    //var noOfSide = designateLQ.length;
    var noOfSide = unitsQ.length/noOfItems;

    var sideQ=new Array();
      for(s=0;s<noOfSide;s++){
      sideQ[s]=0;
    }

}

else if(changeRedFlag&&redArmyNo==1||changeBlackFlag&&blackArmyNo==0){
var nameQ="US Government";

var qbase = ["#0000ff","#0000ff", "#0000ff"];


var unitsQ=[
"#0000ff/#dddd00/#ff0000/#ffffff","US cavalry", "1", "8", "n","cav","3","3","x",
"#8b4513/#ffffff/#ffffff/#000000","Wagon Train", "1", "4", "s","trans","1","(2)","x",
"#d2b48c/#8b4513/#8b4513/#ffffff","Supplies", "1", "1", "s","depot","20","","x"
];

var designateLQ=[
"US","US","US","US","US","US","US","US",
"Wagon","Wagon","Wagon","Wagon","Supply"
];

var designateRQ=[
"1st","2nd","3rd","4th","5th","6th",
"7th","8th","Train A","Train B",
"Train C","Train D","Depot"
];


var noOfSide = unitsQ.length/noOfItems;

    var sideQ=new Array();
    for(s=0;s<noOfSide;s++){
      sideQ[s]=1;    }
  }
else if(changeRedFlag&&redArmyNo==2||changeBlackFlag&&blackArmyNo==2){
var nameQ="Sky Blue Social Democracy";

var qbase = ["#54ffff","#54ffff", "#54ffff"];


var unitsQ=[
"#54ffff/#000000/#bcf2cb/#000000","Artillery","9","4","n","art","10","2","xx",
"#54ffff/#000000/#bcf2cb/#000000","Armor","14","1","n","arm","13","4","xx",
"#54ffff/#000000/#bcf2cb/#000000","Special Forces","9","2","n","sf","6","3","xx",
"#54ffff/#000000/#bcf2cb/#000000","Paratroops","3","5","n","para","2","3","xx",
"#54ffff/#000000/#bcf2cb/#000000","Infantry","3","14","n","inf","3","3","xx",
"#54ffff/#000000/#bcf2cb/#000000","Infantry","6","7","n","inf","7","2","xx",
"#54ffff/#000000/#bcf2cb/#000000","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=["Alpha", "Bravo", "Charlie", "Delta", "Golf", "Alpha", "Bravo", "Alpha",
 "Bravo", "Charlie", "Delta", "Echo", "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
  "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Alpha", "Bravo", "Alpha",
   "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Alpha"
];

var designateRQ=[
"1", "1", "1", "1", "1", "2", "2", "3", "3", "2",
 "2", "1", "4", "4", "3", "3", "2", "1", "5",
 "5", "4", "4", "3", "2", "6", "6", "7", "7",
 "5", "5", "4", "3", "8"];


 var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==3||changeBlackFlag&&blackArmyNo==3){
var nameQ="Green Jacket Junta";

var qbase = ["#538115","#538115", "#538115"];


var unitsQ=[
"#538115/#ffffff/#69d97d/#538115","Artillery","8","3","n","art","9","2","xx",
"#538115/#ffffff/#69d97d/#538115","Armor","14","1","n","arm","11","6","xx",
"#538115/#ffffff/#69d97d/#538115","Special Forces","8","4","n","sf","3","5","xx",
"#538115/#ffffff/#69d97d/#538115","Paratroops","3","5","n","para","2","3","xx",
"#538115/#ffffff/#69d97d/#538115","Infantry","3","26","n","inf","2","4","xx",
"#538115/#ffffff/#69d97d/#538115","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=[
  "Territorial", "Reserve", "Territorial", "", "Mercenary",
  "Territorial", "Reserve", "Mercenary", "", "Reserve",
  "Territorial", "", "Territorial", "", "", "Territorial",
  "Territorial", "", "", "Mercenary", "Mercenary", "Territorial",
  "Territorial", "Territorial", "Reserve", "Reserve", "Territorial",
  "Mercenary", "", "Mercenary", "Territorial", "Reserve", "Mercenary",
  "", "", "Mercenary", "", "Territorial"
];

var designateRQ=[
 "1", "2", "3", "4", "5", "6",
 "7", "8", "9", "10", "11", "12",
 "13", "14", "15", "16", "17",
 "18", "19", "20", "21", "22",
 "23", "24", "25", "26", "27",
 "28", "29", "30", "31", "32",
 "33", "34", "35", "36", "37",
 "38", "39"
];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
  }

else if(changeRedFlag&&redArmyNo==4||changeBlackFlag&&blackArmyNo==4){
var nameQ="Purple Reign";

var qbase = ["#6870fe","#6870fe", "#6870fe"];


var unitsQ=[
  "#6870fe/#ffd700/#d823e0/#ffd700","Armor","14","3","n","arm","10","7","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Special Forces","7","5","n","sf","3","4","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Paratroops","6","3","n","para","4","4","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Infantry","6","5","n","inf","4","5","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Infantry","5","5","n","inf","6","2","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=[
  "1999", "Sign o'", "1999",
   "Planet", "Chaos", "Emancipation", "Planet", "1999",
    "Sign o'", "1999","Sign o'",
     "Diamonds", "Chaos", "Sign o'", "Diamonds", "1999",
      "1999", "Xpectation", "Planet", "Planet ", "Planet"
];

var designateRQ=["#1", "Times #1", "#2",
 "Earth #1", "Disorder #1", "#1", "Earth #2", "#3",
  "Times #2", "#4", "Times #3",
   "Pearls #1", "Disorder #2", "Times #4", "Pearls #2", "#5",
    "#6", "#1", "Earth #3", "Earth #4", "Earth #5"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
  }

else if(changeRedFlag&&redArmyNo==5||changeBlackFlag&&blackArmyNo==5){
var nameQ="Orange Orthodoxy";

var qbase = ["#ff7f00","#ff7f00", "#ff7f00"];


var unitsQ=[
  "#ff7f00/#000000/#ff7f00/#000000","Armor","9","5","n","arm","9","3","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Special Forces","11","2","n","sf","8","3","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Paratroops","3","5","n","para","2","3","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Infantry","5","7","n","inf","2","6","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Infantry","2","17","n","inf","2","3","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=["Invade", "Invade", "Charge", "Invade", "Siege", "Patrol", "Hold", "Patrol",
 "Hold", "Repel", "Siege", "Hold", "Patrol", "Hold", "Patrol", "Patrol", "Invade", "Hold",
  "Repel", "Hold", "Charge", "Charge", "Repel", "Repel", "Repel", "Siege", "Invade", "Repel",
   "Siege", "Invade", "Repel", "Siege", "Hold", "Charge", "Invade", "Hold"];

var designateRQ=["1", "2", "1", "3", "1", "1", "1", "2", "2", "1", "2",
"3", "3", "4", "4", "5", "4", "5", "2", "6", "2", "3", "3", "4", "5",
 "3", "5", "6", "4", "6", "7", "5", "7", "4", "7", "8", "1", "2", "3",
  "4", "5", "6", "7", "8"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==6||changeBlackFlag&&blackArmyNo==6){
var nameQ="Blue-Steel Legions";

var qbase = ["#2135b5","#2135b5", "#2135b5"];


var unitsQ=[
  "#2135b5/#ffffff/#443a3f/#ffffff","Mechanised","9","3","n","mech","7","5","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Mechanised","11","1","n","mech","8","6","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Special Forces","7","4","n","sf","4","3","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Paratroops","3","5","n","para","2","3","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Infantry","8","5","n","inf","7","4","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Infantry","3","10","n","inf","2","4","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=[
  "XXVI", "XVIII", "XVIII", "XII",
  "XI", "XII", "XVIII", "XI",
  "XII", "XVIII", "XII", "XVIII", "XVIII",
  "XII", "XVIII", "XVIII", "XIX", "XIX",
  "XII", "XI", "XXVI", "XVIII", "XIX", "XVIII", "XXVI", "XIX", "XII", "XI"
];

var designateRQ=["682nd", "297th", "773th", "685th",
 "949th", "933th", "749th", "694th",
 "542nd", "324th", "347th", "121st", "772nd",
 "938th", "946th", "981st", "984th", "365th",
 "181st", "548th", "452nd", "826th", "818th",
 "559th", "378th", "185th", "134th", "526th"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==7||changeBlackFlag&&blackArmyNo==7){
var nameQ="Guardians of the Green Grasslands";

var qbase = ["#00ff11","#00ff11", "#00ff11"];


var unitsQ=[
"#00ff11/#000000/#5b817e/#000000","Mechanised","11","3","n","mech","8","6","xx",
"#00ff11/#000000/#5b817e/#000000","Special Forces","9","2","n","sf","4","5","xx",
"#00ff11/#000000/#5b817e/#000000","Paratroops","5","3","n","para","6","1","xx",
"#00ff11/#000000/#5b817e/#000000","Cavalry","3","15","n","cav","1","5","xx",
"#00ff11/#000000/#5b817e/#000000","Infantry","3","13","n","inf","2","4","xx",
"#00ff11/#000000/#5b817e/#000000","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=["Dawn", "Morning-Star", "Sol", "Mars", "Sol",
 "Morning-Star", "Morning-Star", "Luna", "Sol", "Mars", "Morning-Star",
  "Venus", "Dawn", "Dawn", "Dawn", "Venus", "Morning-Star", "Dawn",
   "Mercury", "Mercury", "Dawn", "Morning-Star", "Venus", "Mars", "Venus",
    "Mars", "Venus", "Luna", "Sol", "Mercury", "Morning-Star", "Venus",
     "Dawn", "Luna", "Morning-Star", "Morning-Star"];

var designateRQ=["541st", "539th", "416th", "221st", "576th", "639th", "897th",
 "335th", "761st", "269th", "584th", "242nd", "133th", "477th", "776th", "946th",
  "828th", "599th", "512nd", "824th", "818th", "892nd", "276th", "761st",
   "668th", "712nd", "712nd", "872nd", "161st", "667th", "155th", "437th",
    "713th", "758th", "985th", "143th", "817th", "915th", "267th", "624th",
     "874th", "968th", "197th", "528th"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==8||changeBlackFlag&&blackArmyNo==8){
var nameQ="Cerulean Combined Clans";

var qbase = ["#0035ff","#0035ff", "#0035ff"];


var unitsQ=[
"#0035ff/#ffffff/#6b1583/#ffffff","S.P.A.","13","1","n","spa","12","4","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Special Forces","8","3","n","sf","5","3","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Paratroops","5","3","n","para","5","2","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Cavalry","4","2","n","cav","1","6","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Infantry","2","45","n","inf","2","3","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Supply","0","0","n","supply","0","10","xx",

];


var designateLQ=["Shark",
 "Shark", "Python", "Swordfish",
  "Shark", "Python", "Swordfish",
   "Shark", "Python",
"Shark", "Python", "Swordfish", "Sparrowhawk","Tarantula",
 "Bat", "Shark", "Python", "Swordfish", "Shark",
"Sparrowhawk","Tarantula", "Bat", "", "Shark",
 "Python", "Swordfish", "Sparrowhawk", "Tarantula", "Bat",
  "Bat", "Shark", "Python", "Swordfish", "Sparrowhawk",
"Tarantula", "Bat", "Tarantula", "Shark", "Python",
"Swordfish", "Sparrowhawk", "Tarantula", "Bat", "Tarantula",
"Shark", "Python","Swordfish", "Sparrowhawk", "Tarantula",
"Bat", "Sparrowhawk", "Shark", "Python", "Swordfish"];

var designateRQ=["1", "2", "1", "1", "3", "2", "2", "4", "3", "5", "4", "3",
 "1", "1", "1", "1", "6", "5", "4", "2", "2", "2", "2", "7", "6", "5", "3",
  "3", "3", "3", "8", "7", "6", "4", "4", "4", "4", "9", "8", "7", "5", "5",
   "5", "5", "10", "9", "8", "6", "6", "6", "6", "11", "10", "9", "7", "8",
    "9", "10", "11", "12", "13", "14"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==9||changeBlackFlag&&blackArmyNo==9){
var nameQ="Spearmint State";

var qbase = ["#7aff9b","#7aff9b", "#7aff9b"];


var unitsQ=[
  "#7aff9b/#000000/#6b8b85/#7aff9b","Artillery","8","3","n","art","9","2","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Armored Cavalry","9","3","n","acav","5","7","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Special Forces","7","4","n","sf","4","3","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Paratroops","5","3","n","para","6","1","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Infantry","9","4","n","inf","8","4","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Infantry","5","4","n","inf","5","3","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Supply","0","0","n","supply","0","10","xx",

];


var designateLQ=["XXVII", "VI", "XXVI", "XXVII", "VI", "XXVI", "XXVII",
 "VI", "XXVI", "XXVII", "XXVII", "VI", "XXVI", "XXVII", "VI", "XXVI",
  "XXVII", "XXVII", "VI", "XXVI", "XXVII", "XXVII", "VI", "XXVI", "XXVII",
   "VI", "XXVI", "XXVII", "VI"
];

var designateRQ=["1", "1", "1", "2", "2", "2", "3", "3", "3",
 "4", "5", "4", "4", "6", "5", "5", "7", "8", "6", "6",
  "9", "1", "2", "3", "4", "5", "6", "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==10||changeBlackFlag&&blackArmyNo==10){
var nameQ="Dune Democracy";

var qbase = ["#ebec87","#ebec87", "#ebec87"];


var unitsQ=[
  "#ebec87/#000000/#de958f/#ebec87","Mechanised","8","4","n","mech","6","5","xx",
"#ebec87/#000000/#de958f/#ebec87","Armor","11","2","n","arm","7","7","xx",
"#ebec87/#000000/#de958f/#ebec87","Special Forces","7","4","n","sf","2","5","xx",
"#ebec87/#000000/#de958f/#ebec87","Paratroops","3","3","n","para","3","2","xx",
"#ebec87/#000000/#de958f/#ebec87","Mountain Troops","7","5","n","mount","3","5","xx",
"#ebec87/#000000/#de958f/#ebec87","Infantry","6","4","n","inf","7","2","xx",
"#ebec87/#000000/#de958f/#ebec87","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Sierra", "Kilo", "Papa", "Sierra", "Kilo", "Sierra", "Kilo", "Papa", "Uniform",
 "Sierra", "Kilo", "Papa", "Uniform", "Sierra", "Sierra", "Kilo", "Papa", "Uniform",
  "Sierra", "Kilo", "Papa", "Sierra"
];

var designateRQ=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
 "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==11||changeBlackFlag&&blackArmyNo==11){
var nameQ="United Ultraviolet";

var qbase = ["#6870fe","#6870fe", "#6870fe"];


var unitsQ=[
  "#6870fe/#000000/#d823e0/#000000","Armor","14","3","n","arm","10","7","xx",
  "#6870fe/#000000/#d823e0/#000000","Special Forces","7","5","n","sf","3","4","xx",
  "#6870fe/#000000/#d823e0/#000000","Paratroops","6","3","n","para","4","4","xx",
  "#6870fe/#000000/#d823e0/#000000","Infantry","6","5","n","inf","4","5","xx",
  "#6870fe/#000000/#d823e0/#000000","Infantry","5","5","n","inf","6","2","xx",
  "#6870fe/#000000/#d823e0/#000000","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Von-der-Tann", "Schleswig-Holstein", "Von-der-Tann", "Lutzow",
 "Frauenlob", "Seydlitz", "Lutzow", "Von-der-Tann", "Schleswig-Holstein", "Von-der-Tann",
  "Schleswig-Holstein", "Pillau", "Frauenlob", "Schleswig-Holstein", "Pillau", "Von-der-Tann",
   "Von-der-Tann", "Von-der-Tann", "Lutzow", "Lutzow", "Lutzow"
];

var designateRQ=["1", "1", "2", "1", "1", "1", "2", "3", "2", "4", "3", "1",
 "2", "4", "2", "5", "6", "7", "3", "4", "5", "1", "2", "3", "4", "5", "6",
  "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==12||changeBlackFlag&&blackArmyNo==12){
var nameQ="Democratic Blue";

var qbase = ["#0000ba","#0000ba", "#0000ba"];


var unitsQ=[
  "#0000ba/#ffffff/#000087/#ffffff","Mechanised","9","10","n","mech","7","5","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Special Forces","7","4","n","sf","3","4","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Paratroops","6","2","n","para","7","1","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Infantry","5","3","n","inf","4","4","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Infantry","5","1","n","inf","5","3","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["7th", "7th", "1st", "1st", "4th", "4th", "4th", "4th", "4th",
 "8th", "8th", "8th", "8th", "8th", "10th", "10th", "10th", "3rd", "3rd"
];

var designateRQ=[
  "1","2","3","4","5","6",
  "7","8","9",
  "10","11","12",
  "13","14","15","16","17","18","19","20"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==13||changeBlackFlag&&blackArmyNo==13){
var nameQ="Fuchsia Fascists of Florida";

var qbase = ["#ff00af","#ff00af", "#ff00af"];


var unitsQ=[
  "#ff00af/#000000/#d4e6cb/#ff00af","Armor","13","1","n","arm","11","5","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Special Forces","11","2","n","sf","7","4","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Paratroops","6","2","n","para","6","2","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Infantry","9","6","n","inf","9","3","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Infantry","2","25","n","inf","3","2","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Fox", "Sparrowhawk", "Sparrowhawk", "Viper", "Viper", "Viper", "Eagle",
 "Viper", "Eagle", "Viper", "Fox", "Viper", "Piranha", "Viper", "Fox", "Rat", "Viper",
  "Piranha", "Viper", "Viper", "Rat", "Sparrowhawk", "Viper", "Sparrowhawk", "Viper",
   "Sparrowhawk", "Piranha", "Piranha", "Rat", "Eagle", "Piranha", "Fox", "Piranha",
    "Fox", "Viper", "Sparrowhawk"
];

var designateRQ=["1", "1", "2", "1", "2", "3", "1", "4",
 "2", "5", "2", "6", "1", "7", "3", "1", "8", "2", "9",
 "10", "2", "3", "11", "4", "12", "5", "3", "4", "3", "3",
 "5", "4", "6", "5", "13", "6", "1", "2", "3", "4", "5",
  "6", "7", "8"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==14||changeBlackFlag&&blackArmyNo==14){
var nameQ="The Scarlet Shires";

var qbase = ["#ff00af","#ff00af", "#ff00af"];


var unitsQ=[
  "#ff003b/#000000/#44ece3/#ff003b","Mechanised","9","6","n","mech","7","5","xx",
"#ff003b/#000000/#44ece3/#ff003b","Special Forces","10","2","n","sf","7","3","xx",
"#ff003b/#000000/#44ece3/#ff003b","Paratroops","5","3","n","para","4","3","xx",
"#ff003b/#000000/#44ece3/#ff003b","Infantry","9","4","n","inf","9","3","xx",
"#ff003b/#000000/#44ece3/#ff003b","Scout","2","13","n","scout","1","4","xx",
"#ff003b/#000000/#44ece3/#ff003b","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Bronze", "Lead", "Bronze", "Iron", "Helium", "Bronze",
 "Bronze", "Helium",
  "Iron", "Sulphur", "Helium",
   "Helium", "Iron", "Bronze", "Sulphur",
  "Sulphur", "Sulphur", "Iron", "Lead", "Sulphur", "Helium", "Iron", "Helium","Bronze", "Iron", "Iron", "Bronze", "Sulphur"
];

var designateRQ=["1", "1", "2", "1", "1", "3", "4", "2", "2", "1",
 "3", "4", "3", "5", "2", "3", "4", "4", "2", "5", "5", "5", "6",
  "6", "6", "7", "7", "6", "1", "2", "3", "4", "5", "6", "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==15||changeBlackFlag&&blackArmyNo==15){
var nameQ="The Lavender Lands";

var qbase = ["#7b3dff","#7b3dff", "#7b3dff"];


var unitsQ=[
  "#7b3dff/#ffffff/#88e578/#7b3dff","Armor","14","2","n","arm","9","8","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Special Forces","11","2","n","sf","8","3","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Paratroops","4","4","n","para","3","3","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Infantry","5","9","n","inf","3","5","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Militia","3","13","n","inf","2","4","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Indomitable", "Incredible", "Inflexible", "Incredible", "Indefatigable",
 "Inconstant", "Inflexible", "Indomitable", "Inflexible", "Indomitable", "Indomitable",
  "Indefatigable", "Inconstant", "Inflexible", "Inconstant", "Incredible", "Inflexible",
   "Indefatigable", "Inconstant", "Incredible", "Indefatigable", "Indomitable", "Incredible",
    "Indefatigable", "Incredible", "Indomitable", "Incredible", "Indomitable", "Indomitable",
     "Indomitable"
];

var designateRQ=["76th", "8th", "97th", "6th", "67th", "89th",
 "5th", "1st", "82nd", "38th", "3th", "53th", "51st", "44th",
  "895th", "55th", "24th", "7th", "68th", "56th", "57th", "35th",
   "445th", "574th", "688th", "32nd", "37th", "25th", "81st", "9th",
    "87th", "74th", "47th", "556th", "16th", "65th", "817th", "66th"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==16||changeBlackFlag&&blackArmyNo==16){
var nameQ="Plum Patriarchy";

var qbase = ["#74225f","#74225f", "#74225f"];


var unitsQ=[
  "#74225f/#ffffff/#9788ce/#ffffff","Mechanised","11","5","n","spa","8","6","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Special Forces","8","3","n","sf","4","4","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Paratroops","5","3","n","para","4","3","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Cavalry","5","6","n","cav","2","6","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Infantry","4","7","n","inf","5","2","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Tan", "White", "Orange", "Tan", "White", "Tan", "White",
 "Orange", "Tan", "White", "Orange", "Tan", "White", "Orange", "Tan", "White",
  "Orange", "Tan", "White", "Orange", "Tan", "White", "Orange", "Tan"
];

var designateRQ=["1", "1", "1", "2", "2", "3", "3", "2", "4", "4", "3", "5",
 "5", "4", "6", "6", "5", "7", "7", "6", "8", "8", "7", "9"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==17||changeBlackFlag&&blackArmyNo==17){
var nameQ="Khaki Marines";

var qbase = ["#2d3200","#2d3200", "#2d3200"];


var unitsQ=[
  "#2d3200/#ffffff/#8e6311/#2d3200","Armor","13","1","n","arm","11","5","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Mechanised","13","3","n","mech","8","8","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Special Forces","7","4","n","sf","3","4","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Paratroops","6","3","n","para","5","3","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Marines","4","6","n","mar","2","4","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Infantry","4","4","n","inf","4","3","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["6th", "6th", "10th", "10th", "4th", "4th",
 "5th", "5th", "4th", "5th", "9th","4th", "4th", "5th", "5th", "9th", "9th", "4th", "5th", "9th", "9th"];

var designateRQ=["637th", "611st", "188th", "153rd", "683rd", "243rd",
 "636th", "745th", "381st", "673rd", "685th", "448th",
  "387th", "131st", "382nd", "369th", "315th", "532nd",
   "936th", "835th", "423rd"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==18||changeBlackFlag&&blackArmyNo==18){
var nameQ="Violet Valley Vassals";

var qbase = ["#ae61b9","#ae61b9", "#ae61b9"];


var unitsQ=[
"#ae61b9/#ffffff/#511da7/#ae61b9","Mechanised","11","3","n","mech","7","7","xx",
"#ae61b9/#ffffff/#511da7/#ae61b9","Special Forces","10","3","n","sf","4","6","xx",
"#ae61b9/#ffffff/#511da7/#ae61b9","Airborne","5","4","n","para","4","3","xx",
"#ae61b9/#ffffff/#511da7/#ae61b9","Infantry","3","22","n","inf","3","3","xx",
"#ae61b9/#ffffff/#511da7/#ae61b9","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Orion", "Horatio", "Meneleus", "Patroclus", "Diomedes", "Anneas", "Hippolyta", "Diomedes",
"Anneas", "Agamemnon", "Meneleus", "Meneleus", "Orion", "Agamemnon", "Diomedes", "Hippolyta", "Horatio",
"Anneas", "Anneas", "Patroclus", "Paris", "Paris", "Orion", "Hippolyta", "Meneleus", "Heracles", "Atalanta",
"Patroclus", "Heracles", "Heracles", "Anneas", "Paris"
];

var designateRQ=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
"12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
"24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35",
"36", "37", "38", "39", "40"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==19||changeBlackFlag&&blackArmyNo==19){
var nameQ="Watermelon Micronations";

var qbase = ["#f64b84","#f64b84", "#f64b84"];


var unitsQ=[
"#f64b84/#ffffff/#56d046/#ffffff","Tanks","12","1","n","arm","10","5","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Mechanised","10","4","n","mech","7","6","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Elite Infantry","8","4","n","sf","4","4","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Airlanding","3","5","n","para","2","3","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Motorised Infantry","6","2","n","motor","2","7","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Infantry","3","7","n","inf","3","3","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Militia","2","9","n","inf","3","2","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Rock", "Pearl", "Pearl", "Pearl", "Pearl", "Marble",
"Marble", "Marble", "Marble", "Mica", "Mica", "Mica", "Mica", "Mica",
"Ruby", "Ruby", "Ebony", "Ebony", "Ebony", "Ebony", "Ebony", "Ebony",
"Ebony", "Emerald", "Emerald", "Emerald", "Emerald", "Emerald", "Emerald",
"Emerald", "Emerald", "Emerald", "Ivory", "Ivory", "Ivory", "Ivory", "Ivory",
"Ivory", "Ivory", "Ivory"
];

var designateRQ=["1", "1", "2", "3", "4", "1", "2", "3", "4",
"1", "2", "3", "4", "5", "1", "2", "1", "2", "3", "4", "5",
"6", "7", "1", "2", "3", "4", "5", "6", "7", "8", "9", "1",
"2", "3", "4", "5", "6", "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==20||changeBlackFlag&&blackArmyNo==20){
var nameQ="Ancient Armies Alliance";

var qbase = ["#355e43","#355e43", "#355e43"];


var unitsQ=[
"#355e43/#ffffff/#b0dd98/#355e43","Phalanx","14","2","n","arm","11","6","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Marine and Mountain","7","7","n","sf","2","5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Vertical Invaders","3","5","n","para","2","3","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Hoorsemen","5","6","n","cav","3","5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Warriors","2","14","n","inf","3","2","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Spartans", "Spartans", "Athenians", "Athenians",
"Athenians", "Athenians", "Athenians", "Athenians", "Athenians",
"Cartaginians", "Cartaginians", "Cartaginians", "Cartaginians",
"Cartaginians", "Persians", "Persians", "Persians", "Persians",
"Persians", "Persians", "Amazons", "Amazons", "Amazons", "Amazons",
"Amazons", "Amazons", "Amazons", "Amazons", "Amazons", "Amazons",
"Amazons", "Amazons", "Amazons", "Amazons", "Etruscans", "Etruscans",
"Etruscans", "Etruscans"
];

var designateRQ=["716th", "224th", "212nd", "263th", "915th", "487th",
"487th", "452nd", "371st", "581st", "112nd", "333th", "657th", "583th",
"722nd", "231st", "183th", "798th", "527th", "771st", "427th", "566th",
"496th", "887th", "312nd", "898th", "375th", "914th", "935th", "592nd",
"335th", "573th", "676th", "825th", "938th", "979th", "636th", "261st",
"684th", "176th", "443th", "276th"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==21||changeBlackFlag&&blackArmyNo==21){
var nameQ="Dusty DAK";

var qbase = ["#d2b48c","#8b4513", "#d2b48c"];


var unitsQ=[
"#d2b48c/#000000/#8b4513/#ffffff","Rommel","3","1","n","hq","0","6","xxxx",
"#d2b48c/#000000/#8b4513/#ffffff","Panzer","9","2","n","arm","7","5","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Tanks","5","2","n","arm","4","4","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Panzergrenadier", "5", "2", "n","mech","3","5","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Mechanised", "4", "1", "n","mech","3","4","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Recon", "5", "3", "n","acav","2","6","||",
"#d2b48c/#000000/#8b4513/#ffffff","Paratroops","6","1","n","para","4","4","x",
"#8b4513/#ffffff/#d2b48c/#000000","Paratroops","3","1","n","para","1","4","x",
"#d2b48c/#000000/#8b4513/#ffffff","Infantry","4","1","n","inf","3","4","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Infantry","3","2","n","inf","2","4","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Special Forces","6","3","n","sf","2","4","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Infantry","1","9","n","inf","2","2","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Supply","0","5","n","supply","0","10","xx"
];


var designateLQ=["", "21", "15", "Italian", "Italian",
"21", "15", "Italian", "21", "15", "90",
 "",  "Italian", "90",
 "90", "90", "164", "164", "164",
  "Italian", "Italian", "Italian", "Italian", "Italian",
  "Italian", "Italian", "Italian", "Italian"
];

var designateRQ=["ROMMEL", "5", "8", "Ariete", "Littorio",
"104", "115", "Trieste", "3", "32", "580",
 "51", "Folgere", "361",
 "55", "200", "125", "382", "433",
  "Bologna", "Centor", "Pistolio", "Sabratha", "Savena",
   "Fascists", "Bresia", "Pavia", "Trenta"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==22||changeBlackFlag&&blackArmyNo==22){
var nameQ="Dusty DAK '43";

var qbase = ["#d2b48c","#8b4513", "#d2b48c"];


var unitsQ=[
"#d2b48c/#000000/#8b4513/#ffffff","Rommel","3","1","n","hq","0","6","xxxx",
"#d2b48c/#000000/#8b4513/#ffffff","Panzer","9","3","n","arm","7","5","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Tanks","5","2","n","arm","4","4","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Panzergrenadier", "5", "4", "n","mech","3","5","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Mechanised", "4", "1", "n","mech","3","4","xx",
"#8b4513/#ffffff/#d2b48c/#000000","Mechanised", "4", "1", "n","mech","3","4","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Recon", "5", "4", "n","acav","2","6","||",
"#d2b48c/#000000/#8b4513/#ffffff","Paratroops","6","1","n","para","5","3","x",
"#d2b48c/#000000/#8b4513/#ffffff","Paratroops","6","1","n","para","4","4","x",
"#8b4513/#ffffff/#d2b48c/#000000","Paratroops","3","1","n","para","1","4","x",
"#d2b48c/#000000/#8b4513/#ffffff","Infantry","4","1","n","inf","3","4","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Infantry","3","2","n","inf","2","4","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Special Forces","6","3","n","sf","2","4","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Infantry","1","9","n","inf","2","2","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Supply","0","5","n","supply","0","10","xx"
];


var designateLQ=["", "21", "15", "10", "Italian", "Italian",
"21", "15", "10", "10", "HG", "Italian", "21", "15", "10", "90",
 "HG", "",  "Italian", "90",
 "90", "90", "164", "164", "164",
  "Italian", "Italian", "Italian", "Italian", "Italian",
  "Italian", "Italian", "Italian", "Italian"
];

var designateRQ=["ROMMEL", "5", "8", "7", "Ariete", "Littorio",
"104", "115", "69", "86", "1", "Trieste", "3", "32", "10", "580",
 "5", "51", "Folgere", "361",
 "55", "200", "125", "382", "433",
  "Bologna", "Centor", "Pistolio", "Sabratha", "Savena",
   "Fascists", "Bresia", "Pavia", "Trenta"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
  }

else if(changeRedFlag&&redArmyNo==23||changeBlackFlag&&blackArmyNo==23){
  var nameQ="Edelweiss Eight Army";

  var qbase = ["#ffffff","#ffffff", "#ffffff"];


  var unitsQ=[
  "#ffffff/#000080/#ffff00/#000080","Tanks","5","4","n","arm","4","4","x",
  "#ffffff/#000080/#ffff00/#000080","Tanks","4","2","n","arm","3","4","x",
  "#ffffff/#000080/#ffff00/#000080","Tanks","3","2","n","arm","2","4","x",
  "#ffffff/#000080/#ffff00/#000080","Mechanised", "4", "1", "n","mech","3","4","x",
  "#ffffff/#000080/#ffff00/#000080","Infantry","2","3","n","inf","2","3","x",
  "#ffffff/#000080/#ffff00/#000080","Motor","5","3","n","sf","2","3","x",
  "#ffffff/#000080/#ffff00/#000080","Recce", "4", "2", "n","acav","1","6","||",
  "#ffffff/#000080/#ffff00/#000080","Special Group", "5", "2", "n","sf","1","4","||",
  "#ffffff/#000080/#ffff00/#000080","Infantry","1","31","n","inf","1","3","x",
  "#ffffff/#000080/#ffff00/#000080","Infantry","2","3","n","mount","1","3","x",
  "#ffffff/#000080/#ffff00/#000080","Motor","4","2","n","sf","1","3","x",
  "#ffffff/#000080/#ffff00/#000080","Long Range Desert Group","9","1","n","sf","1","8","x",
  "#ffffff/#000080/#ffff00/#000080","Special Air Service","5","1","n","para","1","6","x",
  "#ffffff/#000080/#ffff00/#000080","Supply","0","0","n","supply","0","10","xx"
  ];

  var designateLQ=["7", "2", "1", "1", "10", "10", "", "", "7",
   "9 A",  "9 A", "9 A", "", "1", "7", "2 SA", "1 SA", "7", "2",
    "NZ", "70", "51", "51", "50",
     "50", "50", "44", "44", "10 I",
      "10 I", "8 I", "8 I", "7 A", "7 A",
       "5 I", "5 I", "5 I", "4 I", "4 I",
        "4 I", "4 I", "2 SA", "2 SA", "2 NZ",
         "2 NZ", "2 NZ", "1 SA", "1 SA", "1 SA",
          "1 SA",
   "Pol", "Jews", "Free Fr", "50", "7",
   "", ""
  ];

  var designateRQ=["4", "3", "22", "2", "23", "8", "32", "1", "7",
   "24",  "20", "18", "22 Gds", "201 Gds", "3 I Motor", "7", "3", "7 S.G.", "2 S.G.",
    "2", "23", "2", "1", "151",
     "150", "69", "132", "61", "25",
      "21", "161", "18", "2", "1",
       "29", "10", "9", "23", "11",
        "7", "5", "6", "4", "6",
         "5", "4", "5", "3", "2",
          "1",
   "Carpathian", "", "1", "6 SA Motor", "4 SA Motor",
   "LRDG", "SAS"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==24||changeBlackFlag&&blackArmyNo==24){
  var nameQ="Eight Army - Olive";

  var qbase = ["#6b8e23","#6b8e23", "#6b8e23"];


  var unitsQ=[
  "#6b8e23/#000000/#ffff00/#000000","Tanks","5","4","n","arm","4","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Tanks","4","2","n","arm","3","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Tanks","3","2","n","arm","2","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Mechanised", "4", "1", "n","mech","3","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","2","3","n","inf","2","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Motor","5","3","n","sf","2","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Recce", "4", "2", "n","acav","1","6","||",
  "#6b8e23/#000000/#ffff00/#000000","Special Group", "2", "2", "n","sf","1","4","||",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","1","31","n","inf","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","2","3","n","mount","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Motor","2","2","n","sf","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Long Range Desert Group","9","1","n","sf","1","8","x",
  "#6b8e23/#000000/#ffff00/#000000","Special Air Service","5","1","n","para","1","6","x",
  "#6b8e23/#000000/#ffff00/#000000","Supply","0","0","n","supply","0","10","xx"
  ];

    var designateLQ=["7", "2", "1", "1", "10", "10", "", "", "7",
     "9 A",  "9 A", "9 A", "", "1", "7", "2 SA", "1 SA", "7", "2",
      "NZ", "70", "51", "51", "50",
       "50", "50", "44", "44", "10 I",
        "10 I", "8 I", "8 I", "7 A", "7 A",
         "5 I", "5 I", "5 I", "4 I", "4 I",
          "4 I", "4 I", "2 SA", "2 SA", "2 NZ",
           "2 NZ", "2 NZ", "1 SA", "1 SA", "1 SA",
            "1 SA",
     "Pol", "Jews", "Free Fr", "50", "7",
     "", ""
    ];

    var designateRQ=["4", "3", "22", "2", "23", "8", "32", "1", "7",
     "24",  "20", "18", "22 Gds", "201 Gds", "3 I Motor", "7", "3", "7 S.G.", "2 S.G.",
      "2", "23", "2", "1", "151",
       "150", "69", "132", "61", "25",
        "21", "161", "18", "2", "1",
         "29", "10", "9", "23", "11",
          "7", "5", "6", "4", "6",
           "5", "4", "5", "3", "2",
            "1",
     "Carpathian", "", "1", "6 SA Motor", "4 SA Motor",
     "LRDG", "SAS"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==25||changeBlackFlag&&blackArmyNo==25){
  var nameQ="Eight Army - Olive - Late '42";

  var qbase = ["#6b8e23","#6b8e23", "#6b8e23"];


  var unitsQ=[
  "#6b8e23/#000000/#ffff00/#000000","Tanks","8","2","n","arm","5","6","x",
  "#6b8e23/#000000/#ffff00/#000000","Tanks","5","4","n","arm","4","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Mechanised", "4", "1", "n","mech","3","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","2","3","n","inf","2","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Motor","5","3","n","sf","2","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Recce", "4", "2", "n","acav","1","6","||",
  "#6b8e23/#000000/#ffff00/#000000","Special Group", "2", "2", "n","sf","1","4","||",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","5","4","n","inf","4","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","1","18","n","inf","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","2","3","n","mount","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Motor","2","2","n","sf","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Long Range Desert Group","9","1","n","sf","1","8","x",
  "#6b8e23/#000000/#ffff00/#000000","Special Air Service","5","1","n","para","1","6","x",
  "#6b8e23/#000000/#ffff00/#000000","Special Boat Service","5","1","n","mar","1","6","x",
  "#6b8e23/#000000/#ffff00/#000000","Supply","0","0","n","supply","0","10","xx"
  ];

    var designateLQ=["7", "2", "1", "1", "10", "",  "7",
     "9 A",  "9 A", "9 A", "", "1", "7", "2 SA", "1 SA", "7", "2",
     "50", "5 I", "2 NZ", "1 SA",
      "NZ", "70", "51", "51",  "44", "44", "10 I",
        "10 I", "8 I", "8 I", "7 A", "7 A",
          "4 I", "4 I",
          "4 I", "4 I", "2 SA", "2 SA",
     "Pol", "Jews", "Free Fr", "50", "7",
     "LRDG", "SAS", "SBS"
    ];

    var designateRQ=["4", "3",  "22", "2", "8", "32",  "7",
     "24",  "20", "18", "22 Gds", "201 Gds", "3 I Motor", "7", "3", "7 S.G.", "2 S.G.",
     "", "", "", "",
      "2", "23", "2", "1",  "132", "61", "25",
        "21", "161", "18", "2", "1",
         "23", "11",
          "7", "5", "6", "4",
     "Carpathian", "", "1", "6 SA Motor", "4 SA Motor",
     "", "", ""];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==26||changeBlackFlag&&blackArmyNo==26){
  var nameQ="Barbarossa Berry";

  var qbase = ["#9999bb","#9999bb", "#9999bb"];


  var unitsQ=[
"#9999bb/#000000/#9999bb/#000000", "German inf corps", "4", "2", "n","inf","3","4","xxx",
"#9999bb/#000000/#9999bb/#000000", "German inf corps", "5", "21", "n","inf","4","4","xxx",
"#9999bb/#000000/#9999bb/#000000", "German inf corps", "6", "8", "n","inf","5","4","xxx",
"#9999bb/#000000/#9999bb/#000000", "German motor corps", "6", "1", "n","mech","3","6","xxx",
"#9999bb/#000000/#9999bb/#000000", "German motor corps", "7", "4", "n","mech","4","6","xxx",
"#9999bb/#000000/#9999bb/#000000", "German panzer corps", "9", "4", "n","arm","6","6","xxx",
"#9999bb/#000000/#9999bb/#000000", "German panzer corps", "10", "2", "n","arm","7","6","xxx",
"#9999bb/#000000/#9999bb/#000000", "German panzer corps", "11", "4", "n","arm","8","6","xxx",
"#9999bb/#000000/#9999bb/#000000","Supply","0","0","n","supply","0","10",""

  ];

    var designateLQ=["46", "45", "44", "43", "42", "41", "40", "39", "38", "37", "36", "35", "34",
  "33", "32", "31", "30", "29", "28", "27", "26", "25", "24", "23", "22", "21", "20", "19",
  "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4",
  "3", "2", "1"
    ];

    var designateRQ=["11", "30", "34", "52", "54", "38", "1", "23", "6", "3", "20", "43", "7",
  "13", "9", "35", "12", "17", "55", "29", "48", "4", "43", "3R", "4R", "5R", "26", "28",
  "2", "LR", "2R", "10", "3", "43", "53", "5", "44", "46", "6R", "24", "33", "55", "14",
  "42", "41", "57"];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==27||changeBlackFlag&&blackArmyNo==27){
  var nameQ="Barbarossa Black";

  var qbase = ["#000005","#000005", "#000005"];


  var unitsQ=[
"#000005/#ffffff/#9999bb/#000000", "German inf corps", "4", "0", "n","inf","3","4","xxx",
"#000005/#ffffff/#9999bb/#000000", "German inf corps", "5", "10", "n","inf","4","4","xxx",
"#000005/#ffffff/#9999bb/#000000", "German inf corps", "6", "4", "n","inf","5","4","xxx",

"#000005/#ffffff/#9999bb/#000000", "German motor corps", "6", "2", "n","mech","3","6","xxx",
"#000005/#ffffff/#9999bb/#000000", "German motor corps", "7", "2", "n","mech","4","6","xxx",

"#000005/#ffffff/#9999bb/#000000", "German panzer corps", "9", "2", "n","arm","6","6","xxx",
"#000005/#ffffff/#9999bb/#000000", "German panzer corps", "10", "1", "n","arm","7","6","xxx",
"#000005/#ffffff/#9999bb/#000000", "German panzer corps", "11", "2", "n","arm","8","6","xxx",
"#000005/#ffffff/#9999bb/#000000","Supply","0","0","n","supply","0","10",""

  ];

    var designateLQ=["17th", "55th", "29th", "48th", "4th", "43th", "3R", "4R", "5R", "26th",
    "28th", "2nd",  "LR", "2R", "10th", "3th", "53th", "5th", "6R", "24th",  "55th", "41th", "57th"
    ];

    var designateRQ=["23", "22", "21", "20", "19",
   "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4",
   "3", "2", "1"];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==28||changeBlackFlag&&blackArmyNo==28){
var nameQ="Frozen North All-Fours";

var qbase = ["#e0ffff","#e0ffff", "#e0ffff"];


var unitsQ=[
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Armoured Cars","9","4","n","acav","4","8","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Mechanised Infantry","7","5","n","mech","4","6","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Special Forces","7","4","n","sf","4","3","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Paratroops","4","4","n","para","4","2","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Infantry","5","7","n","inf","4","4","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Supply","0","0","n","supply","0","10","xx",

];


var designateLQ=["1st", "2nd", "3rd", "4th",
"1st", "1st", "2nd", "3rd", "4th",
"1st", "2nd", "3rd", "4th",
"1st", "2nd", "3rd", "4th", "1st", "2nd", "2nd","3rd", "3rd", "4th",  "4th"
];

var designateRQ=[
  "1","2","3","4","5","6",
  "7","8","9",
  "10","11","12",
  "13","14","15","16","17","18","19","20","21","22","23","24"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==29||changeBlackFlag&&blackArmyNo==29){
var nameQ="Fiery 4x4 Fields";

var qbase = ["#ff8c00","#ff8c00", "#ff8c00"];


var unitsQ=[
  "#ff8c00/#000000/#ffff00/#ff0000","Light Tanks","5","5","n","arm","4","4","xx",
"#ff8c00/#000000/#ffff00/#ff0000","Special Forces","8","6","n","sf","4","4","xx",
"#ff8c00/#000000/#ffff00/#ff0000","Paratroops","6","6","n","para","4","4","xx",
"#ff8c00/#000000/#ffff00/#ff0000","Infantry","5","8","n","inf","4","4","xx",
"#ff8c00/#000000/#ffff00/#ff0000","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["GHIJ", "GHIJ", "GHIJ","GHIJ", "GHIJ",
 "NOPQ", "NOPQ", "NOPQ", "NOPQ", "NOPQ", "NOPQ",
  "STUV", "STUV", "STUV", "STUV", "STUV", "STUV",
  "CDEF", "CDEF","CDEF","CDEF","CDEF", "CDEF","CDEF","CDEF"
];

var designateRQ=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
 "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==30||changeBlackFlag&&blackArmyNo==30){
var nameQ="Countdown Country";

var qbase = ["#ffffff","#ffffff", "#ffffff"];


var unitsQ=[
  "#ffffff/#000000/#ffffff/#000000","Artillery","8","1","n","art","10","1","xx",
  "#ffffff/#000000/#ffffff/#000000","Mobile Artillery","8","1","n","spa","9","2","xx",
  "#ffffff/#000000/#ffffff/#000000","Infantry","8","4","n","inf","8","3","xx",
  "#ffffff/#000000/#ffffff/#000000","Airborne","9","2","n","para","7","4","xx",
  "#ffffff/#000000/#ffffff/#000000","Special Forces","11","4","n","sf","6","5","xx",
  "#ffffff/#000000/#ffffff/#000000","Mechanised","8","1","n","mech","5","6","xx",
  "#ffffff/#000000/#ffffff/#000000","Armour","8","2","n","arm","4","7","xx",
  "#ffffff/#000000/#ffffff/#000000","Cavalry","8","1","n","cav","3","8","xx",
  "#ffffff/#000000/#ffffff/#000000","Armoured Cavalry","8","1","n","acav","2","9","xx",
  "#ffffff/#000000/#ffffff/#000000","Recon","8","1","n","recon","1","10","xx",
  "#ffffff/#000000/#ffffff/#000000","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Artillery", "Mobile Artillery", "Infantry", "Infantry", "Infantry", "Infantry",
 "Airborne", "Airborne", "Special Forces", "Special Forces", "Special Forces", "Special Forces",
  "Mechanised", "Armour", "Armour", "Cavalry", "Armoured Cavalry", "Recon"
];

var designateRQ=["1","2","3","4","5","6",
"7","8","9",
"10","11","12",
"13","14","15","16","17","18"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==31||changeBlackFlag&&blackArmyNo==31){
var nameQ="Evergreen Even Eden";

var qbase = ["#006400","#006400", "#006400"];


var unitsQ=[
  "#006400/#ffffff/#556b2f/#ffffff","Artillery","10","3","n","art","10","3","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Paratroops","10","3","n","para","8","4","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Special Forces","10","3","n","sf","6","4","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Infantry","7","6","n","inf","4","6","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Light Armour","6","3","n","acav","2","7","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Pine", "Laurel", "Oak", "Pine", "Laurel", "Oak",
 "Pine", "Laurel", "Oak", "Pine", "Laurel", "Oak", "Pine", "Laurel", "Oak",
  "Pine", "Laurel", "Oak"
];

var designateRQ=["1","2","3","4","5","6",
"7","8","9",
"10","11","12",
"13","14","15","16","17","18"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==32||changeBlackFlag&&blackArmyNo==32){
var nameQ="Ochlocratic Order of Odd Overlords";

var qbase = ["#da70d6","#da70d6", "#da70d6"];


var unitsQ=[
  "#da70d6/#000000/#afeeee/#000000","Tanks","10","3","n","arm","9","4","xx",
  "#da70d6/#000000/#afeeee/#000000","Infantry","8","6","n","inf","7","4","xx",
  "#da70d6/#000000/#afeeee/#000000","Special Forces","10","3","n","sf","5","5","xx",
  "#da70d6/#000000/#afeeee/#000000","Paratroops","6","3","n","para","3","5","xx",
  "#da70d6/#000000/#afeeee/#000000","Cavalry","4","6","n","cav","1","6","xx",
  "#da70d6/#000000/#afeeee/#000000","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Odin", "Odin", "Odin", "Baldr", "Baldr", "Baldr",
 "Baldr", "Baldr", "Baldr", "Loki", "Loki", "Loki", "Thor", "Thor", "Thor",
  "Freyja", "Freyja", "Freyja","Freyja", "Freyja", "Freyja"
];

var designateRQ=["1","2","3","4","5","6",
"7","8","9",
"10","11","12",
"13","14","15","16","17","18", "19","20","21"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==33||changeBlackFlag&&blackArmyNo==33){
var nameQ="Silvery Moon Meritocracy";

var qbase = ["#c0c0c0","#c0c0c0", "#c0c0c0"];


var unitsQ=[
  "#c0c0c0/#000000/#708090/#ffffff","Armour","8","6","n","arm","8","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Infantry","4","5","n","inf","4","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Special Forces","9","5","n","sf","6","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Paratroops","4","4","n","para","3","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Infantry","3","7","n","inf","3","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Armstrong", "Armstrong", "Armstrong", "Armstrong", "Armstrong", "Armstrong",
 "Columbia", "Columbia", "Columbia", "Columbia", "Columbia",
 "Aldrin", "Aldrin", "Aldrin", "Aldrin", "Aldrin",
  "Collins", "Collins", "Collins","Collins",
  "Eagle", "Eagle","Eagle", "Eagle","Eagle", "Eagle","Eagle"
];

var designateRQ=["I","II","III","IV","V","VI",
"VII","VIII","IX",
"X","XI","XII",
"XIII","XIV","XV","XVI","XVII","XVIII", "XIV","XX","XXI",
"XXII","XXIII","XXIV", "XXXV","XXVI","XXVII"
];
}
else if(changeRedFlag&&redArmyNo==34||changeBlackFlag&&blackArmyNo==34){
var nameQ="Rainbow Warriors";

var qbase = ["#000001","#000001", "#000001"];


var unitsQ=[
  "#000001/#ffffff/#ffffff/#000000","not","10","0","n","arm","8","5","xx",
  "#000001/#ffffff/#ff0000/#000000","Armour","10","3","n","arm","8","5","xx",
  "#000001/#ffffff/#ffa500/#000000","Mech","9","3","n","arm","6","6","xx",
  "#000001/#ffffff/#ffff00/#000000","Regular Infantry","5","6","n","inf","4","4","xx",
  "#000001/#ffffff/#00ff00/#000000","Special Forces","8","3","n","sf","4","4","xx",
  "#000001/#ffffff/#00ffff/#000000","Paratroops","4","3","n","para","3","3","xx",
  "#000001/#ffffff/#0000ff/#000000","Reserve Infantry","4","5","n","inf","3","3","xx",
  "#000001/#ffffff/#ee82ee/#000000","Scouts","3","4","n","scout","1","5","xx",
  "#000001/#ffffff/#ffffff/#000000","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Red", "Red", "Red", "Orange", "Orange", "Orange",
 "Yellow", "Yellow", "Yellow", "Yellow", "Yellow", "Yellow",
 "Green", "Green", "Green", "Blue", "Blue",
  "Blue", "Indigo", "Indigo","Indigo","Indigo","Indigo",
  "Violet", "Violet","Violet", "Violet"
];

var designateRQ=[
"1","2","3","4","5","6",
"7","8","9",
"10","11","12",
"13","14","15","16","17","18", "19","20","21",
"22","23", "24","25","26", "27"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==35||changeBlackFlag&&blackArmyNo==35){
var nameQ="Synthetic Technocracy Spectrum of States";

var qbase = ["#fffffe","#fffffe", "#fffffe"];


var unitsQ=[
  "#fffffe/#000000/#ffffff/#000000","not","10","0","n","arm","8","5","xx",
  "#fffffe/#000000/#ff0000/#000000","AI Tanks","11","3","n","arm","9","5","xx",
  "#fffffe/#000000/#ffa500/#000000","Driverless Gun-Trucks","8","3","n","arm","5","6","xx",
  "#fffffe/#000000/#ffff00/#000000","Tracked Robots","6","4","n","inf","4","5","xx",
  "#fffffe/#000000/#00ff00/#000000","Legged Robots","7","3","n","sf","4","3","xx",
  "#fffffe/#000000/#4169e1/#000000","Aerial Drones","7","3","n","para","3","5","xx",
  "#fffffe/#000000/#4b0082/#000000","Cyborg Zombies","3","5","n","inf","4","2","xx",
  "#fffffe/#000000/#ee82ee/#000000","Scout Drones","4","3","n","scout","1","6","xx",
  "#fffffe/#000000/#ffffff/#000000","Data Bus","0","0","n","supply","0","10","xx"

];


var designateLQ=["700", "700", "700", "600", "600", "600",
 "580", "580", "580", "580",
 "555", "555", "555", "475", "475",
  "475", "430", "430","430","430","430",
  "400", "400","400"
];

var designateRQ=[
"0","1","10","11","100","101",
"110","111","1000",
"1001","1010","1011",
"1100","1101","1110","1111","10000","10001", "10010","10011","10100",
"10101","10110", "10111"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==36||changeBlackFlag&&blackArmyNo==36){
var nameQ="Infantry-only Indigo Intellectuals";//Intelligencia

var qbase = ["#4b0082","#4b0082", "#4b0082"];


var unitsQ=[
  "#4b0082/#ffffff/#4b0082/#ffffff","Imperial Guard","9","6","n","inf","8","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Veterans","7","6","n","inf","6","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Regulars","5","6","n","inf","4","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Militia","3","6","n","inf","2","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Replacements","2","6","n","inf","1","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Division", "Division", "Division", "Division", "Division", "Division",
"Brigade", "Brigade", "Brigade", "Brigade", "Brigade", "Brigade",
"Regiment", "Regiment", "Regiment", "Regiment", "Regiment", "Regiment",
"Battalion", "Battalion", "Battalion", "Battalion", "Battalion", "Battalion",
"Company", "Company", "Company", "Company", "Company", "Company"
];

var designateRQ=[
"1","2","3","4","5","6",
"1","2","3","4","5","6",
"1","2","3","4","5","6",
"1","2","3","4","5","6",
"1","2","3","4","5","6"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==37||changeBlackFlag&&blackArmyNo==37){
var nameQ="Ivory Invisible Forces Intelligencia";//Intelligencia

var qbase = ["#fffff0","#fffff0", "#fffff0"];


var unitsQ=[
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","14","3","n","sf","10","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","10","4","n","sf","6","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","8","3","n","sf","4","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","6","4","n","sf","2","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","5","4","n","sf","1","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Assault", "Assault", "Assault",
"Attack", "Attack", "Attack", "Attack",
"Hold", "Hold", "Hold",
"Defend", "Defend", "Defend", "Defend",
"Garrison", "Garrison", "Garrison", "Garrison"
];

var designateRQ=[
  "1","2","3","4","5","6",
  "7","8","9",
  "10","11","12",
  "13","14","15","16","17","18"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==38||changeBlackFlag&&blackArmyNo==38){
var nameQ="Firebrick Feudal Fallschirmjager";//Intelligencia

var qbase = ["#b22222","#b22222", "#b22222"];


var unitsQ=[
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","9","4","n","para","8","3","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","7","4","n","para","6","3","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","6","6","n","para","5","3","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","6","5","n","para","4","4","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","5","4","n","para","3","4","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["1st", "1st", "1st","3rd",
 "3rd", "3rd" , "4th", "4th",
  "4th", "6th", "6th", "6th","7th", "7th",
"7th", "8th", "8th","8th", "10th",
 "10th", "10th", "11th", "11th"
];

var designateRQ=[
  "1st","3rd","4th","5th",
  "8th","9th", "10th","11th",
  "12th","16th","17th","18th","19th","20th",
  "21st","22nd","24th","32nd","28th",
  "29th","30th","37th","38th"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==39||changeBlackFlag&&blackArmyNo==39){
var nameQ="Maroon Great-Hate Mandate";//Intelligencia

var qbase = ["#800000","#800000", "#800000"];


var unitsQ=[
  "#800000/#ffffff/#ffff00/#800000","Mechanised","10","5","n","arm","8","5","xx",
  "#800000/#ffffff/#ffff00/#800000","Infantry","8","6","n","inf","8","3","xx",
  "#800000/#ffffff/#ffff00/#800000","Special Forces","12","2","n","sf","8","4","xx",
  "#800000/#ffffff/#ffff00/#800000","Paratroops","7","4","n","para","8","1","xx",
  "#800000/#ffffff/#ffff00/#800000","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Troll", "Ogre", "Gorgon",
 "Troll", "Ogre", "Gorgon",
"Troll", "Ogre", "Gorgon",
"Troll", "Ogre", "Gorgon",
"Troll", "Ogre", "Gorgon","Ogre","Gorgon"
];

var designateRQ=[
  "1","1","1",
  "2","2", "2",
  "3","3","3","4","4","4",
  "5","5","5",
  "6","6"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==40||changeBlackFlag&&blackArmyNo==40){
var nameQ="Golden Ground Troops Government in Exile";//Intelligencia

var qbase = ["#ffd700","#ffd700", "#ffd700"];


var unitsQ=[
  "#ffd700/#000000/#000000/#ffd700","Armoured","10","4","n","arm","8","5","xx",
  "#ffd700/#000000/#000000/#ffd700","Mechanised","10","4","n","mech","7","6","xx",
    "#ffd700/#000000/#000000/#ffd700","Guards","7","3","n","guard","6","4","xx",
    "#ffd700/#000000/#000000/#ffd700","Infantry","4","7","n","inf","4","3","xx",
    "#ffd700/#000000/#000000/#ffd700","Scouts","7","3","n","recon","2","8","xx",
  "#ffd700/#000000/#000000/#ffd700","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["6th", "6th", "6th", "5th", "6th",
 "8th", "8th", "10th", "8th",  "5th",
  "8th", "6th", "10th", "5th", "6th",
   "5th","5th","10th", "8th", "6th",
    "10th"
];

var designateRQ=["1", "2", "3", "4", "5", "6",
 "7", "8", "9", "10", "11", "12", "13", "14",
  "15", "16", "17", "18", "19", "20", "21"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==41||changeBlackFlag&&blackArmyNo==41){
var nameQ="Day-Glo Despotic Dukedom";//Intelligencia

var qbase = ["#a4ff00","#a4ff000", "#a4ff00"];


var unitsQ=[
"#a4ff00/#000000/#a6e3a1/#000000","arm","10","3","n","arm","9","4","xx",
"#a4ff00/#000000/#a6e3a1/#000000","arm","11","2","n","arm","9","5","xx",
"#a4ff00/#000000/#a6e3a1/#000000","sf","7","5","n","sf","4","3","xx",
"#a4ff00/#000000/#a6e3a1/#000000","para","3","6","n","para","3","2","xx",
"#a4ff00/#000000/#a6e3a1/#000000","inf","5","5","n","inf","4","4","xx",
"#a4ff00/#000000/#a6e3a1/#000000","inf","5","4","n","inf","5","3","xx",
"#a4ff00/#000000/#a6e3a1/#000000","supply","0","0","n","supply","0"," 10","xx",


];


var designateLQ=["3rd", "1st", "3rd", "1st", "8th",
 "5th", "3rd", "5th", "5th", "1st", "1st", "1st",
  "3rd", "5th", "3rd", "8th", "5th", "5th", "3rd",
   "1st", "5th", "1st", "3rd", "3rd", "8th"
];

var designateRQ=["1", "1", "2", "2", "1", "1", "3", "2", "3",
 "3", "4", "5", "4", "4", "5", "2", "5", "6",
  "6", "6", "7", "7", "7", "8", "3", "1", "2",
   "3", "4", "5", "6", "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==42||changeBlackFlag&&blackArmyNo==42){
var nameQ="Countdown Country #2";

var qbase = ["#ffffff","#ffffff", "#ffffff"];


var unitsQ=[
  "#ffffff/#000000/#ffffff/#000000","Artillery","8","1","n","art","10","1","xx",
  "#ffffff/#000000/#ffffff/#000000","Mobile Artillery","8","1","n","spa","9","2","xx",
  "#ffffff/#000000/#ffffff/#000000","Infantry","8","3","n","inf","8","3","xx",
  "#ffffff/#000000/#ffffff/#000000","Airborne","9","2","n","para","7","4","xx",
  "#ffffff/#000000/#ffffff/#000000","Special Forces","11","4","n","sf","6","5","xx",
  "#ffffff/#000000/#ffffff/#000000","Mechanised","8","1","n","mech","5","6","xx",
  "#ffffff/#000000/#ffffff/#000000","Armour","8","2","n","arm","4","7","xx",
  "#ffffff/#000000/#ffffff/#000000","Cavalry","8","2","n","cav","3","8","xx",
  "#ffffff/#000000/#ffffff/#000000","Armoured Cavalry","8","1","n","acav","2","9","xx",
  "#ffffff/#000000/#ffffff/#000000","Recon","8","1","n","recon","1","10","xx",
  "#ffffff/#000000/#ffffff/#000000","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Artillery", "Mobile Artillery", "Infantry", "Infantry", "Infantry",
 "Airborne", "Airborne", "Special Forces", "Special Forces", "Special Forces", "Special Forces",
  "Mechanised", "Armour", "Armour", "Cavalry", "Cavalry", "Armoured Cavalry", "Recon"
];

var designateRQ=["1","2","3","4","5",
"7","8","9",
"10","11","12",
"13","14","15","16","6", "17","18"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

if(addSupplyUnitsFlag){
  unitsQ.push(unitsQ[0], "Supply","0","8","n","supply","0","10","xx");
  designateLQ.push("", "", "", "", "", "", "captured", "captured");
  designateRQ.push("1","2","3","4","5","6","1","2");
}

if(addDummyUnitsFlag){
  unitsQ.push(unitsQ[0], "Blank","","8","b","blank","","","");
  designateLQ.push("", "", "", "", "", "", "", "");
  designateRQ.push("","","","","","", "", "");
}

if(printArmiesFlag){
var unitsN = [
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","0","x", "GAME", "TURN", "", ""];
/*var blankCode1 = new Array();
var blankCode1 = unitsQ[0];
var blankCode2 = ["0","0","3","b","0","0","0","0"];
var blankCode = blankCode1.concat(blankCode2);
//alert(""+blankCode);
unitsQ = unitsQ+","+blankCode;
alert(""+unitsQ+"                  len="+unitsQ.length+"                  len="+unitsQ.length/noOfItems);
var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}*/
}
else{
var unitsN = []}

if(changeRedFlag){
 nameA = nameQ;
/*
 Abase = qbase;

 unitsA1 = unitsQ;
 unitsA = unitsA1+unitsA2+unitsN;

  designateLA1 = designateLQ;
  designateRA1 = designateRQ;
*/
Abase = [];
for (const item of qbase) {
  Abase.push(item);
}
unitsA1 = [];
for (const item of unitsQ) {
  unitsA1.push(item);
}
designateLA1 = [];
designateRA1 = [];
for (const item of designateLQ) {
  designateLA1.push(item);
}
for (const item of designateRQ) {
  designateRA1.push(item);
}
  designateLA = designateLA1.concat(designateLA2);
  designateRA = designateRA1.concat(designateRA2);

unitsA = unitsA1.concat(unitsA2,unitsN);
    //alert("3:"+unitsA);

    sideA1 = [];
    for (const item of sideQ) {
      sideA1.push(item);
    }
    sideA = sideA1.concat(sideA2);
//alert(""+unitsA)
}
else if(changeBlackFlag){
  //alert(""+nameQ)
 nameB = nameQ;
/*
 Bbase = qbase;

 unitsA2 = unitsQ;

  designateLA2 = designateLQ;
  designateRA2 = designateRQ;
 */
 Bbase = [];
 for (const item of qbase) {
   Bbase.push(item);
 }
 unitsA2 = [];
 for (const item of unitsQ) {
   unitsA2.push(item);
 }
 designateLA2 = [];
 designateRA2 = [];
 for (const item of designateLQ) {
   designateLA2.push(item);
 }
 for (const item of designateRQ) {
   designateRA2.push(item);
 }
   designateLA = designateLA1.concat(designateLA2);
   designateRA = designateRA1.concat(designateRA2);
 unitsA = unitsA1.concat(unitsA2,unitsN);
    //alert("4:"+unitsA);
        sideA2 = [];
        for (const item of sideQ) {
          sideA2.push(item);
        }
        sideA = sideA1.concat(sideA2);

}
    //alert("4:"+unitsA);

}

function findArmiesBlackBlank(){

if(changeBlackFlag){
var nameQ="";

var qbase = ["#355e43","#355e43", "#355e43"];


var unitsQ=[
"#355e43/#ffffff/#b0dd98/#355e43","Phalanx","14","0","n","arm","11"," 6","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Marine and Mountain","7","0","n","sf","2"," 5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Vertical Invaders","3","0","n","para","2"," 3","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Hoorsemen","5","0","n","cav","3"," 5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Warriors","2","0","n","inf","3"," 2","xx",
"#355e43/#ffffff/#b0dd98/#355e43","supply","0","0","n","supply","0"," 10","xx"

];


var designateLQ=[
];

var designateRQ=[
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

if(printArmiesFlag){
var unitsN = [
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","0","x", "GAME", "TURN", "", ""];}
else{
var unitsN = [
"#ffaaaa/#000000/#ffffff/#000000","A REPLC","1","1","x", "<--A x1", "REPL", "", "",
"#ffaaaa/#000000/#ffffff/#000000","A REPLC x10","1","1","x", "<--A x10", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC","1","1","x", "<--B x1", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC x10","1","1","x", "<--B x10", "REPL", "", "",
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
"#dddd00/#000000/#ffffff/#000000", "side move","0","1","x", "Side to", "MOVE", "", ""];}


if(changeBlackFlag){
  //alert(""+nameQ)
 nameB = nameQ;
/*
 Bbase = qbase;

 unitsA2 = unitsQ;

  designateLA2 = designateLQ;
  designateRA2 = designateRQ;
 */
 Bbase = [];
 for (const item of qbase) {
   Bbase.push(item);
 }
 unitsA2 = [];
 for (const item of unitsQ) {
   unitsA2.push(item);
 }
 designateLA2 = [];
 designateRA2 = [];
 for (const item of designateLQ) {
   designateLA2.push(item);
 }
 for (const item of designateRQ) {
   designateRA2.push(item);
 }
   designateLA = designateLA1.concat(designateLA2);
   designateRA = designateRA1.concat(designateRA2);
 unitsA = unitsA1.concat(unitsA2,unitsN);
    //alert("4:"+unitsA);
        sideA2 = [];
        for (const item of sideQ) {
          sideA2.push(item);
        }
        sideA = sideA1.concat(sideA2);

}
    //alert("4:"+unitsA);

}

function supplyUnitsYesNo(){
  if(addSupplyUnitsFlag){
    addSupplyUnitsFlag=false;
    document.getElementById('btnSupply').innerText="Supply Units - No";
  }
  else{
    addSupplyUnitsFlag=true;
    document.getElementById('btnSupply').innerText="Supply Units - Yes";
  }
}

function blankUnitsYesNo(){
  if(addDummyUnitsFlag){
    addDummyUnitsFlag=false;
    document.getElementById('btnBlank').innerText="Blank Units - No";
  }
  else{
    addDummyUnitsFlag=true;
    document.getElementById('btnBlank').innerText="Blank Units - Yes";
  }
}
