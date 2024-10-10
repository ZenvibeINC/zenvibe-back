import { Request, Response } from "express";
import { addToCartService,getCartServices, deleteCartService } from "../services/cartServices";
import { AddToCartDto } from "../dto/AdToCartDto";

export const addToCart = async (req: Request, res: Response) => {
    //logica para enviar la res al añadir al carrito
    try{

        const cardData: AddToCartDto = req.body;
        const updatedCart = await addToCartService(cardData);

        if(!updatedCart) {
            return res.status(400).json({ message: "Failed to add product to cart"})
        }

        return res.status(200).json(updatedCart);

    } catch(error) {

        res.status(500).json({ message: error });
    }
}

export const getCart = async (req: Request, res: Response) => {
    //logica para traer la res del carrito del usuario

    try {

        const userId = parseInt(req.params.userId);
        const cart = await getCartServices(userId);

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        return res.status(200).json(cart);
        
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const deleteProductFromCart = async (req: Request, res: Response ) => {

   const userId = parseInt(req.params.userId);
   const productId = parseInt(req.params.productId);

   const updatedCart = await deleteCartService(userId, productId);

   if(!updatedCart) {
    return res.status(400).json ({ message: "Product or cart not found"});

   }

   return res.status(200).json(updatedCart);
}