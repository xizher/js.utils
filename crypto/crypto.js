import CryptoJS from 'crypto-js'
// <script src="~/crypto-js.min.js"></script> // => CryptoJS

// import { STRING_CRYPTO_KEY, STRING_CRYPTO_IV } from '@/config/key.conf'
const STRING_CRYPTO_KEY = 'tttttttttttttttttttttttttttttttt'
const STRING_CRYPTO_IV = 'tttttttttttttttt'

export function enCrypto (str) {
  const key = CryptoJS.enc.Utf8.parse(STRING_CRYPTO_KEY)
  const iv = CryptoJS.enc.Utf8.parse(STRING_CRYPTO_IV)
  let encrypted = ''
  const newVal = CryptoJS.enc.Utf8.parse(str)
  encrypted = CryptoJS.AES.encrypt(newVal, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.ciphertext.toString()
}

export function deCrypto (str) {
  const key = CryptoJS.enc.Utf8.parse(STRING_CRYPTO_KEY)
  const iv = CryptoJS.enc.Utf8.parse(STRING_CRYPTO_IV)
  const encryptedHexStr = CryptoJS.enc.Hex.parse(str)
  const newVal = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(newVal, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}
