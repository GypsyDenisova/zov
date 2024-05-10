//Menu
function SearchMenu() {

    if (searchMenuSwitch == 0) {
        search.style.display = 'flex';
        searchMenuSwitch = 1;
        return;
    }

    if (searchMenuSwitch == 1) {
        search.style.display = 'none';
        searchMenuSwitch = 0;
    }

}

function MenuUnwrap() {
    menuExpanded.style.display = 'flex';
    menuUnwrap.style.display = 'none';
}

function MenuRollUp() {
    menuExpanded.style.display = 'none';
    menuUnwrap.style.display = 'block';
}

var searchImg = document.getElementById('searchImg');
var search = document.getElementById('search');
var searchMenuSwitch = 0;
var menuUnwrap = document.getElementById('menuUnwrap');
var menuExpanded = document.getElementById('menuExpanded');
var menuRollUp = document.getElementById('menuRollUp');

searchImg.addEventListener('click', SearchMenu);
menuUnwrap.addEventListener('click', MenuUnwrap);
menuRollUp.addEventListener('click', MenuRollUp);