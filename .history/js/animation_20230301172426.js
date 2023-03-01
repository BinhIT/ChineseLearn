const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            // document.querySelectorAll(".innovative-img")[0].classList.add(classesToAdd);
            console.log(document.querySelectorAll(".innovative-img"));
        }

    })
})