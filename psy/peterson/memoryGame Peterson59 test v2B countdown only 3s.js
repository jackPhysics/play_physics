var listOfNumb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphabetA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"];
var alphabet2A = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
"U", "V", "W", "X", "Y", "Z"];
var consonantA=["b", "c", "d", "f", "g",
 "h", "j", "k", "l", "m",
  "n", "p", "q", "r", "s",
   "t", "v", "w", "x", "y",
    "z"];
    var consonantA2=["B", "C", "D", "F", "G",
     "H", "J", "K", "L", "M",
      "N", "P", "Q", "R", "S",
       "T", "V", "W", "X", "Y",
        "Z"];
var conL=21;
var listOfNumbLen = consonantA.length;
var alphabetLen = alphabetA.length;
var numbFlag = true;//if true use numbers, if false then use letters
var bangGo = "";
var goFlag = true;//if true make numb, if flase input number
var guessN = "";
var timeN = 2000;//show trigram for 2s
var numbLen = 3;
var numbNow = "";
var maxLen = 0;
var minTime = 200000;
var totLen = 0;
var totTime = 0;
var aveLen = 0;
var aveTime = 0;
var turns = 0;
var win = 0;
var lose = 0;
var totalScore = 0;
var allScore = 0;
var threeDigitN = "";
var threeDigitNumb = 0;
var threeDigitN3 = "";
var threeDigitA = new Array();
var countTime = 0;
var totCount = 1;//number of times-1 must choose - should be seconds of time2/3
var result="";
var tester="";
var myVar = "";
var pressflag = false;
var wrongMathsFlag = false;
var time2 =3000;//time for countdown

function init(){
  document.getElementById("goB").focus();

  document.getElementById("subBox")
      .addEventListener("keyup", function(event) {
        //alert(""+event.keyCode);
      event.preventDefault();
      if (event.keyCode === 13) {
        makeBang();
          //document.getElementById("id_of_button").click();
      }
  });
  //alert("press GO! to start");
  /*let pressGo = document.getElementById("goB");
  pressGo.addEventListener("keydown", (event) => {
    makeBang();
});*/
}

function makeNumber(){

      numbNow = "";
  var chosenN = 0;

  for(i=0;i<numbLen;i++){
    chooseN = Math.floor(Math.random()*listOfNumbLen);
    numbNow = numbNow + consonantA2[chooseN];
    threeDigitA[i]=consonantA2[chooseN];
    //console.log(threeDigitA);
  }

    threeDigitN = "";

  for(j=0;j<numbLen;j++)
  {
    var letter = "";
    letter=listOfNumb[Math.round(0.5+Math.random()*10)-1];

    //letter=alphabetA[counter];
    threeDigitN=threeDigitN+letter;
  }
    threeDigitNumb = 1*threeDigitN;
    document.getElementById("number1").innerHTML=""+numbNow;
    goFlag=false;
}

function makeBang(){
  if(goFlag){
    turns++;
    //totLen = totLen+numbLen;
    //totTime = totTime+timeN;
    //aveLen = (totLen/turns).toFixed(2);
    //aveTime = (totTime/turns).toFixed(0);
  makeNumber();
  myVar = setTimeout(hideWord, timeN);
}
  else{
    guessN=document.getElementById("subBox").value;
    guessNL = guessN.length;
      var thisAns = guessN;
      var thisAnsSt = thisAns.split("");
      var thisAnsL = thisAnsSt.length;
      var addNumbs = "";
    for(j=0; j<thisAnsL;j++){
      if(thisAnsSt[j]!=" "){
        addNumbs = addNumbs+thisAnsSt[j];
      }
    }
      guessN = addNumbs;
      //alert(""+thisAns+" "+thisAnsL+" "+addNumbs);
      //var thisScore = findScore(guessN, numbNow);
      var thisScore = "";
      var percentScore = 0;
    if(guessN==numbNow){
      if(numbLen>maxLen){
        maxLen=numbLen;
      }
        if(minTime>timeN){
          minTime=timeN;
        }
        totLen = totLen+numbLen;
        totTime = totTime+timeN;
        aveLen = (totLen/turns).toFixed(2);
        aveTime = (totTime/turns).toFixed(0);
        document.getElementById("number1").innerHTML="correct";
        win++;
        percentScore = (win/(turns)*100).toFixed(0);
        document.getElementById("number3").innerHTML="go #"+turns+": "+win+" - "+lose;//+"<br><br>best length = "+maxLen;//+";  best time = "+minTime+" ms";
        document.getElementById("number4").innerHTML= "percentage = "+percentScore+"%;";
        document.getElementById("subBox").style.value = "????";
        document.getElementById("subBox").style.visibility = "hidden";
        document.getElementById("goB").value="GO!";
        document.getElementById("goB").focus();
        goFlag=true;
        if(Math.random()<0){
        timeN = Math.round(Math.round(timeN * 0.8/100)*100);}
        else{
        //numbLen++;
      }
      }
    else{
    //totLen = totLen+numbLen;
    totTime = totTime+timeN;
    aveLen = (totLen/turns).toFixed(2);
    aveTime = (totTime/turns).toFixed(0);
    if(wrongMathsFlag){
      document.getElementById("number1").innerHTML="WRONG!";
    }
    else{
      document.getElementById("number1").innerHTML="WRONG!<br>"+guessN+" != <u>"+numbNow+"</u>";
    }
        lose++;
        percentScore = (win/(turns)*100).toFixed(0);
        document.getElementById("number3").innerHTML="go #"+turns+": "+win+" - "+lose;
        document.getElementById("number4").innerHTML="percentage = "+percentScore+"%;";
        document.getElementById("subBox").style.value = "????";
        document.getElementById("subBox").style.visibility = "hidden";
        document.getElementById("goB").value="GO!";
        document.getElementById("goB").focus();
      document.getElementById("goBA").style.visibility = "hidden";
      document.getElementById("goBB").style.visibility = "hidden";
      document.getElementById("number2").innerHTML = "";
        document.getElementById("goB").style.visibility = "visible";
        goFlag=true;
        if(Math.random()<0){
        timeN = Math.round(Math.round(timeN * 1.2/100)*100);}
        else{
        //numbLen--;
      }
    }

  }
  guessN = "";
  wrongMathsFlag = false;
  pressflag = false;
}

function findScore(a, q){
  var thisAns = a;
  var thisAnsSt = thisAns.split("");
  var thisQue = q;
  var thisQueSt = thisQue.split("");
  var thisAnsL = thisAns.length;
  var thisQueL = thisQue.length;
  var score = 0;
  var countThruQ = thisQueL;
  for(j=0; j<countThruQ; j++){
    if(thisAnsSt[j]==thisQueSt[j]){
      score++;
    }
  }
  totalScore = totalScore+score;
  allScore = allScore+countThruQ;
  var marks = ""+score+"/"+countThruQ;
  return marks;
}

function testSame(a, q){
  var thisAns = a;
  var thisAnsSt = thisAns.split("");
  var thisQue = q;
  var thisQueSt = thisQue.split("");
  var thisAnsL = thisAns.length;
  var thisQueL = thisQue.length;
  var countThruA = 0;
  var countThruQ = 0;
//  while(countThruA<thisAnsL&&countThruQ<thisQueL){

//  }

}


function hideWord(){
    //countTime++;
    document.getElementById("number1").innerHTML="Count downwards, out loud, from..."+"<br><br>"+threeDigitNumb;
    //document.getElementById("subBox").style.visibility = "visible";//"hidden";
    document.getElementById("goB").style.visibility = "hidden";
    /*var blankN = "";
    if(turns<3){
    for(j=0; j<numbLen;j++){
      blankN = blankN + "x";//"x";
    }
  }
    document.getElementById("subBox").value = ""+blankN;
    document.getElementById("goB").value="input...";
    document.getElementById("subBox").focus();*/

    threeDigitN = "";

  /*for(j=0;j<numbLen;j++)
  {
    var letter = "";
    letter=listOfNumb[Math.round(0.5+Math.random()*10)-1];

    //letter=alphabetA[counter];
    threeDigitN=threeDigitN+letter;
  }*/
  threeDigitNumb=threeDigitNumb-3;

    goAgain();
    setTimeout(hideNumber, time2);
}

function goAgain(){

    countTime++;
      if(countTime<totCount){
        myVar = setTimeout(hideWord, 3000);//number shown for 3s
      }
    else{
      myVar = setTimeout(hideNumber, time2);
    }
  }

function chooseA(){
  pressflag = true;
  yourResult = "A";
    clearTimeout(myVar);
  goAgain();
}

function chooseB(){
  pressflag = true;
  yourResult = "B";
    clearTimeout(myVar);
  goAgain();
}

function hideNumber(){
    countTime = 0;
  document.getElementById("goBA").style.visibility = "hidden";
  document.getElementById("goBB").style.visibility = "hidden";
  document.getElementById("number2").innerHTML = "";
    document.getElementById("number1").innerHTML="";
    document.getElementById("subBox").style.visibility = "visible";//"hidden";
    document.getElementById("goB").style.visibility = "visible";
    /*var blankN = "";
    if(turns<3){
    for(j=0; j<numbLen;j++){
      blankN = blankN + "x";//"x";
    }
  }*/
    document.getElementById("subBox").value = "";//+blankN;
    document.getElementById("goB").value="input...";
    document.getElementById("subBox").focus();
}

function bang(){
  //bangRing = 0;
  //bangFlag = false;
  makeNumber();
  clearTimeout(bangGo);
}
