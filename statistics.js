// Статистика //

let counters = document.querySelectorAll(".counter");
let intro_container = document.querySelector(".main-container");
let speed = 200;

counters.forEach((counter) => {

   function updateCounter() {

      const targetNumber = +counter.dataset.target; // стринг към число
      const initialNumber = +counter.textContent; // 0
      const incrementPerCount = targetNumber / speed; 
      
      if( initialNumber < targetNumber) {
      
         counter.textContent = Math.ceil(initialNumber + incrementPerCount);
         setTimeout(updateCounter,25);

      }

   }
   
   window.addEventListener("scroll", () => {

      if(window.scrollY > 0) {

         updateCounter();
         
      }

   });

  });
  