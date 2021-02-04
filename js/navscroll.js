let prevScroll = 0;
let navScrollWorking = false;

window.addEventListener("scroll", () => {
    let newScroll = window.scrollY;

    if (!navScrollWorking) {
        window.requestAnimationFrame(function() {
            navScroll(newScroll, prevScroll);
            prevScroll = newScroll;
            navScrollWorking = false;
        });

        navScrollWorking = true;
    }
});

let nav = document.querySelector("#nav");
let scrolled = false;
let hidden = false;

function navScroll(scroll, prevScroll) {
    if (scrolled && scroll === 0) {
        nav.classList.remove("scrolled");
        scrolled = false;
    } else if (!scrolled && scroll > 0) {
        nav.classList.add("scrolled");
        scrolled = true;
    }

    if (hidden && scroll < prevScroll) {
        nav.classList.remove("hidden");
        hidden = false;
    } else if (!hidden && scrolled && scroll > 150 && scroll > prevScroll) {
        nav.classList.add("hidden");
        hidden = true;
    }
}

