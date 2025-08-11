const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Mongodb Connected", connection.connection.host);
    } catch (error) {
        console.log("Database connection error:", error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;