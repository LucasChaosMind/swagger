import {Router} from 'express';
import { createUser, getUsers } from '../controllers/UserAccountController';

const userAccountRouter = Router();

userAccountRouter.post('/users', createUser);
userAccountRouter.get('/users', getUsers);

export default userAccountRouter;