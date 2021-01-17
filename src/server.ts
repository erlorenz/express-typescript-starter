import express from 'express';
import logger from 'pino';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    hello: 'yo',
  });
});

app.listen(port, () => console.log('Server running on port ' + port));
