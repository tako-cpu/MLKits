require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');
const LinearRegression = require('./linear-regression');
const plot = require('node-remote-plot');

let { features, labels, testFeatures, testLabels } = loadCSV('./cars.csv', {
  shuffle: true,
  splitTest: 50,
  dataColumns: ['horsepower', 'displacement', 'weight'],
  labelColumns: ['mpg'],
  converters: {
	mpg: (value) => {
		const mpg = parseFloat(value);
		
		if(mpg < 15)
			return [1, 0, 0];
		else if(mpg < 30)
			return [0, 1, 0];
		else
			return [0, 0, 1];
	}
  }
});

const regression = new LinearRegression(features, _.flatMap(labels), {
  learningRate: 0.1,
  iterations: 3,
  batchSize: 10
});

regression.train();
const r2 = regression.test(testFeatures, testLabels);

plot({
  x: regression.mseHistory.reverse(),
  xLabel: 'Iteration #',
  yLabel: 'Mean Squared Error'
});

console.log('R2 is', r2);

regression.predict([
	[215, 440, 2.16]
]).print();
