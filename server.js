const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const app = express();
const bodyParser = require('body-parser')


const Userroute = require('./routes/UserRt');

app.use(express.json());



app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(cors());

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(Userroute);


app.listen(3004, () => console.log('Server running at http://localhost:3004'));