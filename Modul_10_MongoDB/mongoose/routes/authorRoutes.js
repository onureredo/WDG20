import { Router } from 'express';
import Author from '../schemas/Authors.js';

const authorRouter = Router();

authorRouter.post('/', async (req, res, next) => {
  const { email } = req.body;

  try {
    const author = await Author.create({ email });
    console.log(author);
    res.status(201).json({ author });
  } catch (error) {
    next(error);
  }
});

authorRouter.get('/', async (req, res, next) => {
  try {
    const authors = await Author.find().lean();
    // console.log(authors);
    // authors.firstName = 'Hinzugefügt';
    // authors.save();
    res.json({ authors });
  } catch (error) {
    next(error);
  }
});

authorRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id).lean();
    res.json({ author });
  } catch (error) {
    next(error);
  }
});

authorRouter.put('/:id', async (req, res, next) => {
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
});

authorRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const author = await Author.findByIdAndDelete(id);
    if (!author) return res.status(404).json({ msg: 'Deletion failed, Author not found' });
    res.json({ msg: 'Deletion successful', author });
  } catch (error) {
    next(error);
  }
});

export default authorRouter;
