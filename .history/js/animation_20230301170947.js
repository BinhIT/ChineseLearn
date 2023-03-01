const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".innovative-img")[0].classList.add(["animated", "animatedFadeInUp", "fadeInUp"]);
            console.log(document.querySelectorAll(".innovative-img"))
        }

    })
})
observer.observe(document.querySelector(".innovative-img"));