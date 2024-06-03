
const images = [];

const numberOfImages = 60;

for(let i= 35; i <= numberOfImages; i++) {

images.push(`assets/pictures/workpic (${i}).jpg`);

}
   

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showImage(index) {
    galleryImage.src = images[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});

galleryImage.addEventListener('click', () => {
    galleryImage.classList.toggle('zoomed');
});

// Initialize the gallery with the first image
showImage(currentIndex);
