let anik =document.querySelectorAll('.anik')

let  Button =document.querySelector('.toto')

 let arr = Array.from(anik)
 arr.map((mama)=>{

let i = 0
        
Button.addEventListener('click', () => {
let mono = ()=>{

    i++
    mama.innerHTML=i   
    
    if(i == mama.dataset.valo){
        clearInterval(stop)
    }
    
}

 let stop = setInterval(()=>{
       mono()
      },2000/mama.dataset.valo)


   })})


 



