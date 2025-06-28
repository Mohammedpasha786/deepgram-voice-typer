const DEEPGRAM_API_KEY = 'YOUR_DEEPGRAM_API_KEY';

const startBtn = document.getElementById("startBtn");
const output = document.getElementById("output");

let mediaRecorder;
let ws;

startBtn.addEventListener("click", async () => {
  if (!navigator.mediaDevices.getUserMedia) {
    alert("Your browser doesn't support audio recording.");
    return;
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);
  ws = new WebSocket("wss://api.deepgram.com/v1/listen?punctuate=true");

  ws.onopen = () => {
    mediaRecorder.start(250);
    mediaRecorder.ondataavailable = (e) => ws.send(e.data);
  };

  ws.onmessage = (msg) => {
    const dgData = JSON.parse(msg.data);
    if (dgData.channel && dgData.channel.alternatives[0].transcript) {
      output.value += dgData.channel.alternatives[0].transcript + " ";
      output.scrollTop = output.scrollHeight;
    }
  };

  ws.onerror = (e) => console.error("WebSocket error", e);
  ws.onclose = () => mediaRecorder.stop();

  startBtn.disabled = true;
  startBtn.textContent = "Listening...";
});
