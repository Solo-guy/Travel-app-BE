const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = 5003

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('database conected'))
.catch((err) => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`))