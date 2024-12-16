document.addEventListener('DOMContentLoaded', function () {
    const bikeImages = {
      electricAce: [
        'images/electric_ace_gray.webp',
        'images/electric_ace.webp',
        'images/electric_ace_white.webp',
        'images/electric_ace_blackwhite.webp'
      ],
      electricIvy: [
        'images/electric_ivy_gray.webp',
        'images/electric_ivy.webp',
        'images/electric_ivy_white.webp',
        'images/electric_ivy_red.webp'
      ]
    };
  
    function initGallery(bikeSelector, images) {
      const card = document.querySelector(bikeSelector);
      const imageContainer = card.querySelector('.bike-image');
      const prevButton = card.querySelector('.nav-button:first-of-type');
      const nextButton = card.querySelector('.nav-button:last-of-type');
      const colorDots = card.querySelectorAll('.color');
  
      let currentImageIndex = 0;
  
      function updateImage() {
        imageContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
        colorDots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentImageIndex);
        });
      }
  
      prevButton.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
      });
  
      nextButton.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
      });
  
      colorDots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
          currentImageIndex = index;
          updateImage();
        });
      });
  
      updateImage();
    }
  
    initGallery('.bike-card:nth-child(1)', bikeImages.electricAce);
    initGallery('.bike-card:nth-child(2)', bikeImages.electricIvy);
  });