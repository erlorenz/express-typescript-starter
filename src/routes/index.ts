import express from 'express';

const router = express.Router();

router.get('/v1', async (req, res) => {
  throw new Error();
  res.status(200).json({
    version: 1,
    message: 'looking good',
  });
});

export default router;
