import express from 'express';
import { menuController } from './../controllers/menu';
import { postsController } from '../controllers/posts';

const apiRouter = express();

apiRouter.get('/posts/:commuName/:boardNumber', postsController)
apiRouter.get('/menulist/:commuName/', menuController)
export default apiRouter;