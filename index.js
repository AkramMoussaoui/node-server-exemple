const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const todoRouter = require('./api/controllers/todo/router');
const userRouter = require('./api/controllers/user/router');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 2000;

app.use('/user', userRouter);

app.use('/todo', todoRouter);

app.listen(PORT, () => console.log('Listening on http://localhost:' + PORT));
