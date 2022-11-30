const mongoose = require('mongoose');
const {
  MONGODB_HOST,
  MONGODB_PASSWORD,
  MONGODB_PORT,
  MONGODB_USER,
} = require("../config");
const Classroom = require("../models/Classroom");

const DATABASE_NAME = "classrooms";
const url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${DATABASE_NAME}?authSource=admin`;

module.exports = {
  startDatabase: async function () {
    try {
      await mongoose.connect(url);
      await Classroom.createCollection();
      console.log("---------- Starting Classes collection ----------\n");
    } catch (error) {
      throw error;
    }
  },
  connect: async function (app) {
    mongoose
      .connect(MONGODB_HOST)
      .then(() => {
        Classroom.createCollection();
        // listen for requests
        app.listen(API_PORT, () => {
          console.log('---------- Connected to mongo & listening on port', API_PORT, ' ----------');
          console.log('Access URL -> http://localhost:', API_PORT, '/classroom')
        });
        return app;
      })
      .catch((error) => {
        return console.log(error);
      });
  }
};



