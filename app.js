import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();
import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import clientRoutes from './src/routes/clientRoutes';
import productRoutes from './src/routes/productRoutes';
import providerRoutes from './src/routes/providerRoutes';
import sallerRoutes from './src/routes/sallerRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/clients/', clientRoutes);
    this.app.use('/products/', productRoutes);
    this.app.use('/providers/', providerRoutes);
    this.app.use('/sallers/', sallerRoutes);
  }
}

export default new App().app;
