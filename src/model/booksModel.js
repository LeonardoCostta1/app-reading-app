const mongoose = require("mongoose");

const booksScheama = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  cover: {
    type: String,
    require: true,
  },
  history: [
    {
      text: {
        type: String,
      },
    },
  ],
  createdAt:{
    type: Date, default: Date.now 
  },
 
});
module.exports = mongoose.model("Books", booksScheama);
