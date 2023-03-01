// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         document.querySelectorAll(".innovative-img")[0].classList.add("animated animatedFadeInUp fadeInUp");
//     })
// })
//Record how many pixels are scrolled vertically
let scrollpos = window.scrollY

const header = document.querySelector("innovative-img")

//How many pixels you need to scroll to add a class. You can change the value
const scrollChange = 1

//The function that will add the class
const add_class_on_scroll = () => header.classList.add("bg-red")

//Tracking a "scroll" event
window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    //If we scrolled more than we specified in the scrollChange variable, the add class function is executed
    if (scrollpos >= scrollChange) { add_class_on_scroll() }
})