function afficher(obj){/* la fonction récupère l'id (identifiant unique) de l'image survolée grâce à argument (obj)*/
       document.getElementById(obj).style.opacity = "1";				/*règle l'opacité à 100% de l'image, la rend visible */

       	var texte = document.getElementById('info');					/*implémente le texte dans la balise, dont l'id=info ,grâce à la fonction switch(obj), en fonction de l'argument (id de l'image survolée) récupéré)*/

       switch (obj) {
   case "VCC1": texte.innerText ="Borne d'alimentation +24v continue"; /*Texte à afficher au survol*/
   break;
   
   case "VCC2": texte.innerText ="Borne d'alimentation +24v continue";
   break;
   
   case "VCC3": texte.innerText ="Borne d'alimentation +24v continue";
   break;
   
   case "VCC4": texte.innerText ="Borne d'alimentation +24v continue";
   break;
   
   case "VCC5": texte.innerText ="Borne d'alimentation +24v continue";
   break;
   
   case "GND1": texte.innerText ="Borne d'alimentation +0v continue";
   break;
   
   case "GND2": texte.innerText ="Borne d'alimentation +0v continue";
   break;
   
   case "GND3": texte.innerText ="Borne d'alimentation +0v continue";
   break;
   
   case "GND4": texte.innerText ="Borne d'alimentation +0v continue";
   break;
   
   case "GND5": texte.innerText ="Borne d'alimentation +0v continue";
   break;
   
   case "I0": texte.innerText ="Entrée numérique I0.0";
   break;
   
   case "I1": texte.innerText ="Entrée numérique I0.1";
   break;
   
   case "I2": texte.innerText ="Entrée numérique I0.2";
   break;
   
   case "I3": texte.innerText ="Entrée numérique I0.3";
   break;
   
   case "I4": texte.innerText ="Entrée numérique I0.4";
   break;
   
   case "I5": texte.innerText ="Entrée numérique I0.5";
   break;
   
   case "I6": texte.innerText ="Entrée numérique I0.6";
   break;
   
   case "I7": texte.innerText ="Entrée numérique I0.7";
   break;
   
   case "COMI": texte.innerText ="Commun des entrées numériques de I0.0 à I0.7";
   break;
   
   case "Q0": texte.innerText ="Sortie numérique Q0.0";
   break;
   
   case "Q1": texte.innerText ="Sortie numérique Q0.1";
   break;
   
   case "Q2": texte.innerText ="Sortie numérique Q0.2";
   break;
   
   case "Q3": texte.innerText ="Sortie numérique Q0.3";
   break;
   
   case "COMQ03": texte.innerText ="Commun des sorties numériques de Q0.0 à Q0.3";
   break;
   
   case "Q4": texte.innerText ="Sortie numérique Q0.4";
   break;
   
   case "Q5": texte.innerText ="Sortie numérique Q0.5";
   break;
   
   case "Q6": texte.innerText ="Sortie numérique Q0.6";
   break;
   
   case "Q7": texte.innerText ="Sortie numérique Q0.7";
   break;
   
   case "COMQ47": texte.innerText ="Commun des sorties numériques de Q0.4 à Q0.7";
   break;
   
   case "A0p": texte.innerText ="Entrée analogique AI0+";
   break;
   
   case "A0n": texte.innerText ="Entrée analogique AI0-";
   break;
   
   case "A1p": texte.innerText ="Entrée analogique AI1+";
   break;
   
   case "A1n": texte.innerText ="Entrée analogique AI1-";
   break;
   
   case "ARU": texte.innerText ="Arrêt d'urgence : Coupe l'alimentation de l'API";
   break;
   
   case "USB": texte.innerText ="Port USB de communication entre l'ordinateur et l'API";
   break;
   

}
}

