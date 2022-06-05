// Import Packages
const express = require("express");
const dotenv = require("dotenv");
const db = require("./src/models");

// Initialize Packages
var app = express();

// Port Configuration
dotenv.config();
const PORT = process.env.PORT;

// Request Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to Database & Synching
db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

db.sequelize
    .sync({ force: true })
    .then(() =>
        console.log("Done adding/updating by force the database based on the Models.")
    );


// ---------------------------------------------------------------------------


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Only Student"
    });
});


// ---------------------------------------------------------------------------



// Running the API
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});