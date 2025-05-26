const express = require('express');
const app = express();

// const mongoose = require('mongoose');

// const mongoURI = 'mongodb://admin:password@mongodb:27017/mydb?authSource=admin';

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.error('MongoDB connection error:', err));


// Define the port
const PORT = process.env.PORT || 5000;

// Middleware (Parse JSON requests)
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World! 🚀');
});



app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from MERN backend!' });
});


// Start the server
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
