
let data="";

let buttons= document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            data= eval(data);
            document.querySelector('input').value = data;
        }else if(e.target.innerHTML== 'AC'){
            data= "";
            document.querySelector('input').value= data;
            
        }
        else{
            console.log(e.target)
            data= data + e.target.innerHTML;
            document.querySelector('input').value = data;
        }
        
    })
})

