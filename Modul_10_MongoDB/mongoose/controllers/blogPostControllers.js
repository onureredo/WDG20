import BlogPost from '../schemas/BlogPost.js';
import Author from '../schemas/Author.js';

const getSinglePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const blogPost = await BlogPost.findById(id).populate('author', 'firstName -_id images.thumb');

    res.json({ data: blogPost });
  } catch (error) {
    next(error);
  }
};

//  create blog post
const createBlogPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const blogPost = await BlogPost.create({ title, content, author });

    // Author.updateMany({}, { $push: { posts: blogPost._id })
    const foundAuthor = await Author.findByIdAndUpdate(author, { $push: { posts: blogPost._id } });

    if (!foundAuthor) {
      await BlogPost.findByIdAndUpdate(blogPost._id);
      return res.status(404).json({ msg: 'Blog Post was not created' });
    }

    res.json({ data: blogPost });
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      res.status(400).json({ msg: 'Input for Blog Post invalid' });
    } else {
      res.status(500).json({ msg: 'Internal Server error' });
    }
  }
};

export { createBlogPost, getSinglePost };
