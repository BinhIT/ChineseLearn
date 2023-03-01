const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        console.log("hi")
        if (entry.isIntersecting) {
            // document.querySelectorAll(".innovative-img")[0].classList.add(classesToAdd);
            console.log(entry.classList);
        }

    })
})