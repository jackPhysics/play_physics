// JavaScript Document

var newCityControlA = new Array(); //or use old cityControlA?

function placePicsCity(){

var d2 = document.getElementById('cityList'); 

var cityTextString = "";
  //alert(""+cityTextString);
 
  for(var c=0; c<noOfCities; c++){
    if(cityColumnData[c]=="1"){//if "1" then new column, so new table
      cityTextString = cityTextString + " <td> <table> ";
  //alert(""+cityTextString);
      }
      //create string to hold columns html
      cityTextString = cityTextString + "<tr> <td><input  class=\"pol\" type=\"button\" value=\"A\" id=\"sideA" + c + "\" onClick=\"changeCity(this);\"></td> <td><b class=\"pol\" id=\"city" + c + "\" title=\"" + cityControlA[c] + ";\">" + cityTextA[c] + "</b></td> <td><input class=\"rus\" type=\"button\" value=\"B\" id=\"sideB" + c + "\" onClick=\"changeCity(this);\"></td> <td><input class=\"neut\" type=\"button\" value=\"N\" id=\"sideN" + c + "\" onClick=\"changeCity(this);\"></td> </tr> ";
    if(cityColumnData[c+1]=="1"){//if next city is new column then close table
      cityTextString = cityTextString + "</table> </td>";
      }
      
  }
      cityTextString = cityTextString + "</table> </td>";//close final column
  //alert(""+cityTextString);
  d2.insertAdjacentHTML('beforeend', cityTextString);//insert string of html into html
  
/*    
  for(var c=0; c<noOfCities; c++){
    if(cityColumnData[c]=="1"){
      d2.insertAdjacentHTML('beforeend', '<td> <table>');
      }
    d2.insertAdjacentHTML('beforeend', '<tr> <td><input  class="pol" type="button" value="A" id="sideA' + c + '" onClick="changeCity(this);"></td> <td><b class="pol" id="city' + c + '" title="' + cityControlA[c] + '">' + cityTextA[c] + '</b></td> <td><input class="rus" type="button" value="B" id="sideB' + c + '" onClick="changeCity(this);"></td> <td><input class="neut" type="button" value="N" id="sideN' + c + '" onClick="changeCity(this);"></td> </tr> ');
    if(cityColumnData[c]=="1"){
      d2.insertAdjacentHTML('beforeend', '</table> </td>');
      }
  
  }*/
  
  for(var c=0; c<noOfCities; c++){//label who in control of each city using original list
    var nameInControl = 'name' + cityControlA[c];
    if(cityControlA[c]=="A"){
    nameInControl = nameA;
    newCityControlA[c]="A";}
    else if(cityControlA[c]=="B"){
    nameInControl = nameB;
    newCityControlA[c]="B";}
    else{
    nameInControl = nameN;
    newCityControlA[c]="N";}
    //var nameInControl = 'name' + cityControlA[c];
    document.getElementById('city'+c).setAttribute("title", nameInControl+" control");//""+nameInControl+" control");
    var sideInControl = document.getElementById('side'+cityControlA[c]+c).getAttribute("class");//find class of the side in control
    document.getElementById('city'+c).setAttribute("class", sideInControl);//make city the right colour for control
    document.getElementById('sideA'+c).setAttribute("value", sideALabel);//make btn the right letter
    document.getElementById('sideB'+c).setAttribute("value", sideBLabel);//make btn the right letter
    document.getElementById('sideN'+c).setAttribute("value", sideNLabel);//make btn the right letter

  }  

  
}

function changeCity(n){

var targetCityBtn = n;
  
  var indexCity = targetCityBtn.getAttribute("id");
  indexCity = +indexCity.slice(5);//+ in front should convert string to number
  var activeCity = document.getElementById("city"+indexCity);
  
  activeCity.setAttribute("class", targetCityBtn.getAttribute("class"));//make city colour of btn
    var nameInControl = "";//make city control of btn
    var controlOfBtn = targetCityBtn.getAttribute("value");
    if(controlOfBtn==sideALabel){
    nameInControl = nameA;
    newCityControlA[indexCity]="A";}
    else if(controlOfBtn==sideBLabel){
    nameInControl = nameB;
    newCityControlA[indexCity]="B";}
    else{
    nameInControl = nameN;
    newCityControlA[indexCity]="N";}
  activeCity.setAttribute("title", nameInControl+" control");
  
  /*routine to test newCityControlA
  var dumString = "";
  for(var c=0; c<noOfCities; c++){
    dumString = dumString + newCityControlA[c] +", ";
  }
  alert(""+dumString);
  */
  

}

function restoreCities(){

    for(var c=0; c<noOfCities; c++){//label who in control of each city using original list
    var nameInControl = "name" + newCityControlA[c];
    if(newCityControlA[c]=="A"){
    nameInControl = nameA;}
    else if(newCityControlA[c]=="B"){
    nameInControl = nameB;}
    else{
    nameInControl = nameN;}
    //var nameInControl = 'name' + cityControlA[c];
    document.getElementById("city"+c).setAttribute("title", nameInControl+" control");//""+nameInControl+" control");
    //alert("side"+newCityControlA[c]+c);
    var sideInControl = document.getElementById("side"+newCityControlA[c]+c).getAttribute("class");//find class of the side in control
    document.getElementById("city"+c).setAttribute("class", sideInControl);//make city the right colour for control

  }  

}
  
