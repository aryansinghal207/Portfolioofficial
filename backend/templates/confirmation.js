export function renderConfirmationTemplate({ name }) {
  const safeName = (name || 'there').toString().trim().slice(0, 80);
  return `
  <!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Message received</title>
      <style>
        body { background:#000; color:#fff; font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; margin:0; padding:24px; }
        .card { max-width: 560px; margin:0 auto; border:1px solid rgba(255,255,255,.2); background: rgba(255,255,255,.06); }
        .inner { padding: 24px; }
        .btn { display:inline-block; padding:10px 16px; background:#fff; color:#000; text-decoration:none; border-radius:9999px; font-weight:600; }
        .muted { color:#ddd; font-size:12px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="inner">
          <h2 style="margin:0 0 12px">Thank you, ${safeName}</h2>
          <p style="margin:0 0 12px">We have received your message and will get back to you shortly. This is a confirmation for your records.</p>
          <p style="margin:0 0 24px">If this wasn’t you, please reply to this email to let us know.</p>
          <a class="btn" href="mailto:${process.env.MAIL_FROM || ''}">Reply</a>
          <p class="muted" style="margin-top:24px">© ${new Date().getFullYear()} Aryan Singhal</p>
        </div>
      </div>
    </body>
  </html>`;
}
