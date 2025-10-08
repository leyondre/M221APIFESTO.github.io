function cacher(obj){													/* la fonction récupère l'id de l'image survolée en argument (obj) est quittée*/
        document.getElementById(obj).style.opacity = "0";				/*règle l'opacité à 0% de l'image */
		var texte = document.getElementById('info');					/*implémente le texte dans la balise dont l'id=info en fonction de l'argument (id de l'image survolée) récupéré)*/
		texte.innerText ="" ;        
}

