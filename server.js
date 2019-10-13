const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

const bodyParser = require('body-parser');
const PORT =  process.env.PORT || 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*
// Set static folder
app.use(express.static('./client/build'));
app.get('*', (req, res) => {
res.sendFile(path.resolve( __dirname ,'client', 'build', 'index.html'));
});
*/

app.get('/', (req,res) => {
  res.send("<h1>Chat_Code_Share_Learn Backend</h1>");
});


//Online Chat Service
io.on('connection', (client) => {
  console.log("Connected...");
  client.on('disconnect',() => {
    console.log("Disconnected...");
  });
});


server.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});