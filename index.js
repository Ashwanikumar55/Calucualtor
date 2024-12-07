let inputtext=document.getElementById('text');
let buttons=document.querySelectorAll('button');
let buttonArray = Array.from(buttons);
let str="";
buttonArray.forEach(btn => {
    btn.addEventListener("click",(e) =>{
      str+=e.target.innerHTML;
        if(e.target.innerHTML=="AC"){
            str="";
            inputtext.value=str;
        }
       else if(e.target.innerHTML=="DEL"){
            str= inputtext.value.substring(0, inputtext.value.length-1);
            inputtext.value=str;
        }
        else if(e.target.innerHTML=="="){
            str=eval(inputtext.value);
            inputtext.value=str;
        }
         else{
            
            inputtext.value=str; 
         }
        
    });
    
});