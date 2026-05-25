const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// QR Login API
app.get('/generate-qr', (req, res) => {
    const sessionId = 'sess_' + Math.random().toString(36).substr(2, 9);
    const qrUrl = `https://your-app.onrender.com/mobile-login?session_id=${sessionId}`;
    res.json({ success: true, qrUrl });
});

// Verification API
app.post('/verify', (req, res) => {
    const { session_id, user } = req.body;
    // Add your verification logic here
    res.json({ success: true });
});

// Health check (required by Render)
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
