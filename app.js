const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");

const app = express();

app.use(bodyParser.json());
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the User API!");
});

app.listen(3000, () => {
  console.log("User API listening on port 3000");
});