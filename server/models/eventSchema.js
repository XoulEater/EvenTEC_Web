const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    id: String,
    title: String,
    date: String,
    description: String,
    image: String,
    organizer: String,
    capacity: Number,
    schedule: String,
    rating: Number,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;