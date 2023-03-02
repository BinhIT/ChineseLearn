//QA script
const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button) => {
    button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
    );
});
//Nav menu
function check() {
    console.log("hheheh")
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}