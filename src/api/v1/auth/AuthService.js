import User from '../../../../database/models/User';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../../../config/auth';
import { sha512 } from '../../../common/passwordHelper';
import AuthValidation from './AuthValidation';

export default class AuthService {
    async validate(operation, data) {
        await AuthValidation()[operation].validate(
            data, { abortEarly: false }
        );
    }

    async login(data) {
        await this.validate('login', data);
        const user = await User.query().findOne({ userEmail: data.userLogin });
        if (user) {
            const result = sha512(data.userPassword, user.passwordSalt);
            if (result.passwordHash === user.userPassword && user.active) { 
                const token = jwt.sign({
                    ...user,
                    passwordSalt: null,
                    userPassword: null
                }, jwtSecret.secret, {
                    expiresIn: 1500,
                });
                return { ...user, token, passwordSalt: null, userPassword: null };
            } else {
                throw new Error('Incorrect username or password.');
            }
        } else {
            throw new Error('Incorrect username or password.');
        }
    }
}
