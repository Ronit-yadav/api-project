//initialize express
const express = require("express");

//database

var bodyParser = require("body-parser");

const database = require("./database");

const { isBooleanObject } = require("util/types");



const bookman = express();
bookman.use(bodyParser.urlencoded({extended: true}));


/* 
    Route         : /
    Description   : get all the books
    Access        : Public
    Parameter     : None
    Methods       : get
*/

bookman.get("/", (req,res) => {
    return res.json({books: database.books});
});


/* 
    Route         : /is
    Description   : get specific book on ISBN
    Access        : Public
    Parameter     : isbn
    Methods       : get
*/

bookman.get("/is/:isbn",(req,res) => {
    const getSpecificBook = database.books.filter((book) => book.ISBN === req.params.isbn
    )
    if(getSpecificBook.length === 0){
        return res.json({error : `No Book Found for isbn of ${req.params.isbn}`});
    }
    else{
        return res.json({Book : getSpecificBook})
    }
})


/* 
    Route         : /c
    Description   : get specific book on category
    Access        : Public
    Parameter     : category
    Methods       : get
*/

bookman.get("/c/:category" ,(req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    )
    if(getSpecificBook.length === 0){
        return res.json({error : `no book category found of ${req.params.category}`})
    }
    else{
        return res.json({category : getSpecificBook});
    }
})

/* 
    Route         : /lang
    Description   : get specific book on language
    Access        : Public
    Parameter     : language
    Methods       : get
*/

bookman.get("/lang/:language" ,(req,res)=>{
    const getSpecificBook = database.books.filter((book) => 
        book.language.includes(req.params.language)
    )
    if(getSpecificBook.length === 0){
        return res.json({error : `no book found of language ${req.params.language}`})
    }
    else{
        return res.json({Book : getSpecificBook})
    }
})


/* 
    Route         : /author
    Description   : get all author
    Access        : Public
    Parameter     : none
    Methods       : get
*/

bookman.get("/author",(req,res) => {
    return res.json({author : database.author});
})


/* 
    Route         : /author/id
    Description   : get a specific author
    Access        : Public
    Parameter     : id
    Methods       : get
*/

bookman.get("/author/id/:id", (req,res) => {
    const getSpecificAuthor = database.author.filter(
        (auth) => auth.id.toString().includes(req.params.id)
    )
    if(getSpecificAuthor.length === 0){
        return res.json({error : `not found author id ${req.params.id}`});
    }
    else{
        return res.json({author : getSpecificAuthor});
    }
})

/*
Route            /author/book
Description      Get all authors based on books
Access           PUBLIC
Parameter        isbn
Methods          GET
*/

bookman.get("/author/book/:isbn", (req,res) => {
    const getSpecificAuthor = database.author.filter(
      (author) => author.books.includes(req.params.isbn)
    );
  
    if(getSpecificAuthor.length === 0){
      return res.json({
        error: `No author found for the book of ${req.params.isbn}`
      });
    }
    return res.json({authors: getSpecificAuthor});
});

/*
Route            /public
Description      Get all publication
Access           PUBLIC
Parameter        none
Methods          GET
*/


bookman.get("/public",(req,res) => {
    const getPublication = database.publication;
    return res.json({publication : getPublication})
})

bookman.listen(1111,() => {
    console.log("Server is running");
})
