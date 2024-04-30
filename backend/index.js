const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3003;

// Enable CORS
app.use(cors());

// Sample data
const books = [
    { id: 1, title: 'Book 11', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
];

// Routes
app.get('/test', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
