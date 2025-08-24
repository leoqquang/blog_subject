document.addEventListener('DOMContentLoaded', function () {
  const image = document.getElementById('slide-image');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const slideshowContainer = document.querySelector('.slideshow-container');


  const imageFilenames = [
    "Img_1.JPG", "Img_2.jpg", "Img_3.jpg", "Img_4.jpg", "Img_5.jpg",
    "Img_6.jpg", "Img_7.jpg", "Img_8.jpg", "Img_9.jpg", "Img_10.jpg",
    "Img_11.JPG", "Img_12.jpg", "Img_13.jpg", "Img_14.jpg", "Img_15.jpg",
    "Img_16.jpg", "Img_17.jpg", "Img_18.jpg", "Img_19.JPG", "Img_20.jpeg",
    "Img_21.JPG"
  ];

  let currentIndex = 0;
  let autoplayInterval;

  function updateImage() {
    image.src = `images/${imageFilenames[currentIndex]}`;
    console.log("Now showing:", image.src);
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % imageFilenames.length;
    updateImage();
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
    updateImage();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(showNextImage, 3000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPrevImage);

  slideshowContainer.addEventListener('mouseenter', stopAutoplay);
  slideshowContainer.addEventListener('mouseleave', startAutoplay);

  updateImage();
  startAutoplay();
});
