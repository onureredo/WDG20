import { Schema, model } from 'mongoose';

const readingObject = new Schema({
  bookRefId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
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
    maxLength: [3, 'First name should be max 3 characters long.'],
  },
  lastName: String,
  readingList: [readingObject],
});

const UserModel = model('User', userSchema);
export default UserModel;
