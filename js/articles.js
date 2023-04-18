const readMoreBtn = document.querySelectorAll(".read-more-btn")

let moreFn =(e) =>{
    let article = e.target.parentElement.parentElement;
    let btn = e.target

  
    if(btn.innerHTML==="czytaj więcej..."){
        article.classList.add("article-active")

btn.innerHTML = "zwiń"}
else{
    btn.innerHTML = "czytaj więcej..."  
    article.classList.remove("article-active") 
}

}

readMoreBtn.forEach((e) =>{
    e.addEventListener('click',moreFn);
  
})