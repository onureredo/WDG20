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
import hasPermissions from '../middlewares/hasPermissions.js';

const userRouter = Router();

const restricted = [authenticate, hasPermissions('self', 'admin')];

userRouter.post('/signup', userSignup);
userRouter.post('/login', userLogin);
userRouter.post('/logout', userLogout);
userRouter.get('/me/:id', restricted, getMe);

userRouter.get('/', getAll(UserModel));
userRouter.get('/:id', restricted, getUserById);
// userRouter.post('/', createOne(UserModel));
userRouter.put('/:id', restricted, updateOne(UserModel));
userRouter.delete('/:id', restricted, deleteOne(UserModel));

userRouter.post('/:id/books', restricted, addBookToReadingList);
userRouter.put('/:id/books/:bookID', restricted, updateBookStatus);
userRouter.delete('/:id/books/:bookID', restricted, deleteFromReadingList);

export default userRouter;
