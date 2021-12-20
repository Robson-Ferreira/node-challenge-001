import * as yup from 'yup';

export default function() {
  return {
    login: yup.object().shape({
      userLogin: yup
        .string()
        .email('Invalid email address.')
        .required('The email field cannot be empty.')
        .typeError('Email must be a valid String.'),
      userPassword: yup
        .string()
        .required('The password field cannot be empty.')
        .typeError('Password must be a valid String.'),
    }),
  };
}
