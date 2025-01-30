import { Router } from 'express';
import morgan from 'morgan';
import { getPosts, createPost, getPostById, updatePost, deletePost } from '../controllers/post.js';

const postRouter = Router();

postRouter.use(morgan('tiny'));

postRouter.get('/', morgan('dev'), getPosts);
postRouter.post('/', createPost);
postRouter.get('/:id', getPostById);
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);

export default postRouter;
