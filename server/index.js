// server.js or index.js (Backend entry point)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth'); // <-- fixed import
const postRoutes = require('./routes/posts'); // <-- fixed order

const app = express();

// Middleware
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes
app.use('/auth', authRoutes); // <-- move after app is declared
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the MemoriesMan server!');
});

// MongoDB connection
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_URL;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT} and MongoDB connected!`)
    )
  )
  .catch((error) =>
    console.error('❌ MongoDB Connection Error:', error.message)
  );
