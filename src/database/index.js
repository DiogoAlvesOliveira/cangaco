import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Client from '../models/Client';
import Saller from '../models/Saller';
import Provider from '../models/Provider';
import Product from '../models/Product';

const models = [User, Client, Saller, Provider, Product];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
