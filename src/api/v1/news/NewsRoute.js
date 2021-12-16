import * as express from 'express';
import NewsController from './NewsController';

export default express
  .Router()
  .get('/', NewsController.get);
