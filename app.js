const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require("./src/routes");
app.use(cors())
app.use(express.json())

mongoose.connect(
  "mongodb+srv://Leonardo:12345@reading.kadkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// try {
//   // Connect to the MongoDB cluster
//    mongoose.connect(
//     "mongodb+srv://Leonardo:12345@reading.kadkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log(" Mongoose is connected")
//   );

// } catch (e) {
//   console.log("could not connect");
// }

app.use('/api',routes);


app.listen(4000, () => {
  console.log("ON");
});
