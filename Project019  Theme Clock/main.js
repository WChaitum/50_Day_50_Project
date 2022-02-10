const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle   = document.querySelector('.toggle')
const html = document.querySelector('html')

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"];

toggle.addEventListener('click',(e)=>{
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innderHTML = 'Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innderHTML = 'Light mode'
    }
})


function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hourForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock,0,11,0,360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`

    timeEl.innerHTML = `${hours}:${minutes}:${seconds}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    
}
const scale = (num, in_min, in_max, out_min, out_max)=>{
return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;}

setInterval(setTime,1000)
function run(){
    setTime()
}
run();
