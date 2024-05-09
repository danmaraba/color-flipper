const colors=['red','green','orange','brown']
const button=document.getElementById("btn-id")
const color=document.querySelector('.color')

button.addEventListener('click',function(){
    // console.log('clicked')
    let randomNumber=getRandomNumber();
    // console.log(randomNumber)
    document.body.style.backgroundColor=colors[randomNumber]
    color.textContent=colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}