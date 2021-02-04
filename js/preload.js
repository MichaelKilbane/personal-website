window.addEventListener("load", () => {
    let preloader = document.querySelector("#preloader");
    let background = document.querySelector("#background");
    let body = document.querySelector("body");

    preloader.classList.add("finished");

    setTimeout(() => {
        body.classList.remove("noscroll");
        background.classList.add("start");
        startFade();
    }, 3000);
})