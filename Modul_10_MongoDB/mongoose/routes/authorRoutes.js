import { Router } from 'express';
import {
  getAuthorsPostById,
  createAuthor,
  getAuthors,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} from '../controllers/authorControllers.js';

const authorRouter = Router();

authorRouter.post('/', createAuthor);
authorRouter.get('/', getAuthors);
authorRouter.get('/:id', getAuthor);
authorRouter.put('/:id', updateAuthor);
authorRouter.delete('/:id', deleteAuthor);

// localhost:port/<Hauptressource>/<ID für Hauptressource>/<Unterressource>/<ID  für Unterressource>
// localhost:port/authors/:id/images/:imageID
// localhost:port/authors/:id/posts/:postID/title/

// localhost:port/authors/:id/books
// localhost:port/authors/posts/

authorRouter.get('/:authorID/posts/:postID', getAuthorsPostById);

export default authorRouter;
