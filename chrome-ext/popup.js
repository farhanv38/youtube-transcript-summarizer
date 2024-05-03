async function summarizeTranscript() {
    const videoUrl = document.getElementById('videoUrlInput').value;
    
    try {
      const response = await fetch(`https://your-backend-api-url/api/summarize?videoUrl=${videoUrl}`);
      const data = await response.json();
      
      document.getElementById('summary').innerText = data.summary;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('summary').innerText = 'Failed to summarize video transcript';
    }
  }
  