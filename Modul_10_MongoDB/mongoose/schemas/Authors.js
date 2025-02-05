import { Schema, model } from 'mongoose';

const urlPattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

const AuthorSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'writer'],
    default: 'user',
  },
  images: {
    thumb: {
      type: String,
      default:
        'https://res.cloudinary.com/dvniua4ab/image/upload/c_crop,h_200,q_63,r_30,w_200/v1738597956/doh3dd3gliqihwvudapz.avif',
      match: [urlPattern, 'Please provide a proper URL'],
    },
    large: {
      type: String,
      default:
        'https://res.cloudinary.com/dvniua4ab/image/upload/c_crop,h_200,q_63,r_30,w_200/v1738597956/doh3dd3gliqihwvudapz.avif',
    },
  },
});

const Author = model('Author', AuthorSchema);
export default Author;
