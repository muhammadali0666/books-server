const { Authors } = require("../model");

Authors.sync({ force: false });

const addAuthor = async (req, res) => {
  try {
    const { fullName, img, birthYear, bio, creativity } =
      req.body;
    if (
      !fullName ||
      !birthYear ||
      !img ||
      !bio ||
      !creativity 
    ) {
      return res.status(200).send({
        message: "all fields require!",
      });
    }
    await Authors.create({
      fullName, img, birthYear, bio, creativity
    });
    return res.status(200).send({
      message: "Added author",
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};

const getOneAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    let Author = await Authors.findAll({ where: { id: id } });
    return res.json(Author);
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};

const getAllAuthors = async (_, res) => {
  try {
    let Author = await Authors.findAll();
    return res.json(Author);
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    await Authors.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      message: "deleted author!",
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

module.exports = {
  getOneAuthor,
  getAllAuthors,
  addAuthor,
  deleteAuthor
};
