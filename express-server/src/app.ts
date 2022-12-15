import express from 'express'
import apiRouter from './router/apiRouter';
import reactRouter from './router/reactRouter';

const app = express();

app.use('/',reactRouter);
app.use('/api',apiRouter)

export default app;