import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testEmail() {
  console.log('Testing email with:');
  console.log('MAIL_FROM:', process.env.MAIL_FROM);
  console.log('MAIL_APP_PASSWORD:', process.env.MAIL_APP_PASSWORD ? '***hidden***' : 'NOT SET');
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });

    console.log('\nVerifying transporter...');
    await transporter.verify();
    console.log('✓ Transporter verified successfully!');

    console.log('\nSending test email...');
    const info = await transporter.sendMail({
      from: {
        name: 'Aryan Singhal',
        address: process.env.MAIL_FROM,
      },
      to: 'aryansinghal987@gmail.com',
      subject: 'Test Email',
      text: 'This is a test email from your portfolio backend.',
    });

    console.log('✓ Email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('✗ Error:', error.message);
    console.error('Full error:', error);
  }
}

testEmail();
