const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const users = require('./routes/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.set('json spaces', 2);

app.use('/users', users);

app.listen(3000, ()=>{
    console.log('server run port 3000');
});