const tagsEl = document.querySelector('#tags')
        const textarea = document.querySelector('#textarea')

        textarea.focus()

        textarea.addEventListener('keyup',(event)=>{
            createTags(event.target.value)

            if(event.key == 'Enter'){
                setTimeout(()=>{
                    event.target.value = ''
                },10)
                randomSelect()
            }
        })

        function createTags(input){
            const tags = input.split(',').filter(tag => tag.trim()
            !== '').map(tag => tag.trim())
            
            tagsEl.innerHTML = ''
            
            tags.forEach(tag => {
                const tagEl = document.createElement('span')
                tagEl.classList.add('tag')
                tagEl.innerText = tag
                tagsEl.appendChild(tagEl)
            });
        }

        function randomSelect() {
            const times = 30

            const interval = setInterval(()=>{
                const randomTag = pickRandomTag()

                highlighTag(randomTag)

                setTimeout(()=>{
                    unhighlighTag(randomTag)
                },100)
            },100);

            setTimeout(()=>{
                clearInterval(interval)

                setTimeout(()=>{
                    const randomTag = pickRandomTag()

                    highlighTag(randomTag)
                },100)
            },times*100)
        }

        function pickRandomTag(){
            const tags = document.querySelectorAll('.tag')
            return tags[Math.floor(Math.random()*tags.length)]
        }

        function highlighTag(tag){
            tag.classList.add('highlight')
        }
        function unhighlighTag(tag){
            tag.classList.remove('highlight')
        }