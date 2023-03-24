import { Request, Response } from 'express';
import { makePrediction } from '../../prediction-service/prediction';
import { getYahooWeeklyMatchupData } from './apis/yahoo';

async function getOptimizedLineup(req: Request, res: Response) {
  const weeklyMatchupData = await getYahooWeeklyMatchupData();
  const optimizedLineup = await makePrediction(weeklyMatchupData);
  res.json({ optimizedLineup });
}

export { getOptimizedLineup };
