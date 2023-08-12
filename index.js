const ratings= document.querySelectorAll(".rating");//querySelectorAll since there are multiple clases with the same name rating

ratings.forEach((rating)=>{
    rating.addEventListener("click",(event)=>{
        console.log(event.target.innerText  || event.target.parentNode.innerText);//event.target is the element that triggered the event
event.target.classList.add("active");//add the class active to the element that triggered the event
event.target.parentNode.classList.add("active");//add the class active to the parent of the element that triggered the event    
})

})