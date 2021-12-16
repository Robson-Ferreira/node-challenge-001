import * as http from 'http';
import * as os from 'os';
import * as bodyParser from 'body-parser';
import Express from 'express';

import Logger from './Logger';

const app = new Express();

export default class ExpressServer {
  constructor() {
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      })
    );
  }

  router(routes) {
    routes(app);
    return this;
  }

  listen(port = process.env.APP_PORT) {
    const welcome = p => () => {
      Logger.info(
        `up and running in ${process.env.NODE_ENV}@:${os.hostname()} on port: ${p}`,
      );
    };
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
