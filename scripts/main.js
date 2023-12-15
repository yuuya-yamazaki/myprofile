document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('inview');
        }
    }

    const so = new ScrollObserver('.cover-slide', cb);

   
});

document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('inview');
        }
    }

    const so2 = new ScrollObserver('.appear', cb);
    

});