import express from 'express';
import cors from 'cors';
import { getYahooData, updateRoster } from './controllers/apis/yahoo';
import { getOptimizedLineup } from './controllers/prediction';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

// Routes
app.get('/yahoo-data', getYahooData);
app.post('/update-roster', updateRoster);
app.get('/optimized-lineup', getOptimizedLineup);

// Start the server
app.listen(PORT, () => {
  console.log(`API Service running on http://localhost:${PORT}`);
});