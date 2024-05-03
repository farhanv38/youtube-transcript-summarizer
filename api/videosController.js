const Video = require('./models/Video');

// Function to create a new video summary
async function createVideoSummary(videoId, title, summary) {
    const video = new Video({ videoId, title, summary });
    await video.save();
    return video;
}

// Function to retrieve all video summaries
async function getAllVideoSummaries() {
    return await Video.find();
}

module.exports = {
    createVideoSummary,
    getAllVideoSummaries
};
