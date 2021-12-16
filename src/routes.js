import * as express from 'express';

import NewsRoute from './api/v1/news/NewsRoute';

export default function routes(app) {
  app.use(
    '/api',
    express
      .Router()
      .use('/v1/news', NewsRoute)
  );
}
