const arrowLeft = document.querySelector(".fa-angle-left");
// const arrowRight = document.querySelector(".fa-angle-right");

const btnFncArLeft = function() {
    const tanya = document.querySelector(".main-container-tanya")
    if (tanya.style.display === "block") {
    tanya.style.display = "none";
    }
    // } else {
    //     arrowLeft.style.display = "none";
    // }
    // tanya.style.display = "none"
}
arrowLeft.addEventListener('click', btnFncArLeft);

// const btnFncArRight = function() {
//     const john = document.querySelector(".person-profile");
//     john.style.display = "block"
// }
// arrowRight.addEventListener('click', btnFncArRight)