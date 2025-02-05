import Author from '../schemas/Author.js';

// Get all authors
const getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().lean();
    // console.log(authors);
    // authors.firstName = 'Hinzugefügt';
    // authors.save();
    res.json({ authors });
  } catch (error) {
    next(error);
  }
};

//  Get single author
const getAuthor = async (req, res, next) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id).lean();
    res.json({ author });
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  const { email } = req.body;
  try {
    const author = await Author.create({ email });
    console.log(author);
    res.status(201).json({ author });
  } catch (error) {
    next(error);
  }
};

// Update Author
const updateAuthor = async (req, res, next) => {
  const { id } = req.params;
  const { email, firstName, lastName, thumb } = req.body;
  try {
    const author = await Author.findByIdAndUpdate(
      id,
      { $set: { email, firstName, lastName, 'images.thumb': thumb } },
      { new: true, runValidators: true }
    );
    res.json({ author });
  } catch (error) {
    next(error);
  }
};

// Delete Author
const deleteAuthor = async (req, res, next) => {
  const { id } = req.params;
  try {
    const author = await Author.findByIdAndDelete(id);
    if (!author) return res.status(404).json({ msg: 'Deletion failed, Author not found' });
    res.json({ msg: 'Deletion successful', author });
  } catch (error) {
    next(error);
  }
};

export { createAuthor, getAuthors, getAuthor, updateAuthor, deleteAuthor };
