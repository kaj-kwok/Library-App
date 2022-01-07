//set up constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = read;
}

const myLibrary = [ 
    {   title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pages: 229,
        isRead: "read",
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 100,
        isRead: "notRead",
    },
];

/// modal section
document.querySelector('#add-book').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex';
})

