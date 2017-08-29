//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

const route = require('./routes/route');

var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/shiftlist');

//on connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database on 27017');
});

//on connection
mongoose.connection.on('error', (err) => {
  if (err) {
    console.log('Error in Database XConnection' + err);
  }
});

//portno
const port = 3000;

//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//testing server
app.get('/', (req, res) => {
  res.send('foobar');
})

//startup message
app.listen(port, () => {
  console.log('server started at port:' + port);
})
