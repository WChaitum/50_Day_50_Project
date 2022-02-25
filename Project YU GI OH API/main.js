const API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0&sort=new'
const IMG_URL = 'https://storage.googleapis.com/ygoprodeck.com/pics/'
const SEARCH_API = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname='
const container = document.querySelector('#container')
// const animated_bgs = document.querySelectorAll('.animated-bg')


getCards(API_URL)
async function getCards(url){
    const res = await fetch(url)
    const data = await res.json()

    // console.log(data.data[0].name);
    showCard(data.data);
    
}

function showCard (Cards){
    // console.log(Cards[0].card_images);
    container.innerHTML = ''

    Cards.forEach((CardData,idx) => {
        const{id,name,level,type,race,atk,def,attribute,desc} = CardData

        // console.log(id);
        const ShowImgCard = `${IMG_URL}${id}.jpg`
        
        const card =  document.createElement('div')
        card.classList.add('card')
        card.innerHTML=`
            <div class="img-container">
                <img src="${ShowImgCard}" alt="">
            </div>
        `
        // console.log(ShowImgCard,id);
        container.appendChild(card)
        card.addEventListener('click',()=>console.log(id,name,level,type,race,atk,def,attribute,desc))

})
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const searchTerm = search.value
    if(searchTerm && searchTerm !== ''){
        getCards(SEARCH_API + searchTerm)

        search.value = ''
    }else{
        window.location.reload()
    }
})
