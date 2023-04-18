const menuPage = document.querySelector(".menu-page")
const menuItem1 = document.querySelector(".menu-page-nav")
const menuItem2 = document.querySelector(".kontakt")
const menuBtn = document.querySelector("#menu-btn")
console.log(menuPage)
console.log(menuBtn)

const menuFn = () =>{
    menuPage.classList.toggle("menu-page-active")
    menuItem1.classList.toggle("menu-page-nav-active")
    menuItem2.classList.toggle("kontakt-active")
}
menuBtn.addEventListener("click", menuFn)