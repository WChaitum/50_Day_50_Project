const API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?atk=gt&def=gt'
const IMG_URL = 'https://storage.googleapis.com/ygoprodeck.com/pics/'
const container = document.querySelector('#container')

// console.log((IMG_URL+'86988864.jpg'));
getMovies(API_URL)
async function getMovies(url){
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
        // console.log(CardData);
        console.log(idx);
        
        // console.log(`${IMG_URL}${id}.jpg`);

        const ShowImgCard = `${IMG_URL}${id}.jpg`
        // console.log(ShowImgCard);

        const card =  document.createElement('div')
        card.classList.add('card')
        console.log(card,idx);
        card.innerHTML=`
            <div class="img-container">
                <img src="${ShowImgCard}" alt="">
            </div>
        `
        container.appendChild(card)
        card.addEventListener('click',()=>console.log(idx))
})
}
