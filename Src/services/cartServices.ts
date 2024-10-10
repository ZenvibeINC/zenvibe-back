import { ICart } from './../interfaces/ICart';
import { carts } from "../dbCarts";
import { AddToCartDto } from "../dto/AdToCartDto"
import { products } from '../dbProducts';
import { ICartProduct } from '../interfaces/ICartProduct';

export const addToCartService = async (cartData: AddToCartDto): Promise < ICart | null> => {
    //input (userID, productId, quantity)
    //logica para agregar el producto al carrito

    const {userId, productId, quantity} = cartData;

    let userCart = carts.find(cart=> cart.userId === userId);

    if(!userCart) {
        userCart = {userId, products: [], totalPrice: 0};
        carts.push(userCart);
    }

    const product = products.find(prod => prod.id === productId);

    if(!product) {
        throw new Error('Product not found');
    }

    const productInCart = userCart.products.find(item => item.productId === productId);

    if(productInCart) {

        productInCart.quantity += quantity;
    } else {
        const newCartProduct: ICartProduct = {
            productId: product.id,
            name: product.name,
            quantity,
            price: product.price
        };
        userCart.products.push(newCartProduct);
    }

    userCart.totalPrice = userCart.products.reduce((total, item) => total + item.price * item.quantity, 0);

    return userCart;
};

export const getCartServices = async (userId: number): Promise<ICart | null>=> {
    //userId
    //logica para obtener el carrito del usuario
    const userCart = carts.find (cart => cart.userId === userId);

    if(!userCart) {
        return null
    };

    return userCart;
}

export const deleteCartService = async (userId: number, productId: number): Promise <ICart | null> => {

const userCart = carts.find (cart => cart.userId === userId);

if(!userCart){
    return null;
}

const productIndex = userCart.products.findIndex(product => product.productId === productId);

if(!productId){
    return null;
}

userCart.products.splice(productIndex, 1);

userCart.totalPrice = userCart.products.reduce((total, item) => {
    return total + item.price* item.quantity
}, 0)

return userCart;

}