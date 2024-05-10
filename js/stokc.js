

//Content

var stocks = [
    [
        `31<br>декабря 2022 года`,
        ['скидка 65% на посудомоечную машину GRAUDE', 'ПРИ ПОКУПКЕ КУХНИ И ТЕХНИКИ СКИДКА НА ПОСУДОМОЕЧНУЮ МАШИНУ GRAUDE 65%!', 'img/Stocks/foto0.png'],
        ['при покупке кухни и техники мойка + смеситель в подарок', 'ПРИ ПОКУПКЕ КУХНИ И ТЕХНИКИ мойка+смеситель в подарок только до конца месяца Количество подарков ограничено', 'img/Stocks/foto1.png']
    ],

     [
        `15<br>февраля 2023 года`,
         ['скидка 65% на посудомоечную машину GRAUDE', 'ПРИ ПОКУПКЕ КУХНИ И ТЕХНИКИ СКИДКА НА ПОСУДОМОЕЧНУЮ МАШИНУ GRAUDE 65%!', 'img/Stocks/foto2.png'],
        ['скидка 65% на посудомоечную машину GRAUDE', 'ПРИ ПОКУПКЕ КУХНИ И ТЕХНИКИ СКИДКА НА ПОСУДОМОЕЧНУЮ МАШИНУ GRAUDE 65%!', 'img/Stocks/foto0.png'],
        ['при покупке кухни и техники мойка + смеситель в подарок', 'ПРИ ПОКУПКЕ КУХНИ И ТЕХНИКИ мойка+смеситель в подарок только до конца месяца Количество подарков ограничено', 'img/Stocks/foto1.png']
    ]
];



function PromotionPage(numData, num){
     promotionPageData.innerHTML = `${stocks[numData][0]}`;
     promotionPageText.innerHTML = `${stocks[numData][num][1]}`;
     promotionPageTitle.innerHTML = `${stocks[numData][num][0]}`;
     NewEl(`<img src="${stocks[numData][num][2]}" alt="">`, promotionPageFoto);
    
}

PromotionPage(1, 1);