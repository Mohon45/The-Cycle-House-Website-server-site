const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const ObjectId = require("mongodb").ObjectId;
const reviewRoutes = require("./routes/v1/review.route");
const bookingRoutes = require("./routes/v1/booking.route");
const productRoutes = require("./routes/v1/product.route");
const userRoutes = require("./routes/v1/user.route.js");
const errorHandler = require("./middleware/errorHandler.js");
const { default: mongoose } = require("mongoose");

// database connections
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m0coh.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority`;
// Mongoose Connect
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/cycle-house/", reviewRoutes);
app.use("/api/v1/cycle-house/", bookingRoutes);
app.use("/api/v1/cycle-house/", productRoutes);
app.use("/api/v1/cycle-house/", userRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Cycle House server is Running!");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

app.all("*", (req, res) => {
  res.send("No Route Found.");
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
