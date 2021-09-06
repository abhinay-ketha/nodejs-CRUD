// Set up mongoose connection
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const { MONGODB_URI } = process.env

export const initialize = () => {
    mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });;
    mongoose.Promise = global.Promise;
    
}