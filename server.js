const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

let contacts = [
    {
        id: '1',
        name: 'Dafina'
    }
];

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/contacts', (req, res) => {
    res.json({
        success: true,
        message: 'Data fetched successfully',
        data: contacts
    });
});