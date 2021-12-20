import checkAccountAlreadyExist from './validationUtils/accountAlreadyExist';
import User from '../../../../database/models/User';
import * as yup from 'yup';

export default function() {
  return {
    create: yup.object().shape({
      userLogin: yup
        .string()
        .email('Invalid email address.')
        .required('userLogin is a required field.')
        .typeError('Email must be a valid String.')
        .test(checkAccountAlreadyExist({ model: User })),
      userPassword: yup
        .string()
        .required('userPassword is a required field.')
        .typeError('Password must be a valid String.'),
      passwordConfirmation: yup
        .string()
        .required('passwordConfirmation is a required field.')
        .oneOf([yup.ref('userPassword'), null], 'Passwords must match.'),
    }),
  };
}
