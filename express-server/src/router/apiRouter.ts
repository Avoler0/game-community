import express from 'express';
import path from 'path';

const apiRouter = express();



// apiRouter.use(express.static(path.join(__dirname, '../react_client/build/')));

apiRouter.get('/s', (req,res) => {
  res.json({data:'하이'})
})

export default apiRouter;