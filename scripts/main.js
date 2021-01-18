
import 'babel-polyfill';
import * as tf from '@tensorflow/tfjs';
import {MobileNet} from './mobilenet';
import imageURL from '../birb.jpeg';

const birb = document.getElementById('birb');
birb.onload = async () => {
  const resultElement = document.getElementById('result');

  resultElement.innerText = 'Loading MobileNet...';

  const mobileNet = new MobileNet();
  console.time('Loading of model');
  await mobileNet.load();
  console.timeEnd('Loading of model');

  console.time('First prediction');
  const pixels = tf.browser.fromPixels(birb);
  let result = mobileNet.predict(pixels);
  const topK = mobileNet.getTopKClasses(result, 5);
  console.timeEnd('First prediction');

  resultElement.innerText = '';
  topK.forEach(x => {
    // resultElement.innerText += `${x.value.toFixed(3)}: ${x.label}\n`;
  });

  mobileNet.dispose();
};
birb.src = imageURL;