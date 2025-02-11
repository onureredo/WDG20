import { Router } from 'express';
import { getAll, getOneById, createOne, updateOne, deleteOne } from '../controllers/crudFactory.js';
import {
  addBookToReadingList,
  updateBookStatus,
  deleteFromReadingList,
  getUserById,
} from '../controllers/userControllers.js';
import { userSignup, userLogin, userLogout, getMe } from '../controllers/authControllers.js';
import authenticate from '../middlewares/authenticate.js';

import UserModel from '../models/UserModel.js';

const userRouter = Router();

userRouter.post('/signup', userSignup);
userRouter.post('/login', userLogin);
userRouter.post('/logout', userLogout);
userRouter.get('/me', authenticate, getMe);

userRouter.get('/', getAll(UserModel));
// userRouter.get('/:id', getOneById(UserModel));
userRouter.get('/:id', authenticate, getUserById);
// userRouter.post('/', createOne(UserModel));
userRouter.put('/:id', updateOne(UserModel));
userRouter.delete('/:id', deleteOne(UserModel));

userRouter.post('/:id/books', addBookToReadingList);
userRouter.put('/:id/books/:bookID', updateBookStatus);
userRouter.delete('/:id/books/:bookID', deleteFromReadingList);

export default userRouter;
