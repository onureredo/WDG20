import { Router } from 'express';

import { getPosts, createBlogPost, getSinglePost } from '../controllers/blogPostControllers.js';

const blogPostRouter = Router();

blogPostRouter.get('/', getPosts);
blogPostRouter.get('/:id', getSinglePost);
blogPostRouter.post('/', createBlogPost);

export default blogPostRouter;
