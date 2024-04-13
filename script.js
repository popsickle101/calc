newArr=[]
prevArr=[]


let globalOnScreen;
document.addEventListener("DOMContentLoaded",()=>{
let onScreen = document.querySelector('#display');
globalOnScreen=onScreen
})

document.addEventListener("DOMContentLoaded",()=>{
let numElement=document.querySelectorAll('.numItem')

numElement.forEach(number => { 
    number.addEventListener("click",function(){
    
    newArr.push(number.textContent)
    
    
    globalOnScreen.textContent=newArr.join('');
    
    
    
})})});

document.addEventListener("DOMContentLoaded",()=>{
let operatorElement=document.querySelectorAll(".operators")
operatorElement.forEach(operator => {
    operator.addEventListener('click',function(){
    prevArr = [...newArr]; 
    newArr=[]
    operation=operator.textContent
    globalOnScreen.textContent=operation
    
    })
})})

document.addEventListener("DOMContentLoaded",()=>{
let calculation=document.querySelector('#equals')
calculation.addEventListener('click',function(){
    let num1 = parseFloat(newArr.join('')); 
    let num2 = parseFloat(prevArr.join('')); 

    if  (operation === '+'){
        
        ans=parseInt(num1)+parseInt(num2);
        newArr=[]
        newArr.push(ans)
        globalOnScreen.textContent=ans;}
    else if (operation === '-')
        ans=newArr-prevArr;
    else if(operation === '*')
        ans=newArr*prevArr
    else if(operation === '/')
        ans=newArr/prevArr
    
    
    console.log(globalOnScreen.textContent)
    
}

)
}
)
document.addEventListener("DOMContentLoaded",()=>{
    let clear=document.querySelector('#clear')
    clear.addEventListener('click',function(){
        globalOnScreen.textContent="";
        prevArr=[];
        newArr=[];
    })})