const peopleIcon = document.querySelector('.people-icon');
const forwardIcon = document.querySelector('.forward-icon');
const crowdIcon = document.querySelector('.crowd-icon');
const gadgetIcon = document.querySelector('.gadget-icon');
const globeIcon = document.querySelector('.globe-icon');
const smartphoneIcon = document.querySelector('.smartphone-icon');
const peopleModal = document.querySelector('.people-modal');
const forwardModal = document.querySelector('.forward-modal');
const crowdModal = document.querySelector('.crowd-modal');
const gadgetModal = document.querySelector('.gadget-modal');
const globeModal = document.querySelector('.globe-modal');
const smartphoneModal = document.querySelector('.smartphone-modal');
const sliderBox = document.getElementById('video-modal');
const span = document.querySelector('.close');
const videoSlider = document.querySelector('.video-slider');
let slideIndex = 1;

function setDisplayProp(modal, val){    
    modal.style.transition = 'all 2s';
    modal.style.display = val;
}

peopleIcon.addEventListener('mouseover', () => {
    setDisplayProp(peopleModal, 'block');
});

peopleIcon.addEventListener('mouseout', () => {
    setDisplayProp(peopleModal, 'none');
});

forwardIcon.addEventListener('mouseover', () => {
    setDisplayProp(forwardModal, 'block');
});

forwardIcon.addEventListener('mouseout', () => {
    setDisplayProp(forwardModal, 'none');
});

crowdIcon.addEventListener('mouseover', () => {
    setDisplayProp(crowdModal, 'block');
});

crowdIcon.addEventListener('mouseout', () => {
    setDisplayProp(crowdModal, 'none');
});

gadgetIcon.addEventListener('mouseover', () => {
    setDisplayProp(gadgetModal, 'block');
});

gadgetIcon.addEventListener('mouseout', () => {
    setDisplayProp(gadgetModal, 'none');
});

globeIcon.addEventListener('mouseover', () => {
    setDisplayProp(globeModal, 'block');
});

globeIcon.addEventListener('mouseout', () => {
    setDisplayProp(globeModal, 'none');
});

smartphoneIcon.addEventListener('mouseover', () => {
    setDisplayProp(smartphoneModal, 'block');
});

smartphoneIcon.addEventListener('mouseout', () => {
    setDisplayProp(smartphoneModal, 'none');
});

document.querySelector('.homescreen-container').addEventListener('click', (e) => {
    const target = e.target;
    const iconClicked = target.closest('div');

    addVideo(iconClicked);
})

span.addEventListener('click', () => {
    sliderBox.style.display = 'none';
})

function addVideo(iconInfo){
    console.log(iconInfo.classList[0]);
    switch(iconInfo.classList[0]){
        case('people-icon-container'):
        slideIndex = 1;
        displayModal(slideIndex);
        break;
        case('smartphone-icon-container'):
        slideIndex = 2;
        displayModal(slideIndex);
        break;
        case('forward-icon-container'):
        slideIndex = 3;
        displayModal(slideIndex);
        break;
        case('globe-icon-container'):
        slideIndex = 4;
        displayModal(slideIndex);
        break;
        case('crowd-icon-container'):
        slideIndex = 5;
        displayModal(slideIndex);
        break;
        case('gadget-icon-container'):
        slideIndex = 6;
        displayModal(slideIndex);
        break;
        default:
        break;
    }
}

function displayModal(slideIndex){ 
    console.log(slideIndex)   
    showSlides(slideIndex);    
    sliderBox.style.display = 'block';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  
  
  slides[slideIndex-1].style.display = 'block';  
  dots[slideIndex-1].className += ' active';
}

