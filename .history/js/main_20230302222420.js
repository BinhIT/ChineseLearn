//QA script
const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button) => {
    button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
    );
});
//Nav menu
function check() {
    document.getElementById("overlay").setAttribute("class", "nav_overlay");
    document.getElementById("nav_header_mobile").setAttribute("class", "active_header_mobile");
}

function uncheck() {
    document.getElementById("overlay").classList.remove("mystyle");
    document.getElementById("nav_header_mobile").setAttribute("class", "");
}