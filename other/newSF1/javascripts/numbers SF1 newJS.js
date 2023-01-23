

/*
var noOfPieces=40; //no of pieces in game
var unitTotal=81; //number of types of pieces
var lastIndex=21; //index number of last piece - north marker
var gerNumber=19; //the index number of the first german piece
var neutNumber=20; //index number of first neutral piece
*/


var noOfItems2=2; //no of items of data for each unit type
var itemsPerUnit2 = noOfItems2;

var totalPieces = 11;//number of types of pieces
var rusPieces = 1;//number of TYPES
var gerPieces = 1;
var neutPieces = 1;

var totUnits = 0;
var rusUnits = 0;
var gerUnits = 0;
var neutUnits =0;



var numbersA=[
"sov/sov_", "6", 

"us/us_", "4",
"neut/gameturn","1"
];

for(i=0;i<rusPieces;i++){ //(i*2)-1
  rusUnits = 1*rusUnits + 1*numbersA[(i*2)+1];
  }

for(i=rusPieces;i<(rusPieces+gerPieces);i++){ //(i*2)-1
  gerUnits = 1*gerUnits + 1*numbersA[(i*2)+1];
  }
 
for(i=(rusPieces+gerPieces);i<(rusPieces+gerPieces+neutPieces);i++){ //(i*2)-1
  neutUnits = 1*neutUnits + 1*numbersA[(i*2)+1];
  }

//alert("G6 A8");
//alert ("rus="+rusUnits+" ger="+gerUnits+" neut="+neutUnits);

 
noOfPieces= rusUnits+gerUnits+neutUnits; //no of pieces in game
//alert(""+noOfPieces);

unitTotal= totalPieces; //number of types of pieces
//alert(""+totalPieces);
lastIndex= rusUnits+gerUnits+neutUnits; //index number of last piece - north marker
gerNumber= rusUnits;//+1; //the index number of the first german piece
neutNumber= rusUnits+gerUnits+1; //index number of first neutral piece


//alert ("lastIndex="+lastIndex+" gerNumber="+gerNumber+" neutNumber="+neutNumber);
  
for(j=0;j<totalPieces;j++){
  unitsA[j*noOfItems+2] = numbersA[j*noOfItems2+1];//unitsA[j*6+3] = numbersA[j*2+1];//unitsA[j*noOfItems+3] = numbersA[j*noOfItems2+1]

} 


