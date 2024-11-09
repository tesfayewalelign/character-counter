const inputE1=document.getElementsByClassName("dash")[0];
const countE1=document.getElementsByClassName("count")[0];
const restE1=document.getElementsByClassName("rest")[0];


 inputE1.addEventListener("keyup",()=>{
    updatecount()

 })

 function updatecount(){
   countE1.innerText = inputE1.value.length
   restE1.innerText=inputE1.getAttribute("maxlength") - inputE1.value.length


 }