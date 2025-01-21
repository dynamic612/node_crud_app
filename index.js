const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const url = process.env.MONGODB;
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

connectDB();

const port = 9000;
app.listen(port, () => {
    console.log('server started on port ' + port);
})

const studentrouter= require("./routes/students");
app.use('/students',studentrouter);
