import { Router } from 'express';
import testProductController from '../controller/testProduct.controller';

const productRouter = Router();

// specifies the endpoint and the method to call
productRouter.get('/', testProductController.getAll);

// export the router
export default productRouter;