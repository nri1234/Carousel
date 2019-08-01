window.initMap = function () {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: slidesData[0].coords,
        zoom: 1
    });


    slidesData.forEach(function (item) {
        var marker = new google.maps.Marker({
            position: item.coords,
            map: map
        });
    });
}
