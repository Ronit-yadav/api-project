Bookman API
Bookman API is a Node.js Express application that serves as a book management system. It provides endpoints to interact with books, authors, and publications.

Requirements

Books
Get all books
Get a specific book by ISBN
Get a list of books based on category
Get a list of books based on language
Authors
Get all authors
Get a specific author by ID
Get a list of authors based on books they've authored
Publications
Get all publications
Get a specific publication
Get a list of publications based on a book

** node pakckage to installed in terminal window **
1) npm i node.
2) npm i nodemon.
3) npm i express.
4) npm init.
   use npx nodemon index.js to run file


Endpoints
Books
Get all books: GET /
Get a specific book by ISBN: GET /is/:isbn
Get books by category: GET /c/:category
Get books by language: GET /lang/:language
Authors
Get all authors: GET /author
Get a specific author by ID: GET /author/id/:id
Get authors based on books: GET /author/book/:isbn
Publications
Get all publications: GET /public
Get a specific publication: GET /public/:id
Get publications based on a book: GET /public/book/:isbn
Usage
Replace :isbn, :category, :language, and :id with actual values in the URLs to get the desired results.
For authors, replace :isbn with the ISBN of the book.
Contributing
Contributions are welcome! Please feel free to fork this repository, make changes, and submit pull requests.
