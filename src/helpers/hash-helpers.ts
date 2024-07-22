import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-secret-key'; // Replace with your secret key

export const createHash = (value: string): string => {
  return CryptoJS.HmacSHA256(value, SECRET_KEY).toString();
};

export const verifyHash = (value: string, hash: string): boolean => {
  const newHash = createHash(value);
  return newHash === hash;
};