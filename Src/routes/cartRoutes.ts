import { Router } from "express";
import { addToCart, deleteProductFromCart, getCart } from "../controllers/cartsControllers";

export const cartRouter: Router = Router();

cartRouter.post("/cart", addToCart);
cartRouter.get("/cart/:userId", getCart);
cartRouter.delete("/cart/ :userId/:productId", deleteProductFromCart);

export default cartRouter;