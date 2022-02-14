const slider_container = document.querySelector('.slider-container')
const IMG_slide = document.querySelector('.img-slide')
const text_slide = document.querySelector('.text-slide')
const up_button = document.querySelector('.up-button')
const down_button = document.querySelector('.down-button')
const slide_length = IMG_slide.querySelectorAll('div').length


let activeSlideIndex = 0

text_slide.style.top = `-${(slide_length - 1) * 100}vh`

up_button.addEventListener('click',() => changeSlide('up'))
down_button.addEventListener('click',() => changeSlide('down'))

const changeSlide = (direction) => {
    const slideHeight = slider_container.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slide_length - 1){
            activeSlideIndex = 0
        }
    }else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slide_length-1
        }
    }
    IMG_slide.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`
    text_slide.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`

}