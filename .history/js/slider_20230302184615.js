const cards = document.querySelectorAll('.card');
let currentIndex = 0;
cards[currentIndex]..style.display = "block";
function slideLeft() {
    let nextIndex = currentIndex + 1 === 3 ? 0 : currentIndex + 1;
    cards[currentIndex].setAttribute('data-status', 'moveLeft');
    cards[nextIndex].setAttribute('data-status', 'comeFromRight');
    setTimeout(() => {
        cards[nextIndex].setAttribute('data-status', 'center');
    }, 0);
    currentIndex = nextIndex;
}

function slideRight() {
    let nextIndex = currentIndex - 1 === -1 ? 2 : currentIndex - 1;
    cards[currentIndex].setAttribute('data-status', 'moveRight');
    cards[nextIndex].setAttribute('data-status', 'comeFromLeft');
    setTimeout(() => {
        cards[nextIndex].setAttribute('data-status', 'center');
    }, 0);
    currentIndex = nextIndex;
}