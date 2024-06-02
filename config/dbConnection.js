const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTIN_STRING);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
