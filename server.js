const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/others', (req, res) => {
  res.send({ count: 2153 });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
