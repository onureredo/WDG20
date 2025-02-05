import { Router } from 'express';

import { createBlogPost } from '../controllers/blogPostControllers.js';

const blogPostRouter = Router();

blogPostRouter.post('/', createBlogPost);

export default blogPostRouter;
