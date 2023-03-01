const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".innovative-img").classList.add(['animated']);
        }

    })
})
observer.observe(document.querySelector(".innovative-img"));