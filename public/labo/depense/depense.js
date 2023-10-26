//liste de mes id

let gain = document.getElementById("gain")
let gainText = document.getElementById("gainText")
let gainMontant = document.getElementById("gainMontant")
let gainListing = document.getElementById("gainListing")
let depense = document.getElementById("depense")
let depenseText = document.getElementById("depenseText")
let depenseMontant = document.getElementById("depenseMontant")
let depenseListing = document.getElementById("depenseListing")
let grandTotal = document.getElementById("grandTotal")
let boutonOKgauche = document.getElementById("boutonOKgauche")
let boutonOKdroite = document.getElementById("boutonOKdroite")
let totalGainlist = document.getElementById("totalGain")

//variable global gain
let totalGain=0
//variable global perte
let totalperte=0
//variable global grand total
let grandTotalNum=0

//attribution de la saisi du nom et du prix

boutonOKgauche.addEventListener("click", () => {

    //réccupération des champs saisi par l'utilisateur
    let _gainText = gainText.value
    let _gainMontant = gainMontant.value

    //total gain 
    totalGain +=  parseFloat(_gainMontant)
    totalGainlist.textContent= totalGain.toString()

    //création de la div pricipale
    let ligneDeGain = document.createElement("div")
    ligneDeGain.classList.add("ligneDeGain")

    //création des div secondaires (le libellé , le prix)

    //création de la div pour le texte

    let gainTextDiv = document.createElement("div")
    gainTextDiv.textContent = _gainText

    //ajout de la div text à la div générale
    ligneDeGain.appendChild(gainTextDiv)

    //ajout de la div générale à la LISTE GAIN
    gainListing.appendChild(ligneDeGain)

    //creation du prix sur la div listing
    let gainMontantDiv = document.createElement("div")
    gainMontantDiv.textContent = _gainMontant
    //creation du bouton suppression
    let boutonSuppresion = document.createElement("img")
    boutonSuppresion.src = "./poubelle.png"
    boutonSuppresion.classList.add("poubelle")
    // le prix au milieu
    ligneDeGain.appendChild(gainMontantDiv)
    //le bouton suppression
    ligneDeGain.appendChild(boutonSuppresion)
    //la ligne total
    gainListing.appendChild.ligneDeGain

boutonSuppresion.addEventListener("click", ()=> {
    let warning=document.createElement("div")
    ligneDeGain.remove()
    
})




})

