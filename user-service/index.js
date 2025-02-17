const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
