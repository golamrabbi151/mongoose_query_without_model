const express = require('express');
const app = express();

const mongoose = require('mongoose');

const port = process.env.PORT || 3000;



mongoose.connect('mongodb+srv://gulu:gulu123@cluster0.kacbg.mongodb.net/poll',{useNewUrlParser: true, useUnifiedTopology: true});
const db =  mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to database.");
});


app.use("/", async (req,res) => {
try {

    const cursor = await db.collection('polls').find({});
    // console.log(data);
    let data = [];
    for await (const doc of cursor) {
        data.push(doc);
      }

    res.send(data);

} catch (error) {
    console.log(error);
    return error
}

})

// app.use("/", async (req,res) => {
//     res.send("Hello world");
// });


app.listen(port, () => {
    console.log("app is running on port: ",port);
});