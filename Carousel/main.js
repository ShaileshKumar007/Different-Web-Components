let slideIndex = 1;
const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];

showSlides(slideIndex);


prev.addEventListener("click", () => {
  slideIndex += -1;
  showSlides(slideIndex);
});

next.addEventListener("click", () => {
  slideIndex += 1;
  showSlides(slideIndex);
});

function plusSlides(n) {
  // slideIndex += n;
  // showSlides(slideIndex);
  console.log("hii");
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}