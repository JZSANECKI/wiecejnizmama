const heroLogoMobile = document.querySelector(".hero-logo-mobile")


document.addEventListener("scroll", (event) => {
    if(window.scrollY > 0){
    heroLogoMobile.style.width="15%" 
}else{
        heroLogoMobile.style.width="45%"  
    }
})