const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./models/db");
const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
