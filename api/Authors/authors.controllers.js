const Author = require("../../models/Author");

exports.authorsCreate = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

exports.authorsDelete = async (req, res) => {
  try {
    await Author.findByIdAndRemove({ _id: req.author.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.authorsUpdate = async (req, res) => {
  try {
    await Author.findByIdAndUpdate(req.author.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.authorsGet = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    next(error);
  }
};
