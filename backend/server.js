import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { renderConfirmationTemplate } from './templates/confirmation.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// CORS configuration: supports multiple origins from env (comma-separated)
const rawOrigins = process.env.CORS_ORIGINS || 'http://localhost:5173,http://127.0.0.1:5173';
const allowedOrigins = rawOrigins.split(',').map(o => o.trim()).filter(Boolean);
app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true); // SSR/tools
    const isAllowed = allowedOrigins.some(o => origin === o);
    if (isAllowed) return callback(null, true);
    return callback(new Error(`CORS: Origin ${origin} not allowed`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });

    // Send confirmation email to the user first (primary success condition)
    await transporter.sendMail({
      from: {
        name: 'Aryan Singhal',
        address: process.env.MAIL_FROM || ''
      },
      to: email,
      subject: 'We received your message – Thank you',
      html: renderConfirmationTemplate({ name }),
    });

    // Fire-and-forget owner notification (do not fail API if this throws)
    transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO || process.env.MAIL_FROM,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }).catch((e) => console.error('Owner notification failed:', e));

    return res.json({ ok: true });
  } catch (err) {
    console.error('Contact error', err);
    return res.status(500).json({ ok: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
  console.log('Allowed CORS origins:', allowedOrigins);
});
