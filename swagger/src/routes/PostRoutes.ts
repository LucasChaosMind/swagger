import {Router} from 'express';
import { createPost, getPosts } from '../controllers/PostController';

const postRouter = Router();

postRouter.post('/api/posts', createPost);
postRouter.get('/api/posts', getPosts);

export default postRouter;