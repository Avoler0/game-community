import express from 'express';
import { postsController } from '../controllers/posts';

const apiRouter = express();

apiRouter.get('/posts/:commuName/:boardNumber', postsController)

export default apiRouter;