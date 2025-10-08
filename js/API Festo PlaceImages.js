function PlaceImages(){
/*Déclaration des variables*/
var APILeft;
var APITop;
var APIHeight;
var APIWidth;
var WidthRatio;
var HeightRatio;
var ImageHeight=0;
var ImageWidth=0;
var ImageLeft=0;
var ImageTop=0;
/*Valeurs des variables*/
APILeft = document.getElementById("API_Festo").offsetLeft ;
APITop = document.getElementById("API_Festo").offsetTop;
APIHeight = document.getElementById("API_Festo").offsetHeight;
APIWidth = document.getElementById("API_Festo").offsetWidth;
WidthRatio = APIWidth/1221;
HeightRatio = APIHeight/721;/**/
/*alert ("WidthRatio=" + WidthRatio +" " + "HeightRatio=" + HeightRatio);

alert("Left= " + document.getElementById("API_Festo").offsetLeft + " " + 
"Top: " + document.getElementById("API_Festo").offsetTop +" " + 
"height: " + document.getElementById("API_Festo").offsetHeight + " " +  
"Width: " + document.getElementById("API_Festo").offsetWidth);*/
/*Les ratios sont calculés à partir d'une feuille type où les paramètres ont été ajustés*/							
/*Les ratios sont calculés à partir d'une feuille type où les paramètres ont été ajustés*/

/*Les positions sont calculées à partir d'une feuille type où les paramètres ont été ajustés point par point*/
/* Positions sur la feuille : style="left: 40px; top: 72px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("VCC1").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("VCC1").style.height = ImageHeight+"px";
   			ImageTop = HeightRatio * (APITop+72);
   		document.getElementById("VCC1").style.top = ImageTop+"px";
   			ImageLeft = WidthRatio * (APILeft+40);
   		document.getElementById("VCC1").style.left = ImageLeft+"px";

/* Positions sur la feuille : style="left: 149px; top: 80px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("VCC2").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("VCC2").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+80);
   		document.getElementById("VCC2").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+149);
   		document.getElementById("VCC2").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 744px; top: 112px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("VCC3").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("VCC3").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+112);
   		document.getElementById("VCC3").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+744);
   		document.getElementById("VCC3").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 868px; top: 120px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("VCC4").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("VCC4").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+120);
   		document.getElementById("VCC4").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+868);
   		document.getElementById("VCC4").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 990px; top: 126px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("VCC5").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("VCC5").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+126);
   		document.getElementById("VCC5").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+990);
   		document.getElementById("VCC5").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 38px; top: 552px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("GND1").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("GND1").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+552);
   		document.getElementById("GND1").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+38);
   		document.getElementById("GND1").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 148px; top: 560px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("GND2").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("GND2").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+560);
   		document.getElementById("GND2").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+148);
   		document.getElementById("GND2").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 746px; top: 594px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("GND3").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("GND3").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+594);
   		document.getElementById("GND3").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+746);
   		document.getElementById("GND3").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 870px; top: 600px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("GND4").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("GND4").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+600);
   		document.getElementById("GND4").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+870);
   		document.getElementById("GND4").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 986px; top: 607px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("GND5").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("GND5").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+607);
   		document.getElementById("GND5").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+986);
   		document.getElementById("GND5").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 110px; top: 200px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("I0").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("I0").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+200);
   		document.getElementById("I0").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+110);
   		document.getElementById("I0").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 200px; top: 207px; height:56px; width:51px; */
			ImageWidth = WidthRatio*51;
 		document.getElementById("I1").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("I1").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+207);
   		document.getElementById("I1").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+200);
   		document.getElementById("I1").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 275px; top: 212px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("I2").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("I2").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+212);
   		document.getElementById("I2").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+275);
   		document.getElementById("I2").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 110px; top: 278px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("I3").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("I3").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+278);
   		document.getElementById("I3").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+110);
   		document.getElementById("I3").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 200px; top: 282px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("I4").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("I4").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+282);
   		document.getElementById("I4").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+200);
   		document.getElementById("I4").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 275px; top: 287px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("I5").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("I5").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+287);
   		document.getElementById("I5").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+275);
   		document.getElementById("I5").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 200px; top: 356px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("I6").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("I6").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+356);
   		document.getElementById("I6").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+200);
   		document.getElementById("I6").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 275px; top: 361px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("I7").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("I7").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+361);
   		document.getElementById("I7").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+275);
   		document.getElementById("I7").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 197px; top: 436px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("A0p").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("A0p").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+436);
   		document.getElementById("A0p").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+197);
   		document.getElementById("A0p").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 272px; top: 441px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("A0n").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("A0n").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+441);
   		document.getElementById("A0n").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+272);
   		document.getElementById("A0n").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 197px; top: 509px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("A1p").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("A1p").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+509);
   		document.getElementById("A1p").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+197);
   		document.getElementById("A1p").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 273px; top: 515px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("A1n").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("A1n").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+515);
   		document.getElementById("A1n").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+273);
   		document.getElementById("A1n").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 752px; top: 201px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("Q3").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("Q3").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+201);
   		document.getElementById("Q3").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+752);
   		document.getElementById("Q3").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 810px; top: 204px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("Q2").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("Q2").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+204);
   		document.getElementById("Q2").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+810);
   		document.getElementById("Q2").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 870px; top: 207px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("Q1").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("Q1").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+207);
   		document.getElementById("Q1").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+870);
   		document.getElementById("Q1").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 932px; top: 212px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("Q0").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("Q0").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+212);
   		document.getElementById("Q0").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+932);
   		document.getElementById("Q0").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 752px; top: 504px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("Q7").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("Q7").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+504);
   		document.getElementById("Q7").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+752);
   		document.getElementById("Q7").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 810px; top: 507px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("Q6").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("Q6").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+507);
   		document.getElementById("Q6").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+810);
   		document.getElementById("Q6").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 870px; top: 512px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("Q5").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("Q5").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+512);
   		document.getElementById("Q5").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+870);
   		document.getElementById("Q5").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 932px; top: 515px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("Q4").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("Q4").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+515);
   		document.getElementById("Q4").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+932);
   		document.getElementById("Q4").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 932px; top: 325px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("COMQ03").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("COMQ03").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+325);
   		document.getElementById("COMQ03").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+932);
   		document.getElementById("COMQ03").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 932px; top: 400px; height:56px; width:51px; "*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("COMQ47").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("COMQ47").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+400);
   		document.getElementById("COMQ47").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+932);
   		document.getElementById("COMQ47").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 272px; top: 136px; height:56px; width:51px;"*/
			ImageWidth = WidthRatio*51;
 		document.getElementById("COMI").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*56;
   		document.getElementById("COMI").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+136);
   		document.getElementById("COMI").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+272);
   		document.getElementById("COMI").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 395px; top: 485px; height : 235px; width:136px;"*/
			ImageWidth = WidthRatio*136;
 		document.getElementById("ARU").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*235;
   		document.getElementById("ARU").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+485);
   		document.getElementById("ARU").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+395);
   		document.getElementById("ARU").style.left = ImageLeft+"px";
   		 
/* Positions sur la feuille : style="left: 587px; top: 525px; height : 73px; width:68px; "*/
			ImageWidth = WidthRatio*68;
 		document.getElementById("USB").style.width = ImageWidth+"px";
			ImageHeight = HeightRatio*73;
   		document.getElementById("USB").style.height = ImageHeight+"px";
   			ImageTop =HeightRatio* (APITop+525);
   		document.getElementById("USB").style.top = ImageTop+"px";
   			ImageLeft =WidthRatio* (APILeft+587);
   		document.getElementById("USB").style.left = ImageLeft+"px";

   		
}
