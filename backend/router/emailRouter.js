import express from 'express';
import sendEmail from '../services/emailService.js';

const router = express.Router();

router.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    await sendEmail(to, subject, text);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error sending email' });
  }
});

export default router;
