const mongoose = require('mongoose');

const mydb = async (req, res, next) => {
    try {

        mongoose.connect('mongodb+srv://gulu:gulu123@cluster0.kacbg.mongodb.net/poll', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
       
        db.on('error', console.error.bind(console, 'connection error:'));
        
        db.once('open', () => {
           console.log("Connected to database.");
        });

        return db;
    } catch (error) {
        console.log(error);
        next()
    }
}

module.exports =  { mydb };