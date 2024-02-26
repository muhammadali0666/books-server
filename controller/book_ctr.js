const { Books } = require("../model");

Books.sync({ force: false });

const createBook = async (req, res) => {
  try {
    const { author, bookName, description, pageCount, year, genre, publisher } =
      req.body;
    if (
      !author ||
      !bookName ||
      !description ||
      !pageCount ||
      !year ||
      !genre ||
      !publisher
    ) {
      return res.status(200).send({
        msg: "all fields require!",
      });
    }
    await Cars.create({
      author,
      bookName,
      description,
      pageCount,
      year,
      genre,
      publisher,
    });
    return res.status(200).send({
      msg: "Cteated book",
    });
  } catch (err) {
    return res.status(400).send({
      msg: err.message,
    });
  }
};

const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    let Book = await Books.findAll({ where: { id: id } });
    return res.json(Book);
  } catch (err) {
    return res.status(400).send({
      msg: err.message,
    });
  }
};

const getAllBooks = async (_, res) => {
  try {
    let Book = await Books.findAll();
    return res.json(Book);
  } catch (err) {
    return res.status(400).send({
      msg: err.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    await Books.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted book!",
    });
  } catch (err) {
    return res.send({
      msg: err.message,
    });
  }
};

module.exports = {
  createBook,
  getOneBook,
  getAllBooks,
  deleteBook
};
