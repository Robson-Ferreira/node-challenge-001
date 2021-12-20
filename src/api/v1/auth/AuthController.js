import AuthService from './AuthService';
import ResponseHandler from '../../../common/ResponseHandler';
import Logger from '../../../common/Logger';

export class AuthController {
    async post(req, res) {
        try {
            Logger.info(`Request -> ${JSON.stringify(req.ip)}`);
            const action = new AuthService();
            const data = await action.post(req.body);
            return res.json(data);
        } catch (error) {
            Logger.error(error);
            ResponseHandler.error(res, error);
        }
    }

    async create(req, res) {
        try {
            Logger.info(`Request -> ${JSON.stringify(req.ip)}`);
            const action = new AuthService();
            const data = await action.create(req.body);
            return res.json(data);
        } catch (error) {
            Logger.error(error);
            ResponseHandler.error(res, error);
        }
    }
}

export default new AuthController();
