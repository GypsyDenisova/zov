//Stocks

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

var stocksData = document.getElementById('stocksData');
var stocksName = document.getElementById('stocksName');
var stocksDataId = [], stockArray=[];


for (let i = 0; i < stocks.length; i++) {
    NewElement(`<p class="stocks_text text cursor" id="stocksData${i}">Aкция действует по ${stocks[i][0]}</p><br>`, stocksData, `stocksData${i}`, stocksDataId);

}



function StocksActive(num) {
    PositionActive(stocksDataId, 'position_active', num);
    stockArray = [];
    stocksName.innerHTML = '';

    for (let i = 1; i < stocks[num].length; i++) {
        NewElement(`<div class="stock cursor"><div class="stocks_name"><p class="stocks_name__text text16px">${stocks[num][i][0]}</p><a href="#" class="specialOffer_link"><img src="img/firstScreen/line.svg" class="specialOffer_line" alt=""><span>Условия акции</span><img src="img/firstScreen/array.svg" class="specialOffer_array" alt=""></a></div><div class="stocks_foto"><img src="${stocks[num][i][2]}" alt=""</div></div>`, stocksName, `stock${i}`, stockArray);
    }
}


function StocksActiveClick(e) {

    for (let i = 0; i < stocksDataId.length; i++) {
        if (e.target == stocksDataId[i]) {
            StocksActive(i);
        }
    }
}
ArrayClick(stocksDataId, StocksActiveClick)
StocksActive(0);