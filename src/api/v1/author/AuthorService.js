import User from '../../../../database/models/User';
// import AuthorVailidation from './AuthorVailidation';

export default class AuthorService {
    // async validate(operation, data) {
    //     await AuthorVailidation()[operation].validate(
    //         data, { abortEarly: false }
    //     );
    // }

    async post(body) {
        // await this.validate('create', body);
        console.log('IM HERE');
    }

    async get(query) {
        console.log('IM HEREEEEEE');
        return 'Testando'
    }
}
