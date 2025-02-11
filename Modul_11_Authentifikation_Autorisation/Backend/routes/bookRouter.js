import { Router } from 'express';
import { getAll, getOneById, createOne, updateOne, deleteOne } from '../controllers/crudFactory.js';
import BookModel from '../models/BookModel.js';
import authenticate from '../middlewares/authenticate.js';
import hasPermissions from '../middlewares/hasPermissions.js';

const bookRouter = Router();
const restricted = [authenticate, hasPermissions('admin', 'author')];

bookRouter.get('/', getAll(BookModel));
bookRouter.get('/:id', getOneById(BookModel));
bookRouter.post('/', restricted, createOne(BookModel));
bookRouter.put('/:id', restricted, updateOne(BookModel));
bookRouter.delete('/:id', restricted, deleteOne(BookModel));

export default bookRouter;
