const express = require("express");

//when we call the function express we create a new express server object

const app = express();

const PORT = 3000;

app.get("/home", (req, res) => {});

app.listen(3000, () => {
  console.log(`server stared at port ${PORT}`);
});
