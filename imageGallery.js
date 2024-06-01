
const images = [
   
    'assets/pictures/workpic (39).jpg',
    'assets/pictures/workpic (40).jpg',
    'assets/pictures/workpic (41).jpg',
    'assets/pictures/workpic (42).jpg',
    'assets/pictures/workpic (43).jpg',
    'assets/pictures/workpic (44).jpg',
    'assets/pictures/workpic (45).jpg',
    'assets/pictures/workpic (46).jpg',
    'assets/pictures/workpic (47).jpg',
    'assets/pictures/workpic (48).jpg',
    'assets/pictures/workpic (49).jpg',
    'assets/pictures/workpic (50).jpg',
    'assets/pictures/workpic (51).jpg',
    'assets/pictures/workpic (52).jpg',
    'assets/pictures/workpic (53).jpg',
    'assets/pictures/workpic (54).jpg',
    'assets/pictures/workpic (55).jpg',
    'assets/pictures/workpic (56).jpg',
    'assets/pictures/workpic (57).jpg',
    'assets/pictures/workpic (58).jpg',
    'assets/pictures/workpic (59).jpg',
    'assets/pictures/workpic (60).jpg'


];



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
