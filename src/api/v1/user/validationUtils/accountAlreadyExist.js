export default ({ model }) => ({
  name: 'accountAlreadyExist',
  message: 'E-mail already registered.',
  test: async userLogin => {
    const hasDataAlready = await model.query().findOne({
      userEmail: userLogin,
    });
    return hasDataAlready === undefined ? true : false;
  },
});
