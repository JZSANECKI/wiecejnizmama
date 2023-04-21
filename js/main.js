const menuPage = document.querySelector(".menu-page")
const menuItem1 = document.querySelector(".menu-page-nav")
const menuItem2 = document.querySelector(".kontakt")
const menuBtn = document.querySelector("#menu-btn")
const heroLogoMobile = document.querySelector(".hero-logo-mobile")
console.log(window.scrollY)

const menuFn = () =>{
    menuPage.classList.toggle("menu-page-active")
    menuItem1.classList.toggle("menu-page-nav-active")
    menuItem2.classList.toggle("kontakt-active")
}
menuBtn.addEventListener("click", menuFn)
document.addEventListener("scroll", (event) => {
    if(window.scrollY > 0){
    heroLogoMobile.style.width="15%" 
}else{
        heroLogoMobile.style.width="45%"  
    }
})