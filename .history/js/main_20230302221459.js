//QA script
const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button) => {
    button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
    );
});
//Nav menu
function check() {
    document.getElementById("overlay").setAttribute("class", "nav_overlay ");
    document.getElementsByClassName("nav_header_mobile").setAttribute("style", "transform: translateX(0%);");
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}