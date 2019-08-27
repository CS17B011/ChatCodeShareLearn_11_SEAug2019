const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT =  process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send("<h1>Chat_Code_Share_Learn</h1>");
});

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});