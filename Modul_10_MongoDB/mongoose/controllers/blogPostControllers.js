import BlogPost from '../schemas/BlogPost.js';
import Author from '../schemas/Author.js';

//  create blog post
const createBlogPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const blogPost = await BlogPost.create({ title, content, author });

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

export { createBlogPost };
