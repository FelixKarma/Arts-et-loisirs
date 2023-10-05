
// Index recettes
let listes = ["upcyclingart", "artenergy", "ateliersloisirs","energyrenouvelables","sayakaganz2"];
// Récupération du mot recherché grace à l'id "search" qu'on stockera dans une variable du meme nom
let search = document.getElementById("search");

// ecoute de chaque touche du clavier sur l'input search
search.addEventListener("keydown", function (event) {

    // recherche = la value du mot entré (id "search" de la barre de recherche) en petit (.toLowerCase()), 
    let recherche = search.value.toLowerCase();
    //reponse à false
    let réponse = false;

    //Detection de la touche entrée
    if (event.key == 'Enter') {
        //Parcours le tableau recettes grace à for of
        for (let liste of listes) {

            //On compare la recherche avec les différents éléments du tableau
            if (liste === recherche){
                //On redirige vers la page recherchée si trouvée
                document.location.assign(`liste.html#${listes}`);
            //On passe reponse à true pour dire que c'est bon
            réponse = true;
            //On break pour casser la boucle for, au cas où on a plusieurs éléments dans le tableau après le resultat trouvé
            break;
            //Fin de la comparaison
        }

        // Fin de la boucle de recette
    }

    //On check enfin si la reponse est false pour renvoyer vers 404
    if (réponse === false) {

        //On renvoie vers une page 404
        document.location.assign('404.html');
        //Fin du check
    }
}
})