

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/API-AUTH',
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Database "API-AUTH" connected successfully.');
    })