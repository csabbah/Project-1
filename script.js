const rootElement = document.documentElement


// ------------------------------------------------ Main Nav Menu (Active/Not Active)
const navButton = document.querySelector('.nav-stack')
const navMenu = document.querySelector('.nav-menu')
const close = document.querySelector('.close')

navButton.addEventListener('click',() => {
    navMenu.classList.toggle('active');
    navButton.classList.add('hide');
    close.classList.add('active')
})

function closeNavMenu() {
    navMenu.classList.toggle('active'); // Add the active class to the Nav Menu
    close.classList.remove('active')
    setTimeout(()=> {navButton.classList.remove('hide')},125); // Fades the stack icon in after 125 miliseconds
}

close.addEventListener('click',() => {
    closeNavMenu();
})




// ------------------------------------------------ Nav Menu Buttons (Scroll)
const home = document.querySelector('.home')
const aboutMe = document.querySelector('.aboutMe')
const portfolio = document.querySelector('.navportfolio')
const contactMe = document.querySelector('.contactMe')

// ---- For Scroll reference 
// window.addEventListener("scroll", (event) => {
//     let scroll = this.scrollY;
//     console.log(scroll)
// });

home.addEventListener('click', ()=> {
    closeNavMenu();
})

aboutMe.addEventListener('click', ()=> {
    rootElement.scrollTo({
        top: 544,
        behavior: "smooth"
      })
      closeNavMenu();
})

portfolio.addEventListener('click', ()=> {
    rootElement.scrollTo({
        top: 1200,
        behavior: "smooth"
      })
      closeNavMenu();
})

contactMe.addEventListener('click', ()=> {
    rootElement.scrollTo({
        top: 2261,
        behavior: "smooth"
      })
      closeNavMenu();
})




// ------------------------------------------------ Scroll to top (footer button)
const scrollButton = document.getElementById("scrollToTop")

scrollButton.addEventListener('click', scrollToTop)

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }




