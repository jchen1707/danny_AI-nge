import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-node';

async function loadModel() {
  const model = await tf.loadLayersModel('file://path/to/your/tfjs_model/model.json');
  return model;
} 

module.exports = loadModel();