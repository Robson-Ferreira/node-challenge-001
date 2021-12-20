import User from '../../../../database/models/User';
import { saltHashPassword } from '../../../common/passwordHelper';
import UserValidation from './UserValidation';

export default class UserService {
    async validate(operation, data) {
        await UserValidation()[operation].validate(
            data, { abortEarly: false }
        );
    }

    async create(body) {
        await this.validate('create', body);
        const { salt: passwordSalt, passwordHash: userPassword } = saltHashPassword(
          body.userPassword
        );
        const user = await User.query().insert({
            userEmail: body.userLogin,
            active: true,
            userPassword: userPassword,
            passwordSalt: passwordSalt,
        });
        return { ...user, passwordSalt: null, userPassword: null };
    }
}
