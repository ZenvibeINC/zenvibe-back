import { Router } from "express";
import { deleteUser, getUsers, registerUser } from "../controllers/usersControllers";
import { createOrder, getOrderHistory } from "../controllers/orderControllers";

export const router: Router = Router();

router.post('/users/register', registerUser)
router.get('/users', getUsers)
router.delete('/users', deleteUser)



//Rutas Orders
router.post('/order', createOrder);
router.get('/orders', getOrderHistory);

export default router;