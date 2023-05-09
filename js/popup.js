let popupIndicator = localStorage.getItem('popup_shown')
const popupModal = document.querySelector(".popup-canva")
const closePopup =()=>{
popupModal.classList.add("popup-canva-none")   
}

if(popupIndicator === 'yes'){

}else{
    popupModal.classList.remove("popup-canva-none")
    localStorage.setItem('popup_shown','yes')
    popupIndicator = localStorage.getItem('popup_shown','yes')

}

