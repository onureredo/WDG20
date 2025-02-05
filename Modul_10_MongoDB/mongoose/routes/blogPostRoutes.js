import { Router } from 'express';

import { createBlogPost, getSinglePost } from '../controllers/blogPostControllers.js';

const blogPostRouter = Router();

blogPostRouter.get('/:id', getSinglePost);
blogPostRouter.post('/', createBlogPost);

export default blogPostRouter;
