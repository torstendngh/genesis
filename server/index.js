require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Example GET route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the Express server!' });
});

// Example POST route
app.post('/data', (req, res) => {
  const incomingData = req.body;
  res.json({ received: incomingData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
