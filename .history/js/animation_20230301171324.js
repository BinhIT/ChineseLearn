const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const classesToAdd = ['animated', 'animatedFadeInUp']
        if (entry.isIntersecting) {
            document.querySelectorAll(".innovative-img")[0].classList.add("animated animatedFadeInUp fadeInUp");
        }

    })
})