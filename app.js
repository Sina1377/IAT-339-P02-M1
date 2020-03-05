// const navSlide = () =>{
// 	const burger = document.querySelector('.burger');
// 	const nav = document.querySelector('.nav-links');
// 	const navLinks = document.querySelector('.nav-links li');



// 	burger.addEventListener('click', () => {
// 		   // Toggle Nav
// 		   nav.classList.toggle('nav-active');

// 	   //Animate Links
// 	 [navLinks].forEach((link, index) => {


//     link.style.animation = `navLinkFade 0.4s ease forwards ${index / 5 + 1}s`;
//     console.log(index );
//   });
// 	      // Burger Animation
// 	      burger.classList.toggle('toggle');

// 	  });

	
// }

// navSlide();


const navSlide = () => { 
    const burger = document.querySelector('.burger');
    const nav = document.querySelector ('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();