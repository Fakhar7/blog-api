const cors = require("cors");
const express = require("express");
const CONFIG = require("./config/config");
const { default: helmet } = require("helmet");

const jsonSyntax = require("./middlewares/syntaxErrorMiddleware");

const app = express();

// Connection of MongoDB
require("./middlewares/db")(CONFIG.MOGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(jsonSyntax);

app.use("/api/user", require("./routes/userRouter"));
app.use("/api/post", require("./routes/postRouter"));

app.listen(CONFIG.PORT, () => {
  console.log("Server listening on port " + CONFIG.PORT);
});

module.exports = app;
