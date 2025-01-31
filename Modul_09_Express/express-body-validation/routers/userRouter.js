import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/users.js';
import { validateSchema } from '../middelwares/validateSchema.js';
import UserSchema from '../schemas/User.js';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(validateSchema(UserSchema), createUser);
userRouter.route('/:id').get(getUserById).put(validateSchema(UserSchema), updateUser).delete(deleteUser);

export default userRouter;
