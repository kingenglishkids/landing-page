let slideIndex = 1;
let autoPlayTimer;

function plusSlides(n) {
  clearTimeout(autoPlayTimer); // Dừng auto-play khi người dùng nhấn nút
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(autoPlayTimer); // Dừng auto-play khi người dùng chọn slide
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";

  autoPlayTimer = setTimeout(function() {
    showSlides(slideIndex += 1); // Chuyển slide tự động sau mỗi 5 giây
  }, 5000); // 5000ms = 5 giây
}

// Bắt đầu auto-play khi tải trang
showSlides(slideIndex);