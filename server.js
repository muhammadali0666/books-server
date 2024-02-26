const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const bookRouter = require("./router/book_router")
const authorRouter = require("./router/author_router")

const app = express()
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;


app.use(express.json());

///////////////////////// router
app.use(bookRouter)
app.use(authorRouter)


app.listen(PORT, () => {
  console.log(`server is running on the ${PORT} port`);
})