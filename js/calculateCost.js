//Calculate Cost

function InfoKitchen() {
    infoKitchenBorder.style.backgroundColor = "#BDD002";
    infoKitchen.style.backgroundColor = "#BDD002";
    infoKitchen.style.color = "#2B2929";

}

function InfoKitchenEndFocus() {
    infoKitchenBorder.style.backgroundColor = "#2B2929";
    infoKitchen.style.backgroundColor = "#2B2929";

}


let infoKitchenBorder = document.getElementById('infoKitchenBorder');
let infoKitchen = document.getElementById('infoKitchen');

infoKitchen.addEventListener('click', InfoKitchen);
infoKitchen.addEventListener('blur', InfoKitchenEndFocus);
