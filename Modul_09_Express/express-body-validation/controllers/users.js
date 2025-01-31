import Post from '../models/Post.js';
import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// // "express": "^5.0.0",
// export const createUser = async (req, res) => {
//   const {
//     body: { firstName, lastName, email },
//   } = req;
//   if (!firstName || !lastName || !email) throw new ErrorResponse('firstName, lastName, and email are required', 400);
//   const found = await User.findOne({ where: { email } });
//   if (found) throw new ErrorResponse('User with that email already exists', 409);
//   const user = await User.create(req.body);
//   res.json(user);
// };

// "express": "^4.0.0",
export const createUser = async (req, res, next) => {
  const {
    body: { firstName, lastName, email },
  } = req;
  try {
    // if (!firstName || !lastName || !email) return res.status(400).json({ message: 'firstName, lastName, and email are required' });
    // if (!firstName || !lastName || !email) throw new ErrorResponse('firstName, lastName, and email are required', 400);
    const found = await User.findOne({ where: { email } });
    if (found) throw new ErrorResponse('User with that email already exists', 409);
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// "express": "^4.0.0",
// mit asyncHandler
// export const createUser = asyncHandler(async (req, res, next) => {
//   const {
//     body: { firstName, lastName, email },
//   } = req;
//   if (!firstName || !lastName || !email) throw new ErrorResponse('firstName, lastName, and email are required', 400);
//   const found = await User.findOne({ where: { email } });
//   if (found) throw new ErrorResponse('User with that email already exists', 409);
//   const user = await User.create(req.body);
//   res.json(user);
// });

export const getUserById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByPk(id, { include: Post });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const {
    body: { firstName, lastName, email },
    params: { id },
  } = req;
  if (!firstName || !lastName || !email) throw new Error('firstName, lastName, and email are required');
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');
  await user.update(req.body);
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');
  await user.destroy();
  res.json({ message: 'User deleted' });
};
