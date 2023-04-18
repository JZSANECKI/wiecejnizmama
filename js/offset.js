const aboutImg = document.querySelector(".about-me-img")
const bloop5 = document.querySelector(".bloop5")
let imgX = aboutImg.offsetLeft
let imgY = aboutImg.offsetTop
const imgH = aboutImg.offsetHeight
let imgW = aboutImg.offsetWidth

console.log(imgH)
console.log(aboutImg)
console.log(imgY)
console.log(imgH+imgY)
bloop5.style.left=imgX+(imgW*0.75)+"px"
bloop5.style.top=imgY+(imgH*0.75)+"px"