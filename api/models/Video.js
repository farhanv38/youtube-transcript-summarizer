const mongoose = require('mongoose');

// Define schema for video summaries
const videoSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
});

// Create a model from the schema
const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
