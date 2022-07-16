const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./config/db.js");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");


dotenv.config();

connectDB();
const app = express();
app.use(cors());
app.use(express.json());  //to accept json data

app.get('/',(req,res) => {
    res.send("API is Running Successfully")
});

app.use('/api/users',userRoutes);
app.use('/api/chat',chatRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, console.log(`Server started on ${PORT}`.yellow.bold));
