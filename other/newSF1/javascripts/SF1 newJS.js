
var lastIndex = 0;
var imageArray=new Array();
var piecesArray=new Array();
var piecesLeft=new Array();
var piecesTop=new Array();
var hopperLeft=0;
var hopperTop=0;
var mouseActive=0;
var xpos=0;
var ypos=0;
var xpos2=0;
var ypos2=0;
var leftPos=0;//position of transport so passanger can get aboard!
var topPos=0;
var oldXpos=0;
var oldYpos=0;
//var ps=0;//holds the passenger unit image
var relX=0;
var relY=0;
var activeIndex=0;
var oldIndex=-1;
var activeImage = null;
var oldImage = 0;
var noOfImages = 0;
var nextZ=100;
var pieceSize = sunit/10;
var pieceShrink = 1;
var boardSize = 2;
var boardNumb = 1;
var buried = 0;
var noOfTouches = 0;
var ongoingTouches = new Array;
var line = new Array;//holds the h1 elements
var rulerL = new Array;//holds the left and top positions of the elements
var rulerT = new Array;

var effectiveA=new Array();
var disruptedA=new Array();
var hideA=new Array();
var deadA=new Array();
var thisIsA=new Array(); //array to hold what each piece actually is
var armourA=new Array();
var leftA=new Array();
var topA=new Array();
var movedA = new Array();
var firedA = new Array();
var transA= new Array();//flag to indicate unit is carrying 1=loaded, 0=empty
var panicA= new Array();
var dismountA = new Array();
var isCavA= new Array();
var transActive = 0;//hold image of transport unit
var transIndex = 0;//hold index of transport unit
var transporterA=new Array();//array to hold id of the transported unit: transporterA[id of carrier]=id of passenger
var passengerA=new Array();//array to hold length (+11) of passengers name: passengerA[id of carrier]=length of pngers name +11
var typeNumbA=new Array(); //id number within type of unit
var findPasFlag=0;
var transActive=0;
var hideRus=0;
var hideGer=0;
var russiansHid=false;
var germansHid=false;
var turnNumb=1;
var gerDead=0;
var rusDead=0;
var firerA=new Array();
var dismountA = new Array();
var exitA= new Array();
var cityA= new Array();
var unionVP=15;
var rebelVP=0;
var turnLetter = "A";
var turnNumber = 0; //this is the turn number
var turnNumb=1; //this is what part of a turn we are in 1:A's turn 2:end of A's turn 3:B's turn 4:end of B's turn
var turnCode = "A00";
var scale=2; //factor to change size by
var size=8; //biggest size counts as size 4
var halfsize=0; //1=pieces are halfsize
var hiddenMovement = false;
var keyBoard = null;
var dieInHand=1;
var neutN=new Array();
var ruler=false;
var rusDeadPts=0;
var gerDeadPts=0;
var deadDummy=0;
var navyMis=false;
var airMis=false;
var navyMisA=new Array();
var airMisA=new Array();
var startYear=10;
var seasonA=new Array();
seasonA[0]="May";seasonA[1]="May";seasonA[2]="May";seasonA[3]="May";
var currentPlayer=nameB;
var startSeasonOffset=1;
var seasonNow=seasonA[0+startSeasonOffset];
var yearNow=startYear;
var alliedVP=0;
var gerVP=0;
var shuffleStep=1;
var mouseOverFlag=false;//turn mouseOver piece enlarge on/off KEY=Ll
var hopperFlag=true;//turn hopper on/off KEY=Hh or Jj if Hh used for 'hidden'
//var changeOfSize=0;
var hopSignL = 1;
var hopSignT = 1;
var hopJump = 1;
var turnTock = 0;//auto turn counter
var pieceNameA = new Array();
var supplyA = 3;//0 - all in supply; 1- all out of supply; 2 - random supply
var supplyB = 3;


function addAllHandlers(){

    var board = document.getElementById("board");
    board.addEventListener("click", placePieceHere, false);

    window.addEventListener("keyup", keyInput, false);

    //window.addEventListener("touchstart", whereTouched, false);
    //window.addEventListener("touchmove", whereMoved, false);
    //window.addEventListener("touchend", whereEnded, false);

    for(var k=0;k<noOfImages;k++){
    //window.addEventListener("click", whereClicked, false);
    imageArray[k].addEventListener("click", whereClicked, false);
    }

    line = document.getElementsByTagName("h1");
    document.onmousedown=drawLine;
    board.addEventListener("onmousedown", drawLine, false);
    for(i=0;i<33;i++){
		rulerL[i] = 0;
		rulerT[i] = 0;
	}



}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("unit", ev.target.id);
  var data = ev.dataTransfer.getData("unit");
  mouseActive=1;
  activeImage = document.getElementById(data);
  activeIndex = activeImage.getAttribute("id");
  activeIndex = 1*activeIndex.slice(6);
  //alert(""+activeIndex);
      relX = event.pageX;
      relY = event.pageY;

      var targetLeft = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("left");
      var targetTop = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("top");
      targetLeft = +targetLeft.slice(0,-2);
      targetTop = +targetTop.slice(0,-2);
      relX = relX - targetLeft;
      relY = relY - targetTop;

}


function drop(ev) {
  ev.preventDefault();
  placePieceHere(ev);
//  for(i=0;i<noOfPieces;i++){
//    activeIndex=i;
  doEdgeColor();
//}
}


function whereClicked(event) //where on a piece has the mouse been clicked
{
    relX = event.pageX;
    relY = event.pageY;

    var targetLeft = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("left");
    var targetTop = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("top");
    targetLeft = +targetLeft.slice(0,-2);
    targetTop = +targetTop.slice(0,-2);
    relX = relX - targetLeft;
    relY = relY - targetTop;

    //alert("left:"+relX + " top:"+relY);

}

/*
function ongoingTouchIndexById(idToFind) {
      for (var i=0; i<ongoingTouches.length; i++) {
        var id = ongoingTouches[i].identifier;

        if (id == idToFind) {
          return i;
        }
      }
      return -1;    // not found
    }

function whereTouched(evt) //where on a piece has the touch been made
{
    //evt.preventDefault();
    var touches = evt.changedTouches;
        ongoingTouches.push(touches[0]);
    var targetImg = evt.target;


    if(touches.length==1)
    { noOfTouches=1;
      change(targetImg[0]);

    }
    else if(touches.length==2)
    { noOfTouches=2;
      //makeSmaller();
    }
    else if(touches.length>2)
    { noOfTouches=3;
      //makeBigger();
    }

}

function whereMoved(evt)
{
  //evt.preventDefault();

  if(noOfTouches==1){
    var touches = evt.changedTouches;
    var idx = ongoingTouchIndexById(touches[0].identifier);


    //ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    //touches[i].pageX, touches[i].pageY);

    xpos = ongoingTouches[idx].pageX;
    ypos = ongoingTouches[idx].pageY;
    //alert("left:"+xpos+ " top:"+ypos);

  if(mouseActive==1){

    //activeImage = document.getElementById("piece#"+activeIndex);

   //xpos = event.pageX;
    //ypos = event.pageY;
    //alert("left:"+xpos+ " top:"+ypos);
    activeImage.style.left= xpos + "px";
    activeImage.style.top= ypos + "px";
    piecesLeft[activeIndex]= (xpos)/boardSize;
    piecesTop[activeIndex]= (ypos)/boardSize;

    //activeImage.setAttribute("class", "piece");
    //activeImage.style.zIndex = nextZ++;
    //oldImage = activeImage;
    //mouseActive=0;
  }
  }
}

function whereEnded(evt)
{
  evt.preventDefault();
}
*/


function drawLine(event){//-4 and -17 are because of offset of h1 elements
	if(ruler){
	xpos2=event.pageX-2;//evnt.offsetX-4;//event.x-4;
	ypos2=event.pageY-32;//evnt.offsetY-17;//event.y-17;
//offsetXY works when the window scrolls but not when you click on pieces
//.x .y you can click on pieces but line goes wrong when you scroll
	for(i=0;i<33;i++){
		line[i].style.left=xpos2-((xpos2-oldXpos)/32)*i +"px";
		rulerL[i] = ((xpos2-((xpos2-oldXpos)/32)*i)+2)/boardSize;
		line[i].style.top=ypos2-((ypos2-oldYpos)/32)*i +"px";
		rulerT[i] = ((ypos2-((ypos2-oldYpos)/32)*i)+32)/boardSize;
	}
	oldXpos=xpos2;
	oldYpos=ypos2;
	}

}


 function placePieceHere(event) //move the active piece into a new position
{
    xpos = event.pageX;
    ypos = event.pageY;
    //alert("left:"+xpos+ " top:"+ypos);

  if(mouseActive==1){

    //activeImage = document.getElementById("piece#"+activeIndex);

    xpos = event.pageX;
    ypos = event.pageY;
    //alert("left:"+xpos+ " top:"+ypos);
    if(mouseOverFlag){
    activeImage.style.left= xpos - relX/2 + "px";//xpos - relX/2 + "px";
    activeImage.style.top= ypos - relY/2 + "px";//ypos - relY/2 + "px";
    piecesLeft[activeIndex]= Math.round((xpos - relX/2)/boardSize);//Math.round((xpos - relX)/boardSize);
    piecesTop[activeIndex]= Math.round((ypos - relY/2)/boardSize);//Math.round((ypos - relY)/boardSize);
    keyBoard.style.left= xpos - relX/2 + hopSignL*pieceSize*boardSize*2 + "px";//xpos - relX/2 + "px";
    keyBoard.style.top= ypos - relY/2 + hopSignT*pieceSize*boardSize*2 + "px";//ypos - relY/2 + "px";
    document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
    }
    else{
    activeImage.style.left= xpos - relX + "px";//xpos - relX/2 + "px";
    activeImage.style.top= ypos - relY + "px";//ypos - relY/2 + "px";
    piecesLeft[activeIndex]= Math.round((xpos - relX)/boardSize);//Math.round((xpos - relX)/boardSize);
    piecesTop[activeIndex]= Math.round((ypos - relY)/boardSize);//Math.round((ypos - relY)/boardSize);
    keyBoard.style.left= xpos - relX + hopSignL*pieceSize*boardSize*2 + "px";//xpos - relX/2 + "px";
    keyBoard.style.top= ypos - relY + hopSignT*pieceSize*boardSize*2 + "px";//ypos - relY/2 + "px";
    document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
    }
    hopperLeft= (xpos - relX + hopSignL*pieceSize*boardSize*2);//xpos - relX/2 + "px";
    hopperTop= (ypos - relY) + hopSignT*pieceSize*boardSize*2;//ypos - relY/2 + "px";
    if(hopperFlag){keyBoard.style.zIndex = nextZ++;}
    activeImage.setAttribute("class", "piece");
    activeImage.style.borderColor="black";
    activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
    //alert(""+piecesTop[activeIndex]);
    mouseActive=0;
  hopHop(xpos, ypos);
    if(movedA[activeIndex]==0){changeMark(activeImage, activeIndex, 1);}
    if(activeIndex==lastIndex-1){turnTock++
      if(turnTock==2){
        //turnTock=0;
        nextTurn();
      }
    }
  }

  //now need to save the page
  doEdgeColor();
  saveWindow2();
}


function placePics() //initialise, add the game pieces to the board
{
  keyBoard = document.getElementById('keyPressTable');

  var d1 = document.getElementById('board');
  for(var i=0; i<noOfPieces; i++){
    d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onclick="change(this)" draggable="true" ondragstart="drag(event)">');
    //d1.insertAdjacentHTML('afterend', '<img class=piece src="" title="" onclick="change(this)">');
  }

  imageArray = document.getElementsByClassName("piece");

  noOfImages = imageArray.length;
  var noOfImg=0; //index to hold the number of every piece

  //for(j=0;j<noOfImages;j++){
  for(i=0;i<unitTotal+1;i++){
	totalNo=unitsA[i*noOfItems+2];
	for(j=0;j<totalNo;j++){
    piecesArray[noOfImg]=imageArray[noOfImg];
    imageArray[noOfImg].setAttribute("id", "piece#"+noOfImg);//1st piece is id:#0
    imageArray[noOfImg].setAttribute("src", "units/"+unitsA[i*noOfItems]+(j+1)+".jpg");
	  imageArray[noOfImg].setAttribute("title", "#"+(noOfImg+1)+": "+unitsA[i*noOfItems+1]+" "+(j+1)+"/"+totalNo);
	armourA[noOfImg]=unitsA[i*noOfItems+3];
	if(armourA[noOfImg]=="x"){neutN[noOfImg]=0;}
	if(armourA[noOfImg]=="s"){firerA[noOfImg]=1;
						navyMisA[noOfImg]=0;}
	else if(armourA[noOfImg]=="a"){firerA[noOfImg]=2;
						airMisA[noOfImg]=0;}
						else{firerA[noOfImg]=0;}
	if(armourA[noOfImg]=="c"){isCavA[noOfImg]=1;}
						else{isCavA[noOfImg]=0;}
	activeImage=imageArray[noOfImg];
	activeIndex=noOfImg;
	doEdgeColor();
	thisIsA[noOfImg]=i;
	typeNumbA[noOfImg]=j+1;
	noOfImg++;
	if(noOfImg>noOfImages-1){noOfImg=noOfImages-1;}
       }
  }

  for(k=0;k<noOfImages;k++){
  imageArray[k].style.left=(k-Math.floor(k/10)*10)*pieceSize*1.5+100+"px";//(k-(Math.floor(k/10)*10))+100+"px";//k*60+"px";
  imageArray[k].style.top=Math.floor(k/10)*pieceSize*1.5+100+"px";//k*60+"px";
  piecesLeft[k] = Math.round((k-Math.floor(k/10)*10)*pieceSize*1.5+100);
  piecesTop[k] = Math.round(Math.floor(k/10)*pieceSize*1.5+100);
  imageArray[k].style.width=pieceSize+"px";
  imageArray[k].style.height=pieceSize+"px";
  imageArray[k].style.borderWidth=boardSize*2+"px";
  }

  for(i=0;i<noOfImages;i++){
    effectiveA[i]=0;
    disruptedA[i]=0;
    hideA[i]=0;
    deadA[i]=0;
    movedA[i] = 0;
    firedA[i] = 0;
    transA[i]= 0;
    panicA[i]= 0;
    dismountA[i] = 0;
    //firerA[i]= 0;
    dismountA[i] = 0;
    exitA[i]= 0;


  }

  addAllHandlers();
  changeSize();
  makeBigger();
	nameOfTurn();
	placePicsCity();
	//placeNow++;
	//boxSmall_window();
}


function change(n) //make a piece active or deactivate an active piece
{

  var targetImg = n;

  if(targetImg.getAttribute("class")=="piece"||targetImg.getAttribute("class")=="touched")
  {
  //activeIndex = targetImg;

  var indexID = targetImg.getAttribute("id");
  activeIndex = +indexID.slice(6);//+ in front should convert string to number
  activeImage = document.getElementById("piece#"+activeIndex);

  if(findPasFlag==1){
	targetImg.style.borderColor="orange";
	checkPas(activeIndex);
	}
else{
  if(activeIndex==oldIndex&mouseActive){//touching same piece - DEACTIVATE
    //add hopper to piece as it is deactivated...
    var hopperL = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("left");//these values already have "px" attached
    var hopperT = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("top");
    hopperL = +hopperL.slice(0,-2);//remove "px", and turn into number
    hopperT = +hopperT.slice(0,-2);
  /*following doesnt work in getting left position...
      var hopperL = +activeImage.style.left; [***IT DOES WORK! SEE...
    var testJS = activeImage.style.left;
    alert(""+testJS+" "+hopperL);]
  have to use...
  document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("left");
  */
    //alert(""+hopperL+" "+hopperT);
    keyBoard.style.left= hopperL + pieceSize*boardSize*2 + "px";//xpos - relX/2 + "px";
    keyBoard.style.top= hopperT + pieceSize*boardSize*2 + "px";//ypos - relY/2 + "px";
    //keyBoard.style.left= hopperL + 25*scale + "px";//xpos - relX/2 + "px";
    //keyBoard.style.top= hopperT + 25*scale + "px";//ypos - relY/2 + "px";
    hopperLeft= hopperL + pieceSize*boardSize*2;//xpos - relX/2 + "px";
    hopperTop= hopperT + pieceSize*boardSize*2;//ypos - relY/2 + "px";
    //hopperLeft= (hopperL + 25*scale)/boardSize;//xpos - relX/2 + "px";
    //hopperTop= (hopperT + 25*scale)/boardSize;//ypos - relY/2 + "px";
    keyBoard.style.zIndex = nextZ++;
    document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
    //deactivate piece...
    activeImage.setAttribute("class", "piece");
    activeImage.style.borderColor="black";
    activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
    mouseActive=0;//deactivate
  hopHop(hopperL, hopperT);
    doEdgeColor();
  }
  else{//not touching same piece
    if(mouseActive==1){//touching new piece while mouseactive so STACK ON TOP
    if(oldIndex>-1&oldIndex!=activeIndex){//oldImage.setAttribute("class", "piece");
      //activeImage.style.borderColor="black";
      var dummyImage = activeImage;//dummy is the unit clicked on 2nd
      var dummyIndex = activeIndex;//
      var dummyL = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("left");//these values already have "px" attached
      var dummyT = document.defaultView.getComputedStyle(activeImage, null).getPropertyValue("top");
      dummyL = +dummyL.slice(0,-2);//remove "px", and turn into number
      dummyT = +dummyT.slice(0,-2);
      if(mouseOverFlag){
          dummyL = dummyL + pieceSize*boardSize/2 ;
          dummyT = dummyT + pieceSize*boardSize/2 ;
          }
      activeImage = oldImage;//make 1st clicked unit the active image
      activeIndex = oldIndex;

    activeImage.style.left= dummyL - pieceSize*boardSize/4 + "px";//xpos - relX/2 + "px";
    activeImage.style.top= dummyT - pieceSize*boardSize/4 + "px";//ypos - relY/2 + "px";
    piecesLeft[activeIndex]= Math.round((dummyL - pieceSize*boardSize/4)/boardSize);//Math.round((xpos - relX)/boardSize);
    piecesTop[activeIndex]= Math.round((dummyT - pieceSize*boardSize/4)/boardSize);//Math.round((ypos - relY)/boardSize);
    //keyBoard.style.left= xpos - relX + pieceSize*boardSize*2 + "px";//xpos - relX/2 + "px";
    //keyBoard.style.top= ypos - relY + pieceSize*boardSize*2 + "px";//ypos - relY/2 + "px";
      //doEdgeColor();
      //activeImage = dummyImage;
      //activeIndex = dummyIndex;}
    //activeImage.setAttribute("class", "touched");
  	activeImage.style.borderColor="black";
    activeImage.style.zIndex = nextZ++;
    oldIndex = activeIndex;
    oldImage = activeImage;
	  //alert("top:"+piecesTop[activeIndex]+"bottom:"+piecesTop[dummyIndex]);
    mouseActive=0;
    if(movedA[activeIndex]==0){changeMark(activeImage, activeIndex, 1);}
  hopHop(dummyL, dummyT);
    doEdgeColor();
  }
  doEdgeColor();
  saveWindow2();
  }

    else{//if mouseActive==0 - ACTIVATE NEW PIECE
    //else{//touching new piece
    if(oldIndex>-1&oldIndex!=activeIndex){//oldImage.setAttribute("class", "piece");
      //activeImage.style.borderColor="black";
      var dummyImage = activeImage;//doEdgeColor only works on activeImage/activeIndex
      var dummyIndex = activeIndex;//so use this work around
      //not sure what next 2 lines are for...
      //activeImage = oldImage;
      //activeIndex = oldIndex;
      doEdgeColor();
      activeImage = dummyImage;
      activeIndex = dummyIndex;}
    //activeImage.setAttribute("class", "touched");
  	activeImage.style.borderColor="yellow";
    activeImage.style.zIndex = nextZ++;
    //alert("here");
    oldIndex = activeIndex;
    oldImage = activeImage;
    mouseActive=1;
  }
  }
}
}
}

function doThis(n) //magnify the piece mouse hovers over
{
if(mouseOverFlag){
  var targetImg = n;
  var targetLeft = document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("left");
  var targetTop = document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("top");
  targetLeft = +targetLeft.slice(0,-2);
  targetTop = +targetTop.slice(0,-2);
  targetImg.style.left= (targetLeft - (pieceSize*boardSize)) + "px";
  targetImg.style.top= (targetTop - (pieceSize*boardSize)) + "px";
  targetImg.style.width=(2*pieceSize*boardSize)+"px";
  targetImg.style.height=(2*pieceSize*boardSize)+"px";
  targetImg.style.left= (targetLeft - (pieceSize*boardSize)/2) + "px";
  targetImg.style.top= (targetTop - (pieceSize*boardSize)/2) + "px";
  }
}

function doThis2(n) //put piece back to normal size as mouse moves away
{
if(mouseOverFlag){
  var targetImg = n;
  var targetLeft = document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("left");
  var targetTop = document.defaultView.getComputedStyle(targetImg, null).getPropertyValue("top");
  targetLeft = +targetLeft.slice(0,-2);
  targetTop = +targetTop.slice(0,-2);
  targetImg.style.left= (targetLeft + (pieceSize*boardSize)/2) + "px";
  targetImg.style.top= (targetTop + (pieceSize*boardSize)/2) + "px";
  targetImg.style.width=(pieceSize*boardSize)+"px";
  targetImg.style.height=(pieceSize*boardSize)+"px";
  }
}


function changeSize() //change the size of board and pieces following key press
{

  var board = document.getElementById("board");
  //board.setAttribute("src", boardAddress);

  var scale2 = boardSize;
	var swidth2=swidth*scale2/8;
	var	sheight2=sheight*scale2/8;
		//document.all.board.style.width=swidth;
		board.style.width = swidth2 + "px";
		//board.setAttribute("width", swidth);
		//document.all.board.style.height=sheight;
		board.style.height = sheight2 + "px";
		//board.setAttribute("height", sheight);
  //board.setAttribute("src", boardAddress+boardSize+".jpg");
  //board.style.left = -10 +"px";
  //board.style.top = -10 +"px";

  for(k=0;k<noOfImages;k++){
  imageArray[k].style.width=(pieceSize*boardSize/pieceShrink)+"px";
  imageArray[k].style.height=(pieceSize*boardSize/pieceShrink)+"px";
  imageArray[k].style.borderWidth=boardSize+"px";///2 or *2+"px";
  //if(k==20){
  //  alert(""+piecesLeft[k]+" "+boardSize*piecesLeft[k]);   }
  imageArray[k].style.left=(boardSize*piecesLeft[k])+"px";
  imageArray[k].style.top=(boardSize*piecesTop[k])+"px";
  if(deadA[k]==1){
        imageArray[k].style.width=(pieceSize*boardSize/pieceShrink/2)+"px";
        imageArray[k].style.height=(pieceSize*boardSize/pieceShrink/2)+"px";
        imageArray[k].style.left=(boardSize*piecesLeft[k]+pieceSize*boardSize/pieceShrink/4)+"px";
        imageArray[k].style.top=(boardSize*piecesTop[k]+pieceSize*boardSize/pieceShrink/4)+"px";
			}
  //piecesLeft[k]=(boardSize*piecesLeft[k]);
  //piecesTop[k]=(boardSize*piecesLeft[k]);
  }

  keyBoard.style.left= (boardSize*hopperLeft)+"px";
  keyBoard.style.top= (boardSize*hopperTop)+"px";
  keyBoard.style.width= (boardSize*200/8)+"px";
  keyBoard.style.height= (boardSize*200/8)+"px";
}

function makeBigger()
{
  boardSize = boardSize*2;
  //changeOfSize=2;
  if(boardSize>8){
  boardSize=8;
  //changeOfSize=1;
  }
  changeSize();
}

function makeSmaller()
{
  boardSize = boardSize/2;
  //changeOfSize=0.5;
  if(boardSize<1){
  boardSize=1;
  //changeOfSize=1;
  }
  changeSize();
}

function keyInput(event) //catch keyboard input
{

    var keyCode = event.keyCode;
    var keyPress = String.fromCharCode(keyCode);
    var keyText=keyPress;
    //alert(""+keyText);

if(keyText=="b"||keyText=="B"){ //show board
    showBoard();}

if(keyPress=="1"){
    makeSmaller();//**COMMENT OUT for tablet version
    }
if(keyPress=="2"){
    makeBigger();//**COMMENT OUT for tablet version
    }
if(keyPress=="3"){
    pieceShrink=2;
    changeSize();//**COMMENT OUT for tablet version
    }
if(keyPress=="4"){
    pieceShrink=1;
    changeSize();//**COMMENT OUT for tablet version
    }

if(keyText=="z"||keyText=="Z"){ //zombies! bury dead or raise dead
    zombies();}

if(keyText=="L"||keyText=="l"){ //switch on/off piece expand on mouseOver
    if(mouseOverFlag){mouseOverFlag=false;}
    else{mouseOverFlag=true;}
    }

if(keyText=="H"||keyText=="h"){ //switch on/off Hopper
    if(hopperFlag){hopperFlag=false;
    keyBoard.style.zIndex = -10;}
    else{hopperFlag=true;
    keyBoard.style.zIndex = nextZ++;}
    }

if(keyText=="J"||keyText=="j"){ //jump Hopper to new position
  hopHop(xpos, ypos);
    }

if(mouseActive==0){

  }
  else{//if(mouseActive==1)
  var leftNow=piecesLeft[activeIndex];//imageArray[activeIndex].style.pixelLeft;
	var topNow=piecesTop[activeIndex];//imageArray[activeIndex].style.pixelTop;
	if(keyText=="0"){
	  piecesTop[activeIndex]=piecesTop[activeIndex]-shuffleStep;
		activeImage.style.top=(boardSize*piecesTop[activeIndex])+"px";}
	if(keyText=="l"||keyText=="L"){
	  piecesTop[activeIndex]=piecesTop[activeIndex]+shuffleStep;
		activeImage.style.top=(boardSize*piecesTop[activeIndex])+"px";}
	if(keyText=="o"||keyText=="O"){
	  piecesLeft[activeIndex]=piecesLeft[activeIndex]-shuffleStep;
		activeImage.style.left=(boardSize*piecesLeft[activeIndex])+"px";}
	if(keyText=="p"||keyText=="P"){
	  piecesLeft[activeIndex]=piecesLeft[activeIndex]+shuffleStep;
		activeImage.style.left=(boardSize*piecesLeft[activeIndex])+"px";}
	if(keyText=="9"){
    activeImage.setAttribute("class", "piece");
    activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
    mouseActive=0;
		//doEdgeColor();
	}

if(keyText=="m"||keyText=="M"){ //marker to show you have moved unit
		/*if(movedA[activeIndex]!=1){
			//activeImage.style.borderStyle="dotted";
			changeMark(activeImage,1);
			movedA[activeIndex]=1;}
		else{
			changeMark(activeImage,0);
			//activeImage.style.borderStyle="solid";
			movedA[activeIndex]=0;}*/
    changeMark(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    //activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
		mouseActive=0;
		//doEdgeColor();
	}

if(keyText=="t"||keyText=="T"){ //unit transported
    changeTransport(activeImage, activeIndex, 1);//pick up, drop off passengers
}

if(keyText=="i"||keyText=="I"){ //ineffective unit

    changeIneffective(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;
	}

if(keyText=="d"||keyText=="D"){ //disrupted unit

    changeDisrupt(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;
	}

if(keyText=="s"||keyText=="S"){ //unit out of supply

    changeSupply(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;
	}
/*
if(keyText=="d"){ //unit dismounted
    dismount(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;
	}

if(keyText=="e"||keyText=="E"){ //unit exited
    unitExited(activeImage, activeIndex, 1);
    activeImage.setAttribute("class", "piece");
    oldImage = activeImage;
		mouseActive=0;
	}
*/

if(keyText=="x"||keyText=="X"){ //unit destroyed
    //changeDead(activeImage, activeIndex, 1);
    changeElim(activeImage, activeIndex, 1);
}//end of 'x' keyPress function



	}
  saveWindow2();
}

function virtualKey(k){

    var keyPress = +k;
    var keyText=keyPress;

    if(keyText==1){ //marker to show you have moved unit
    changeMark(activeImage, activeIndex, 1);
		/*if(movedA[activeIndex]!=1){
			activeImage.style.borderStyle="dotted";
			movedA[activeIndex]=1;}
		else{
			activeImage.style.borderStyle="solid";
			movedA[activeIndex]=0;}*/
	}

	if(keyText==3){
    rollDieTable();
	}

	if(keyText==2){ //unit destroyed
    changeElim(activeImage, activeIndex, 1);
}

	if(keyText==4){ //unit disrupted
    changeDisrupt(activeImage, activeIndex, 1);
}

  if(keyText==5){ //shrink units only
    if(pieceShrink==1){pieceShrink=2;}
    else{pieceShrink=1;}
    changeSize();
}

	if(keyText==6){ //unit out of supply
    changeSupply(activeImage, activeIndex, 1);
}


	if(keyText==11){
	  piecesTop[activeIndex]=piecesTop[activeIndex]-shuffleStep;
		activeImage.style.top=(boardSize*piecesTop[activeIndex])+"px";
		//activeImage.style.top=(boardSize*piecesTop[activeIndex])+"px";
	  }
	if(keyText==12){
	  piecesTop[activeIndex]=piecesTop[activeIndex]+shuffleStep;
		activeImage.style.top=(boardSize*piecesTop[activeIndex])+"px";}
	if(keyText==13){
	  piecesLeft[activeIndex]=piecesLeft[activeIndex]-shuffleStep;
		activeImage.style.left=(boardSize*piecesLeft[activeIndex])+"px";}
	if(keyText==14){
	  piecesLeft[activeIndex]=piecesLeft[activeIndex]+shuffleStep;
		activeImage.style.left=(boardSize*piecesLeft[activeIndex])+"px";}
	if(keyText==3){
    activeImage.setAttribute("class", "piece");
    activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
    mouseActive=0;
		doEdgeColor();
	}

  saveWindow2();
}

function saveWindow(){

var swLeft=0;
var swTop=0;
//var swText=0;
var swMark=0;
var swDead=0;
var swCav=0; //dismounted
var swDis=0; //ineffective
var swTrans=0; //use for routed
var swTrans1=0; //passenger id -spare 1 - use for exited
var swTrans2=0; //passenger title - spare 2
var imgIndex=0;
var activeIndex=0;
var allText="";
var thisShift=0;

//if(halfSize==1){thisShift=shift;}
	for(k=0;k<noOfImages;k++){
	//for(k=imgStart;k<lastIndex+1;k++){
	activeIndex=k;
	//imgIndex=activeIndex+1;
	swLeft = piecesLeft[k];
	swTop = piecesTop[k];
	if(movedA[activeIndex]==1){
		swMark = 1;
		}
	else{
		swMark = 0;
		}
	if(disruptedA[k]==1){
		swDis = 1;
		}
	else{
		swDis = 0;
		}
	if(armourA[k]=="l"){
		if(neutN[activeIndex]>0){
			swDis = neutN[activeIndex];}
		else{swDis=0;}
	}
	if(deadA[activeIndex]>0){
		swDead = deadA[activeIndex];
		}
	else{
		swDead = 0;
		}
	if(dismountA[k]==1){
		swCav = 1;
		}
	else{
		swCav = 0;
		}
	if(panicA[activeIndex]>0){
		swTrans = panicA[activeIndex];
		}
	else{
		swTrans = 0;
		}
	if(exitA[activeIndex]>0){
		swTrans1 = exitA[activeIndex];
		}
	else{
		swTrans1 = 0;
		}
	if(passengerA[activeIndex]>0){
		swTrans2 = passengerA[activeIndex];
		}
	else{
		swTrans2 = 0;
		}

	allText=allText+swTrans+","+swTrans1+","+swTrans2+","+swDead+","+swMark+","+swDis+","+swLeft+","+swTop+","+swCav+",";
	}

	for(var c=0; c<noOfCities; c++){
		allText=allText + newCityControlA[c]+",";}

	allText=allText+alliedVP+","+gerVP+","+turnNumb+","+ size +","+ turnLetter +","+ turnNumber +","+situationAddress;
	var win = open("", null, "toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=400,height=200,left=200,top=200");
	win.document.write(allText);
	allText="";
	win.document.close();}


function reload(){
	//var catchText="";
	var loadBox = document.getElementById("textbox1");
	var catchText=loadBox.value;
	var loadA=catchText.split(",");
	var loopTill = loadA.length;
	var loadSize=1*loadA[loopTill-4];
	reScale=size/loadSize;///8;//remove /8
	var flipIndex=0;
	//var noPieces=lastIndex-imgStart;
	var noPieces=noOfImages;
	//for(m=0;m<((noPieces+1)*9);m=m+9){ //9=number of saved items for each unit
		for(n=0; n<noPieces; n++){
		activeIndex=n;
		m=n*9;
    //activeIndex=Math.floor(m/9);
		panicA[activeIndex]=loadA[m];
		//transA[activeIndex]=loadA[m];
		//dummy1=loadA[m+1];
		//if(dummy1>0){dummy1++;dummy1++;}
		//transporterA[activeIndex]=dummy1;//loadA[m+1];
		exitA[activeIndex]=1*loadA[m+1];//spare 1 - exited
		passengerA[activeIndex]=1*loadA[m+2];//spare 2
		deadA[activeIndex]=1*loadA[m+3];
		movedA[activeIndex]=1*loadA[m+4];
		disruptedA[activeIndex]=1*loadA[m+5];
		dismountA[activeIndex]=1*loadA[m+8];
		//reScale=1;
		piecesLeft[activeIndex]=1*loadA[m+6]*reScale;//+5;//remove +5
		piecesTop[activeIndex]=1*loadA[m+7]*reScale;//+5;//remove +5

	//mark if should be marked...
    changeMark(imageArray[activeIndex], activeIndex, 0);
		/*if(movedA[activeIndex]==1){
			imageArray[activeIndex].style.borderStyle="dotted";
			}
		else{imageArray[activeIndex].style.borderStyle="solid";}*/

	//routed units

		if(panicA[activeIndex]==1){
			var pieceName = unitsA[thisIsA[activeIndex]*itemsPerUnit+1]; //imageArray[activeIndex].getAttribute("title");
			var pieceName = pieceName.slice(0,2);
			var base=Abase;
			if(activeIndex>=gerNumber){base=Bbase;}
			imageArray[activeIndex].setAttribute("src", "units/"+base+pieceName+"p.jpg");
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", "ROUTING: " + titles);
		}

	//dismounted?...
		if(dismountA[activeIndex]==1){
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", "dismounted: " + titles);
			}
		else{}


	//disrupted if should be disrupted...
	if(armourA[activeIndex]!="l"){// in prestags leaders cannot be D so use this to store leader level
		if(disruptedA[activeIndex]==1){
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", titles+": ineffective!");//"DISRUPTED: " + titles);
			imageArray[activeIndex].style.borderColor="red";
		}
	}
	else{
		if(disruptedA[activeIndex]>0){
		neutN[activeIndex]=disruptedA[activeIndex]-1;
		disruptedA[activeIndex]=0;
		if(neutN[activeIndex]==0){neutN[activeIndex]=4;}
		var pieceName=neutN[activeIndex]+"L";
		//var pieceName = imageArray[activeIndex].getAttribute("title");
		//var pieceName = pieceName.slice(0,4);
		changeNeutralPic(pieceName);
		}
	}

	//exited units
	if(exitA[activeIndex]==1){
				titles = imageArray[activeIndex].getAttribute("title");
				imageArray[activeIndex].setAttribute("title", "EXITED: " + titles);
				imageArray[activeIndex].style.borderColor="green";

			}

	//dead units
	if(deadA[activeIndex]>=1){
    changeDead(imageArray[activeIndex], activeIndex, 0);

		}

	}

	flipIndex=loopTill-7-noOfCities;
	for(var c=0; c<noOfCities; c++){
		newCityControlA[c]=loadA[flipIndex];
		flipIndex++;}
		restoreCities();

    gerVP=1*loadA[loopTill-6];
  	alliedVP=1*loadA[loopTill-7];
  document.getElementById('vplist').innerText="VICTORY POINTS: \nGer="+gerVP+" VP; Allied="+alliedVP+" VP";
	turnNumb=1*loadA[loopTill-5];
	turnLetter=""+loadA[loopTill-3];
	//var loopy=loadA[loopTill-2];
	//turnNumber=0;
	turnNumber=1*loadA[loopTill-2];
	//for(t=0;t<loopy;t++){//I think we do it this way because its
	//	turnNumber++;} //loading a string not a number (but VPs work...)
	//lastTurn();
	turnNumber=turnNumber*1;
	//nextTurn();
	//lastTurn();
	loadA.length=0;
		if(hiddenMovement){
		if(turnNumb==1||turnNumb==4){
			hideRus=0;//=1;
			hideGer=0;}
		if(turnNumb==2||turnNumb==3){
			hideRus=0;
			hideGer=0;}//=1;}
		hideToggle();
		}
	loadBox.value = "Data re-loaded successfully!"
	//loadBox.setAttribute("value", "Data re-loaded successfully!");

	changeSize();
	//statusNow;
	}


function nextTurn(){

if(turnLetter=="A"){
	turnLetter="B";}
else{
	turnLetter="A";
	turnNumber++;}
var codeNumber = "0";
if(turnNumber<10){
	codeNumber=codeNumber+turnNumber;}
else{
	codeNumber=turnNumber;}
turnCode=turnLetter+codeNumber;
//document.all.turnBox.innerText = turnCode;
nameOfTurn();

}

function lastTurn(){

if(turnLetter=="B"){
	turnLetter="A";}
else{
	turnLetter="B";
	turnNumber--;
	}
var codeNumber = "0";
if(turnNumber<0){turnNumber=0;}
if(turnNumber<10){
	codeNumber=codeNumber+turnNumber;}
else{
	codeNumber=turnNumber;}

turnCode=turnLetter+codeNumber;
//document.all.turnBox.innerText = turnCode;
nameOfTurn();
}

function nameOfTurn(){
	if(turnLetter=="A"){
	currentPlayer=nameB;}
else{
	currentPlayer=nameA;}
var step3 = turnNumber=turnNumber*1;
step3=turnNumber+startSeasonOffset;
var step1=Math.floor(step3/4);
yearNow=turnNumber*2+8//startYear+step1;
var step2=step3-step1*4;
seasonNow=seasonA[step2];
document.getElementById("turnBox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+"-"+Number(yearNow+1);
document.getElementById("turnBox").innerHTML = currentPlayer+"<br>"+turnCode+"<br>(of "+maxTurns+")";//textContent
if(turnTock==2){alert("new turn: "+turnCode+" "+currentPlayer+" (of "+maxTurns+")");
turnTock=0;
saveWindow2();}

//statusNow();
}
