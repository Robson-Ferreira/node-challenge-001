import crypto from 'crypto';

const genRandomString = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
};

export const sha512 = (password, salt) => {
  const hash = crypto.createHmac(
    'sha512',
    salt
  );
  hash.update(password);
  const value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value,
  };
};

export const saltHashPassword = (userpassword, createdSalt = null) => {
  const salt =
    createdSalt || genRandomString(16);
  const passwordData = sha512(userpassword, salt);
  return {
    salt: passwordData.salt,
    passwordHash: passwordData.passwordHash,
  };
};
