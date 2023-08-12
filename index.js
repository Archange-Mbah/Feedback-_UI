const ratings= document.querySelectorAll(".rating");//querySelectorAll since there are multiple clases with the same name rating
const btn=document.getElementById("btn");
let selectedRating=" ";
const container=document.getElementById("container");
ratings.forEach((rating)=>{
    rating.addEventListener("click",(event)=>{
        console.log(event.target.innerText  || event.target.parentNode.innerText);//event.target is the element that triggered the event
        removeActive()
    selectedRating=event.target.innerText  || event.target.parentNode.innerText;//if the event is triggered by the span element then the innerText will be the rating value    
event.target.classList.add("active");//add the class active to the element that triggered the event
event.target.parentNode.classList.add("active");//add the class active to the parent of the element that triggered the event    
})

})
function removeActive(){
    ratings.forEach((rating)=>{
        rating.classList.remove("active")
    })
}
btn.addEventListener("click",()=>{
    if(selectedRating !==""){
     container.innerHTML=`
     <strong> Thank you! </strong> 
     <br>
     <br>
     <strong>Feedback: ${selectedRating} </string> 
     <p>We'll use your feedback to improve our customer support</p>
     `
     
}}
)