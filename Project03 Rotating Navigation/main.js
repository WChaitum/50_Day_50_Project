const Open = document.querySelector('#open')
const Close = document.querySelector('#close')
const container = document.querySelector('.container')

Open.addEventListener('click',()=>container.classList.add('show-nav'))
Close.addEventListener('click',()=>container.classList.remove('show-nav'))