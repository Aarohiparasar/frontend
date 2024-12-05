const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// Route to fetch all data
app.get('/api/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }
    res.json(JSON.parse(data));
  });
});

// Route to fetch users by name
app.get('/api/search', (req, res) => {
  const { name } = req.query;
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }
    const users = JSON.parse(data);
    const filteredUsers = users.filter(
      (user) => 
        `${user.first_name} ${user.last_name}`.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filteredUsers);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
