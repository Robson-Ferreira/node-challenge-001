import User from '../../../../database/models/User';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../../../config/auth';
import { sha512, saltHashPassword } from '../../../common/passwordHelper';
import AuthValidation from './AuthValidation';

export default class AuthService {
    async validate(operation, data) {
        await AuthValidation()[operation].validate(
            data, { abortEarly: false }
        );
    }

    async post(data) {
        await this.validate('login', data);
        const user = await User.query().findOne({ userEmail: data.userLogin });
        if (user) {
            const result = sha512(data.userPassword, user.passwordSalt);
            if (result.passwordHash === user.userPassword && user.active) { 
                const secret = Math.floor(Math.random() * 100000000) + 1;
                const token = jwt.sign(secret, jwtSecret.secret);
                return { ...user, token, passwordSalt: null, userPassword: null };
            } else {
                throw new Error('Incorrect username or password.');
            }
        } else {
            throw new Error('Incorrect username or password.');
        }
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
        const data =  { ...user, passwordSalt: null, userPassword: null };
        return data;
    }
}
