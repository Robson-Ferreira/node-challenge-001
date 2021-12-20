import * as express from 'express';
import UserController from './UserController';

export default express
  .Router()
  .post('/', UserController.create)
