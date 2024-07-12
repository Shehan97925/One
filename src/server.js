const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'Shehan',
  password: 'Shehan97@',
  database: 'my_project_db'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL database connected');
});

// Registration route
// Registration route
app.post('/register', (req, res) => {
    const { fullName, contactNumber, email, userName, password } = req.body;
    const newUser = { fullName, contactNumber, email, userName, password };
    db.query('INSERT INTO users SET ?', newUser, (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ error: 'An error occurred while registering user' });
      } else {
        console.log('User registered successfully');
        return res.status(200).json({ message: 'User registered successfully' });
      }
    });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
