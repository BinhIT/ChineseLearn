//QA script
const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button) => {
    button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
    );
});
//Nav menu
function check() {
    document.getElementById("nav_overlay").setAttribute("style", "display:block ;");
    // document.getElementById("nav_header_mobile").setAttribute("class", "active_header_mobile");
}

function uncheck() {
    document.getElementById("nav_overlay").setAttribute("style", "display:none ;");
    document.getElementById("nav_header_mobile").setAttribute("class", "");
}