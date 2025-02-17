const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

// Call User Service using Kubernetes service name
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get("http://user-service/users");  // <--- Uses Kubernetes service discovery
    res.json(response.data);
  } catch (error) {
    console.error("Error connecting to user-service:", error.message);
    res.status(500).json({ error: "Failed to reach user service" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Mon-Service 🚀");
});

app.listen(PORT, () => {
  console.log(`Mon-Service running on port ${PORT}`);
});
