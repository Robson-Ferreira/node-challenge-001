import * as express from 'express';

import AuthenticationHandler from './api/middlewares/AuthenticationHandler';
import AuthRoute from './api/v1/auth/AuthRoute';
import UserRoute from './api/v1/user/UserRoute';
import AuthorRoute from './api/v1/author/AuthorRoute';

export default function routes(app) {
  app.use(
    '/api',
    express
      .Router()
      .use('/login', AuthRoute)
      .use('/sign-up', UserRoute)
      .use('/admin/authors', AuthenticationHandler, AuthorRoute)
  );
}
