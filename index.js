
function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}


function fetchBooks() {
/*All the Houses in Game of Thrones
The 5th book in the series
The 1031st character in the series*/
    fetch("https://anapioficeandfire.com/api/houses")
    .then(resp => resp.json())
    .then(json =>
    renderBooks(json)
  }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  
}


