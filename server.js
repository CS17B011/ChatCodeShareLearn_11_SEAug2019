require('dotenv/config')
const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT =  process.env.PORT || 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));

//API Routes
app.use('/users',require('./routes/users.js'));

// Set static folder
app.use(express.static('./client/build'));
app.get('*', (req, res) => {
res.sendFile(path.resolve( __dirname ,'client', 'build', 'index.html'));
});

const chatServices = {
  NEW_MESSAGE:'Message From client to server',
  SEND_MESSAGE:'Message From server to client',
  CONNECTION:'connection',
  DISCONNECT:'disconnect',
  TYPING:'typing in fontend',
  STOP_TYPING:'typing stopped in frontend',
  NEW_USER:'register new user',
  UPDATE_USERS:'Updating Online User'
}

var {NEW_MESSAGE,SEND_MESSAGE,CONNECTION,DISCONNECT,TYPING,STOP_TYPING,NEW_USER,UPDATE_USERS} = chatServices;

connections = [];
users = [];

//Online Chat Service
io.on(CONNECTION, (socket) => {
  //Pushing socket 
  connections.push(socket);
  console.log('Connected... : %s connected.',connections.length);
  
  socket.on(DISCONNECT,() => {
		connections.splice(connections.indexOf(socket.id),1);
    console.log('Disconnected... : %s remaining.', connections.length);
  });
  
  socket.on(NEW_MESSAGE,(data,username) => {
    io.sockets.emit(SEND_MESSAGE,{data,username});
  });

  socket.on(NEW_USER,(data,callback) => {
    if(users.find( ele => data[1]===ele.emailid)){
      callback(false);
    }
    else{
      socket.username = data[0];
      users.push({
        username: data[0],
        emailid: data[1]
      });
      updateContacts();
      callback(true);
    }
  });

  updateContacts = () =>{
    io.sockets.emit(UPDATE_USERS,users);
  }

});

server.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});