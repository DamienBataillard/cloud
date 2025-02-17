const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Route simple
app.get('/', (req, res) => {
    res.send('Hello, World! 🚀');
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Microservice démarré sur http://localhost:${PORT}`);
});
