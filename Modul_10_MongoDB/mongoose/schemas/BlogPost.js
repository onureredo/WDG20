import { Schema, model } from 'mongoose';

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
  },
  content: {
    type: String,
    required: [true, 'Please enter some content'],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
  },
});

const BlogPost = model('BlogPost', blogPostSchema);
export default BlogPost;
