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




const bikes = [
    {
      name: 'Café Racer',
      image: 'images/Caferacer.webp',
      alt: 'Café Racer Bike',
      gender: 'Жіночий'
    },
    {
      name: 'Robyn',
      image: 'images/Robyn.webp',
      alt: 'Robyn Bike',
      gender: 'Жіночий'
    },
    {
      name: 'Berlin',
      image: 'images/Berlin.webp',
      alt: 'Berlin Bike',
      gender: 'Для всіх'
    }
  ];
  

  const bikesContainer = document.getElementById('bikes-container');
  
  function createBikeCard(bike) {
    const bikeElement = document.createElement('div');
    bikeElement.classList.add('bike-element');
  
    const img = document.createElement('img');
    img.src = bike.image;
    img.alt = bike.alt;
  
    const caption = document.createElement('div');
    caption.classList.add('bike-element-caption');
  
    const h3 = document.createElement('h3');
    h3.textContent = bike.name;
  
    const p = document.createElement('p');
    p.textContent = bike.gender;
  
    caption.appendChild(h3);
    caption.appendChild(p);
    bikeElement.appendChild(img);
    bikeElement.appendChild(caption);
  
    return bikeElement;
  }
  
  bikes.forEach(bike => {
    const bikeCard = createBikeCard(bike);
    bikesContainer.appendChild(bikeCard);
  });
  