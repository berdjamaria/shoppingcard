var qtPlus = document.querySelectorAll(".plus");
var qtMoins = document.querySelectorAll(".moins");
var prixTotal = document.querySelectorAll(".prixTotal")
var qt = document.querySelectorAll(".qt");
var prix= document.querySelectorAll(".prix");
var prixP = document.querySelector(".prixPanier");
var produit = document.querySelectorAll(".article");
// console.log(qtPlus);
// console.log(qtMoins);
// console.log(qt);
// console.log(prixP);
for(let i=0; i<qtPlus.length;i++){
    qtPlus[i].addEventListener("click", function(){ 
        let q = parseInt(qt[i].innerHTML); 
        qt[i].innerHTML=q+1;
        let p = parseInt(prixTotal[i].innerHTML);
        prixTotal[i].innerHTML= p+parseFloat(prix[i].innerHTML) + "$";
        prixP.innerHTML = parseFloat(prixP.innerHTML)+ parseFloat(prix[i].innerHTML) +" $";
        console.log(parseFloat(prixP.innerHTML));
     })
}

for(let i=0; i<qtMoins.length;i++){
    qtMoins[i].addEventListener("click", function(){ 
        let q = parseInt(qt[i].innerHTML); 
        if(q >0){
            qt[i].innerHTML=q-1;
        }
        qt[i].innerHTML=q-1;
        let p = parseInt(prixTotal[i].innerHTML);
        prixTotal[i].innerHTML= p-parseFloat(prix[i].innerHTML) + "$";
        prixP.innerHTML = parseFloat(prixP.innerHTML)- parseFloat(prix[i].innerHTML) +" $"
        console.log(prixP.innerHTML);
     })
}

for(let i=0; i<produit.length;i++){
    produit[i].addEventListener("click", function(){ 
        produit[i].remove();
   
    })
}
