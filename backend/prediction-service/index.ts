import express from 'express';
import { loadModel } from './models/tensorflow/models';
import { getPredictions } from './prediction';

const app = express();
const PORT = process.env.PORT || 3001;


loadModel().then((model) => {
  app.get('/predictions', async (req, res) => {
    const predictions = await getPredictions(model);
    res.json(predictions);
  });

  app.listen(PORT, () => {
    console.log(`Prediction Service running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Error during model loading:', error);
  process.exit(1);
});
