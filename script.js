//set up constructor
class book { 
    constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    }
    toggleRead() {
        this.isRead = !this.isRead
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
        isRead: "true",
    
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 100,
        isRead: "false",
    
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
    isReadTD.setAttribute("class", "isRead")
    deleteEl = document.createElement("td")
    titleTd.textContent = myLibrary[i].title
    authorTd.textContent = myLibrary[i].author
    pagesTd.textContent = myLibrary[i].pages
    readLabel = document.createElement("label")
    readToggle = document.createElement("input")
    readToggle.setAttribute("type", "checkbox")
    readToggle.setAttribute("class", "readTg")
    readSpn = document.createElement("span")
    if (myLibrary[i].isRead == "true" || myLibrary[i].isRead == true) {
        isReadTD.textContent = 'Finished'
        readToggle.checked = true;
    }
    if (myLibrary[i].isRead == "false" || myLibrary[i].isRead == false){
        isReadTD.textContent = 'Incomplete'
        readToggle.checked = false
    }
    readToggle.addEventListener('change', (event) =>
    {const { target } = event;
    const tr = target.parentNode.parentNode.parentNode.rowIndex-1
        if(event.target.checked){
        myLibrary[tr].isRead = true;
        localStorage.setItem('books', JSON.stringify(myLibrary))
        tbody.innerHTML = ' ' 
        myLibrary = []
        myLibrary = JSON.parse(localStorage.getItem('books'))
        displayBookCatalog(item)
}
        else {
        myLibrary[tr].isRead = false;
        localStorage.setItem('books', JSON.stringify(myLibrary))
        tbody.innerHTML = ' ' 
        myLibrary = []
        myLibrary = JSON.parse(localStorage.getItem('books'))
        displayBookCatalog(item)
        
        }
    })

    bookCatalog.appendChild(bookRow)
    bookRow.appendChild(titleTd)
    bookRow.appendChild(authorTd)
    bookRow.appendChild(pagesTd)
    bookRow.appendChild(isReadTD)
    bookRow.appendChild(deleteEl)
    //create delete button
    
    deleteBtn = document.createElement("button")
    deleteBtn.setAttribute('class', 'dl-Btn')
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1)
        retrieveBook()
    })

    // create toggle for read

    deleteEl.appendChild(deleteBtn)
    //
    isReadTD.appendChild(readLabel)
    readLabel.appendChild(readToggle)
    readLabel.appendChild(readSpn)
}}


//retrieve books
function retrieveBook() {
tbody = document.querySelector('#catalog')
tbody.innerHTML = ' ' 
if (JSON.parse(localStorage.getItem('books')) == null){ // if library is blank , fill with dummy 
    myLibrary = sampleLibrary
}
else {
bookLibrary = JSON.parse(localStorage.getItem('books'))
myLibrary = []
myLibrary = bookLibrary
myLibrary.proto
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