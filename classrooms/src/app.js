const express = require('express');
const cors = require('cors');
const {API_PORT} = require('./config');
const mongoose = require('./database/mongoose');

/*
  Create a new express application instance and set middlewares.
*/
const app = express();
app.use(express.json());
app.use(cors());

/*
  MongoDB connection.
*/
(async () => {
  try {
    await mongoose.startDatabase();
    console.log("[OK] Connected to MongoDB server.\n");
  } catch (error) {
    console.log("[FAIL] Error connecting to MongoDB server.\n", error);
    process.exit(1);
  }
})();

/*
  Start the API server.
*/
app.listen(API_PORT, () => {
  console.log(`Buildings and Classrooms API running on port ${API_PORT}.\n`);
});

app.use('/classroom', require('./routes/classrooms'));

