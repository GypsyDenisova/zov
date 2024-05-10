//Order Measurement Window

function orderMeasurementWindowOpen() {
    orderMeasurementWindow.style.display = "block";
}

function orderMeasurementWindowEnd() {
    orderMeasurementWindow.style.display = "none";
}

let orderMeasurementFirstScreen = document.getElementById('orderMeasurementFirstScreen');
let orderMeasurementMenu = document.getElementById('orderMeasurementMenu');
let orderMeasurementWindow = document.getElementById('orderMeasurementWindow');
let orderMeasurementClose = document.getElementById('orderMeasurementClose');


orderMeasurementMenu.addEventListener('click', orderMeasurementWindowOpen);
orderMeasurementClose.addEventListener('click', orderMeasurementWindowEnd);