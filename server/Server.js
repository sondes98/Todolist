const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/TodoRoute");

const app = express();

app.use(express.json());
app.use(cors());




// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));

// const CONNECTION_URL_local = "mongodb://localhost:27017/test";
const CONNECTION_URL_docker = "mongodb://admin:password@mongodb"
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL_docker, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);