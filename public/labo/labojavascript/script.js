const bouton = document.getElementById("bouton")

let affichage = document.getElementById("affichage")

let index=0;

let carreProduit = true
bouton.addEventListener("click", ()=> {

 

    index++;
    console.log("le bouton a été clické")
    //déclanchement de processus 
if(carreProduit) {
    //déclaration d'une variable pour stocker un nouvelle élément html
    let carre = document.createElement("div");
    //ajout de la class carre
    carre.classList.add("carre");
    //ajout de l'élément au body du document
    document.body.appendChild(carre);
    if(index > 3){
    carreProduit=false;
    window.alert("vous avez cliqué"+index+"fois");

  
    
}
}
let saisieUtilisateur = document.getElementById("entree_utilisateur")
console.log(saisieUtilisateur.value)



    //modification du texte de l'élément id = affichage
    affichage.textContent = "hello!!!"
    let tousLesCercles = document.querySelectorAll(".cercle")
//boucle let i
for(let i=0;i<tousLesCercles.length;i++){
    tousLesCercles[i].style.backgroundColor = "red"

}
})


