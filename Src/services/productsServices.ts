import { IProduct } from './../interfaces/IProduct';
import { products } from "../dbProducts";
import { ProductDto } from "../dto/ProductDto";

export const getAllProductsService = async(): Promise<IProduct[]> => {
    //logica para traer los productos desde la DB (inicialmente simulada)
    
    return products;
}

export const getProductByIdService = async (productId: number):Promise<IProduct | undefined >=> {
    //logica para obtener un producto por ID
    return products.find(product => product.id === productId);
}

export const createProductService = async (productData : ProductDto):Promise<IProduct> =>{
    //input un "productData"
    //logica para crear el producto
    const newProduct: IProduct = {
        id: products.length +1,
        name: productData.name,
        description: productData.description,
        price: productData.price,
        inventory: productData.inventory,
        category_id: productData.category_id,
        creation_date: new Date(),
    };

    products.push(newProduct);
    return newProduct;
}

export const updateProductService = async (id: number, updateData: ProductDto): Promise<IProduct | null> => {
    const index = products.findIndex(product => product.id === id);

    if(index !== -1){
        products[index] = {...products[index], ...updateData};
        return products[index];
    }

    return null;
}

export const deleteProductService = async(id:number): Promise<IProduct | null> => {
   //logica para filtrar el producto por id
   const index = products.findIndex(product => product.id === id);
   if (index !== -1){
    const deletedProduct = products.splice(index, 1)[0];
        return deletedProduct;
   }
   return null;
}