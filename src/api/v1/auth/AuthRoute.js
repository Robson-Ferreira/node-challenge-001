import * as express from 'express';
import AuthController from './AuthController';

export default express
  .Router()
  .post('/', AuthController.post)
  .post('/create', AuthController.create);
