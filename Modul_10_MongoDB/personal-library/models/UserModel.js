import { Schema, model } from 'mongoose';

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
});

const UserModel = model('User', userSchema);
export default UserModel;
