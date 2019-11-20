require('dotenv/config')
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, { origins: '*:*'});
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT =  process.env.PORT || 4000;
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const fileupload = require('express-fileupload');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [process.env.COOKIE_KEY]
}));
app.use(fileupload());

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));

//API Routes
app.use('/auth',require('./routes/auth.js'));
app.use('/code',require('./routes/codes.js'));

// Set static folder
app.use(express.static('./client/build'));
app.get('*', (req, res) => {
res.sendFile(path.resolve( __dirname ,'client', 'build', 'index.html'));
});

//Chat Services
require('./services/chatservice')(io);

//Auth Services
require('./services/passport');

server.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});