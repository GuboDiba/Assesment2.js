const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

// Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBook() {
   for (let i = 0; i < books.length; i++) {
    if (books.isAvailable===true) {
        
    }
    console.log(books[i]);
    
   }
    
}
getAvailableBook()

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBookByAuthor(Author) {
   let bookByAuthor =books[Author]
    console.log(bookByAuthor);
}
getBookByAuthor("Homer")


//No 4
// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// // publicationYear, and isAvailable).
function addNewBook(books) {
    let newbook={ title: 'Born a Crime', author: 'TRevoh Noah', publicationYear: 1951,
    isAvailable: true }
    books.push(newbook)
    console.log(books);
}
addNewBook(books)

//No 5
//Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(title) {
    // let book={ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    // isAvailable: false }
   books.isAvailable=true
    // console.log(books);
}
console.log(books);
returnBook("Great Expectations");

