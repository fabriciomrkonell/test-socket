var app = require('express')(),
  server = require('http').Server(app),
  io = require('socket.io')(server);

server.listen(3000, function(){
  console.log('NodeJS está na porta: 3000.');
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// Iniciando
io.on('connection', function (socket) {

  console.log("Novo cliente conectado!");

  //socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {
    console.log(data);
  });

});