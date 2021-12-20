import * as express from 'express';
import AuthorController from './AuthorController';

export default express
  .Router()
  .post('/', AuthorController.post)
  .get('/', AuthorController.get)
  .put('/', AuthorController.put)
  .delete('/', AuthorController.delete)
