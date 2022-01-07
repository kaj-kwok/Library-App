//set up constructor
function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = read;
}

function addBooktoLibrary(title, author, pages, read) {
    book = new books(title, author, pages, read) 
    return myLibrary.push(book);
}

const myLibrary = [ 
    {book: {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pages: 229,
        isRead: "true",
    }
    },
    {book: {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 100,
        isRead: "false",
    }
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
})


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