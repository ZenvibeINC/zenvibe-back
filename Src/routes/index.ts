import { Router } from "express";
import { deleteUser, getUsers, registerUser } from "../controllers/usersControllers";
import { addToCart, getCart } from "../controllers/cartsControllers";
import { createOrder, getOrderHistory } from "../controllers/orderControllers";

export const router: Router = Router();

router.post('/users/register', registerUser)
router.get('/users', getUsers)
router.delete('/users', deleteUser)

//Rutas Carrito
router.post('/cart', addToCart);
router.get('/cart', getCart);

//Rutas Orders
router.post('/order', createOrder);
router.get('/orders', getOrderHistory);

export default router;