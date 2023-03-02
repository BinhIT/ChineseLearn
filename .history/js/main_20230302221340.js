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
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}