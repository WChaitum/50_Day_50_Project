const insert = document.querySelector('#insert')

window.addEventListener('keydown',(event)=>{
    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>even.key</small>
    </div>
    <div class="key">
        ${event.keyCode}
        <small>even.keyCode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>even.code</small>
    </div>`
})