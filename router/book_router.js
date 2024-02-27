const {Router} = require("express")
const {getAllBooks, getOneBook, createBook, deleteBook} = require("../controller/book_ctr")

const bookRouter = Router()

bookRouter.get("/books", getAllBooks)
bookRouter.get("/book_one/:id", getOneBook)
bookRouter.post("/create_book", createBook)
bookRouter.delete("/delete_book/:id", deleteBook)

module.exports = bookRouter