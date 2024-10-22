const mongoose = require("mongoose");
const { DATABASE_URL } = require("./server.config");

class Database {
  #databaseUrl;

  constructor() {
    this.#databaseUrl = DATABASE_URL;
  }

  async connectDB() {
    try {
      const connection = await mongoose.connect(this.#databaseUrl);
      console.log(`Database connected with => ${connection.connection.host}`);
    } catch (error) {
      console.error("DB connection error:", error);
      throw new Error(`Database connection error: ${error}`);
    }
  }
}

module.exports = Database;
