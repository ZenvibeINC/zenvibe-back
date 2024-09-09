import { Request, Response } from "express";
import { getAllProductsService, getProductByIdService, createProductService, deleteProductService } from "../services/productsServices";

export const getAllProducts = async(req: Request, res: Response) => {
    //logica para traer los usuarios con res
}

export const getProductById = async(req: Request, res: Response) => {
    //logica para traer el user por ID con res
}

export const createProduct = async(req: Request, res: Response) => {
    //logica para crear el producto y enviar la respuesta con res
}

export const deleteProduct = async(req: Request, res: Response) => {
    //logica para eliminar el producto por id y enviar res
}