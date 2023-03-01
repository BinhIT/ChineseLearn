const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // document.querySelectorAll(".innovative-img")[0].classList.add("animated animatedFadeInUp fadeInUp");
        var elm = document.querySelectorAll(".innovative-img");
        console.log(elm)
    })
})