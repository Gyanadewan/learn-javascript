

function checkBookId (books,id){
    const book = books.find(book => book.id === id);

    if (!book) {
        console.log("book Id not found!")
        return book;
    }
 const newBooks = []

  for (let book of books){
     if (book.id !== id ){
        newBooks.push(book)
     }
  }


  return newBooks;

}
const books = [
    {name: "King of man", id: 1},
    {name: "Hacker", id: 2},
    {name: "The Sky", id: 3},
    {name: "Alone moon", id: 4},
]

console.log(checkBookId(books,8))
