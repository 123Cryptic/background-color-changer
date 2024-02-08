const body=document.body;
const input=document.querySelector('input')
const colorChange=()=>{
  const value=input.value;
  body.style.background=value;
}



input.addEventListener("input", function(){colorChange()})


