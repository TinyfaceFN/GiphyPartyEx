const submitButton = document.querySelector('#submit')
const inputSearch = document.querySelector('#search')
const selectUl = document.querySelector(`#gifspot`)
const deleteBUtton = document.querySelector('#delete')

submitButton.addEventListener('click', async function (e) {
    e.preventDefault()
    let newIMG = document.createElement('img')
    let newLi =document.createElement('li')
    let gifSearch = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=cz2Va2EVyKhjoOu6R2Z5p2IlbXnl4yJR&q=${inputSearch.value}`);
    newIMG.src = gifSearch.data.data[0].images.fixed_height.url
    selectUl.append(newLi)
    newLi.append(newIMG)
    inputSearch.value = ''
})

deleteBUtton.addEventListener(`click`, function(){
    let allLis = document.querySelectorAll('li')
    for(let li of allLis)
    li.remove()
    }
)