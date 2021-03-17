var index = 0;
slideShow();

function slideShow() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    index++;
    if (index > slides.length) {
        index = 1
    }
    slides[index-1].style.display = "block";  
    setTimeout(slideShow, 8000); // Change image every 2 seconds
}
