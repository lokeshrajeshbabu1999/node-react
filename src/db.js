const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://LOKESH:Lokesh28@newcluster.cjc64.mongodb.net/mydatabase"; 

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB via Compass');
});

module.exports = mongoose;
