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
  res.json({ "ok": true });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ "ok": false, error: 'Missing required fields' });
  }

  // Validate environment variables
  if (!process.env.RESEND_API_KEY || !process.env.MAIL_FROM) {
    console.error('Missing email configuration:', {
      RESEND_API_KEY: !!process.env.RESEND_API_KEY,
      MAIL_FROM: !!process.env.MAIL_FROM,
    });
    return res.status(500).json({ "ok": false, error: 'Email service not configured' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Sending notification to owner for contact from:', email);

    // Send notification to you (the owner) - this always works
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.MAIL_FROM}>`,
      to: [process.env.MAIL_TO || 'aryansinghal207@gmail.com'],
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Reply directly to ${email} to respond.</small></p>
      `,
    });

    if (ownerError) {
      console.error('Failed to send owner notification:', ownerError);
      return res.status(500).json({ "ok": false, error: 'Failed to send email' });
    }

    console.log('Owner notification sent successfully. ID:', ownerData.id);

    // Try to send confirmation to user (optional - won't fail if their email is unverified)
    // Fire and forget - don't wait for this
    resend.emails.send({
      from: `Aryan Singhal <${process.env.MAIL_FROM}>`,
      to: [email],
      subject: 'We received your message – Thank you',
      html: renderConfirmationTemplate({ name }),
    }).then(({ data }) => {
      console.log('Confirmation email sent to user. ID:', data.id);
    }).catch((err) => {
      console.log('Could not send confirmation to user (likely unverified email):', err.message);
    });

    // Send response immediately after owner notification succeeds
    return res.status(200).json({ ok: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Contact error details:', {
      message: err.message,
      stack: err.stack,
    });
    return res.status(500).json({ "ok": false, error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
  console.log('Allowed CORS origins:', allowedOrigins);
});
