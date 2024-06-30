// server.js
const express = require('express');
const request = require('request');
const app = express();
const PORT = 3000;

app.get('/geolocation/:ip', (req, res) => {
    const ip = req.params.ip;
    const token = 'c8af03556d19cc';
    const url = `https://ipinfo.io/${ip}/json?token=${token}`;

    request(url, (error, response, body) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(body);
    });
});

app.listen(PORT, () => {
    console.log(`CORS Proxy running on http://localhost:${PORT}`);
});
