var slidesIndex = 0;
var coverSlidesIndex = 0;
slideShow();
coverSlideShow();
function slideShow() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slidesIndex++;
    if (slidesIndex > slides.length) {
        slidesIndex = 1
    }
    slides[slidesIndex-1].style.display = "block";  
    setTimeout(slideShow, 8000); // Change image every 2 seconds
}
function coverSlideShow() {
    var i;
    var slides = document.getElementsByClassName("cover-slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    coverSlidesIndex++;
    if (coverSlidesIndex > slides.length) {
        coverSlidesIndex = 1
    }
    slides[coverSlidesIndex-1].style.display = "block";  
    setTimeout(coverSlideShow, 5000); // Change image every 2 seconds
}
