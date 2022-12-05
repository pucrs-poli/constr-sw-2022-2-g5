const express = require('express');
const cors = require('cors');
const {API_PORT} = require('./config');
const mongoose = require('./database/mongoose');
const {Router} = require("./routes/classroom2");

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
    console.log("---------- Starting Classes collection ----------\n");
  } catch (error) {
    console.log("[FAIL] Error connecting to MongoDB server.\n", error);
    process.exit(1);
  }
})();

/*
  Start the API server.
*/
app.listen(API_PORT, () => {
  console.log('---------- Connected to mongo & listening on port', API_PORT, ' ----------');
  console.log('Access URL -> http://localhost:8085/classroom')
});

//app.use('/classroom', require('./routes/classrooms'));


const router = new Router(app);
router.setupRoutes();
