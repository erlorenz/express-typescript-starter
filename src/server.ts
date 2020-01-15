import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    hello: 'yo'
  });
});

app.listen(3000, () => console.log('SERVER RUNNING'));
