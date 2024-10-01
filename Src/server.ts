import express, { Application } from 'express';
import productsRouter from './routes/productRoutes';
import router from './routes';


const server: Application = express();
server.use(express.json());

//Products
server.use('/products', productsRouter)

server.use(router);

export default server;