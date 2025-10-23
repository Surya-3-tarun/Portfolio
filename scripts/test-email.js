// Minimal nodemailer test script. Run with environment variables set in your shell
// Example:
// SMTP_HOST=smtp.example.com SMTP_PORT=587 SMTP_USER=user SMTP_PASS=pass SENDER_EMAIL=me@example.com CONTACT_EMAIL=you@example.com node scripts/test-email.js

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function main() {
  try {
    const info = await transport.sendMail({
      from: `"Test" <${process.env.SENDER_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: 'Portfolio SMTP test',
      text: 'This is a test email sent from the portfolio SMTP tester.',
    });
    console.log('Message sent:', info);
    process.exit(0);
  } catch (err) {
    console.error('Send failed:', err);
    process.exit(1);
  }
}

main();
