document.addEventListener('DOMContentLoaded', () => {
  const slideTrack = document.getElementById('slide-track');
  const slides = document.querySelectorAll('.myslide');
  const radios = document.querySelectorAll('input[name="radio-btn"]');
  const buttons = document.querySelectorAll('.manual-btn');
  const slider = document.querySelector('.slider');

  let currentSlide = 0;
  const totalSlides = slides.length;

  // Set dynamic width
  slideTrack.style.width = `${totalSlides * 100}%`;

  // Manual navigation
  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      currentSlide = index;
      updateSlide();
      resetAutoplay();
    });
  });

  // Update slide position and button state
  function updateSlide() {
    slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    if (radios[currentSlide]) radios[currentSlide].checked = true;
    buttons.forEach(btn => btn.classList.remove('active'));
    if (buttons[currentSlide]) buttons[currentSlide].classList.add('active');
  }

  // Autoplay
  let autoplay = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  }, 5000);

  function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide();
    }, 5000);
  }

  // Swipe gestures
  let startX = 0;
  let endX = 0;

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    clearInterval(autoplay);
  });

  slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
    resetAutoplay();
  });

  function handleSwipe() {
    const threshold = 50;
    const distance = endX - startX;

    if (Math.abs(distance) > threshold) {
      if (distance < 0) {
        currentSlide = (currentSlide + 1) % totalSlides;
      } else {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      }
      updateSlide();
    }
  }

  // Initial state
  updateSlide();
});
