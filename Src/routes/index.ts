import { Router } from "express";
import { deleteUser, getUsers, registerUser } from "../controllers/usersControllers";
import { createProduct, deleteProduct, getAllProducts, getProductById } from "../controllers/productsControllers";
import { addToCart, getCart } from "../controllers/cartsControllers";

const router: Router = Router();

router.post('/users/register', registerUser)
router.get('/users', getUsers)
router.delete('/users', deleteUser)

//Rutas Productos
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.delete('/products/:id', deleteProduct);

//Rutas Carrito
router.post('/cart', addToCart);
router.get('/cart', getCart)

export default router;