//QA script
const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button) => {
    button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
    );
});
//Nav menu
function check() {
    document.getElementsByClassName("nav_overlay").setAttribute("style", "display:block ;");
    // document.getElementById("nav_header_mobile").setAttribute("class", "active_header_mobile");
}

function uncheck() {
    document.getElementById("overlay").classList.remove("nav_overlay");
    document.getElementById("nav_header_mobile").setAttribute("class", "");
}