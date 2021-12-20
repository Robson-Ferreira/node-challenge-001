import * as express from 'express';

import AuthRoute from './api/v1/auth/AuthRoute';
import UserRoute from './api/v1/user/UserRoute';

export default function routes(app) {
  app.use(
    '/api',
    express
      .Router()
      .use('/login', AuthRoute)
      .use('/sign-up', UserRoute)
  );
}
