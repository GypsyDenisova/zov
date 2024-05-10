//Function

function BreadCrumbs(array, breadCrumbActive) {
    for (let i = 0; i < array.length; i++) {
        if (i == breadCrumbActive) {
            array[i].style.backgroundColor = '#424242';
            array[i].style.opacity = '1';
        } else {
            array[i].style.backgroundColor = '#5B5454';
            array[i].style.opacity = '0.2';
        }
    }
}

function None(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.display = 'none';
    }
}




function FirstScreenClear() {
    clearInterval(firstScreenTime[0]);
    for (let i = 1; i <= 3; i++) {
        clearTimeout(firstScreenTime[i]);
    }
}

function NewElement(element, parentElement, idElement, arrayElement) {
    let newElement = `${element}`;
    parentElement.insertAdjacentHTML('beforeend', newElement);
    newElement = document.getElementById(`${idElement}`);
    arrayElement.push(newElement);
}

function NewEl(element, parentElement) {
    let newElement = `${element}`;
    parentElement.insertAdjacentHTML('beforeend', newElement);
}

function ArrayClick(array, fun) {
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener('click', fun);
    }
}

function PositionActive(arrayClass, className, num) {
    for (let i = 0; i < arrayClass.length; i++) {
        arrayClass[i].classList.remove(`${className}`);
    }
    arrayClass[num].classList.add(`${className}`);
}


function Carausel(event, num, array, idMin, idMax, fun){
    let maxNum = array.length - 1;
    if (event.target.id == idMin && num > 0){ 
        num--;
        fun(array, num);
    }
    if (event.target.id == idMax && num < maxNum){
        num++;
        fun(array, num);
    }
}

function CarauselNum(event, num, array, idMin, idMax, fun){
    let maxNum = array.length - 1;
    if (event.target.id == idMin && num > 0){ 
        num--;
        fun(num);
    }
    if (event.target.id == idMax && num < maxNum){
        num++;
        fun(num);
    }
}

function CarauselBlock(array, num){
    None(array);
    array[num].style.display = "block";
}
