// Gallery lightbox: used by gallery.html 
let currentImageIndex = 0; 
const images = document.querySelectorAll('.thumbnail'); // all gallery thumbnails 
function openLightbox(index) { 
showImage(index); 
document.getElementById('lightbox').style.display = 'flex'; 
} 
function closeLightbox() { 
document.getElementById('lightbox').style.display = 'none'; 
} 
function showImage(index) { 
currentImageIndex = index; 
document.getElementById('lightboxImage').src = images[currentImageIndex].src; 
} 
function changeImage(direction) { 
currentImageIndex += direction; 
// Wrap around at the start and end 
if (currentImageIndex < 0) currentImageIndex = images.length - 1; 
else if (currentImageIndex >= images.length) currentImageIndex = 0; 
showImage(currentImageIndex); 
} 
// Thumbnails open the lightbox with their own image 
images.forEach((img, index) => { 
img.addEventListener('click', () => openLightbox(index)); 
}); 
// Keyboard support 
document.addEventListener('keydown', (e) => { 
const open = document.getElementById('lightbox').style.display === 'flex'; 
if (!open) return; 
if (e.key === 'Escape') closeLightbox(); 
if (e.key === 'ArrowLeft') changeImage(-1); 
if (e.key === 'ArrowRight') changeImage(1); 
});