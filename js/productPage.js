

//Content


var productPage = ["Кухня 14.", "ELITE LINE", `img/Catalog/foto0.png`, `https://ravta.ru/upload/iblock/711/711e76e5cc6918a1a6feb44ddd1fb3dd.jpg`, `https://roshalmebel.ru/thumb/2/iWSMxtSpIoPN_nNoGwjIsA/r/d/kuhnya_valeri_krus.jpg`];

//var productPage = ["Кухня 14.", "ELITE LINE", `https://roshalmebel.ru/thumb/2/iWSMxtSpIoPN_nNoGwjIsA/r/d/kuhnya_valeri_krus.jpg`];

var productPageTitle = document.getElementById('productPageTitle');
var productPageFoto = document.getElementById('productPageFoto');
var productPageLeft = document.getElementById('productPageLeft');
var productPageRight = document.getElementById('productPageRight');
var productPageFotoArray = [];
var productPageNum = 0;

function ProductPageFoto(array, num){
    CarauselBlock(array, num);
    productPageNum = num;
}


productPageTitle.innerHTML = `${productPage[0]}`;
for(let i = 2; i < productPage.length; i++){
    NewElement(`<img src="${productPage[i]}" class="cursor" id="productPage${i-2}" style="display:none" alt="">`, productPageFoto, `productPage${i-2}`, productPageFotoArray);
}

ProductPageFoto(productPageFotoArray, productPageNum);

if (productPageFotoArray.length == 1){
     None([productPageLeft, productPageRight]);
    productPageFoto.style.width = "779px";
    productPageFoto.style.height = "477px";
 
    
}

productPageLeft.addEventListener('click', (event)=>{
    Carausel(event, productPageNum, productPageFotoArray, "productPageLeft", "productPageRight", ProductPageFoto);
});

productPageRight.addEventListener('click', (event)=>{
    Carausel(event, productPageNum, productPageFotoArray, "productPageLeft", "productPageRight", ProductPageFoto);
});


//Window foto product

var windowFotoLeft = document.getElementById('windowFotoLeft');
var windowFotoRight = document.getElementById('windowFotoRight');
var fotoWindowClose = document.getElementById('fotoWindowClose');
var windowFoto = document.getElementById('windowFoto');
var windowOpen = document.getElementById('windowOpen');
var fotoWindowArray = [];
var numWindowFoto;
var numFoto;

function WindowFotoOpen(array, numFoto){
    windowOpen.style.display = 'flex';
    
    for(let i = 2; i < array.length; i++){   
        NewElement(`<img class="foto_expanded" src="${productPage[i]}" id="fotoWindow${i - 2}" alt="">`, windowFoto, `fotoWindow${i - 2}`, fotoWindowArray);
    }
    numWindowFoto = numFoto;
    fotoWindowArray[numFoto].style.display = "block";
    if (fotoWindowArray.length == 1){
        None([windowFotoLeft, windowFotoRight]);
    }else{
        windowFotoLeft.style.display = "block";
        windowFotoRight.style.display = "block";
    }
}

function WindowFotoEnd(){
    windowOpen.style.display = 'none';
    fotoWindowArray = [];
    windowFoto.innerHTML = '';
    
}

function ProductPageWindowFoto(array, num){
    CarauselBlock(array, num);
    numWindowFoto = num;
}


function WindowFotoOpenClick(e){
    for (let i = 0; i < productPageFotoArray.length; i++){
        if (e.target == productPageFotoArray[i]){
            numFoto = i;
        }
    }
    WindowFotoOpen(productPage, numFoto);    
}

ArrayClick(productPageFotoArray,  WindowFotoOpenClick);

fotoWindowClose.addEventListener('click', WindowFotoEnd);

windowFotoLeft.addEventListener('click', (event)=>{
    Carausel(event, numWindowFoto, fotoWindowArray, "windowFotoLeft", "windowFotoRight", ProductPageWindowFoto);
});

windowFotoRight.addEventListener('click', (event)=>{
    Carausel(event, numWindowFoto, fotoWindowArray, "windowFotoLeft", "windowFotoRight", ProductPageWindowFoto);
});