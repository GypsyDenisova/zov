//Reviews

var reviews = [
    ['Кухня "Глория"', "Совместная работа с дизайнером вызывала только живой интерес и предвкушение потрясающей кухни. Материалы высшего качества, фурнитура и составляющие не вызывают сомнений в долговечности использования. Жена в восторге - цель выполнена.", "Александр Иванов", "Проект кухни из дерева с акриловым покрытием", "img/reviews/foto0.png"],
    ['Кухня "Виолетта"', "Совместная работа с дизайнером вызывала только живой интерес и предвкушение потрясающей кухни. Материалы высшего качества, фурнитура и составляющие не вызывают сомнений в долговечности использования. Жена в восторге - цель выполнена.", "Маргарита Денисова", "Проект кухни из дерева с акриловым покрытием", "img/reviews/foto1jpg.jpg"],
    ['Кухня "Премиум"', "Совместная работа с дизайнером вызывала только живой интерес и предвкушение потрясающей кухни. Материалы высшего качества, фурнитура и составляющие не вызывают сомнений в долговечности использования. Жена в восторге - цель выполнена.", "Людмила Зорина", "Проект кухни из дерева с акриловым покрытием", "img/reviews/foto2.jpg"],
];

function NewReviews(numReviews) {
    NewEl(`<p class="reviews_product text16px">${reviews[numReviews][0]}</p><div class="review_foto"><img class="mobile_block" src="${reviews[numReviews][4]}" alt=""></div><p class="reviews_description">“${reviews[numReviews][1]}”</p><div class="reviews_author"><img class="cursor mobile_block" src="img/portfolio/arrayLeft.svg" id="reviewsLeftMobile" alt=""><div><span class="reviews_name text"> ${reviews[numReviews][2]}/ </span><span class="reviews_product__description text">${reviews[numReviews][3]}</span></div><img class="cursor mobile_block" src="img/portfolio/arrayRight.svg" id="reviewsRightMobile" alt=""></div>`, review);
    NewEl(`<img src="${reviews[numReviews][4]}" alt="">`, reviewFoto);

    reviewsLeftMobile = document.getElementById('reviewsLeftMobile');
    reviewsRightMobile = document.getElementById('reviewsRightMobile');
    
    reviewsLeftMobile.addEventListener('click', (event) => {
    CarauselNum(event, numReviews, reviews, "reviewsLeftMobile", "reviewsRightMobile", Rewiews);
});
reviewsRightMobile.addEventListener('click', (event) => {
    CarauselNum(event, numReviews, reviews, "reviewsLeftMobile", "reviewsRightMobile", Rewiews);
});
}

function Rewiews(num) {
    review.innerHTML = '';
    reviewFoto.innerHTML = '';
    NewReviews(num);
    numReviews = num;
}

var review = document.getElementById('review');
var reviewFoto = document.getElementById('reviewFoto');
var reviewsLeft = document.getElementById('reviewsLeft');
var reviewsRight = document.getElementById('reviewsRight');
var numReviews = 0;
var reviewsLeftMobile, reviewsRightMobile;

NewReviews(numReviews);

reviewsLeft.addEventListener('click', (event) => {
    CarauselNum(event, numReviews, reviews, "reviewsLeft", "reviewsRight", Rewiews);
});
reviewsRight.addEventListener('click', (event) => {
    CarauselNum(event, numReviews, reviews, "reviewsLeft", "reviewsRight", Rewiews);
});



