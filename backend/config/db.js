require('dotenv').config();
const mongoose = require("mongoose");
const connectDB = async () => {

    
    try {
        //Need to fix the MONGO_URI .env issue
        
        await mongoose.connect("mongodb+srv://mostafaelbeih:Kendrick_lamar_222@cluster0.bwzg1.mongodb.net/shop?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB successfully");
    } catch (error) {
        console.error("Can not connect to DB");
        process.exit(-1);
    }
}

module.exports = connectDB;
