// Selectionner les elements à utiliser

let slides = document.querySelectorAll('.slide');
let rightBtn = document.querySelector('.right');
let leftBtn = document.querySelector('.left');

// Initialiser le compteur

let currentIndex = 0;

// La fonction qui slide les sliders 

function Silayder() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${- currentIndex * 100}%)`;
        slide.style.transition = `transform 0.5s ease-in-out`;
    });
}
            
// Ajouter des event listener aux boutons pour actionner la fonction de défilement

rightBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > slides.length - 2) {
        currentIndex = 0;
    }
    Silayder();
})

leftBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    Silayder();
})