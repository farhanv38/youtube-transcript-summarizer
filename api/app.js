const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const { createVideoSummary, getAllVideoSummaries } = require('./videosController');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = '';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Summarize YouTube video transcript and save to database
app.get('/api/summarize', async (req, res) => {
    const { videoUrl } = req.query;

    try {
        // Fetch YouTube video transcript
        const transcript = await fetchTranscript(videoUrl);
        
        // Summarize transcript
        const summary = await summarizer(transcript);

        // Save summary to database
        const video = await createVideoSummary('video_id_here', 'video_title_here', summary);

        res.json({ summary });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to summarize video transcript' });
    }
});

// Fetch YouTube video transcript using YouTube Data API
async function fetchTranscript(videoUrl) {
    // Extract video ID from videoUrl
    const videoId = ''; // Extract video ID from videoUrl

    // Make GET request to YouTube Data API to fetch transcript
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=YOUR_API_KEY`);

    // Extract transcript from response (assuming it's stored in the 'description' field)
    const transcript = response.data.items[0].snippet.description;
    return transcript;
}

// Retrieve all video summaries
app.get('/api/videos', async (req, res) => {
    try {
        const videos = await getAllVideoSummaries();
        res.json(videos);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to retrieve video summaries' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
