import { Schema, model } from 'mongoose';

const isbnPattern =
  /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;

const bookSchema = new Schema({
  title: {
    type: String,
    maxLength: 500,
  },
  author: {
    type: String, // message?
    maxLength: [100, 'Author name too long'],
  },
  year: {
    type: Number,
    min: -5000,
    max: 3000,
  },
  price: Number,
  description: {
    type: String,
    maxLength: 5000,
  },
  isbn: {
    type: String,
    match: [isbnPattern, 'Please provide a valid ISBN. {VALUE}'],
    unique: [true, 'A Book with this ISBN already exists.'],
    // unique: (d) => {
    //   console.log(d);
    //   return true;
    // },
  },
  publisher: {
    type: String,
    maxLength: 1000,
  },
  genre: [{ type: String, maxLength: 50 }],
});

bookSchema.index({ title: 'text', author: 'text', description: 'text' });

const BookModel = model('Book', bookSchema);
export default BookModel;
