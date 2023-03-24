import { makePrediction } from '../prediction-service/models/prediction';

async function getOptimizedLineup(req: Request, res: Response) {
  const weeklyMatchupData = await getYahooWeeklyMatchupData();
  
  const optimizedLineup = await makePrediction(weeklyMatchupData);
  
  res.json({ optimizedLineup });
}
