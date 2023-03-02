//QA script
const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button) => {
    button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
    );
});
//Nav menu
function check() {
    const nav_mobile = document.querySelectorAll(".nav_header_mobile");
    document.getElementById("myH1").setAttribute("class", "democlass");
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}