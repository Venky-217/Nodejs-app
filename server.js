const express = require('express');
const cors = require('cors');
const { restaurants } = require('./data');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/restaurants', (req, res) => {
    res.json(restaurants);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));