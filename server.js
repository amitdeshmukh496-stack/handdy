// server.js
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

app.listen(process.env.PORT || 3000);