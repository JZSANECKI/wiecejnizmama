const readMoreBtn = document.querySelectorAll(".read-more-btn")

let moreFn =(e) =>{
    let article = e.target.parentElement.parentElement;
    let btn = e.target

  
    if(btn.innerHTML==="czytaj więcej..."){
        article.style.maxHeight="none"

btn.innerHTML = "zwiń"}
else{
    btn.innerHTML = "czytaj więcej..."  
    article.style.maxHeight="20vh"
}

}

readMoreBtn.forEach((e) =>{
    e.addEventListener('click',moreFn);
  
})