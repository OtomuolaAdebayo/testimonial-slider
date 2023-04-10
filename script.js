let slideIndex = 1;
showSlides(slideIndex);

function btnSlides(n) {
    showSlides(slideIndex += n);
}

const btnPrev = document.querySelector(".previous");

const showSlides = function(content) {
    let i;
    const slides = document.querySelector(".slide")
    if (content > slides.length) {slideIndex = 1}
    if (content < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

}

btnPrev.addEventListener('click', showSlides)
