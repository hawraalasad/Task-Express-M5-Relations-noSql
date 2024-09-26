const Tag = require("../../models/Tag");

exports.tagsGet = async (req, res) => {
  try {
    const tags = await Tag.find().populate();
    res.json(tags);
  } catch (error) {
    next(error);
  }
};

exports.tagsCreate = async (req, res) => {
  try {
    const { authorId } = req.params;
    const tagInfo = {
      ...req.body,
      author: authorId,
    };
    const newTag = await Tag.create(tagInfo);

    res.status(201).json(newTag);
  } catch (error) {
    next(error);
  }
};
