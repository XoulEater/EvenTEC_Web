const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/eventSchema');

const app = express();
app.use(express.json());


mongoose.connect()
    .then(() => { console.log('Connection Succeed :)') })
    .catch((err) => { console.log(err) });


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/api/events", async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.json(event);
    } catch (error) {
        console.log(error);
    }
});

app.get("/api/events", async (req, res) => {
    try {
        const event = await Event.find({});
        res.json(event);
    } catch (error) {
        console.log(error);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
