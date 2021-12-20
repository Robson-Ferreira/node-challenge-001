import setupDatabase from '../database/database-setup';
import config from '../config/environment';
import Server from './common/ExpressServer';
import routes from './routes';

setupDatabase();

export default new Server().router(routes).listen(config.App.port);
