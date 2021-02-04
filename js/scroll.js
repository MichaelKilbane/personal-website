function scrollToElement(name) {
    let pos = document.querySelector(name).scrollIntoView({behavior: "smooth"});
}