import express from 'express';

const router = express.Router();

router.get('/v1', async (req, res) => {
  throw new Error('Does this ruin everything?');
  res.status(200).json({
    version: 1,
    message: 'looking good',
  });
});

export default router;
