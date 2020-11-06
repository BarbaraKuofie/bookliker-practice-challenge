document.addEventListener("DOMContentLoaded", function() {
 fetchBooks()
});

const url = `http://localhost:3000/books`;
const bookListPanel = document.querySelector('#list')
const bookInfo = document.querySelector('.book-info')

function fetchBooks(){
    fetch (url)
    .then(resp => resp.json())
    .then(books => renderBooks(books))
}

function renderBooks(books){
 books.forEach(book=> {
        const liTag = document.createElement('li')
        liTag.innerText = `${book.title}`
        liTag.setAttribute("data-bookId", book.id)
        bookListPanel.appendChild(liTag)
        liTag.addEventListener('click', function(event){
            event.target.style = 'color:#2a9d8f'
            const bookDiv = document.querySelector('#show-panel')
            bookDiv.innerHTML = "";
            bookDiv.innerHTML = renderBook(book)
        })
    });
}

function renderBook(book){
let usernames = book.users.map(user=> user.username)
 return`<img src=${book.img_url} />
    <h2>${book.title}</h2>
    <h3>${book.subtitle}</h3>
    <p>${book.description}</p>
    <ul><li>${usernames.forEach(username => {
        username})};}</li></ul>`
}

// function handleBookSelector(event){
    
//     //  const  bookId = event.target.dataset.bookid;
//     //  fetch(url+'/'+bookId)
//     //  .then(resp => resp.json())
//     //  .then(book => console.log(book.title))  
// }


