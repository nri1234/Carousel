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

    if (!matchesSelector(event.target, '.btn')) {
        return;
    }
    var selector = event.target.getAttribute('data-selector');
    flkty.selectCell(selector);
});
