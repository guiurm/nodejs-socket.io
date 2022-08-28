const { generateKeyPairSync } = require("crypto");
const { publicEncrypt, privateDecrypt } = require("crypto"); //encrypt
const { createSign, createVerify } = require('crypto'); //sign

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, // the length of your key in bits
  //modulusLength: 4096, // the length of your key in bits
  publicKeyEncoding: {
    type: "spki", // recommended to be 'spki' by the Node.js docs
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8", // recommended to be 'pkcs8' by the Node.js docs
    format: "pem",
    //cipher: 'aes-256-cbc',
    //passphrase: 'top secret'
  },
});

module.exports = {
    privateKey, publicKey
}