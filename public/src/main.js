const socket = io();
let dataToSend = "Juan compra pan.";

socket.on("ping", (e) => {
  console.log(e);

  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(e);
  var encrypted = encrypt.encrypt(dataToSend);

  console.log(encrypted);
  socket.emit('pong',encrypted)
});
