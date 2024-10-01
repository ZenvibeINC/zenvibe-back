import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts,modifyProduct, getProductById } from "../controllers/productsControllers";

export const productsRouter: Router = Router();

//Rutas Productos
productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getProductById);
productsRouter.put('/:id', modifyProduct);
productsRouter.post('/', createProduct);
productsRouter.delete('/', deleteProduct);


export default productsRouter;