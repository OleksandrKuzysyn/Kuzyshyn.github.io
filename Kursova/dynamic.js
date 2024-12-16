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
  