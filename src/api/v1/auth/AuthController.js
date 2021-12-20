import AuthService from './AuthService';
import ResponseHandler from '../../../common/ResponseHandler';
import Logger from '../../../common/Logger';

export class AuthController {
    async login(req, res) {
        try {
            Logger.info(`Request -> ${JSON.stringify(req.ip)}`);
            const action = new AuthService();
            const data = await action.login(req.body);
            return res.json(data);
        } catch (error) {
            Logger.error(error);
            ResponseHandler.error(res, error);
        }
    }
}

export default new AuthController();
