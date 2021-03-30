import Router from 'express';

const routes = new Router();

routes.get('/', (_, res) => res.json({ message: 'Hello World' }));

export default routes;
