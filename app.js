window.onload=function(){
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const container = document.querySelector(".container");

    left.addEventListener("mouseenter", () => {
        container.classList.add("hover-left");
    });

    left.addEventListener("mouseleave", () => {
        container.classList.remove("hover-left");
    });

    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());
}