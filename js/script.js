'use strict';
(function () {

    var carouselItem = document.getElementById('carousel-item').innerHTML;

    Mustache.parse(carouselItem);


    var listItems = '';

    for (var i = 0; i < slidesData.length; i++) {
        listItems += Mustache.render(carouselItem, slidesData[i]);
    };
    results.insertAdjacentHTML('beforeend', listItems);

})();

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {

    cellAlign: 'left',
    contain: true,
    hash: true,
});

var progressBar = document.querySelector('.progress-bar');
var btnStart = document.querySelector('.btn');


flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

btnStart.addEventListener('click', function (event) {
    // filter for button clicks
    if (!matchesSelector(event.target, '.btn')) {
        return;
    }
    var selector = event.target.getAttribute('data-selector');
    flkty.selectCell(selector);
});


//init map//
window.initMap = function () {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: slidesData[0].coords,
        zoom: 1
    });

    //takes coords for  markers from slidesData///
    slidesData.forEach(function (item, index) {
        var marker = new google.maps.Marker({
            position: item.coords,
            map: map
        });
        marker.addListener('click', function () {
            flkty.next();
            flkty.select(index); //brings back center by click on the marker//
        });

    });

    flkty.on('change', function (index) { //Changes places on the map with slides//
        map.setCenter(slidesData[index].coords);
        map.setZoom(10);
    });
}
