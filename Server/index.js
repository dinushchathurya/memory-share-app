const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

app.use(bodyParser.json({ limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));
app.use(cors());

/* DataBase Config */
const db = require('./config/keys').mongoURI;

/* Connect to MongoDB */
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));