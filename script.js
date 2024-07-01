// CAROUSEL
document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
      { src: './images/industrialWarehouse.jpeg', description: 'Industrial Warehouse/ Factory' },
      { src: './images/commercialBuilding.jpg', description: 'Commercial Building/Land' },
      { src: './images/townshipLand.jpg', description: 'Group Housing/ Township' },
      { src: './images/it building.jpg', description: 'IT Towers' },
      { src: './images/college.webp', description: 'Institutional Properties' },
      { src: './images/hotels.jpg', description: 'Hotels/ Restraunts' },
      { src: './images/wedding.jpeg', description: 'Marriage Grounds' },
      { src: './images/hospital.jpg', description: 'Hospitals' },
      { src: './images/residential.webp', description: 'Residential Land' },
      { src: './images/villa.webp', description: 'Independent Villas' },
      { src: './images/shops.webp', description: 'Shops' }
    ];
  
    const carouselTrack = document.querySelector('.carousel-track');
  
    const createSlide = ({ src, description }) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
  
      const imgElement = document.createElement('img');
      imgElement.src = src;
      imgElement.alt = description;
  
      const overlayElement = document.createElement('div');
      overlayElement.className = 'overlay';
      overlayElement.textContent = description;
  
      slideElement.append(imgElement, overlayElement);
  
      return slideElement;
    };
  
    const populateCarouselTrack = (slides) => {
      const fragment = document.createDocumentFragment();
      slides.forEach(slide => fragment.appendChild(createSlide(slide)));
  
      // Duplicate slides to create a seamless loop effect
      slides.forEach(slide => fragment.appendChild(createSlide(slide)));
  
      carouselTrack.appendChild(fragment);
  
      const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
      const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
      const totalWidth = (slideWidth + gapWidth) * slides.length;
      const duplicatedTotalWidth = totalWidth * 2;
      const halfTotalWidth = duplicatedTotalWidth / 2;
  
      carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);
  
      const baseDuration = 40; // secondes | default = 40
      const baseWidth = 5000; // px | default = 5000
      const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;
  
      carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
    };
  
    populateCarouselTrack(slidesData);
  });
  
  var buttons = document.querySelectorAll(".btn-outline-secondary");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)"; // Increase size by 20%
    this.style.transition = "transform 0.1s"; // Smooth transition
    this.style.backgroundColor="#66a1bf";
    this.querySelector("a").style.color = "white";
  });

  buttons[i].addEventListener("mouseout", function() {
    this.style.transform = "scale(1)"; // Reset size to original
    this.style.transition = "transform 0.1s"; // Smooth transition
    this.style.backgroundColor="rgb(256,256,256)";
    this.querySelector("a").style.color = "black";
  });
}
// document.querySelector(".drop").addEventListener("mouseover",function(){
//   this.style.transform="scale(1.3)";
//   this.style.transition = "transform 0.3s";
// })
// document.querySelector(".drop").addEventListener("mouseout",function(){
//   this.style.transform="scale(1)";
//   this.style.transition = "transform 0.3s";
// })
  
// CHANGING PICTURES IN BODY BACKGROUND

const slidesData1 = [
  { src: './images/industrialWarehouse.jpeg', description: 'Industrial Warehouse/ Factory' },
  { src: './images/commercialBuilding.jpg', description: 'Commercial Building/Land' },
  { src: './images/townshipLand.jpg', description: 'Group Housing/ Township' },
  { src: './images/it building.jpg', description: 'IT Towers' },
  { src: './images/college.webp', description: 'Institutional Properties' },
  { src: './images/hotels.jpg', description: 'Hotels/ Restraunts' },
  { src: './images/wedding.jpeg', description: 'Marriage Grounds' },
  { src: './images/hospital.jpg', description: 'Hospitals' },
  { src: './images/residential.webp', description: 'Residential Land' },
  { src: './images/villa.webp', description: 'Independent Villas' },
  { src: './images/shops.webp', description: 'Shops' }
];

const changeElement=document.querySelector(".sameBackground");
for(let k=0;k<=-1;k++)
  {
    changeElement.innerHTML=slidesData1[k%11];
  }