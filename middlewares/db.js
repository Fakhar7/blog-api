const mongoose = require("mongoose");

module.exports = async function (DB_URI) {
   await mongoose.connect(DB_URI);
}