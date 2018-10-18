function fetchBooks() {
  //write fetch request to the Game of Thrones API
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

/*All the Houses in Game of Thrones
The 5th book in the series
The 1031st character in the series*/

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(){
    fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json =>
    renderBooks(json)
  }
})
