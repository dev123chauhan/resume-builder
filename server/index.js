const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require('path');
const aboutRoute = require('./routes/about')
const privacyRoute = require('./routes/privacy')
const termsRoute = require('./routes/terms')
const faqRoute = require('./routes/faq')
const featureRoute = require('./routes/feature')
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
const userRoutes = require("./routes/users");
app.use('/api/contact', require('./routes/contact'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api", userRoutes);
app.use("/api", aboutRoute);
app.use("/api", privacyRoute);
app.use("/api", termsRoute);
app.use("/api", faqRoute);
app.use("/api", featureRoute);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
