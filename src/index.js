const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const voteRouter = require("./routers/vote");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(userRouter);
app.use(voteRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const User = require("./models/user");
const Candidate = require("./models/candidate");
