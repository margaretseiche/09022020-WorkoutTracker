const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(require("./routes/html"));
app.use(require("./routes/apiroutes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});