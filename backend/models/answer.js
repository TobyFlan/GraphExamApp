const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI;

console.log(`connecting to ${url}`);

mongoose.connect(url)
    .then(result => {
        console.log('connected to mongodb');
    })
    .catch((error) => {
        console.log('error connecting to mongo db: ', error.message);
    })

const responseSchema = new mongoose.Schema({
  questionId: Number,
  responseTime: Number,
  isCorrect: Boolean,
});

responseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  responses: [responseSchema],
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('User', userSchema);