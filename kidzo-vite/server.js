require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Webhook } = require('svix');
const bodyParser = require('body-parser');
const User = require('./userModel.js');


// Debugging: Log environment variables

// Connect mongoose to database
mongoose
  .connect('mongodb+srv://susheelnandeti:wNwp1Gcsn8Rtc60J@kidzo.spcvo.mongodb.net/kidzo')
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log('Database connection error:', err.message));

const app = express();

app.use(cors());

// Real code with added debug logs
app.post(
  '/api/webhook',
  bodyParser.raw({ type: 'application/json' }),
  async function (req, res) {
    try {
      // console.log('Received request body:', req.body.toString());
      // console.log('Received headers:', req.headers);

      const wh = new Webhook('whsec_1lKY7sM/K1xF+Xc+Sf9GH2a26+4/O2j7');
      console.log(wh)
      // console.log('Webhook instance created with secret key.');
      const evt = wh.verify(req.body.toString(), req.headers);
      console.log('Event verified by svix.verify:', evt);

      const { id, ...attributes } = evt.data;
      console.log('Extracted event data:', { id, ...attributes });
      
      if (!attributes.username) {
        console.error('username not found in payload:', attributes);
      }   
      const eventType = evt.type;
      console.log('Event type:', eventType);

      if (eventType === 'user.created') {
        console.log(`Handling user.created for user ID: ${id}`);
        const email_addr = attributes.email_addresses[0].email_address;
        const username = attributes.username;        
        console.log(attributes.email_addresses[0].email_address)
        console.log(attributes.username)
        if (!attributes.username) {
          return res.status(400).json({ error: 'Username is required.' });
        }
        const user = new User({
          email_addr: email_addr,
          name: username,
        });

        await user.save();
        console.log('User saved to database.');
      }

      res.status(200).json({
        success: true,
        message: 'Webhook received',
      });
    } catch (err) {
      console.error('Error handling webhook:', err);
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

module.exports = app; // Export for debugging/testing if needed
