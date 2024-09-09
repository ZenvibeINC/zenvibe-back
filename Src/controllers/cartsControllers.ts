import { Request, Response } from "express";
import { addToCartService,getCartServices } from "../services/cartServices";

export const addToCart = async (req: Request, res: Response) => {
    //logica para enviar la res al añadir al carrito
}

export const getCart = async (req: Request, res: Response) => {
    //logica para traer la res del carrito del usuario
}