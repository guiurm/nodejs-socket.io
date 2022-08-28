/*const { Server } = require("socket.io");

const io = new Server(3000, { });

console.log(io.engine);

io.on("connection", (socket) => {
  console.log(socket);
});*/

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { publicKey, privateKey } = require('./CryptoController');
const { publicEncrypt, privateDecrypt } = require("crypto"); //encrypt
const { isStringObject } = require("util/types");

//console.log(publicKey,privateKey);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(__dirname + "/public"))

io.on("connection", (socket) => {
  console.log(socket.id)

  socket.emit('ping',publicKey)

  socket.on('pong',(e)=>{
    console.log(isStringObject(e));
    const data = Buffer.from(new String(e))
    //const data = e + ""
    console.log(isStringObject(data));
    console.log(data);
    //privateDecrypt(privateKey,)
    const decryptedData = privateDecrypt(privateKey, data/* translate e to NodeJS.ArrayBufferView */);

//console.log(decryptedData.toString("utf-8"));
  })
});

httpServer.listen(3000);