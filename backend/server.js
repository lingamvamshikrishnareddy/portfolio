require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Updated CORS options with your specific frontend URL
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5000',
    'https://portfolio-bunw.onrender.com',
    'https://portfolio-bunw.onrender.com/'
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Apply CORS middleware (removed duplicate)
app.use(cors(corsOptions));
app.use(express.json());

// Add a root route handler
app.get('/', (req, res) => {
  res.json({
    message: 'Server is live! 🚀',
    environment: NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    if (NODE_ENV !== 'production') {
      console.log('🔍 Debug MongoDB URI:', MONGODB_URI);
    }
  }
};

connectDB();

// Import Routes Safely
try {
  const apiRoutes = require('./routes/api');
  app.use('/api', apiRoutes);
} catch (error) {
  console.error('❌ Error loading API routes:', error);
}

// Add a catch-all route handler
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found',
    requestedUrl: req.originalUrl
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('❗ Server Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${NODE_ENV}`);
  console.log(`🌐 CORS enabled for: ${corsOptions.origin.join(', ')}`);
});

// Graceful Shutdown (Handles crashes properly)
process.on('SIGINT', async () => {
  console.log('🔻 Shutting down server...');
  await mongoose.connection.close();
  console.log('📴 MongoDB connection closed');
  server.close(() => {
    console.log('✅ Server shut down cleanly');
    process.exit(0);
  });
});

process.on('unhandledRejection', (error) => {
  console.error('🚨 Unhandled Promise Rejection:', error);
});
