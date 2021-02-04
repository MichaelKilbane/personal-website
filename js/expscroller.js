let expScrollerWorking = false;

document.querySelectorAll(".selector").forEach((entry) => {
    if (window.innerWidth < 960) {
        applyShadow(entry);
    }
    entry.addEventListener("scroll", (event) => {
        if (!expScrollerWorking) {
            window.requestAnimationFrame(function() {
                applyShadow(event.target);
                expScrollerWorking = false;
            });

            expScrollerWorking = true;
        }
    });
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
        document.querySelectorAll(".selector").forEach((entry) => {
            resetShadow(entry);
        });
    } else {
        document.querySelectorAll(".selector").forEach((entry) => {
            applyShadow(entry);
        });
    }

});

function applyShadow(element) {
    let background = [];
    let position = [];

    if (element.scrollLeft > 20) {
        background.push("linear-gradient(to right, rgba(107, 110, 112, .20), rgba(107, 110, 112, 0))");
        position.push("left 2px");
    } else if (element.scrollLeft > 0) {
        let val = .01*element.scrollLeft;
        background.push("linear-gradient(to right, rgba(107, 110, 112, "+val+"), rgba(107, 110, 112, 0))");
        position.push("left 2px");
    }

    let dist = element.scrollWidth - (element.clientWidth + element.scrollLeft);
    if (dist > 20) {
        background.push("linear-gradient(to left, rgba(107, 110, 112, .20), rgba(107, 110, 112, 0))");
        position.push("right 2px");
    } else if (dist > 0) {
        let val = .01*dist;
        background.push("linear-gradient(to left, rgba(107, 110, 112, "+val+"), rgba(107, 110, 112, 0))");
        position.push("right 2px");
    }

    element.style.backgroundImage = background.join(",");
    element.style.backgroundPosition = position.join(",");
}

function resetShadow(element) {
    element.style.backgroundImage = "";
    element.style.backgroundPosition = "";
}