let work = "devika";
let education = "compsci";

function workSelector(target) {
    let oldElements = document.querySelectorAll("."+work);
    let newElements = document.querySelectorAll("."+target);
    
    oldElements.forEach((item) => item.classList.remove("active"));
    newElements.forEach((item) => item.classList.add("active"));

    work = target;
}

function educationSelector(target) {
    let oldElements = document.querySelectorAll("."+education);
    let newElements = document.querySelectorAll("."+target);

    console.log(newElements)

    oldElements.forEach((item) => item.classList.remove("active"));
    newElements.forEach((item) => item.classList.add("active"));

    education = target;
}