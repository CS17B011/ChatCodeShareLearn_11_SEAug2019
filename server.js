const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
	origins:"*"
});


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
  res.send("<h1>Chat_Code_Share_Learn</h1>");
});

//Online Chat Service

io.on('connection', client => {
	console.log("Connected...");
});


app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});