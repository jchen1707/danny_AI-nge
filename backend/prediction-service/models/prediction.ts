import { loadModel } from './tensorflow/tensorflow';
import * as tf from '@tensorflow/tfjs';

async function makePrediction(weeklyMatchupData: any) {
  const model = await loadModel();
  
  const inputData = preprocessData(weeklyMatchupData);
  
  const predictions = model.predict(inputData) as tf.Tensor;

  const optimizedLineup = postprocessPredictions(predictions);
  
  return optimizedLineup;
}

function preprocessData(data: any) {

}

function postprocessPredictions(predictions: tf.Tensor) {

}
