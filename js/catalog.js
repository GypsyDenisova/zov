
//Content


var filterOpen = document.getElementById('filterOpen');
var filterEnd = document.getElementById('filterEnd');

var kitchens = document.getElementById('kitchens');
var cabinetFurniture = document.getElementById('cabinetFurniture');
var dressingWardrobes = document.getElementById('dressingWardrobes');
var like = [],
    productFirstScreen = [];
var likeNum = 15;
var productCategory = [kitchens, cabinetFurniture, dressingWardrobes];

var firstScreenProduct = [
    [
       kitchens,
    ["Кухня 14.", "ELITE LINE", `img/Catalog/foto0.png`],
    ["Кухня 2. ", "BASIC LINE", `img/Catalog/foto1.png`],
    ["Кухня 15. ", "BASIC / SMART LINE", `img/Catalog/foto2.png`],
    ["Кухня 1. ", "BASIC LINE", `img/Catalog/foto3.png`],
    ],
    [
       cabinetFurniture,
    ["Корпусная мебель 14.", "ELITE LINE", `img/Catalog/foto0.png`],
    ["Корпусная мебель 2. ", "BASIC LINE", `img/Catalog/foto1.png`],
    ["Корпусная мебель 15. ", "BASIC / SMART LINE", `img/Catalog/foto2.png`],
    ["Корпусная мебель 1. ", "BASIC LINE", `img/Catalog/foto3.png`],  
    ],
    [
        dressingWardrobes,
    ["ГАРДЕРОБНЫЙ ШКАФ 14.", "ELITE LINE", `img/Catalog/foto0.png`],
    ["ГАРДЕРОБНЫЙ ШКАФ 2. ", "BASIC LINE", `img/Catalog/foto1.png`],
    ["ГАРДЕРОБНЫЙ ШКАФ 15. ", "BASIC / SMART LINE", `img/Catalog/foto2.png`],
    ["ГАРДЕРОБНЫЙ ШКАФ 1. ", "BASIC LINE", `img/Catalog/foto3.png`]
    ]
];


function CatalogFirstScrinActive(num) {
    
    PositionActive(productCategory, 'position_active', num);

    productFirstScreen = [];
    catalogProduct.innerHTML = '';
    for (let i = 1; i < firstScreenProduct[num].length; i++) {
        NewElement(`<div class="product cursor" id="product${i}"><div class="product_foto"><img src="${firstScreenProduct[num][i][2]}" alt="" class=""></div><div class="product_info"><div class ="product_info__text"><p class="product_title text16px">${firstScreenProduct[num][i][0]}</p><p class="product_title">${firstScreenProduct[num][i][1]}</p></div><div class="like"><span>${likeNum}</span><div class="like_img"><img src="img/Catalog/like.svg" alt="" id="like${i}"><img src="img/Catalog/likeActive.svg" style="display:none" alt="" id="likeActive${i}"><img src="img/Catalog/likeHover.svg" id="likeHover${i}" alt="" class="likeHover""></div></div></div></div>`, catalogProduct, `product${i}`, productFirstScreen);
        
        let Element = document.getElementById(`likeHover${i}`);
        like.push(Element);
        
        
    }

}

    function CatalogFirstScrinActiveClick(e) {

        for (let i = 0; i < productCategory.length; i++) {
            if (e.target == productCategory[i]) {
                CatalogFirstScrinActive(i);
            }
        }
        
        ArrayClick(like, Like);
    }

    function Like(e){
        if(getComputedStyle(e.target.parentElement.children[1]).display == 'none'){
            e.target.parentElement.children[1].style.display = 'block';
            e.target.parentElement.children[0].style.display = 'none';
            likeNum++;
            e.target.parentElement.parentElement.children[0].innerHTML = `${likeNum}`;
            
        } else{
            e.target.parentElement.children[1].style.display = 'none';
            e.target.parentElement.children[0].style.display = 'block';
            likeNum--;
            e.target.parentElement.parentElement.children[0].innerHTML = `${likeNum}`;
        }

    }
    
    CatalogFirstScrinActive(0);
    ArrayClick(productCategory, CatalogFirstScrinActiveClick);
    ArrayClick(like, Like);




    

function Filter(e){
    if (e.target.id == "filterOpen"){
        filterOpen.style.display = "none";
        filterEnd.style.display = "block";
        catalogPageConfiguration.style.display = "block";
        catalogPageStyle.style.display = "block";
        
    }
    
    if (e.target.id == "filterEnd"){
        filterOpen.style.display = "block";
        None([filterEnd, catalogPageConfiguration, catalogPageStyle]);
    }
}


    CatalogFirstScrinActive(0);
    ArrayClick(productCategory, CatalogFirstScrinActiveClick);
    ArrayClick(like, Like);


filterOpen.addEventListener('click', Filter);
filterEnd.addEventListener('click', Filter);