const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const container = document.querySelector('.container');


    left.addEventListener('mouseover',()=> container.classList.add('hover-left'))
    left.addEventListener('mouseleave',()=> container.classList.remove('hover-left'))

    right.addEventListener('mouseover',()=> container.classList.add('hover-right'))
    right.addEventListener('mouseleave',()=> container.classList.remove('hover-right'))