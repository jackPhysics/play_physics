// JavaScript Document

/*
function rollDieTable() //roll d6
function changeMark(p, i, f){//mark unit
function changeDead(p, i, f){//unit destroyed
*/

function rollDieTable()
{
if(dieInHand==1){
	var noPips=0;
	noPips=Math.round(Math.random()*6+0.5);
	document.getElementById("diceResult").textContent = "" + noPips;//"You rolled " + noPips;
	//document.getElementById("rollBtn").setAttribute("value", "pick up d6");
	dieInHand=0;
	}
else{
	document.getElementById("diceResult").textContent = "d6";
	//document.getElementById("rollBtn").setAttribute("value", "Roll d6");
	dieInHand=1;}
}

function rollDieTable12()
{
if(dieInHand==1){
	var noPips=0;
	noPips=Math.round(Math.random()*12+0.5);
	document.getElementById("diceResult").textContent = "" + noPips;//"You rolled " + noPips;
	//document.getElementById("rollBtn").setAttribute("value", "pick up d6");
	dieInHand=0;
	}
else{
	document.getElementById("diceResult").textContent = "d12";
	//document.getElementById("rollBtn").setAttribute("value", "Roll d6");
	dieInHand=1;}
}

function changeDice(){
	if(chooseD6){
		chooseD6=false;
		document.getElementById("btn612").innerText = "choose d12";
		document.getElementById("diceResult").innerText = "choose d12";
	}
		else{
			chooseD6=true;
			document.getElementById("btn612").innerText = "choose d6";
			document.getElementById("diceResult").innerText = "choose d6";
		}
}

function rollBinaryTable()
{
if(dieInHand==1){
	var noPips=0;
	noPips=Math.floor(Math.random()*64);
	var noPipsB = noPips.toString(2);
	var binL = noPipsB.length;
	var allZeroes = "000000";
	var noZero = 6-binL;
	var addZeroes = allZeroes.slice(0,noZero);
	document.getElementById("diceResult").textContent = ""+addZeroes + noPipsB;//"You rolled " + noPips;
	//document.getElementById("rollBtn").setAttribute("value", "pick up d6");
	dieInHand=0;
	}
else{
	document.getElementById("diceResult").textContent = "bin";
	//document.getElementById("rollBtn").setAttribute("value", "Roll d6");
	dieInHand=1;}
}

function rollOddsTable()
{
if(dieInHand==1){
  var noPips=0;
  var odds=0;
	noPips=Math.random();//Math.round(Math.random()*6+0.5);
  if(noPips<0.5){
    odds=Math.round((1-noPips)/noPips);
    if(odds>4){odds=4;}
    odds=odds*(-1);}
  else{
    odds=Math.round(noPips/(1-noPips));
    if(odds>7){odds=7;}
    }
  document.getElementById("diceResult").textContent = "" + odds;//"You rolled " + noPips;
	//document.getElementById("rollBtn").setAttribute("value", "pick up dice");
	dieInHand=0;
	}
else{
	document.getElementById("diceResult").textContent = "?";
	//document.getElementById("rollBtn").setAttribute("value", "Roll for odds");
	dieInHand=1;}
}

function changeMark(p, i, f){
  //i = piece to be changed, f = flag change (1=change, 0=keep the same (for reloading))

  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  if(flagChange==1){
    if(movedA[pieceIndex]!=1){
			activePiece.style.borderStyle="dotted";//"dashed";
			movedA[pieceIndex]=1;}
		else{
			activePiece.style.borderStyle="solid";
			movedA[pieceIndex]=0;
			if(panicA[pieceIndex]==2){
				activePiece.style.borderStyle="double";
				activePiece.style.borderColor="grey";}//out of supply
			}
  }
  else{//no change, mark pieces as their flags indicate
    if(movedA[pieceIndex]==1){
			activePiece.style.borderStyle="dotted";//"dashed";
			//movedA[activeIndex]=1;
      }
		else{
			activePiece.style.borderStyle="solid";
			if(panicA[pieceIndex]==2){
			activePiece.style.borderStyle="double";
			activePiece.style.borderColor="grey";}//out of supply
			//movedA[activeIndex]=0;
      }


  }

  if(flagChange==1){
    mouseActive=0;
	  doEdgeColor();
  //save the page
  saveWindow2();}
}

//  if(keyText=="t"||keyText=="T"){ //unit transported
function changeTransport(p, i, f){//pick up, drop off passengers
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  activeImage = activePiece;
  activeIndex = pieceIndex;
  if(flagChange==0){
    if(transA[activeIndex]==1){transA[activeIndex]=0;}
    else{transA[activeIndex]=1;}
  }

	if(deadA[activeIndex]==0){
	if(disruptedA[activeIndex]!=1){
	if(hideA[activeIndex]!=1){

	if(armourA[activeIndex]=="t"||armourA[activeIndex]=="w"||armourA[activeIndex]=="h"){
		if(transA[activeIndex]==0){
		//activePiece.style.borderColor="blue";
		transA[activeIndex]=1;
		findPas(activeImage, activeIndex);
		 }
		else{
		titles = activePiece.getAttribute("title");
		titles2=titles.slice(11);
		titles2=titles2.slice(0,-passengerA[activeIndex]);
		activePiece.setAttribute("title", titles2);
		//activePiece.style.borderColor="black";
		leftPos = +activeImage.style.left.slice(0,-2);
		topPos = +activeImage.style.top.slice(0,-2);
		var ps=imageArray[transporterA[activeIndex]];
		//alert("activeIndex="+activeIndex+"\n"+"transporterA[activeIndex]="+transporterA[activeIndex]+"\n"+"imageArray[transporterA[activeIndex]]="+imageArray[transporterA[activeIndex]]+"\n");
		ps.style.zIndex=nextZ+1;
		ps.style.left=leftPos+(pieceSize*boardSize)/4+"px";//pieceSize
		ps.style.top=topPos+(pieceSize*boardSize)/4+"px";
		transA[activeIndex]=0;
		transporterA[activeIndex]=0;
		}
	}
	if(armourA[activeIndex]=="a"){
		if(transA[activeIndex]==0){
		findPas(activeImage, activeIndex);
		//if(findPasFlag==1){
		//titles = document.all[activeIndex].getAttribute("title");
		//document.all[activeIndex].setAttribute("title", "LOADED UP: " + titles);
		//activePiece.style.borderColor="white";
		transA[activeIndex]=2;
		//}
		}
		else{
		titles = activeImage.getAttribute("title");
		titles2=titles.slice(11);
		titles2=titles2.slice(0,-passengerA[activeIndex]);
		activePiece.setAttribute("title", titles2);
		//activePiece.style.borderColor="black";
		leftPos = +activeImage.style.left.slice(0,-2);
		topPos = +activeImage.style.top.slice(0,-2);
		var ps=imageArray[transporterA[activeIndex]];
		ps.style.zIndex=nextZ+1;
		ps.style.left=leftPos+(pieceSize*boardSize)/4+"px";
		ps.style.top=topPos+(pieceSize*boardSize)/4+"px";
		transA[activeIndex]=0;
		transporterA[activeIndex]=0;
		}

	}
	}
	}
	}
	mouseActive=0;
	doEdgeColor();
	/*document.all[activeIndex].style.borderColor="black";
	if(transA[activeIndex]==1){
	document.all[activeIndex].style.borderColor="blue";}
	else if(transA[activeIndex]==2){
	document.all[activeIndex].style.borderColor="white";}
	if(disruptedA[activeIndex]==1){
	document.all[activeIndex].style.borderColor="red";}*/

}


function findPas(i, k){
	alert("The next piece you choose will become the passenger");
	findPasFlag=1;
	transActive=i;
	transIndex=k;
}

function checkPas(i){
	if(armourA[i]!="n"){
		alert("This unit cannot be transported!");
		findPasFlag=0;
		transActive.style.borderColor="black";
		mouseActive=0;
		transA[transActive]=0;
		}
	else{
		if(deadA[i]>0){alert("This unit cannot be transported!");
		findPasFlag=0;
		transActive.style.borderColor="black";
		mouseActive=0;
		transA[transActive]=0;
		}
		else if(disruptedA[i]>0){alert("This unit cannot be transported!");
		findPasFlag=0;
		transActive.style.borderColor="black";
		mouseActive=0;
		transA[transActive]=0;
		}
		else{
		transporterA[transIndex]=i;
		//alert("transIndex="+transIndex+"\n"+"passenger"+i);
		//if(findPasFlag==1){
		titles = transActive.getAttribute("title");
		transActive.setAttribute("title", "LOADED UP: " + titles);
		//document.all[transActive].style.borderColor="blue";
		//transA[transActive]=1;
		imageArray[i].style.zIndex=nextZ-1;
		imageArray[i].style.left=leftPos+"px";
		imageArray[i].style.top=topPos+"px";
		title1 = transActive.getAttribute("title");
		title2 = imageArray[i].getAttribute("title");
		transActive.setAttribute("title", title1+" carrying: "+ title2);
		passengerA[transIndex]=title2.length + 11; //hold the length of added title (11=_carrying:_)
		findPasFlag=0;
		}
	}

}


function changeElim(p, i, f){//unit REMOVED from board
  var activePiece = p;//=activeImage
  var pieceIndex = i;//=activeIndex
  var flagChange = f;
  //activeImage = activePiece;
  //activeIndex = pieceIndex;
  if(flagChange==0){
    if(deadA[activeIndex]==1){deadA[activeIndex]=0;}
    else{deadA[activeIndex]=1;}
  }
//if(keyText=="x"||keyText=="X"){ //unit destroyed
		if(hideA[pieceIndex]!=1){
		if(deadA[pieceIndex]==0){
			//firerA[activeIndex]=0;
			if(disruptedA[pieceIndex]==1){ //undisrupt before destroy
				titles = activePiece.getAttribute("title");
				titles2=titles.slice(0,-14); //titles2=titles.slice(11);
				activePiece.setAttribute("title", titles2);
				disruptedA[pieceIndex]=0;}
			//if(panicA[activeIndex]==1){ //unpanic before destroy
			//	titles = document.all[activeIndex].getAttribute("title");
			//	titles2=titles.slice(9);
			//	document.all[activeIndex].setAttribute("title", titles2);
			//	panicA[activeIndex]=0;}

		if(deadA[pieceIndex]!=1){
		if(flagChange != 0){
			if(pieceIndex<gerNumber){//axis dead
				//alert("dead")
				var deadPosLeft =Math.round((Math.random()*deadPosA_delX+deadPosA_X0)*boardSize/8);
				var deadPosTop=Math.round((Math.random()*deadPosA_delY+deadPosA_Y0)*boardSize/8);
				activePiece.style.left=deadPosLeft+"px";
				activePiece.style.top=deadPosTop+"px";
        piecesLeft[pieceIndex]= deadPosLeft/boardSize;
        piecesTop[pieceIndex]= deadPosTop/boardSize;
			}
			else {//allied dead
				//alert("dead2")
				var deadPosLeft =Math.round((Math.random()*deadPosB_delX+deadPosB_X0)*boardSize/8);
				var deadPosTop=Math.round((Math.random()*deadPosB_delY+deadPosB_Y0)*boardSize/8);
				activePiece.style.left=deadPosLeft+"px";
				activePiece.style.top=deadPosTop+"px";
        piecesLeft[pieceIndex]= deadPosLeft/boardSize;
        piecesTop[pieceIndex]= deadPosTop/boardSize;
			}
			if(cmbtFactorsA[pieceIndex]<cmbtFactorsMaxA[pieceIndex]){
				//alert("LOST STEPS")
    cmbtFactorsA[pieceIndex]=cmbtFactorsMaxA[pieceIndex];
    hasSteps[pieceIndex]=true;
    imageArray[pieceIndex].setAttribute("title", "#"+(pieceIndex+1)+": "+unitsA[thisIsA[pieceIndex]*noOfItems+1]+" "+designateLA[pieceIndex]+"/"+designateRA[pieceIndex]+" "+cmbtFactorsA[pieceIndex]+"-"+unitsA[thisIsA[pieceIndex]*noOfItems+7]+" (pts:"+unitsA[thisIsA[pieceIndex]*noOfItems+2]+") ("+(typeNumbA[pieceIndex])+"/"+typeTotalA[pieceIndex]+")");
    //imageArray[noToDrop].setAttribute("title", "#"+(noToDrop+1)+": "+cmbtFactorsA[noToDrop]+"-"+unitsA[thisIsA[noToDrop]*noOfItems+7]+" "+unitsA[thisIsA[noToDrop]*noOfItems+3]+"pts ("+(typeNumbA[noToDrop])+"/"+typeTotalA[noToDrop]+")");
    document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
    printUnit(pieceIndex, typeNumbA[pieceIndex], typeTotalA[pieceIndex], thisIsA[pieceIndex],countIndividual[pieceIndex]);
    }

				//activeImage.style.left=Math.round((Math.random()*760+10)/boardSize/2)+"px";//*size/8);
				//activeImage.style.top=Math.round((Math.random()*230+10)/boardSize/2)+"px";//*size/8);

			}
			}
			//if(armourA[activeIndex]=="s"){navyMissions(9);}
			//if(armourA[activeIndex]=="a"){airMissions(9);}
			titles = activePiece.getAttribute("title");
			activePiece.setAttribute("title", "DESTROYED: " + titles);
			deadA[pieceIndex]=1;
			if(pieceIndex<gerNumber){
				rebelVP=Number(rebelVP)+Number(unitsA[thisIsA[pieceIndex]*itemsPerUnit+2]);
				rebelVP2=Number(rebelVP2)+Number(unitsA[thisIsA[pieceIndex]*itemsPerUnit+2]);}
			else{unionVP=Number(unionVP)+Number(unitsA[thisIsA[pieceIndex]*itemsPerUnit+2]);
			unionVP2=Number(unionVP2)+Number(unitsA[thisIsA[pieceIndex]*itemsPerUnit+2]);}
			}
		else{						//return from the dead!
			titles = activeImage.getAttribute("title");
			titles2=titles.slice(11);
			activePiece.setAttribute("title", titles2);
			deadA[pieceIndex]=0;
			if(pieceIndex<gerNumber){
				rebelVP=Number(rebelVP)-Number(unitsA[thisIsA[pieceIndex]*itemsPerUnit+2]);}
			else{unionVP=Number(unionVP)-Number(unitsA[thisIsA[pieceIndex]*itemsPerUnit+2]);}
			} //flag unit as alive

		mouseActive=0;
		//change(pieceIndex);
		doEdgeColor();
		}
else{alert("Cannot destroy hidden units!");}
}//end of 'x' keyPress function
//} //end of "if(activeIndex<neutNumber){" loop
//else{alert("not to a blank you don't!");}

function changeWreck(p, i, f){//panzerblitz destroyed function
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  activeImage = activePiece;
  activeIndex = pieceIndex;
  if(flagChange==0){
    if(deadA[activeIndex]==1){deadA[activeIndex]=0;}
    else{deadA[activeIndex]=1;}
  }
//if(keyText=="x"||keyText=="X"){ //unit destroyed
	if(hideA[activeIndex]!=1){
		if(deadA[activeIndex]==0){
			if(disruptedA[activeIndex]==1){ //undisrupt before destroy
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(11);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;}

			if(activeIndex<gerNumber){
				if(armourA[activeIndex]=="a"||armourA[activeIndex]=="h"){
					deadA[activeIndex]=2; //2=dead armour //flag unit as dead
					activeImage.setAttribute("src", "units/rus/wreck.jpg");//"units/rus/wreck.jpg");
					if(transA[activeIndex]>=1){
						ps=transporterA[activeIndex];
						imageArray[ps].style.width=(pieceSize*boardSize)/2+"px";
						imageArray[ps].style.height=(pieceSize*boardSize)/2+"px";
				imageArray[ps].style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				imageArray[ps].style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
						numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
						imageArray[ps].setAttribute("src", "units/rus/dead"+numb+".jpg");
						deadA[ps]=deadA[ps]+1;
						titles = imageArray[ps].getAttribute("title");
		 				imageArray[ps].setAttribute("title", "DESTROYED: " + titles);
						titles = activeImage.getAttribute("title");
						titles2=titles.slice(11);
						titles2=titles2.slice(0,-passengerA[activeIndex]);
						activeImage.setAttribute("title", titles2);
						transA[activeIndex]=0;
						deadA[ps]=1;
						rusDeadPts=Number(rusDeadPts)+Number(unitsA[thisIsA[ps]*noOfItems+5]);
						transporterA[activeIndex]=0;
						rusDead++;}
				}
				else if(armourA[activeIndex]=="t"||armourA[activeIndex]=="w"){
					deadA[activeIndex]=1; //1=dead non-armour
					activeImage.style.width=(pieceSize*boardSize)/2+"px";
					activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					activeImage.setAttribute("src", "units/rus/trwreck.jpg");
					if(transA[activeIndex]>=1){
						ps=transporterA[activeIndex];
						imageArray[ps].style.width=(pieceSize*boardSize)/2+"px";
						imageArray[ps].style.height=(pieceSize*boardSize)/2+"px";
				imageArray[ps].left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				imageArray[ps].style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
						numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
						imageArray[ps].setAttribute("src", "units/rus/dead"+numb+".jpg");
						deadA[ps]=deadA[ps]+1;
						titles = imageArray[ps].getAttribute("title");
		 				imageArray[ps].setAttribute("title", "DESTROYED: " + titles);
						titles = activeImage.getAttribute("title");
						titles2=titles.slice(11);
						titles2=titles2.slice(0,-passengerA[activeIndex]);
						activeImage.setAttribute("title", titles2);
						transA[activeIndex]=0;
						deadA[ps]=1;
						rusDeadPts=Number(rusDeadPts)+Number(unitsA[thisIsA[ps]*noOfItems+3]);
						transporterA[activeIndex]=0;
						rusDead++;}
				}
				else {
					deadA[activeIndex]=1; //1=dead non-armour
					activeImage.style.width=(pieceSize*boardSize)/2+"px";
					activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
					activeImage.setAttribute("src", "units/rus/dead"+numb+".jpg");}
			rusDeadPts=Number(rusDeadPts)+Number(unitsA[thisIsA[activeIndex]*noOfItems+3]);
			rusDead++;
			}
			else {
				if(armourA[activeIndex]=="a"||armourA[activeIndex]=="h"){
					deadA[activeIndex]=2; //2=dead armour
					activeImage.setAttribute("src", "units/ger/wreck.jpg");
					if(transA[activeIndex]>=1){
					ps=transporterA[activeIndex];
					imageArray[ps].style.width=(pieceSize*boardSize)/2+"px";
					imageArray[ps].style.height=(pieceSize*boardSize)/2+"px";
				imageArray[ps].left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				imageArray[ps].top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
					imageArray[ps].setAttribute("src", "units/ger/dead"+numb+".jpg");
					deadA[transporterA[activeIndex]]=1;
					titles = imageArray[ps].getAttribute("title");
		 			imageArray[ps].setAttribute("title", "DESTROYED: " + titles);
					titles = activeImage.getAttribute("title");
					titles2=titles.slice(11);
					titles2=titles2.slice(0,-passengerA[activeIndex]);
					activeImage.setAttribute("title", titles2);
					transA[activeIndex]=0;
					gerDeadPts=Number(gerDeadPts)+Number(unitsA[thisIsA[ps]*noOfItems+3]);
					transporterA[activeIndex]=0;
					gerDead++;}}
				else if(armourA[activeIndex]=="t"||armourA[activeIndex]=="w"){
					deadA[activeIndex]=1; //1=dead non-armour
					activeImage.style.width=(pieceSize*boardSize)/2+"px";
					activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					activeImage.setAttribute("src", "units/ger/trwreck.jpg");
					if(transA[activeIndex]>=1){
					ps=transporterA[activeIndex];
					imageArray[ps].style.width=(pieceSize*boardSize)/2+"px";
					imageArray[ps].style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
					imageArray[ps].setAttribute("src", "units/ger/dead"+numb+".jpg");
					deadA[transporterA[activeIndex]]=1;
					titles = imageArray[ps].getAttribute("title");
		 			imageArray[ps].setAttribute("title", "DESTROYED: " + titles);
					titles = activeImage.getAttribute("title");
					titles2=titles.slice(11);
					titles2=titles2.slice(0,-passengerA[activeIndex]);
					activeImage.setAttribute("title", titles2);
					transA[activeIndex]=0;
					gerDeadPts=Number(gerDeadPts)+Number(unitsA[thisIsA[ps]*noOfItems+3]);
					transporterA[activeIndex]=0;
					gerDead++;
				}}

				else {
					deadA[activeIndex]=1; //1=dead non-armour
					activeImage.style.width=(pieceSize*boardSize)/2+"px";
					activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
					activeImage.setAttribute("src", "units/ger/dead"+numb+".jpg");}
			gerDeadPts=Number(gerDeadPts)+Number(unitsA[thisIsA[activeIndex]*noOfItems+3]);
			gerDead++;
			}
			titles = activeImage.getAttribute("title");
			activeImage.setAttribute("title", "DESTROYED: " + titles);
			}
		else{						//return from the dead!
			titles = activeImage.getAttribute("title");
			titles2=titles.slice(11);
			activeImage.setAttribute("title", titles2);
				if(activeIndex<gerNumber){
				if(armourA[activeIndex]=="a"){
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
				else if(armourA[activeIndex]=="t"){
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
				else {
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
			rusDeadPts=Number(rusDeadPts)-Number(unitsA[thisIsA[activeIndex]*noOfItems+3]);
			rusDead--;
			//window.status="XXXXXX";
			deadA[activeIndex]=0;}
			else {
				if(armourA[activeIndex]=="a"){
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
				else if(armourA[activeIndex]=="t"){
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
				else {
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
			gerDeadPts=Number(gerDeadPts)-Number(unitsA[thisIsA[activeIndex]*noOfItems+3]);
			gerDead--;
			deadA[activeIndex]=0;}
			}

		mouseActive=0;
		doEdgeColor();
		//activeImage.style.borderColor="black";
		}
else{alert("Cannot destroy hidden units!");}
//}
}//end of 'x' keyPress function

function changeDead(p, i, f){//unit destroyed and left in place
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  var sideThatDied = 0;

  activeImage = activePiece;
  activeIndex = pieceIndex;

  if(flagChange==0){
    if(deadA[activeIndex]==1){deadA[activeIndex]=0;}
    else{deadA[activeIndex]=1;}
  }
  	if(hideA[activeIndex]!=1){
		if(deadA[activeIndex]==0){
			//firerA[activeIndex]=0;
			if(disruptedA[activeIndex]==1||disruptedA[activeIndex]==2){ //undisrupt before destroy
				titles = activeImage.getAttribute("title");
				//titles2=titles.slice(0,-14);
				titles2=titles.slice(14);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;}
				if(disruptedA[activeIndex]==3){ //unfired before destroy
					titles = activeImage.getAttribute("title");
					//titles2=titles.slice(0,-14);
					titles2=titles.slice(7);
					activeImage.setAttribute("title", titles2);
					disruptedA[activeIndex]=0;}
			if(panicA[activeIndex]==1){ //unpanic before destroy
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(9);
				activeImage.setAttribute("title", titles2);
				panicA[activeIndex]=0;}
			if(panicA[activeIndex]==2){ //unsupply before destroy
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(16);
				activeImage.setAttribute("title", titles2);
				panicA[activeIndex]=0;}

			if(activeIndex<gerNumber){
				deadA[activeIndex]=1; //1=dead non-armour
				activeImage.style.width=(pieceSize*boardSize)/2+"px";
				activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.zIndex=21;
				//alert(""+activeImage.style.zIndex);
				activeImage.setAttribute("src", "units/"+Abase+"dead.jpg");
				//alert(""+activeImage.getAttribute("title")+" --> "+"units/"+Abase+"dead.jpg");
				var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+2];
				for(v=0;v<vp;v++){
						rebelVP++;rebelVP2++;}
				sideThatDied = 1;
			}
			else if(activeIndex==lastIndex-1){
				lastTurn();
				lastTurn();
				turnTock=2;
				nextTurn();
			}
			else {
				deadA[activeIndex]=1; //1=dead non-armour
				activeImage.style.width=(pieceSize*boardSize)/2+"px";
				activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.zIndex=21;
				//numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
				activeImage.setAttribute("src", "units/"+Bbase+"dead.jpg");
				//alert(""+activeImage.getAttribute("title")+" --> "+"units/"+Bbase+"dead.jpg");
				var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+2];
				for(v=0;v<vp;v++){
						unionVP++;unionVP2++};
				sideThatDied = 2;
			}
			titles = activeImage.getAttribute("title");
			activeImage.setAttribute("title", "DESTROYED: " + titles);
			}
		else{						//return from the dead!
			if(armourA[activeIndex]=="f"){firerA[activeIndex]=1;}
			if(armourA[activeIndex]=="a"){firerA[activeIndex]=1;}
			titles = activeImage.getAttribute("title");
			titles2=titles.slice(11);
			activeImage.setAttribute("title", titles2);
				if(activeIndex<gerNumber){
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
				//alert(""+activeIndex+" "+unitsA[activeIndex*itemsPerUnit]);
				//console.log(activeIndex, unitsA[activeIndex*itemsPerUnit], unitsA[thisIsA[activeIndex]*itemsPerUnit]);
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*itemsPerUnit]);
					var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+2];
					//rebelVP = rebelVP - vp;
					for(v=0;v<vp;v++){
							rebelVP--;}
				}
				else {
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
				//console.log(activeIndex, unitsA[activeIndex*itemsPerUnit], unitsA[thisIsA[activeIndex]*itemsPerUnit]);
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*itemsPerUnit]);
					var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+2];
					//unionVP = unionVP - vp;
					for(v=0;v<vp;v++){
							unionVP--;}
				}
					deadA[activeIndex]=0;} //flag unit as alive


		activeImage.setAttribute("class", "piece");
		activeImage.style.borderColor="black";
		if(deadA[activeIndex]==0){
    activeImage.style.zIndex = nextZ++;}
    oldImage = activeImage;
		mouseActive=0;
		//activeImage.style.borderColor="black";
		if(firerA[activeIndex]==1){
		//activeImage.style.borderColor="blue";
      }
		}
else{alert("Cannot destroy hidden units!");}
			doEdgeColor();
  pointsStatus(sideThatDied);
  //if(flagChange==1){
	//alert(""+activeIndex+" "+neutNumber);
    mouseActive=0;
		doEdgeColor();
  //save the page
  saveWindow2();
	//}
}//end of 'destroyed' keyPress function

function pointsStatus(s){
  var sideThatDied = s;

  var randA = Math.random();
    randA = 1+randA/5-0.05;
  var randB = Math.random();
    randB = 1+randB/5-0.05;
  //var chanceA = 1-Math.exp(-0.69*rebelVP*2/Apanic);
  //var chanceB = 1-Math.exp(-0.69*unionVP*2/Bpanic);
	randA = 1;
	randB = 1;
	if(!panicFlag){
	if(sideThatDied == 1){
	 if(rebelVP>=Apanic*randA){Amessage = "side A PANICS!";
					alert(nameA+" panic!");
					panicFlag=true;}
	}
	if(sideThatDied == 2){
	 if(unionVP>=Bpanic*randB){Bmessage = "side B PANICS!";
					alert(nameB+" panic!");
					panicFlag=true;}
	}
	}
	var side1=rusDead; var side2=gerDead;
	if(gerDead>rusDead){side1=gerDead; side2=rusDead;}
	//if(side1>(side2*3)){vicLevel="Decisive";}
	//else if(side1>(side2*2)){vicLevel="Substantive";}
	//else if(side1>side2){vicLevel="Marginal";}
	//else{vicLevel="None";}
	vicLevel="None";
	if(side1>side2){vicLevel="Marginal";}
	if(side1>(side2*2)){vicLevel="Substantive";}
	if(side1>(side2*3)){vicLevel="Decisive";}
	//window.status="Turn "+turnCode+": side A have lost "+rusDead+" VP."+" side B have lost "+gerDead+" VP."+" "+Amessage+" "+Bmessage+" Victory level: "+vicLevel;
	//window.status="Turn "+turnCode+": "+nameA+" have lost "+rusDead+" VP. "+nameB+" have lost "+gerDead+" VP."+" "+Amessage+" "+Bmessage+" Victory level: "+vicLevel;



}

function changeRout(p, i, f){//unit routed panicked
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

	//var imagePath="file://"+Environment.getExternalStorageDirectory().getAbsolutePath()+"/";
	var imagePath="";

  activeImage = activePiece;
  activeIndex = pieceIndex;

  if(flagChange==0){
    if(panicA[activeIndex]==1){panicA[activeIndex]=0;}
    else{panicA[activeIndex]=1;}
  }
  	if(hideA[activeIndex]!=1){  //not hidden
			if(disruptedA[activeIndex]==1){ //undisrupt
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(14); //titles2=titles.slice(11);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;}
      if(panicA[activeIndex]==2){ //un-nonsupply
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(16); //titles2=titles.slice(11);
				activeImage.setAttribute("title", titles2);
				panicA[activeIndex]=0;}
			if(disruptedA[activeIndex]==3){ //unfire before panic
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(7);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;}
		  //alert("here");
        //pieceName = unitsA[thisIsA[activeIndex]*5+1]; //document.all[activeIndex].getAttribute("title");
	      //pieceName = activeImage.getAttribute("title");
        //pieceName = pieceName.slice(0,2);
	      pieceName = pieceNameA[activeIndex];
	      //alert(""+pieceNameA[activeIndex]);
        //alert(""+activeIndex+" "+thisIsA(activeIndex);
	      //alert(""+pieceName);
				pieceName = pieceName.toLowerCase();
	      base=Abase;
	   if(activeIndex>=gerNumber){base=Bbase;}

     if(panicA[activeIndex]!=1){
     	activeImage.setAttribute("src", ""+imagePath+"units/"+base+pieceName+"p"+unitExtension);//"units/"+base+pieceName+"p"+unitExtension);
    	titles = activeImage.getAttribute("title");
    	//alert("units/"+base+pieceName+"p"+unitExtension);
    	activeImage.setAttribute("title", "ROUTING: " + titles);
      panicA[activeIndex]=1;
    	}
    else if(panicA[activeIndex]==1){
	   activeImage.setAttribute("src", ""+imagePath+"units/"+base+pieceName+unitExtension);//"units/"+base+pieceName+unitExtension);
	   //alert("units/"+base+pieceName+unitExtension);
     titles = activeImage.getAttribute("title");
	   titles2=titles.slice(9);
	   activeImage.setAttribute("title", titles2);
	   panicA[activeIndex]=0;
	   }

		activeImage.setAttribute("class", "piece");
		activeImage.style.borderColor="black";
    //activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
		mouseActive=0;
		//activeImage.style.borderColor="black";
		if(firerA[activeIndex]==1){
		//activeImage.style.borderColor="blue";
      }
		}
else{alert("Cannot destroy hidden units!");}
			doEdgeColor();

  if(flagChange==1){
    mouseActive=0;
		doEdgeColor();
  //save the page
  saveWindow2();}
}//end of 'rout' keyPress function

function changeIneffective(p, i, f){ //unit ineffective
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

  if(flagChange==0){
    if(disruptedA[activeIndex]==1){disruptedA[activeIndex]=0;}
    else{disruptedA[activeIndex]=1;}
  }
		if(deadA[activeIndex]==0){
		if(panicA[activeIndex]!=1){
			if(disruptedA[activeIndex]!=1){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", titles+": ineffective!");//"DISRUPTED: " + titles);
				disruptedA[activeIndex]=1;
			}
			else{
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(0,-14);//titles2=titles.slice(11);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;
			}
			mouseActive=0;
			doEdgeColor();
		}
		}
  if(flagChange==1){
    mouseActive=0;
		doEdgeColor();
  //save the page
  saveWindow2();}
}

function changeDisrupt(p, i, f){ //unit disrupted
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

  if(flagChange==0){
    if(disruptedA[activeIndex]==2){disruptedA[activeIndex]=4;//double D
			if(!DcolorFlag){disruptedA[activeIndex]=0;}//single D
		//alert("2")
	}
		else if(disruptedA[activeIndex]==1){disruptedA[activeIndex]=0;}
    else{disruptedA[activeIndex]=2;
			if(!DcolorFlag){disruptedA[activeIndex]=1;}//single D
		}
  }
		if(deadA[activeIndex]==0){
		if(panicA[activeIndex]!=1){
			if(disruptedA[activeIndex]==0||disruptedA[activeIndex]==3||disruptedA[activeIndex]==4){//&&disruptedA[activeIndex]!=2){
				//alert("4")
				titles = activeImage.getAttribute("title");
        titles2=titles;
        if(panicA[activeIndex]==2){
        titles = activeImage.getAttribute("title");
        titles2=titles.slice(16);
        panicA[activeIndex]=0;}
        if(disruptedA[activeIndex]==3){titles2=titles.slice(7);}//3 means 'fired'
				activeImage.setAttribute("title", "DISORGANISED: " + titles2);//DISORGANISED: //DISRUPTED:
				//disruptedA[activeIndex]=1;
				if(disruptedA[activeIndex]==4){//4 is dummy index for '2'
					disruptedA[activeIndex]=2;
					if(!DcolorFlag){disruptedA[activeIndex]=1;}//single D
				}
				else{disruptedA[activeIndex]=1;}
			}
			else if(disruptedA[activeIndex]==1&&DcolorFlag){
			disruptedA[activeIndex]=2;
			//alert("new 2");
			}
			else{//undisrupt
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(14);
				activeImage.setAttribute("title", titles2);
				//alert("no");
				disruptedA[activeIndex]=0;
			}
			mouseActive=0;
			doEdgeColor();
		}
		}
  if(flagChange==1){
    mouseActive=0;
	  doEdgeColor();
  //save the page
    saveWindow2();}
}

function disruptionNumber(){
	if(DcolorFlag){
		DcolorFlag=false;
		//alert("1");
		document.getElementById("btn7").innerText="single D";
	}
		else{
			DcolorFlag=true;
			//alert("2");
			document.getElementById("btn7").innerText="double D";
		}
}

function changeSupply(p, i, f){ //unit OUT OF SUPPLY
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;
  //alert(""+activeImage+" "+activeIndex);
  if(disruptedA[activeIndex]!=1){//&&disruptedA[activeIndex]!=3){
  if(flagChange==0){
    if(panicA[activeIndex]==2){panicA[activeIndex]=0;}
    else{panicA[activeIndex]=2;}
  }
		if(deadA[activeIndex]==0){
		if(panicA[activeIndex]!=1&&leaderA[activeIndex]!=1){
			if(panicA[activeIndex]!=2){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", "OUT OF COMMAND: " + titles);
				panicA[activeIndex]=2;
			}
			else{
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(16);
				activeImage.setAttribute("title", titles2);
				panicA[activeIndex]=0;
			}
			mouseActive=0;
			doEdgeColor();
		}
		}
		}
  if(flagChange==1){
  //save the page
  saveWindow2();}
  return;
}

function changeRotNo(p, i, f){ //no rotate - straighten unit
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

	  //piecesTop[activeIndex]=piecesTop[activeIndex]-shuffleStep;
		var angleT = 0;
		exitA[activeIndex]=angleT;
		activeImage.style.transform='rotate('+angleT+'deg)';
}

function changeRotL(p, i, f){ //rotate left
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

	  //piecesTop[activeIndex]=piecesTop[activeIndex]-shuffleStep;
		var angleT = exitA[activeIndex];
		angleT=angleT-90;
		exitA[activeIndex]=angleT;
		activeImage.style.transform='rotate('+angleT+'deg)';
		mouseActive =0;
		doEdgeColor();
}

function changeRotR(p, i, f){ //rotate right
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

	  //piecesTop[activeIndex]=piecesTop[activeIndex]-shuffleStep;
		var angleT = exitA[activeIndex];
		angleT=angleT+90;
		if(angleT==360){angleT=0}
		exitA[activeIndex]=angleT;
		activeImage.style.transform='rotate('+angleT+'deg)';
		printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex],countIndividual[activeIndex]);
		mouseActive =0;
		doEdgeColor();
		return;
}


function changeRot(p, i, f){ //rotate
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

	  //piecesTop[activeIndex]=piecesTop[activeIndex]-shuffleStep;
		var angleT = exitA[activeIndex];
		//angleT=angleT+60;
		//exitA[activeIndex]=angleT;
		activeImage.style.transform='rotate('+angleT+'deg)';
}

function changeFire(p, i, f){ //unit has fired
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

  if(disruptedA[activeIndex]!=1){
  if(flagChange==0){
    if(disruptedA[activeIndex]==3){disruptedA[activeIndex]=0;}
    else{disruptedA[activeIndex]=3;}
  }
		if(deadA[activeIndex]==0){
		if(panicA[activeIndex]!=1){
		if(firerA[activeIndex]==1){
			if(disruptedA[activeIndex]!=3){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", "FIRED: " + titles);
				disruptedA[activeIndex]=3;
				//alert("3");
			}
			else if(disruptedA[activeIndex]==3) {
				//alert("0");
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(7);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;
			}
			mouseActive=0;
			doEdgeColor();
			}
		}
		}
		}
  if(flagChange==1){
  //save the page
  saveWindow2();}
}

function showBoard(){ //show board
  var board = document.getElementById("board");
	if(boardNumb==1){board.style.position="absolute";
	board.style.zIndex=nextZ+1;
	//document.all.board.style.position="static";
	nextZ++;
	boardNumb=0;}
	else{board.style.position="static";
	board.style.zIndex=20;
	boardNumb=1;}
	}

//if(keyText=="d"){ //unit dismounted
function dismount(p, i, f){
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  activeImage = activePiece;
  activeIndex = pieceIndex;
  if(flagChange==0&&isCavA[activeIndex]==1){
    if(dismountA[activeIndex]==1){dismountA[activeIndex]=0;}
    else{dismountA[activeIndex]=1;}
  }
 		if(isCavA[activeIndex]==1){
			if(dismountA[activeIndex]!=1){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", "dismounted: " + titles);
				dismountA[activeIndex]=1;}
			else{
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(12)
				activeImage.setAttribute("title", titles2);
				dismountA[activeIndex]=0;}
		}
		mouseActive=0;
		doEdgeColor();
	}

//if(keyText=="e"||keyText=="E"){ //unit exited
function unitExited(p, i, f){
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  activeImage = activePiece;
  activeIndex = pieceIndex;
  if(flagChange==0){
    if(exitA[activeIndex]==1){exitA[activeIndex]=0;}
    else{exitA[activeIndex]=1;}
  }
		if(deadA[activeIndex]==0){
		if(panicA[activeIndex]!=1){
			if(exitA[activeIndex]!=1){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", "EXITED: " + titles);
				exitA[activeIndex]=1;
			/*if(activeIndex<gerNumber){//assign points for exiting
				var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3];
				for(v=0;v<vp;v++){unionVP++;}}
				else{var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3]*10;
				for(v=0;v<vp;v++){rebelVP++};	}*/
			}
			else{
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(8);
				activeImage.setAttribute("title", titles2);
				exitA[activeIndex]=0;
			/*if(activeIndex<gerNumber){//assign points for exiting
				var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3];
				for(v=0;v<vp;v++){unionVP--;}}
				else{var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3]*10;
				for(v=0;v<vp;v++){rebelVP--};	}*/
			}
			mouseActive=0;
			doEdgeColor();
		}
		}
}

function doEdgeColor(){
activeImage = imageArray[activeIndex];

	activeImage.style.borderColor="black";
	activeImage.style.borderStyle="solid";
	if(hideA[activeIndex]!=1){//if not hidden
		if(panicA[activeIndex]==2){
		activeImage.style.borderStyle="double";
		activeImage.style.borderColor="grey";}//out of supply
		//else{activeImage.style.borderStyle="solid";}
		if(firerA[activeIndex]==1){// or isCavA
		activeImage.style.borderColor="cyan";}//transport color overides manoeuvre
		if(disruptedA[activeIndex]==3){
		activeImage.style.borderColor="blue";}//fired
		//else if(firerA[activeIndex]==2){
		//activeImage.style.borderColor="white";}
		if(disruptedA[activeIndex]==1){
		activeImage.style.borderColor=D1color;
			if(!DcolorFlag){activeImage.style.borderColor="red";}
	  }//"purple";}//disorganised"red"
		if(disruptedA[activeIndex]==2){
		activeImage.style.borderColor=D2color;}//"PaleGreen";}//disorganised"pink"
		if(deadA[activeIndex]==1){
		activeImage.style.borderColor="white";}
		if(leaderA[activeIndex]==1){
		activeImage.style.borderColor="orange";}//white";
		if(panicA[activeIndex]==1){
		activeImage.style.borderColor="orange";}//routed
		//if(panicA[activeIndex]!=2){
		//activeImage.style.borderStyle="solid";}//out of supply  	activePiece.style.borderStyle="dotted";
	  if(movedA[activeIndex]==1){
		activeImage.style.borderStyle="dotted";}//moved

  }
	else{//if hidden
		if(disruptedA[activeIndex]==3){
		activeImage.style.borderColor="cyan";}//manoeuvre can be seen when hidden
	}
	/*if(disruptedA[activeIndex]==2){
		activeImage.style.borderColor="magenta";}//attack orders are always visible
  */
	//document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");
}

//if(keyText=="r"||keyText=="R"){
function LOSruler(){
	if(ruler){ruler=false;
	for(i=0;i<33;i++){
		line[i].style.color="cyan";
		}
	}
	else {ruler=true;
	for(i=0;i<33;i++){
		line[i].style.color="red";
		}
}
}

//eraser ruler
//if(keyText=="e"||keyText=="E"){
function eraseLOSruler(){
	oldXpos=0;
	oldYpos=0;
	xpos2=0;
	ypos2=0;
	for(i=0;i<33;i++){
		line[i].style.left=xpos2-((xpos2-oldXpos)/32)*i +"px";
		line[i].style.top=ypos2-((ypos2-oldYpos)/32)*i +"px";
	}

}

//if(keyText=="z"||keyText=="Z"){ //zombies! bury dead or raise dead
function zombies(){
	if(buried==0){
		for(k=0;k<noOfImages;k++){
			if(deadA[k]==1){
				imageArray[k].style.zIndex=-2;
			}
		}
		buried=1;
	}
	else if(buried==2){
		for(k=0;k<noOfImages;k++){
			if(deadA[k]==1){
				imageArray[k].style.zIndex=nextZ+1;
			}
		}
		buried=0;
	}
	else{for(k=0;k<noOfImages;k++){
			if(deadA[k]==1){
				imageArray[k].style.zIndex=0;
			}
		}
		buried=2;
	}
}

function unmarkAll(){
for(k=0;k<noOfImages;k++){
			imageArray[k].style.borderStyle="solid";
			if(panicA[k]==2){
				imageArray[k].style.borderStyle="double";//out of supply
				imageArray[k].style.borderColor="grey";
			}
			if(firerA[k]==1){// firer
			imageArray[k].style.borderColor="cyan";}//not fired
			if(disruptedA[k]==3){
			imageArray[k].style.borderColor="blue";}//fired
			movedA[k]=0;
			activeIndex=k;
			activeImage=imageArray[k];
			doEdgeColor();
	      seeThruAlpha = 1;
	      blackTextFlag = false;
	      printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex],countIndividual[activeIndex]);
	   	}
	saveWindow2();
}

function unmarkAll(){
for(k=0;k<noOfImages;k++){
			imageArray[k].style.borderStyle="solid";
			if(panicA[k]==2){
				imageArray[k].style.borderStyle="double";//out of supply
				imageArray[k].style.borderColor="grey";
			}
			if(firerA[k]==1){// firer
			imageArray[k].style.borderColor="cyan";}//not fired
			if(disruptedA[k]==3){
			imageArray[k].style.borderColor="blue";}//fired
			movedA[k]=0;
			activeIndex=k;
			activeImage=imageArray[k];
			doEdgeColor();
	      seeThruAlpha = 1;
	      blackTextFlag = false;
	      printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex],countIndividual[activeIndex]);
	   	}
	saveWindow2();
}

function unmarkAllTrans(){
//console.log("clicked")
for(kt=0;kt<noOfImages;kt++){
			activeIndex=kt;
			activeImage=imageArray[kt];
	      seeThruAlpha = 0.3;
				//console.log(""+seeThruAlpha)
	      //blackTextFlag = true;
	      printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex],countIndividual[activeIndex]);
	   	}
			transFlag = true;
			//console.log("after: "+seeThruAlpha)
	saveWindow2();
}

function unmarkAllTransOne(){

if(transFlag){
		seeThruAlpha = 1;
}
else{
		seeThruAlpha = 0.2;
}
	   printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex],countIndividual[activeIndex]);
		transFlag = true;
	saveWindow2();
}

function newColorTiles(){
	dumColorReal++;
	//console.log(dumColorReal)
	if(dumColorReal==colorOfTiles.length){
		dumColorReal=0;}
		colorTiles = colorOfTiles[dumColorReal];
		colorDots = colorOfDots[dumColorReal];
		colorChange = colorChangers[dumColorReal];

for(kc=0;kc<noOfImages;kc++){
			activeIndex=kc;
			activeImage=imageArray[kc];
	      printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex],countIndividual[activeIndex]);
	   	}
	saveWindow2();
}


function newColorTiles2(){//re-clour outside
	dumColorReal++;
	//console.log(dumColorReal)
	if(dumColorReal==colorOfTiles.length){
		dumColorReal=0;}
		colorTiles = colorOfTiles[dumColorReal];
		colorDots = colorOfDots[dumColorReal];
		colorChange = colorChangers[dumColorReal];

for(kc=0;kc<noOfImages;kc++){ //+activeImage.style.top.slice(0,-2);
	var topThis = +imageArray[kc].style.top.slice(0,-2);
	var leftThis = +imageArray[kc].style.left.slice(0,-2);
	topThis=topThis/boardSize;
	leftThis=leftThis/boardSize;
	//console.log("topThis="+topThis+" leftThis="+leftThis);
	//if(topThis>30&&topThis<310&&leftThis>30&&leftThis<325){
	if(topThis<30||topThis>310||leftThis<30||leftThis>325){
	//console.log("YES - topThis="+topThis+" leftThis="+leftThis);
			activeIndex=kc;
			activeImage=imageArray[kc];
	      printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex],countIndividual[activeIndex]);
	   	}
		}
	saveWindow2();
}

function newColorTiles3(){//re-clour inside
	dumColorReal++;
	//console.log(dumColorReal)
	if(dumColorReal==colorOfTiles.length){
		dumColorReal=0;}
		colorTiles = colorOfTiles[dumColorReal];
		colorDots = colorOfDots[dumColorReal];
		colorChange = colorChangers[dumColorReal];

for(kc=0;kc<noOfImages;kc++){ //+activeImage.style.top.slice(0,-2);
	var topThis = +imageArray[kc].style.top.slice(0,-2);
	var leftThis = +imageArray[kc].style.left.slice(0,-2);
	topThis=topThis/boardSize;
	leftThis=leftThis/boardSize;
	//console.log("topThis="+topThis+" leftThis="+leftThis);
	if(topThis>30&&topThis<310&&leftThis>30&&leftThis<325){
	//if(topThis<30||topThis>310||leftThis<30||leftThis>325){
	//console.log("YES - topThis="+topThis+" leftThis="+leftThis);
			activeIndex=kc;
			activeImage=imageArray[kc];
	      printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex],countIndividual[activeIndex]);
	   	}
		}
	saveWindow2();
}


function newColorTilesOne(){//re-clour inside
	dumColorReal++;
	//console.log(dumColorReal)
	if(dumColorReal==colorOfTiles.length){
		dumColorReal=0;}
		colorTiles = colorOfTiles[dumColorReal];
		colorDots = colorOfDots[dumColorReal];
		colorChange = colorChangers[dumColorReal];

  printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex],countIndividual[activeIndex]);

	saveWindow2();
}

function unfireAll(){
for(k=0;k<noOfImages;k++){
	if(deadA[k]==0){
	if(panicA[k]!=1){
	if(firerA[k]==1){
		if(disruptedA[k]==3) {
			//alert("0");
			titles = imageArray[k].getAttribute("title");
			titles2=titles.slice(7);
			imageArray[k].setAttribute("title", titles2);
			disruptedA[k]=0;
			imageArray[k].style.borderColor="cyan";
	}
		}
	}
	}
	      }
	saveWindow2();
}

function noCommandSideA(){
	supplyA++;
	if(supplyA>3){supplyA=0;}
	if(supplyA==0){
for(s=0;s<gerNumber;s++){
	if(panicA[s]==2){
			changeSupply(imageArray[s], s, 1)}
			}
	document.getElementById('btn23').innerText="supply A - all";
	}
	else if(supplyA==1){
for(s=0;s<gerNumber;s++){
		if(panicA[s]==0){
				changeSupply(imageArray[s], s, 1)}
			}
		document.getElementById('btn23').innerText="supply A - none";
	}
	else if(supplyA==2){
for(s=0;s<gerNumber;s++){
		if(Math.random()<0.5){
				changeSupply(imageArray[s], s, 1)}
			}
		document.getElementById('btn23').innerText="supply A - random";
	}
	//**THIS ROUTINE FLIPS SUPPLY TO OPPOSITE
/*for(s=0;s<gerNumber;s++){
			changeSupply(imageArray[s], s, 1);	//becuse call it in loop need 'return' in changeSupply() to come back here
		}*/
}

function noCommandSideB(){
	supplyB++;
	if(supplyB>3){supplyB=0;}
	if(supplyB==0){
for(s=gerNumber;s<neutNumber;s++){
	if(panicA[s]==2){
			changeSupply(imageArray[s], s, 1)}
			}
	document.getElementById('btn23').innerText="supply A - all";
	}
	else if(supplyB==1){
for(s=gerNumber;s<neutNumber;s++){
		if(panicA[s]==0){
				changeSupply(imageArray[s], s, 1)}
			}
		document.getElementById('btn23').innerText="supply A - none";
	}
	else if(supplyB==2){
for(s=gerNumber;s<neutNumber;s++){
		if(Math.random()<0.5){
				changeSupply(imageArray[s], s, 1)}
			}
		document.getElementById('btn23').innerText="supply A - random";
	}
	//**THIS ROUTINE FLIPS SUPPLY TO OPPOSITE
/*for(s=0;s<gerNumber;s++){
			changeSupply(imageArray[s], s, 1);	//becuse call it in loop need 'return' in changeSupply() to come back here
		}*/
}

function RotSideA(){
for(s=0;s<gerNumber;s++){
  //alert(""+imageArray[k]+" "+k);
			changeRotR(imageArray[s], s, 1);	//becuse call it in loop need 'return' in changeSupply() to come back here
      //imageArray[k].style.borderStyle="solid";
			//movedA[k]=0;
			}
}

function RotSideB(){
for(s=gerNumber-1;s<neutNumber-1;s++){
  //alert(""+imageArray[k]+" "+k);
			changeRotR(imageArray[s], s, 1);	//becuse call it in loop need 'return' in changeSupply() to come back here
      //imageArray[k].style.borderStyle="solid";
			//movedA[k]=0;
			}
}

function victoryPoints(){
  victoryLevel();
  alert(nameA+" VP: "+unionVP+"/"+unionVP2+" \n"+nameB+" VP: "+rebelVP+"/"+rebelVP2+" \n"+vicLevel+" to "+victor);

}

function victoryLevel(){
var vL = 0;
var v0 = 0;
  if(unionVP==rebelVP){
  vL = 0;
  victor="";}
  else if(unionVP>rebelVP){
  v0 = rebelVP;
  if(v0 == 0){v0=1;}
  vL = unionVP/v0;
  victor=nameA;}
  else{
  v0 = unionVP;
  if(v0 == 0){v0=1;}
  vL = rebelVP/v0;
  victor=nameB;
  }
  if(vL>=3){
  vicLevel = "Decisive Victory";}
  else if(vL>=2){
  vicLevel = "Substantive Victory";
  }
  else if(vL>=1){
  vicLevel = "Marginal Victory";}
  else{
  vicLevel = "";}

}

function pngUnits(){

var unitLocation = "units3/";
var unitExtension = ".png";

var k=0;
for(i=0;i<unitTotal+1;i++){
	var totalNo=unitsA[i*noOfItems+3];
	for(j=0;j<totalNo;j++){
     imageArray[k].setAttribute("src", unitLocation+unitsA[i*noOfItems]+unitExtension);
     k++;}
     }
}

function jpgUnits(){

var unitLocation = "units/";
var unitExtension = ".jpg";

var k=0;
for(i=0;i<unitTotal+1;i++){
	var totalNo=unitsA[i*noOfItems+3];
	for(j=0;j<totalNo;j++){
     imageArray[k].setAttribute("src", unitLocation+unitsA[i*noOfItems]+unitExtension);
     k++;}
     }
}

function changeNeutralPic(n){
	var leaderName=n;
	//alert(""+n);
  //if (n=="1L"){leaderName="1";}
	//alert("2:"+leaderName+":"+n);
	var base=Abase;
	if(activeIndex>=gerNumber){base=Bbase;}
	var titles3 = "";

	//alert("activeIndex:"+activeIndex);
  if (leaderName==1){
	//alert(""+"1L to 2L");
	activeImage.setAttribute("src", "units/"+base+"2l"+unitExtension);
		titles = activeImage.getAttribute("title");
	if (activeIndex<10){
	titles2=titles.slice(26);
		titles3 = titles.slice(0,4);
		activeImage.setAttribute("title", titles3+"2L combat:+6 radius:2 "+titles2);

   }
 	else if (activeIndex<100){
	titles2=titles.slice(27);
		titles3 = titles.slice(0,5);
		activeImage.setAttribute("title", titles3+"2L combat:+6 radius:2 "+titles2);
   }
 	else{
	titles2=titles.slice(28);
		titles3 = titles.slice(0,6);
		activeImage.setAttribute("title", titles3+"2L combat:+6 radius:2 "+titles2);
   }
   neutN[activeIndex]=2;
   leaderValueA[activeIndex]=2;
		}

	if(leaderName==2){
	//alert(""+"2L to 3L");
		activeImage.setAttribute("src", "units/"+base+"3l"+unitExtension);
		titles = activeImage.getAttribute("title");
	if (activeIndex<10){
	titles2=titles.slice(26);
		titles3 = titles.slice(0,4);
		activeImage.setAttribute("title", titles3+"3L combat:+3 radius:1 "+titles2);
   }
 	else if (activeIndex<100){
	titles2=titles.slice(27);
		titles3 = titles.slice(0,5);
		activeImage.setAttribute("title", titles3+"3L combat:+3 radius:1 "+titles2);
   }
 	else{
	titles2=titles.slice(28);
		titles3 = titles.slice(0,6);
		activeImage.setAttribute("title", titles3+"3L combat:+3 radius:1 "+titles2);
   }
	 //alert("units/"+base+"3l"+unitExtension+"  "+titles3+"3L combat:+3 radius:1 "+titles2);
   neutN[activeIndex]=3;
   leaderValueA[activeIndex]=3;
		 }

	if(leaderName==3)
		{
		//alert(""+"3L to 4L");
    activeImage.setAttribute("src", "units/"+base+"4l"+unitExtension);
		titles = activeImage.getAttribute("title");
	if (activeIndex<10){
	titles2=titles.slice(26);
		titles3 = titles.slice(0,4);
		activeImage.setAttribute("title", titles3+"4L combat:+3 radius:0 "+titles2);
   }
 	else if (activeIndex<100){
	titles2=titles.slice(27);
		titles3 = titles.slice(0,5);
		activeImage.setAttribute("title", titles3+"4L combat:+3 radius:0 "+titles2);
   }
 	else{
	titles2=titles.slice(28);
		titles3 = titles.slice(0,6);
		activeImage.setAttribute("title", titles3+"4L combat:+3 radius:0 "+titles2);
   }
   neutN[activeIndex]=4;
   leaderValueA[activeIndex]=4;
    }

	if(leaderName==4)
		{
		//alert(""+"4L to 1L");
    activeImage.setAttribute("src", "units/"+base+"1l"+unitExtension);
		titles = activeImage.getAttribute("title");
	if (activeIndex<10){
	titles2=titles.slice(26);
		titles3 = titles.slice(0,4);
		activeImage.setAttribute("title", titles3+"1L combat:+9 radius:2 "+titles2);
   }
 	else if (activeIndex<100){
	titles2=titles.slice(27);
		titles3 = titles.slice(0,5);
		activeImage.setAttribute("title", titles3+"1L combat:+9 radius:2 "+titles2);
   }
 	else{
	titles2=titles.slice(28);
		titles3 = titles.slice(0,6);
		activeImage.setAttribute("title", titles3+"1L combat:+9 radius:2 "+titles2);
   }
   neutN[activeIndex]=1;
   leaderValueA[activeIndex]=1;
    }

	if(leaderName==5)
		{
    activeImage.setAttribute("src", "units/"+base+"6l"+unitExtension);
		titles = activeImage.getAttribute("title");
	if (activeIndex<10){
	titles2=titles.slice(26);
		titles3 = titles.slice(0,4);
		activeImage.setAttribute("title", titles3+"6L combat:+0 radius:1 "+titles2);
   }
 	else if (activeIndex<100){
	titles2=titles.slice(27);
		titles3 = titles.slice(0,5);
		activeImage.setAttribute("title", titles3+"6L combat:+0 radius:1 "+titles2);
   }
 	else{
	  titles2=titles.slice(28);
		titles3 = titles.slice(0,6);
		activeImage.setAttribute("title", titles3+"6L combat:+0 radius:1 "+titles2);
    }
  neutN[activeIndex]=6;
   leaderValueA[activeIndex]=6;
    }
	if(leaderName==6)
		{
    activeImage.setAttribute("src", "units/"+base+"5l"+unitExtension);
		titles = activeImage.getAttribute("title");
	if (activeIndex<10){
	  titles2=titles.slice(26);
		titles3 = titles.slice(0,4);
		activeImage.setAttribute("title", titles3+"5L combat:+0 radius:2 "+titles2);
   }
 	else if (activeIndex<100){
	   titles2=titles.slice(27);
		titles3 = titles.slice(0,5);
		activeImage.setAttribute("title", titles3+"5L combat:+0 radius:2 "+titles2);
   }
 	else{
	//alert("5: ");
   titles2=titles.slice(28);
		titles3 = titles.slice(0,6);
		activeImage.setAttribute("title", titles3+"5L combat:+0 radius:2 "+titles2);
    }
   neutN[activeIndex]=5;
   leaderValueA[activeIndex]=5;
    }
		mouseActive=0;
		doEdgeColor();
    document.getElementById('hopText').innerText=""+activeImage.getAttribute("title");

}

function hopHop(x, y){ //jump Hopper to new position
  var thisX = x;
  var thisY = y;
  hopJump++;
  if(hopJump>4){hopJump=1;}
  if(hopJump==1){
    hopSignL = 1;
    hopSignT = 1;}
  else if(hopJump==2){
    hopSignL = -1;
    hopSignT = 1;}
  else if(hopJump==3){
    hopSignL = -1;
    hopSignT = -1;}
  else {
    hopSignL = 1;
    hopSignT = -1;}
    //alert("hopJump="+hopJump);
    keyBoard.style.zIndex = nextZ++;
    keyBoard.style.left= thisX + hopSignL*pieceSize*Math.pow(boardSize,0.5)*6 + "px";//xpos - relX/2 + "px";
    //alert(""+hopSignL*pieceSize*Math.pow(boardSize,0.5)*6);
    keyBoard.style.top= thisY + hopSignT*pieceSize*Math.pow(boardSize,0.5)*6 + "px";//ypos - relY/2 + "px";
    }



		function saveWindow2(){

			  var swLeft=0;
			  var swTop=0;
			  //var swText=0;
			  var swMark=0;
			  var swDead=0;
			  var swCav=0; //dismounted - USE FOR UNIT CHANGE
			  var swDis=0; //disrupted and leader
			  var swTrans=0; //use for rotation
			  var swTrans1=0; //passenger id -spare 1 - use for exited
			  var swTrans2=0; //z-index
			  var imgIndex=0;
			  var activeIndex=0;
			  var allText="";
			  var thisShift=0;
			    for(k=0;k<noOfImages;k++){
			    activeIndex=k;
			    swLeft = piecesLeft[k];
			    swTop = piecesTop[k];
			    if(movedA[activeIndex]==1){
			      swMark = 1;
			      }
			    else{
			      swMark = 0;
			      }
			    if(disruptedA[k]>=1){
			      swDis = disruptedA[k];
			      }
			    else if(armourA[k]=="l"){
			      if(neutN[activeIndex]>0){
			        swDis = neutN[activeIndex];
			        //swDis--;
			      }
			      else{swDis=0;}
			    }
			    else{swDis=0;}
			    if(deadA[activeIndex]>0){
			      swDead = deadA[activeIndex];
			      }
			    else{
			      swDead = 0;
			      }
			    if(dismountA[k]==1){
			      swCav = cmbtFactorsA[activeIndex]
			      //findName(imageArray[activeIndex], activeIndex);
			      //alert(""+swCav+" "+activeIndex+" "+k);
			      }
			    else{
			      swCav = cmbtFactorsA[activeIndex]
			      //swCav = "x";
			      }
			    if(panicA[activeIndex]>0){//rout
			      swTrans = panicA[activeIndex];
			      }
			    else{
			      swTrans = 0;
			      }
			    if(exitA[activeIndex]!=0){//rotation
			      swTrans1 = exitA[activeIndex];
			      }
			    else{
			      swTrans1 = 0;
			      }
			    /*if(passengerA[activeIndex]>0){
			      swTrans2 = passengerA[activeIndex];
			      }
			    else{
			      swTrans2 = 0;
			    }*/
			    swTrans2 = document.getElementById("piece#"+activeIndex).style.zIndex;
			    //alert(""+swTrans2);
			    allText=allText+swTrans+","+swTrans1+","+swTrans2+","+swDead+","+swMark+","+swDis+","+swLeft+","+swTop+","+swCav+", ";
			    }

			  	allText=allText+redArmyNo+","+blackArmyNo+","+redBno+","+ flipBrdNoR +","+ blackBno +","+ flipBrdNoB+",";

			  	allText=allText+unionVP+","+rebelVP+","+turnNumb+","+ size +","+ turnLetter +","+ turnNumber +","+situationAddress;

			if(saveDataFlag){
			   alert(""+allText);
		     saveDataFlag=false;}
			//alert("saved!");
			saveTheLot(allText);
		  //localStorage.arbelaSave = ""+allText;
		  //allText="";

		  }

		function saveDataWindow(){
		    saveDataFlag=true;
		    saveWindow2();
		}


		function reload2(d){
			var catchText= ""+d;
			alert(""+catchText);//ALLOW THIS to show the data in the cookie *****
		  var loadA=catchText.split(",");
		  var loopTill = loadA.length;
		  var shiftBackwards = 7;//due to board and army numbers added to list
		  var loadSize=1*loadA[loopTill-4];
		  reScale=size/loadSize;
		  var flipIndex=0;
		  var dismountDummyA = new Array();
		  var noPieces=noOfImages;
		    for(n=0; n<noPieces; n++){
		    activeIndex=n;
		    m=n*9;
		    panicA[activeIndex]=loadA[m];
		    exitA[activeIndex]=1*loadA[m+1];//rotation numb
		    imageArray[activeIndex].style.zIndex = 1*loadA[m+2];//z-index
		    if(1*loadA[m+2]>nextZ){nextZ=1*loadA[m+2];}
		    passengerA[activeIndex]=1*loadA[m+2];//spare 2
		    deadA[activeIndex]=1*loadA[m+3];
		    movedA[activeIndex]=1*loadA[m+4];
		    disruptedA[activeIndex]=1*loadA[m+5];
		    //dismountDummyA[activeIndex]=loadA[m+8];
		    cmbtFactorsA[activeIndex]=loadA[m+8];
		    if(cmbtFactorsA[activeIndex]=="x"||dismountDummyA[activeIndex]==" x"||dismountDummyA[activeIndex]==" x "){
		      //dont change anything
		    }
		    else if(cmbtFactorsA[activeIndex]<cmbtFactorsMaxA[activeIndex]){
		      //routine to re-print unit if it has new value
		      printUnit(activeIndex, typeNumbA[activeIndex], typeTotalA[activeIndex], thisIsA[activeIndex]);
		    }
		    //alert("|"+dismountDummyA[activeIndex]+"|")
		      if(dismountDummyA[activeIndex]!="x"&&dismountDummyA[activeIndex]!=" x"&&dismountDummyA[activeIndex]!=" x "&&dismountDummyA[activeIndex]!=0){
		        dismountA[activeIndex]=0;//1;
		        //alert("not x"+activeIndex);
		        //alert("x "+dismountDummyA[activeIndex]+" "+activeIndex+" "+dismountA[activeIndex]);
		      }
		      else{
		        dismountA[activeIndex]=0;
		      }
		    piecesLeft[activeIndex]=1*loadA[m+6]*reScale*1;//.42;
		    piecesTop[activeIndex]=1*loadA[m+7]*reScale*1;//.4;

		  //mark if should be marked...
		    changeMark(imageArray[activeIndex], activeIndex, 0);

		  //dismounted?...CHANGE UNIT
		    if(dismountA[activeIndex]==1){
		      /*
		      titles = imageArray[activeIndex].getAttribute("title");
		      imageArray[activeIndex].setAttribute("title", "dismounted: " + titles);
		      */
		      changeUnitReload(imageArray[activeIndex], activeIndex, dismountDummyA[activeIndex]);
		      doEdgeColor();
		      }
		    else{}

		    //routed units
		    if(panicA[activeIndex]==1){
		    changeRout(imageArray[activeIndex], activeIndex, 0);}

		    //out of supply
		    if(panicA[activeIndex]==2){
		      changeSupply(imageArray[activeIndex], activeIndex, 0);}

		       if(armourA[activeIndex]!="l"){// in prestags leaders cannot be D so use this to store leader level
		        if(disruptedA[activeIndex]==1||disruptedA[activeIndex]==2){
		        titles = imageArray[activeIndex].getAttribute("title");
		        imageArray[activeIndex].setAttribute("title", "DISORGANISED: " + titles);//DISRUPTED:
		        doEdgeColor();
		      }
		      //fires
		      if(disruptedA[activeIndex]==3){
		        changeFire(imageArray[activeIndex], activeIndex, 0);}
		    }
		    else{//if a leader
		      if(disruptedA[activeIndex]>0){
		      activeImage =	imageArray[activeIndex];
		      neutN[activeIndex]=disruptedA[activeIndex]-1;//-1;
		      //alert("neutN[activeIndex] "+neutN[activeIndex]);
		      if(neutN[activeIndex]==0){neutN[activeIndex]=4;}
		      disruptedA[activeIndex]=0;
		      pieceName=""+neutN[activeIndex];//+"L";
		      //alert("pieceName "+pieceName);
		      leaderValueA[activeIndex]=neutN[activeIndex];
		      changeNeutralPic(pieceName);
		      }
		    }

		        changeRot(imageArray[activeIndex], activeIndex, 0);//reload rotation

		        //dead units
		        if(deadA[activeIndex]>=1){
		          changeElim(imageArray[activeIndex], activeIndex, 0);}

		  }


		  rebelVP=1*loadA[loopTill-6];
		  unionVP=1*loadA[loopTill-7];
		  turnNumb=1*loadA[loopTill-5];
		  turnLetter=""+loadA[loopTill-3];
		  turnNumber=1*loadA[loopTill-2];
		  turnNumber=turnNumber*1;
		  var codeNumber = "0";
		  if(turnNumber<0){turnNumber=0;}
		  if(turnNumber<10){
			   codeNumber=codeNumber+turnNumber;}
		     else{
			      codeNumber=turnNumber;}
		  turnCode=turnLetter+codeNumber;
		  nameOfTurn();
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
			//loadBox.setAttribute("value", "Data re-loaded successfully!");
			alert("Data re-loaded successfully!");
			changeSize();
			}


		function hideUnit(p, i, f){
		var activePiece = p;
		  var imgIndex = i;
		  var flagChange = f;
		  activeImage = activePiece;
		  activeIndex = imgIndex;
		if(deadA[i]>=1){}
		else{
		if(true){//imgIndex<gerNumber
			//alert("gerNumber="+gerNumber+" imgIndex="+imgIndex);
		if(armourA[imgIndex]=="n"){
			hideA[imgIndex]=1; //flag unit as hidden
			activeImage.setAttribute("title", "possible unit...");
			//activeImage.setAttribute("src", "units/neut/m_blank1.jpg");
			firerA[imgIndex]=0;
			printUnitBlank(imgIndex, typeNumbA[imgIndex], typeTotalA[imgIndex], thisIsA[imgIndex],activeIndex);
			}
			else {
			hideA[imgIndex]=1; //flag unit as hidden
			activeImage.setAttribute("title", "possible unit...");
			//activeImage.setAttribute("src", "units/neut/m_blank1.jpg");
			firerA[imgIndex]=0;
			printUnitBlank(imgIndex, typeNumbA[imgIndex], typeTotalA[imgIndex], thisIsA[imgIndex],activeIndex);
			}
		}
		else{	}
		//if(disruptedA[imgIndex]==1){
		//			titles = document.all[imgIndex].getAttribute("title");
		//			document.all[imgIndex].setAttribute("title", "DISRUPTED: " + titles);
		//			document.all[imgIndex].style.borderColor="red";
		//			}
		//else{
			openA[i]=false;
			mouseActive=0;
			firerA[imgIndex]=0;
			activeImage.style.borderColor="black";
		//}
		}
		}


		function unhideUnit(p, i, f){
		var activePiece = p;
		  var imgIndex = i;
		  var flagChange = f;
		  activeImage = activePiece;
		  activeIndex = imgIndex;

		if(deadA[i]>=1){}
		else{
			//if(activeIndex<gerNumber){//unhide US unit
			if(true){//unhide ALL
		//activeImage.setAttribute("src", "units/"+unitsA[thisIsA[imgIndex]*noOfItems]+noOfNameA[imgIndex]+".jpg");
		//imageArray[noOfImg].setAttribute("title", "#"+(noOfImg+1)+": "+unitsA[i*noOfItems+1]+" "+unitsA[i*noOfItems+6]+"-"+unitsA[i*noOfItems+7]+" ("+(j+1)+"/"+totalNo+") " +unitNamesA[noOfImg]);
		//imageArray[noOfImg].setAttribute("title", "#"+(noOfImg+1)+": "+unitsA[i*noOfItems+1]+" "+designateLA[noOfImg]+"/"+designateRA[noOfImg]+" "+unitsA[i*noOfItems+6]+"-"+unitsA[i*noOfItems+7]+" pts:"+unitsA[i*noOfItems+2]+" ("+(j+1)+"/"+totalNo+")");
	 	 activeImage.setAttribute("title", "#"+(imgIndex+1)+": "+unitsA[thisIsA[imgIndex]*noOfItems+1]+" "+designateLA[imgIndex]+"/"+designateRA[imgIndex]+" "+unitsA[thisIsA[imgIndex]*noOfItems+6]+"-"+unitsA[thisIsA[imgIndex]*noOfItems+7]+" (pts:"+unitsA[i*noOfItems+2]+") ("+typeNumbA[imgIndex]+"/"+unitsA[thisIsA[imgIndex]*noOfItems+3]+")");
		printUnit(imgIndex, typeNumbA[imgIndex], typeTotalA[imgIndex], thisIsA[imgIndex]);
		hideA[imgIndex]=0;
		if(armourA[imgIndex]=="a"){firerA[imgIndex]=1;}
		doEdgeColor();
		//activeImage.styleborderColor="black";
		}
			else{//unhide jap unit
						}

		if(disruptedA[imgIndex]==1){
					titles = activeImage.getAttribute("title");
					activeImage.setAttribute("title", "DISRUPTED: " + titles);
					activeImage.style.borderColor="red";
					}

			}
		}


		function hideForces(){
		imgIndex=0;
			for(k=0;k<unitTotal+1;k++){
				totalNo=unitsA[k*noOfItems+2];
				for(j=0;j<totalNo;j++){
					if(imgIndex<gerNumber){
						if(hideRus==1){
						hideUnit(imageArray[imgIndex],imgIndex, 1);
						//imgIndex++;
						}
					}
					else if(imgIndex<neutNumber){
						if(hideGer==1){
						hideUnit(imageArray[imgIndex],imgIndex, 1);
						//imgIndex++;
						}
					}
				imgIndex++;
				}

			}
		}

		function unHideForces(){
		imgIndex=0;//imgStart;
			for(k=0;k<unitTotal+1;k++){
				totalNo=unitsA[k*noOfItems+2];
				for(j=0;j<totalNo;j++){
					if(imgIndex<gerNumber){
						if(hideRus==0){
						unhideUnit(imageArray[imgIndex],imgIndex, 1);
						//imgIndex++;
						}
					}
					else if(imgIndex<neutNumber){
						if(hideGer==0){
						unhideUnit(imageArray[imgIndex],imgIndex, 1);
						//imgIndex++;
						}
					}
				imgIndex++;
				}

			}
		}


		function hideRusF(){
		if(hideGer!=1){
		hideGer=1;
		hideForces();
		document.getElementById("btn15").innerText="Show B.";}
		else{
		hideGer=0;
		unHideForces();
		document.getElementById("btn15").innerText="Hide B.";}

		}

		function hideGerF(){
		if(hideRus!=1){
		hideRus=1;
		hideForces();
		document.getElementById("btn16").innerText="Show R.";
		}
		else{
		hideRus=0;
		unHideForces();
		document.getElementById("btn16").innerText="Hide R.";
		}
		}

		function hideToggle(){
		if(hideGer!=0){
		hideGer=0;
		hideRus=1;
		document.getElementById("btn16").innerText="Show R.";
		document.getElementById("btn15").innerText="Hide B.";
		hideForces();
		unHideForces();
		document.getElementById("btn25").innerText="Hide B./Show R.";
		}
		else{
		hideGer=1;
		hideRus=0;
		document.getElementById("btn15").innerText="Show B.";
		document.getElementById("btn16").innerText="Hide R.";
		hideForces();
		unHideForces();
		document.getElementById("btn25").innerText="Show B./Hide R.";
		}
		}
