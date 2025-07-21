const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

// Static fayllarni 'public' papkadan servis qilish
app.use(express.static(path.join(__dirname, 'public')));

// '/' ga borsa, index.html ni yuborish
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});