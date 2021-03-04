const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'))


require('./DB Connection/connection')


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(cookieParser());
app.use(session({ secret: 'Infogird Kings', saveUninitialized: false, resave: false }))

const routes = require('./routes/routes');


app.use(routes);


app.listen(3000, () => {
    console.log("Server is running");
});

