import express from 'express';
import { getMenulist, postMenulist } from './../controllers/menu';
import { postsController } from '../controllers/posts';

const apiRouter = express();

apiRouter.get('/posts/:commuName/:boardNumber', postsController)
apiRouter.get('/menulist/:commuName/', getMenulist)

apiRouter.post('/menulist/add', postMenulist)
export default apiRouter;