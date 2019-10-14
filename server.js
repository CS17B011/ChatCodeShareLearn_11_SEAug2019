const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);
const path = require('path');

const bodyParser = require('body-parser');
const PORT =  process.env.PORT || 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set static folder
app.use(express.static('./client/build'));
app.get('*', (req, res) => {
res.sendFile(path.resolve( __dirname ,'client', 'build', 'index.html'));
});

app.get('/', (req,res) => {
  res.send("<h1>Chat_Code_Share_Learn Backend</h1>");
});

connections = []
users = []

//Online Chat Service
io.on('connection', (socket) => {
  connections.push(socket);
  console.log('Connected... : %s connected.',connections.length);
  socket.on('disconnect',() => {
		connections.splice(connections.indexOf(socket.id),1);
    console.log('Disconnected... : %s remaining.', connections.length);
  });
  socket.on('newmessage',data => {
    console.log(data.val);
    io.sockets.emit('sendmessages',data);
  });
});


server.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});