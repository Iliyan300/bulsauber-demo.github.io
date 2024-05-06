

AOS.init();

// Направлява плавно до определеното id//



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   
    anchor.addEventListener('click', function (e) {
       e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   });
});






     