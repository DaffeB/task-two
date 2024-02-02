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


app.post('/contacts', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Error',
            errors: [
                {
                    field: 'name',
                    message: "can't be null"
                }
            ]
        });
    }
    const newContact = {
        id: (contacts.length + 1).toString(),
        name: name
    };
    contacts.push(newContact);
    res.status(201).json({
        success: true,
        message: 'Data added successfully',
        data: newContact
    });
});



app.delete('/contacts/:id', (req, res) => {
    const id = req.params.id;
    contacts = contacts.filter(contact => contact.id !== id);

    res.json({
        success: true,
        message: 'Data deleted successfully'
    });
});