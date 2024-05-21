import * as CryptoJS from 'crypto-js';

// Função para gerar o hash MD5
const secretKey = "65a8e27d8879283831b664bd8b7f0ad4";

function encodeBase64(str: string): string {
  if (typeof window !== 'undefined') {
    // Para ambientes de navegador
    return btoa(str);
  } else {
    // Para ambientes Node.js
    return Buffer.from(str).toString('base64');
  }
}

function decodeBase64(encodedStr: string): string {
  if (typeof window !== 'undefined') {
    // Para ambientes de navegador
    return atob(encodedStr);
  } else {
    // Para ambientes Node.js
    return Buffer.from(encodedStr, 'base64').toString();
  }
}

export {encodeBase64, decodeBase64, secretKey}