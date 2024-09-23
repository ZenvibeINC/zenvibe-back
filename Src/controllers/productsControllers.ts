import { Request, Response } from "express";
import { getAllProductsService, getProductByIdService, createProductService, updateProductService, deleteProductService } from "../services/productsServices";
import { IProduct } from "../interfaces/IProduct";
import { ProductDto } from "../dto/ProductDto";

export const getAllProducts = async(req: Request, res: Response) => {
    
    const products: IProduct[] = await getAllProductsService();

    return res.status(200).json(products);
}

export const getProductById = async(req: Request, res: Response) => {
    
    const product :IProduct | undefined = await getProductByIdService(parseInt(req.params.id))
   
    if(product){
        return res.status(200).json(product);
    }

    return res.status(400).json({ message: 'Product Not Found'})
}

export const createProduct = async(req: Request, res: Response) => {
    
    const { name, description, price, inventory, category_id} = req.body;

    const productDto = new ProductDto(name, description, price, inventory, category_id);

    const newProduct: IProduct  = await createProductService(productDto);

    return res.status(200).json(newProduct);

}

export const modifyProduct = async(req: Request, res: Response) => {
    const { name, description, price, inventory, category_id} = req.body;

    const productDto = new ProductDto( name, description, price, inventory, category_id);

    const updatedProduct = await updateProductService(parseInt(req.params.id), productDto)

    if(updatedProduct) {
        return res.status(200).json(updatedProduct)
    }

    return res.status(400).json({ message: 'Product not'})

}

export const deleteProduct = async(req: Request, res: Response) => {
    //logica para eliminar el producto por id y enviar res
    const { id } = req.body;

    const deletedProduct: IProduct | null  = await deleteProductService(id);

    if(deletedProduct) {
        return res.status(200).json( {message: `The ${deletedProduct.name} product was removed`});
    }
    
    return res.status(400).json({ message: `Product with ID ${id}, not found`})
}