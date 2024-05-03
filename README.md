# YouTube Transcript Summarizer

YouTube Transcript Summarizer is a Node.js application that allows users to summarize the transcripts of YouTube videos. It provides a backend API for summarizing YouTube video transcripts and storing the summarized data in a MongoDB database.

## Features

- **Summarize YouTube Video Transcripts**: Automatically summarize the transcripts of YouTube videos by providing the video URL.
- **Save Summaries**: Save the summarized transcripts along with video metadata (such as video ID and title) in a MongoDB database.
- **Retrieve Summaries**: Retrieve all saved video summaries from the database.

## Setup

1. **Install Dependencies**: Install the required dependencies using npm.

   ```bash
   npm install

PORT=3000
MONGODB_URI=mongodb://localhost:27017/youtube_transcripts
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY


npm start

Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Axios
