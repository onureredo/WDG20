import { Router } from 'express';
import { createAuthor, getAuthors, getAuthor, updateAuthor, deleteAuthor } from '../controllers/authorControllers.js';

const authorRouter = Router();

authorRouter.post('/', createAuthor);
authorRouter.get('/', getAuthors);
authorRouter.get('/:id', getAuthor);
authorRouter.put('/:id', updateAuthor);
authorRouter.delete('/:id', deleteAuthor);

export default authorRouter;
