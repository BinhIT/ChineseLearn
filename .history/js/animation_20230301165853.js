window.addEventListener('scroll', function () {
    var elementTarget = document.querySelector('.innovative-img');
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        document.querySelector('.section-3').classList.add('anotherclass');
    } else {
        document.querySelector('.section-3').classList.remove('anotherclass');
    }
});