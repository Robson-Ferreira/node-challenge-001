import UserService from './UserService';
import ResponseHandler from '../../../common/ResponseHandler';
import Logger from '../../../common/Logger';

export class UserController {
    async create(req, res) {
        try {
            Logger.info(`Request -> ${JSON.stringify(req.ip)}`);
            const action = new UserService();
            const data = await action.create(req.body);
            return res.json(data);
        } catch (error) {
            Logger.error(error);
            ResponseHandler.error(res, error);
        }
    }
}

export default new UserController();
