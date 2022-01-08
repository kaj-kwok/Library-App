//set up constructor
class book { 
    constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
}

function addBooktoLibrary(title, author, pages, read) {
    addBook = new book(title, author, pages, read) 
    myLibrary.push(addBook);
    localStorage.setItem('books', JSON.stringify(myLibrary)) //store books into local storage
}

//dummy library for content
let myLibrary = [];

let sampleLibrary = [ 
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pages: 229,
        isRead: true,
    
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 100,
        isRead: false,
    
    },
];

//capture input
const formInp = document.querySelector('.form')
formInp.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = formInp.elements.namedItem('title').value
    const author = formInp.elements.namedItem('author').value
    const pages = formInp.elements.namedItem('pages').value
    const read = formInp.elements.namedItem('status').value
    addBooktoLibrary(title, author, pages, read);
    closeModal()
    formInp.reset()
    retrieveBook()
})


//display library
function displayBookCatalog(item) {
const bookCatalog = document.querySelector('#catalog')
for (let i = 0; i < myLibrary.length; i++){
    bookRow = document.createElement("tr")
    bookRow.setAttribute('class', 'bookRow')
    titleTd = document.createElement("td")
    authorTd = document.createElement("td")
    pagesTd = document.createElement("td")
    isReadTD = document.createElement("td")
    titleTd.textContent = myLibrary[i].title
    authorTd.textContent = myLibrary[i].author
    pagesTd.textContent = myLibrary[i].pages
    isReadTD.textContent = myLibrary[i].isRead
    bookCatalog.appendChild(bookRow)
    bookRow.appendChild(titleTd)
    bookRow.appendChild(authorTd)
    bookRow.appendChild(pagesTd)
    bookRow.appendChild(isReadTD)
    //create delete button
    deleteBtn = document.createElement("button")
    deleteBtn.setAttribute('class', 'dl-Btn')
    deleteBtn.innerHTML = "&times;"
    bookRow.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.indexOf(item), 1)
        retrieveBook()
    })
}
}
//delete function
// let deleteBtn = document.getElementsByClassName('dl-btn')




//retrieve books
function retrieveBook() {
tbody = document.querySelector('#catalog')
tbody.innerHTML = ' ' 
if (JSON.parse(localStorage.getItem('books')) == ''){
    console.log('yes')
    myLibrary = sampleLibrary
}
else {
    console.log('other')
bookLibrary = JSON.parse(localStorage.getItem('books'))
myLibrary = []
myLibrary = bookLibrary
}
displayBookCatalog()
}

/// modal section
///eventlistener to open modal

const openModalButton = document.querySelector('[data-modal-target]');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButton.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    openModal(modal)
})

closeModalButton.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    closeModal(modal)
})

function openModal(model) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(model) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal')
    closeModal(modals)
})

retrieveBook()