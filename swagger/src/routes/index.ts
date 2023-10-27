import userAccountRouter from './UserAccountRoutes';
import postRouter from './PostRoutes';
import { Router } from 'express';
const routes = Router();

routes.use('/api',userAccountRouter);
routes.use('/api',postRouter);

export default routes;