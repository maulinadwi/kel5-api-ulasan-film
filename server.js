const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

// Basis data sementara untuk ulasan
let reviews = [
    {
        id: 1,
        film_id: "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Spirited Away
        user: "Andi",
        rating: 5,
        comment: "Film animasi terbaik sepanjang masa!"
    }
];
// biar API bisa diakses dari luar (misalnya frontend)
app.use(cors());

// endpoint utama (http://localhost:3000/)
app.get('/', (req, res) => {
  res.send('API Kel5 Ulasan Film jalan');
});

app.get('/status', (req, res) => {
  res.send({ message: 'Server is running', status: 'ok' });
});

app.get('/reviews', (req, res) => {
  res.json(reviews);
});

app.get('/reviews/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const review = reviews.find(r => r.id === id);
    if (review) {
        res.json(review);
    } else {
        res.status(404).json({ message: 'Review not found' });
    }
});


// jalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});