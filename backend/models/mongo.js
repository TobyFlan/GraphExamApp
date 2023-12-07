const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}

const password = process.argv[2];

const url =
  `mongodb+srv://TobyFlan:${password}@fullstackcourse.6v0isla.mongodb.net/graphExamApp?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(url);

const responseSchema = new mongoose.Schema({
  questionId: Number,
  responseTime: Number,
  isCorrect: Boolean,
});

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  responses: [responseSchema],
});

const User = mongoose.model('User', userSchema);

// Find the highest current userId and increment it by 1 for the new user
User.findOneAndUpdate({}, {}, { sort: { 'userId': -1 }, upsert: true, new: true })
  .then((lastUser) => {
    const newUserId = (lastUser && lastUser.userId) ? lastUser.userId + 1 : 1;

    const user = new User({
      userId: newUserId,
      responses: [
        { questionId: 1, responseTime: 10, isCorrect: true },
        { questionId: 2, responseTime: 10, isCorrect: true },
        { questionId: 3, responseTime: 10, isCorrect: true },
      ],
    });

    return user.save();
  })
  .then(result => {
    console.log('user saved with userId:', result.userId);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error:', error);
    mongoose.connection.close();
  }
);

