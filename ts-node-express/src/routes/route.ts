import { Router } from 'express';
import testProductRouter from './testProduct.route';

const routes = Router();

// define the base path and the router that's going to be called
routes.use('/products', testProductRouter);

// export the route
export default routes;