import { Router } from "express";
import { deleteUser, getUsers, registerUser } from "../controllers/usersControllers";

const router: Router = Router();

router.post('/users/register', registerUser)
router.get('/users', getUsers)
router.delete('/users', deleteUser)

export default router;