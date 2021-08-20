const path = require('path');// eslint-disable-line import/no-extraneous-dependencies
const express = require('express');// eslint-disable-line import/no-extraneous-dependencies

const app = express();// eslint-disable-line import/no-extraneous-dependencies

app.use(express.static(path.join(__dirname, 'dist')));// eslint-disable-line import/no-extraneous-dependencies
app.set('port', process.env.PORT || 8080);// eslint-disable-line import/no-extraneous-dependencies
