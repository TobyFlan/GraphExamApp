require('dotenv').config();
const express = require('express');
const cors = require('cors');

const User = require('./models/answer');

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('dist'));


// POST route to save survey response
app.post('/questions/save-response', async (req, res) => {
  try {
    const { userId, responses } = req.body;

    const lastUser = await User.findOneAndUpdate(
      {},
      {},
      { sort: { 'userId': -1 }, upsert: true, new: true }
    );

    const newUserId = (lastUser && lastUser.userId) ? lastUser.userId + 1 : 1;

    const user = new User({
      userId: newUserId,
      responses,
    });

    const savedUser = await user.save();

    res.status(201).json({ message: 'Survey data saved successfully', userId: savedUser.userId });
  } catch (error) {
    console.error('Error saving survey data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join('dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



