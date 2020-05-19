var slideIndex = 0;
var picture = document.getElementsByClassName("mySlides");
var pictureIndex = picture.length;
var dots = document.getElementsByClassName("dot")
var text = document.getElementsByClassName("text");

showDivs(true);

function plusSlides(n) {
  slideIndex = (slideIndex += n) % pictureIndex;
  if (slideIndex < 0) slideIndex = pictureIndex-1;
  showDivs(n >= 0);
}

function showDivs(right) {
  var i;
  for (i =0; i < pictureIndex; i++) {
    picture[i].style.display = "none";
    text[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  picture[slideIndex].style.display = "block";
  text[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
