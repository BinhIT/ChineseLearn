//QA script
const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button) => {
    button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
    );
});
//Nav menu
function check() {
    if (document.getElementById("check_nav_mobile").checked) {

    }
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}