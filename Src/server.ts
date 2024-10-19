import express, { Application } from 'express';

import productsRouter from './routes/productRoutes';
import router from './routes';
import cartRouter from './routes/cartRoutes';

const cors = require('cors');
const server: Application = express();
server.use(express.json());
server.use(cors({
    origin: 'http://localhost:3000', // Permite solicitudes desde tu frontend
    credentials: true, // Si manejas cookies o autenticación
  }));

//Products
server.use('/products', productsRouter)

server.use('', cartRouter)

server.use(router);

export default server;