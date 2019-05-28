(function () {
    var carouselItem = document.getElementById('carousel-item').innerHTML;

    Mustache.parse(carouselItem);

    ////

    var listItems = '';

    for (var i = 0; i < slidesData.length; i++) {
        listItems += Mustache.render(carouselItem, slidesData[i]);
    };

    results.insertAdjacentHTML('beforeend', listItems);

})();
