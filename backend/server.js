const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const path = require("path");

require("dotenv").config();
const app = express();
app.use(express.static(path.resolve(__dirname, "../frontend", "build", "index.html")));
app.use(express.json());
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("frontend/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
    });
}

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running")
})