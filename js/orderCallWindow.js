//Order Measurement Window
let orderCalltWindow = document.getElementById('orderCallWindow');
let orderCallClose = document.getElementById('orderCallClose');

function orderCallWindowOpen() {
    orderCalltWindow.style.display = "block";
}

function orderCallWindowEnd() {
    orderCallWindow.style.display = "none";
}






phone.addEventListener('click', orderCallWindowOpen);
orderCallClose.addEventListener('click', orderCallWindowEnd);