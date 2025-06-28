# deepgram-voice-typer
Voice Transcriber - Real-time Speech-to-Text
A powerful, real-time voice transcription tool powered by Deepgram's Speech-to-Text API. Transform your spoken words into text instantly with this sleek, modern web application.
Show Image Show Image Show Image Show Image
✨ Features
🎯 Core Functionality

Real-time Transcription: Live speech-to-text conversion as you speak
Press & Hold Interface: Intuitive recording with visual feedback
Interim Results: See transcription happening in real-time before final results
Multi-language Support: 8+ languages including English, Spanish, French, German, and more
Multiple AI Models: Choose from Nova 2, Nova, Enhanced, or Base models

🎨 User Experience

Modern Glass-morphism Design: Beautiful, responsive interface with gradient backgrounds
Visual Status Indicators: Color-coded status with animated elements
Audio Wave Animation: Live visualization during recording
Mobile Responsive: Works seamlessly on desktop, tablet, and mobile devices
Dark/Light Adaptive: Elegant design that works in any environment

🔧 Technical Features

WebSocket Streaming: Real-time audio streaming to Deepgram
Advanced Audio Processing: Echo cancellation and noise suppression
Secure API Key Storage: Local storage with password masking
Error Handling: Graceful error handling with user-friendly messages
Cross-browser Compatible: Works on Chrome, Firefox, Safari, and Edge

🚀 Quick Start
Prerequisites

A modern web browser with microphone access
Deepgram API key (Get one here)

Installation & Setup

Clone the Repository
bashgit clone https://github.com/yourusername/voice-transcriber.git
cd voice-transcriber

Get Your Deepgram API Key

Visit Deepgram Console
Sign up for a free account
Create a new API key
Copy your API key


Run the Application
bash# Option 1: Simple HTTP server (Python 3)
python -m http.server 8000

# Option 2: Node.js http-server
npx http-server

# Option 3: PHP built-in server
php -S localhost:8000

# Option 4: Just open index.html in your browser (may have CORS issues)

Access the Application

Open your browser and navigate to http://localhost:8000
Enter your Deepgram API key in the input field
Grant microphone permissions when prompted
Start transcribing!



🎮 How to Use
Basic Operation

Enter API Key: Input your Deepgram API key (saved automatically)
Configure Settings: Select your preferred language and AI model
Start Recording: Press and hold the microphone button
Speak Clearly: Talk into your microphone - see real-time transcription
Stop Recording: Release the button to finish
Edit/Copy: Use the transcribed text as needed

Advanced Features

Language Selection: Switch between 8 supported languages
Model Selection: Choose the AI model that best fits your needs:

Nova 2: Latest and most accurate model
Nova: Balanced performance and speed
Enhanced: Improved accuracy for challenging audio
Base: Fast processing for simple use cases



🛠️ Technical Architecture
Frontend Stack

HTML5: Semantic markup with modern audio APIs
CSS3: Advanced styling with flexbox, gradients, and animations
Vanilla JavaScript: ES6+ features, WebSocket API, MediaRecorder API

API Integration

Deepgram WebSocket API: Real-time streaming transcription
Audio Processing: WebRTC for high-quality audio capture
Secure Communication: HTTPS/WSS with API key authentication

Key Components
javascript// Core transcription class
class VoiceTranscriber {
    constructor() {
        this.isRecording = false;
        this.mediaRecorder = null;
        this.websocket = null;
        // ... initialization
    }
    
    async startRecording() {
        // Setup microphone and WebSocket connection
    }
    
    handleTranscription(response) {
        // Process real-time results
    }
}
🔧 Configuration Options
Audio Settings
javascript// Microphone configuration
{
    audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 16000,
    }
}
Deepgram Parameters
javascript// WebSocket URL configuration
const wsUrl = `wss://api.deepgram.com/v1/listen?
    model=${model}&
    language=${language}&
    encoding=webm&
    sample_rate=16000&
    interim_results=true&
    punctuate=true&
    smart_format=true`;
🌐 Browser Support
BrowserDesktopMobileNotesChrome✅✅Full supportFirefox✅✅Full supportSafari✅✅Requires HTTPSEdge✅✅Full support
🔒 Privacy & Security

Local Processing: API key stored locally in browser
No Data Retention: Audio not stored on our servers
Secure Transmission: All communication over HTTPS/WSS
Deepgram Privacy: Review Deepgram's privacy policy

📱 Mobile Optimization

Touch Events: Optimized for touch interactions
Responsive Design: Adapts to all screen sizes
Performance: Efficient audio processing for mobile devices
Battery Conscious: Optimized to minimize battery usage

🎯 Use Cases
Professional

Meeting Transcription: Real-time meeting notes
Interview Recording: Journalist and researcher tool
Content Creation: Blog writing and content planning
Accessibility: Voice-to-text for accessibility needs

Personal

Voice Journaling: Quick voice-to-text diary entries
Note Taking: Hands-free note taking while multitasking
Language Learning: Practice pronunciation with real-time feedback
Creative Writing: Brainstorm ideas through speech

🔧 Customization
Adding New Languages
javascript// Add to language dropdown
<option value="hi">Hindi</option>
Styling Customization
css/* Custom color scheme */
:root {
    --primary-gradient: linear-gradient(135deg, #your-color1, #your-color2);
    --text-color: #your-text-color;
}
🐛 Troubleshooting
Common Issues
1. Microphone Access Denied

Solution: Check browser permissions and allow microphone access
Chrome: Settings → Privacy and Security → Site Settings → Microphone

2. WebSocket Connection Failed

Solution: Verify API key is correct and has sufficient credits
Check browser console for detailed error messages

3. No Audio Being Captured

Solution: Ensure microphone is not muted and is the default device
Test microphone in other applications

4. Transcription Quality Issues

Solution: Use a quality microphone and minimize background noise
Try different Deepgram models (Nova 2 for best accuracy)

Debug Mode
Enable browser developer tools to see detailed logs:
javascript// Add to console for debugging
localStorage.setItem('debug', 'true');
📊 Performance Optimization
Audio Quality Settings

Sample Rate: 16kHz (optimal balance of quality and bandwidth)
Encoding: WebM format for efficient streaming
Chunk Size: 100ms intervals for responsive transcription

Network Optimization

WebSocket Keepalive: Maintains connection stability
Automatic Reconnection: Handles temporary network issues
Efficient Data Transfer: Compressed audio streaming

🤝 Contributing
We welcome contributions! Here's how to get started:

Fork the Repository
Create Feature Branch: git checkout -b feature/amazing-feature
Commit Changes: git commit -m 'Add amazing feature'
Push to Branch: git push origin feature/amazing-feature
Open Pull Request

Development Setup
bash# Clone your fork
git clone https://github.com/yourusername/voice-transcriber.git

# Create development branch
git checkout -b develop

# Start development server
python -m http.server 8000
📈 Roadmap
Version 2.0 Features

 Multiple Speaker Detection: Identify different speakers
 Export Options: PDF, Word, and text file exports
 Custom Vocabulary: Add domain-specific terms
 Audio File Upload: Transcribe pre-recorded audio files
 Real-time Translation: Multi-language translation
 Voice Commands: Control app with voice commands

Future Enhancements

 Offline Mode: Local speech recognition fallback
 Team Collaboration: Share transcriptions with team members
 API Integration: Connect with popular productivity tools
 Analytics Dashboard: Transcription statistics and insights
