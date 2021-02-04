let fadeQueue = [];
document.querySelectorAll("#nav .fadein").forEach((element) => fadeQueue.push(element));

function fadeNext() {
    if (fadeQueue.length > 0) {
        fadeQueue.shift().classList.add("fade");
    }
}

let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fadeQueue.push(entry.target);
            observer.unobserve(entry.target);
        }
    })
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

let observer = new IntersectionObserver(callback, options);

function startFade() {
    setInterval(fadeNext, 200);
    for (let element of document.querySelectorAll("#content .fadein")) {
        observer.observe(element); // Once larger replace with sentinel system
    }
}