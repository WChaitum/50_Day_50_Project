const imgs = document.querySelector('#imgs')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run,2000)

function run(){
    idx++
    changeItem()
}
function changeItem(){
    if(idx > img.length-1){
        idx = 0
    } else if(idx < 0){
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run,2000)
}
rightBtn.addEventListener('click',()=>{
idx++
changeItem()
resetInterval()
})
leftBtn.addEventListener('click',()=>{
idx--
changeItem()
resetInterval()
})