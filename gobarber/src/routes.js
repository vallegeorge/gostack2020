import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'George Valle',
    email: 'georgsilva@gmail.com',
    password_hash: '12323534',
  });

  res.json(user);
});

export default routes;
