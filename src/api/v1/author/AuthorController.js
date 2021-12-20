import AuthorService from './AuthorService';
import ResponseHandler from '../../../common/ResponseHandler';
import Logger from '../../../common/Logger';

export class AuthorController {
    async post(req, res) {
        try {
            Logger.info(`Request -> ${JSON.stringify(req.ip)}`);
            const action = new AuthorService();
            const data = await action.post(req.body);
            return res.json(data);
        } catch (error) {
            Logger.error(error);
            ResponseHandler.error(res, error);
        }
    }

    async get(req, res) {
        try {
            Logger.info(`Request -> ${JSON.stringify(req.ip)}`);
            Logger.info(`Logged User -> ${req.loggedUser}`);
            const action = new AuthorService();
            const data = await action.get(req.query);
            return res.json(data);
        } catch (error) {
            Logger.error(error);
            ResponseHandler.error(res, error);
        }
    }

    async put(req, res) {
        try {
            Logger.info(`Request -> ${JSON.stringify(req.ip)}`);
            const action = new AuthorService();
            const data = await action.post(req.params);
            return res.json(data);
        } catch (error) {
            Logger.error(error);
            ResponseHandler.error(res, error);
        }
    }

    async delete(req, res) {
        try {
            Logger.info(`Request -> ${JSON.stringify(req.ip)}`);
            const action = new AuthorService();
            const data = await action.delete(req.params);
            return res.json(data);
        } catch (error) {
            Logger.error(error);
            ResponseHandler.error(res, error);
        }
    }
}

export default new AuthorController();
