import Router from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (_, res) => {
  const user = await User.create({
    name: 'Eugênio Barros',
    email: 'eugenio.barros.jr+outro@gmail.com',
    password_hash: '12312sduiahj18asda',
  });
  return res.json(user);
});

export default routes;
