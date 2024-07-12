const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'advotex'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Create a new user
app.post('/users', (req, res) => {
    const { username, password, email } = req.body;
    const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    db.query(query, [username, password, email], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('User created successfully');
        }
    });
});

// Get all users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

// Update a user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, password, email } = req.body;
    const query = 'UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?';
    db.query(query, [username, password, email, id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('User updated successfully');
        }
    });
});

// Delete a user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('User deleted successfully');
        }
    });
});
