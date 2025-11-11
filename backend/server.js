import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import { renderConfirmationTemplate } from './templates/confirmation.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// CORS configuration: supports multiple origins from env (comma-separated)
const rawOrigins = process.env.CORS_ORIGINS || 'http://localhost:5173,http://127.0.0.1:5173,https://portfolioofficial2.vercel.app,https://portfolioofficial2-3f2673lxz-aryansinghal207s-projects.vercel.app';
const allowedOrigins = rawOrigins.split(',').map(o => o.trim()).filter(Boolean);
app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true); // SSR/tools
    const isAllowed = allowedOrigins.some(o => origin === o || origin.endsWith('.vercel.app'));
    if (isAllowed) return callback(null, true);
    return callback(new Error(`CORS: Origin ${origin} not allowed`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
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

  // Validate environment variables
  if (!process.env.RESEND_API_KEY || !process.env.MAIL_FROM) {
    console.error('Missing email configuration:', {
      RESEND_API_KEY: !!process.env.RESEND_API_KEY,
      MAIL_FROM: !!process.env.MAIL_FROM,
    });
    return res.status(500).json({ ok: false, error: 'Email service not configured' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Attempting to send email to:', email);

    // Send confirmation email to the user
    const { data, error } = await resend.emails.send({
      from: `Aryan Singhal <${process.env.MAIL_FROM}>`,
      to: [email],
      subject: 'We received your message – Thank you',
      html: renderConfirmationTemplate({ name }),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ ok: false, error: 'Failed to send email' });
    }

    console.log('Confirmation email sent successfully to:', email);
    console.log('Message ID:', data.id);

    // Fire-and-forget owner notification
    resend.emails.send({
      from: `Portfolio Contact <${process.env.MAIL_FROM}>`,
      to: [process.env.MAIL_TO || process.env.MAIL_FROM],
      subject: `New contact form submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
    }).catch((e) => console.error('Owner notification failed:', e));

    return res.json({ ok: true });
  } catch (err) {
    console.error('Contact error details:', {
      message: err.message,
      stack: err.stack,
    });
    return res.status(500).json({ ok: false, error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
  console.log('Allowed CORS origins:', allowedOrigins);
});
