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
    .sync({ alter: true })
    .then(() =>
        console.log("Done adding/updating the database based on the Models.")
    );



// ---------------------------------------------------------------------------


// Routes
const levelRoute = require("./src/routes/level.route");


app.get("/welcome", (req, res) => {
    res.json({
        message: "Welcome to Only Student"
    });
});

app.use(`${process.env.API_BASEURL}/level`, levelRoute);

// ---------------------------------------------------------------------------



// Running the API
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});