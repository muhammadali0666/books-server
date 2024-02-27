const {Router} = require("express")
const {getAllAuthors, getOneAuthor, addAuthor, deleteAuthor} = require("../controller/author_ctr")

const authorRouter = Router()

authorRouter.get("/authors", getAllAuthors)
authorRouter.get("/author_one/:id", getOneAuthor)
authorRouter.post("/add_author", addAuthor)
authorRouter.delete("/delete_author/:id", deleteAuthor)

module.exports = authorRouter