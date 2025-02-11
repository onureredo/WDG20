import { Schema, model } from 'mongoose';

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const readingObject = new Schema({
  bookRefId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    unique: true,
  },
  status: {
    type: String,
    enum: ['read', 'pending', 'lend', 'not read', 'lost', 'on wishlist'],
    default: 'not read',
  },
});

const userSchema = new Schema({
  firstName: {
    type: String,
    maxLength: [50, 'First name too long. Max 50 characters.'],
  },
  lastName: String,
  readingList: [readingObject],
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    unique: [true, 'Email already in use'],
    required: [true, 'Please provide an email'],
    match: [emailRegex, 'Email not valid'],
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'author'],
    default: 'user',
  },
});

const UserModel = model('User', userSchema);
export default UserModel;
