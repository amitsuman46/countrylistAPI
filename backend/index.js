const express = require('express');
const app = express();
const countries = require('./countriesList');


// Route to handle requests with query string
app.get('/countries', (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    const matchingCountries = countries.filter(country =>
        country.name.toLowerCase().includes(query.toLowerCase())
    );

    res.json(matchingCountries);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
