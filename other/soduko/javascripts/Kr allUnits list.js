//all the units
function colorRed(){//change the color of red units between red and color
  if(redColor){
    redColor=false;
    document.getElementById('btn23').innerText="Red=Color";
    for(j=0;j<gerNumber;j++){
    printUnit(j, typeNumbA[j], typeTotalA[j], thisIsA[j],countIndividual[j]);
    }
  }
  else{
    redColor=true;
    document.getElementById('btn23').innerText="Red=Red";
    for(j=0;j<gerNumber;j++){
    printUnit(j, typeNumbA[j], typeTotalA[j], thisIsA[j],countIndividual[j]);
    }
  }
}


function colorBlack(){//change the color of black units between black and color
  if(blackColor){
    blackColor=false;
    document.getElementById('btn24').innerText="Black=Color";
    for(j=gerNumber;j<neutNumber;j++){
    printUnit(j, typeNumbA[j], typeTotalA[j], thisIsA[j],countIndividual[j]);
    }
  }
  else{
    blackColor=true;
    document.getElementById('btn24').innerText="Black=Black";
    for(j=gerNumber;j<neutNumber;j++){
    printUnit(j, typeNumbA[j], typeTotalA[j], thisIsA[j],countIndividual[j]);
    }
  }
}

function changeRedArmy2(n){
  //alert("find army #"+n);
  //for(var i=0; i<noOfPieces; i++){
  for(var i=0; i<noOfImages; i++){
    //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
    var element = document.getElementById("piece#"+i);
    element.remove();
  }

    imageArray = [];
    imageArray = document.getElementsByClassName("piece");

    noOfImages = imageArray.length;
    //alert("images="+noOfImages);

changeRedFlag = true;
changeBlackFlag = false;
redArmyNo=n;
findArmies();
sortArmies();
placePics2();
changeRedFlag = false;
document.getElementById('armyNameR').innerText="Red Army #"+redArmyNo+"\n"+nameA;
}

function changeRedArmy(){

    //for(var i=0; i<noOfPieces; i++){
    for(var i=0; i<noOfImages; i++){
      //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
      var element = document.getElementById("piece#"+i);
      element.remove();
    }

      imageArray = [];
      imageArray = document.getElementsByClassName("piece");

      noOfImages = imageArray.length;
      //alert("images="+noOfImages);

  changeRedFlag = true;
  changeBlackFlag = false;
  redArmyNo++;
  if(redArmyNo>redArmyMax){redArmyNo=0;}
  findArmies();
  sortArmies();
  placePics2();
  changeRedFlag = false;
  document.getElementById('armyNameR').innerText="Red Army #"+redArmyNo+"\n"+nameA;
}

function changeBlackArmy2(n){
  //alert("find army #"+n);
  //for(var i=0; i<noOfPieces; i++){
  if(n==0){n=1;}
  else if(n==1){n=0;}
  else{}
  for(var i=0; i<noOfImages; i++){
    //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
    var element = document.getElementById("piece#"+i);
    element.remove();
  }

    imageArray = [];
    imageArray = document.getElementsByClassName("piece");

    noOfImages = imageArray.length;
    //alert("images="+noOfImages);

changeRedFlag = false;
changeBlackFlag = true;
blackArmyNo=n;
findArmies();
sortArmies();
placePics2();
changeRedFlag = false;
document.getElementById('armyNameB').innerText="Black Army #"+blackArmyNo+"\n"+nameB;
}

function changeBlackArmy(){

    for(var i=0; i<noOfPieces; i++){
      //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onmouseover="doThis(this)" onmouseout="doThis2(this)" onclick="change(this)">');
      const element = document.getElementById("piece#"+i);
      element.remove();
    }

  changeRedFlag = false;
  changeBlackFlag = true;
  blackArmyNo++;
  if(blackArmyNo>blackArmyMax){blackArmyNo=0;}
  findArmies();
  sortArmies();
  placePics2();
  changeBlackFlag = false;
  document.getElementById('armyNameB').innerText="Black Army #"+blackArmyNo+"\n"+nameB;
}


//neutral units
/*
"x","A REPLC","1","0","x", "<--A x1", "REPL", "", "",
"x","A REPLC x10","1","0","x", "<--A x10", "REPL", "", "",
"x","B REPLC","1","0","x", "<--B x1", "REPL", "", "",
"x","B REPLC x10","1","0","x", "<--B x10", "REPL", "", "",
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", ""
*/

function sortArmies(){
//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces =18;
var rusPieces =7;
var gerPieces =6;
var neutPieces = 5;

noOfPieces= 0; //no of pieces in game
unitTotal= 0; //number of types of pieces
lastIndex= 0; //index number of last piece - north marker
gerNumber= 0;
rusUnits=0;//rusUnits+1; //the index number of the first german piece
gerUnits=0;
neutUnits=0;
neutNumber=0;
//...calculated here...
noOfItems=9;
var baseAlen = Abase.length;
var baseB1 = Bbase.slice(0,-1);
var loopLen = unitsA.length/noOfItems;

for(i=0;i<loopLen;i++){
  //alert("i="+i+"noOfItems="+noOfItems+"i*noOfItems="+(i*noOfItems)+"unitsA[i*noOfItems]="+unitsA[i*noOfItems])

  if(sideA[i]==0){//if side A
    rusUnits = 1*rusUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else if(sideA[i]==1){//if side B
  gerUnits = 1*gerUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else{
    neutUnits = 1*neutUnits + 1*unitsA[(i*noOfItems)+3];
  }
/*
  var dumBaseA = unitsA[i*noOfItems].split("/");
  var dumBase0 = dumBaseA[0];
  //if(i<2){alert("7:"+"dumBaseA="+dumBaseA+"  , dumBase0="+dumBase0)}
  if(dumBase0==Abase[0]||dumBase0==Abase[1]||dumBase0==Abase[2]){//if not jap or not neutral
    rusUnits = 1*rusUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else if(dumBase0==Bbase[0]||dumBase0==Bbase[1]||dumBase0==Bbase[2]){//if neutral
  gerUnits = 1*gerUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else{
    neutUnits = 1*neutUnits + 1*unitsA[(i*noOfItems)+3];
  }*/
}

noOfPieces= rusUnits+gerUnits+neutUnits; //no of pieces in game
unitTotal= loopLen; //number of types of pieces
lastIndex= rusUnits+gerUnits+neutUnits; //index number of last piece - north marker
gerNumber= rusUnits;//rusUnits+1; //the index number of the first german piece
neutNumber= rusUnits+gerUnits;//+1;//rusUnits+gerUnits+1; //index number of first neutral piece

//alert("5:"+"noOfPieces="+noOfPieces+"unitTotal="+unitTotal+"lastIndex="+lastIndex+"gerNumber="+gerNumber+"rusUnits="+rusUnits+"neutNumber="+neutNumber)

//alert("5:"+"noOfPieces="+noOfPieces+"unitTotal="+unitTotal+"lastIndex="+lastIndex+"gerUnits="+gerUnits+"rusUnits="+rusUnits+"neutUnits="+neutUnits)

}
