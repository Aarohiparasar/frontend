const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.get("/api/data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading file" });
    }

    try {
      res.json(JSON.parse(data));
    } catch (parseError) {
      res.status(500).json({ error: "Error parsing JSON data" });
    }
  });
});

app.get("/api/search", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name query parameter is required" });
  }

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading file" });
    }

    try {
      const users = JSON.parse(data);

      const filteredUsers = users.filter((user) => {
        return (
          user &&
          user.first_name &&
          user.last_name &&
          `${user.first_name} ${user.last_name}`
            .toLowerCase()
            .includes(name.toLowerCase())
        );
      });

      res.json(filteredUsers);
    } catch (parseError) {
      res.status(500).json({ error: "Error parsing JSON data" });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
