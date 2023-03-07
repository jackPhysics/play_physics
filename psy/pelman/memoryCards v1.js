
var realLength = 200;//cm
var length = 500;//pixels
var scale = 500/200;
var frequency = 10;//Hz
var velocity = 100;//m/s
var lambda =velocity/frequency*100;//cm
var lambdaSc = lambda*1*scale;//;
//var period = 160;//1/lambda;//wavenumber
var side = 50;
var amp = side/4;
var dampingFlag=true;//applies damping to non-harmonics
//var dampingFlag=false;//no damping to non-harmonics
var doubleFlag = true;
//var doubleFlag = false;//true;
var plotPoints = new Array();
var fullWidth = 700;
var fullHeight = 400;
var slidersLocked = false;
var n1 = 8;
var n2 = 4;
var noOfCards = n1*n2;
var dieInHand=1;
var count=1;
var cardUsedA=new Array();
var pipsUsedA=new Array();
var shuffleA=new Array();
var deck=noOfCards;
var cardsLeft=deck;
var pipsLeft=deck;
var cardsFoundA = new Array();
var cardsShownA = new Array();
var imageArray = new Array();
var noShown = 0;
var card1 = 0;
var card2 = 0;
var scoreFound = 0;
var turns = 0;
var maxTurns = 0;
var score = 0;
var clearFlag =false;


window.onload= function(){

document.getElementById("my_Canvas").width = fullWidth;
document.getElementById("my_Canvas").height = fullHeight;
  document.getElementById("myRange2").value=1*n2;
  document.getElementById("myRange1").value=1*n1;
  //changeN1();
  //changeN2();
  //alert(""+document.getElementById("myRange1").value+" "+document.getElementById("myRange2").value);
  //document.getElementById("myRange1").value = ""+frequency;

  var canvas = document.getElementById("my_Canvas");
  var ctx = canvas.getContext("2d");


  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, fullWidth, fullHeight);

  var noX = n1;
  var noY = n2;
  maxTurns = n1*n2/2;

  var cardWidth = fullWidth/noX;
  var cardHeight = fullHeight/noY;

  ctx.fillStyle = "#000000";

  for(i=0;i<noX;i++){
    for(j=0;j<noY;j++){
    var xPos=i*cardWidth;
    var yPos=j*cardHeight;
    ctx.fillRect(xPos, yPos, cardWidth-5, cardHeight-5);
    }
  }

  for(h=0;h<52;h++){
    imageArray[h]="playingCards/card_"+h+".gif"
  }

  	addAllHandlers();
    plotCards();

}

function addAllHandlers(){

    var board = document.getElementById("my_Canvas");
    board.addEventListener("click", findCard, false);

	}

function plotCards(){

    var canvas = document.getElementById("my_Canvas");
    var ctx = canvas.getContext("2d");


    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, fullWidth, fullHeight);

    var noX = n1;
    var noY = n2;

    var cardWidth = fullWidth/noX;
    var cardHeight = fullHeight/noY;

    ctx.fillStyle = "#000000";

    for(i=0;i<noX;i++){
      for(j=0;j<noY;j++){
      var xPos=i*cardWidth;
      var yPos=j*cardHeight;
      ctx.fillRect(xPos, yPos, cardWidth-5, cardHeight-5);
      }
    }

    sortDeck();
}

function sortDeck()
{
  var cardNo = 1;
  for(k=0;k<deck;k=k+2){
    cardUsedA[k+1]=cardNo;//arrange all cards in order
    pipsUsedA[k+1]=cardNo;
    cardUsedA[k+2]=cardNo;//duplicate cards - so 2 of each
    pipsUsedA[k+2]=cardNo;
    cardNo++;
      cardsFoundA[k+1]=false;
      cardsFoundA[k+1]=false;
      cardsFoundA[k+2]=false;
      cardsFoundA[k+2]=false;
        cardsShownA[k+1]=false;
        cardsShownA[k+1]=false;
        cardsShownA[k+2]=false;
        cardsShownA[k+2]=false;
  }
  //document.getElementById("stillInDeck").innerHTML="" + cardsLeft;
  pipsLeft=deck;
	shuffleDeck();
}

function shuffleDeck(){

var noPips=0;

for(k=0;k<deck;k++){
    noPips=Math.round(Math.random()*pipsLeft+0.5);//chose random # up to # of cards left
    shuffleA[k+1]=pipsUsedA[noPips];//find card that corresponds to this number
    pipsUsedA[noPips]=pipsUsedA[pipsLeft];//replace card chosen with last card
	  pipsLeft--;//reduce # by one
	  //count++;
	  }
    //alert(""+shuffleA[3]);

}

function findCard(event)//click on card
{
	if(clearFlag){
	var canvas = document.getElementById("my_Canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, fullWidth, fullHeight);
    var noX = n1;
    var noY = n2;
    var cardWidth = fullWidth/noX;
    var cardHeight = fullHeight/noY;
    ctx.fillStyle = "#000000";
    for(i=0;i<noX;i++){
      for(j=0;j<noY;j++){
      var xPos=i*cardWidth;
      var yPos=j*cardHeight;
      if(cardsFoundA[j*n1+i+1]){

      }
      else if(!cardsShownA[j*n1+i+1]){
      ctx.fillStyle = "#000000";
      ctx.fillRect(xPos, yPos, cardWidth-5, cardHeight-5);}
      }
    }
	clearFlag=false;
	noShown=0;
	}
else{
  slidersLocked=true;
    var relX = event.offsetX;
    var relY = event.offsetY;
    var cardX = Math.ceil((relX/fullWidth)*n1);
    var cardY = Math.ceil((relY/fullHeight)*n2);
    var cardTouched = (cardY-1)*n1+cardX;
if(cardTouched!=card1&&!cardsFoundA[cardTouched]){//not touching same card and card touched still exists

      noShown++;
      if(noShown>2){
        noShown=0;
          //alert(""+noShown);
        cardsShownA[card1]=false;
        cardsShownA[card2]=false;
        card1 = 0;
        card2 = 0;
        }

    //var fullWidth = 700;
    //var fullHeight = 400;
    //var n1 = 8;
    //var n2 = 4;

    //document.getElementById("score").innerHTML="x="+relX+" y="+relY;


    //document.getElementById("score").innerHTML="x="+cardX+" y="+cardY;


    if(noShown==1){
          card1 = cardTouched;
          cardsShownA[cardTouched] = true;
        }
    else if(noShown==2){
          card2 = cardTouched;
          cardsShownA[cardTouched] = true;
        }

    //document.getElementById("score").innerHTML="card# "+cardTouched;


    var canvas = document.getElementById("my_Canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, fullWidth, fullHeight);
    var noX = n1;
    var noY = n2;
    var cardWidth = fullWidth/noX;
    var cardHeight = fullHeight/noY;

    ctx.fillStyle = "#000000";

    for(i=0;i<noX;i++){
      for(j=0;j<noY;j++){
      var xPos=i*cardWidth;
      var yPos=j*cardHeight;
      if(cardsFoundA[j*n1+i+1]){

      }
      else if(!cardsShownA[j*n1+i+1]){
      ctx.fillStyle = "#000000";
      ctx.fillRect(xPos, yPos, cardWidth-5, cardHeight-5);}
      else{
        //alert(""+(j*n1+i+1))
        ctx.fillStyle = "#ffff00";
        ctx.fillRect(xPos, yPos, cardWidth-5, cardHeight-5);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText(""+shuffleA[j*n1+i+1],xPos+cardWidth/2,yPos+cardHeight/2)
      }
      }
    }

if(noShown==2){
  if(shuffleA[card1]==shuffleA[card2]){
    cardsFoundA[card1]=true;
    cardsFoundA[card2]=true;
	
	var this_j = Math.floor(card1/n1-0.1);
	var this_i = card1 - this_j*n1 -1;
	xPos=this_i*cardWidth;
    yPos=this_j*cardHeight;
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xPos, yPos, cardWidth-5, cardHeight-5);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText(""+shuffleA[this_j*n1+this_i+1],xPos+cardWidth/2,yPos+cardHeight/2)
		//alert(""+this_j+" "+this_i)
	this_j = Math.floor(card2/n1-0.1);
	this_i = card2 - this_j*n1 -1;
	xPos=this_i*cardWidth;
    yPos=this_j*cardHeight;
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xPos, yPos, cardWidth-5, cardHeight-5);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText(""+shuffleA[this_j*n1+this_i+1],xPos+cardWidth/2,yPos+cardHeight/2)
	    scoreFound++;
		clearFlag=true;
  }
  else{
    turns++;
  }
  document.getElementById("score").innerHTML="turn # "+turns+" cards found = "+scoreFound;
}

if(scoreFound==deck/2){
  score = Math.round(maxTurns/turns*100);
document.getElementById("score").innerHTML="CLEAR!<br>turn # "+turns+" score = "+score+"%";

}
}//end else of clearFlag
}
/*var board = document.getElementById("my_Canvas");
    var targetLeft = document.defaultView.getComputedStyle(board, null).getPropertyValue("left");
    var targetTop = document.defaultView.getComputedStyle(board, null).getPropertyValue("top");
    targetLeft = +targetLeft.slice(0,-2);
    targetTop = +targetTop.slice(0,-2);
    relX = relX - targetLeft;
    relY = relY - targetTop;*/

    //document.getElementById("score").innerHTML="x="+relX+" y="+relY;


}


function changeN2(){
  if(!slidersLocked){
  n2 = parseInt(document.getElementById("myRange2").value);//valueAsNumber(slider2.value);
  document.getElementById("dial2").innerHTML="rows="+n2;
  noOfCards = n1*n2;
  maxTurns = n1*n2/2;
  deck=noOfCards;
  plotCards();}
}

  function changeN1(){
    if(!slidersLocked){
    n1= parseInt(document.getElementById("myRange1").value);//valueAsNumber(slider2.value);
      document.getElementById("dial1").innerHTML="columns="+n1;
      noOfCards = n1*n2;
      maxTurns = n1*n2/2;
      deck=noOfCards;
      plotCards();}
  }
