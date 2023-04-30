const aboutImg = document.querySelector(".about-me-img")
const bloop5 = document.querySelector(".bloop5")
let imgX = aboutImg.offsetLeft
let imgY = aboutImg.offsetTop
const imgH = aboutImg.offsetHeight
let imgW = aboutImg.offsetWidth
const windowWidth = window.innerWidth



if(windowWidth > 576){
bloop5.style.left=imgX+(imgW*0.75)+"px"
bloop5.style.top=imgY+(imgH*0.75)+"px"}