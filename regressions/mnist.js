require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const plot = require('node-remote-plot');
const _ = require('lodash');
const mnist = require('mnist-data');
const t = require('./imagerecog');

// const mnistData = mnist.training(0, 1);

// //We want to make it 1 big row
// const features = mnistData.images.values.map((image) => {
	// return _.flatMap(image);
// });
// const encodedLabels = mnistData.labels.values.map((image) => {
	// const row = new Array(10).fill(0); //[0, 0, ,0, ..., 0]
	// row[image] = 1;
	
	// return row;
// });

function loadData()
{
	const mnistData = mnist.training(0, 1);

	//We want to make it 1 big row
	const features = mnistData.images.values.map((image) => {
		return _.flatMap(image);
	});
	const encodedLabels = mnistData.labels.values.map((image) => {
		const row = new Array(10).fill(0); //[0, 0, ,0, ..., 0]
		row[image] = 1;
		
		return row;
	});
	
	return { features, labels: encodedLabels };
}

const { features, encodedLabels } = loadData();

const regression = new t.LogisticRegression(features, encodedLabels, {
	learningRate: 1,
	iterations: 5,
	batchSize: 100
});

regression.train();

const testMnistData = mnist.testing(0, 100);
const testFeatures = testMnistData.images.values.map((image) => _.flatMap(image));
const testEncodedLabels = testMnistData.labels.values.map((label) => {
	const row = new Array(10).fill(0);
	row[label] = 1;
	return row;
});

regression.test(testFeatures, testEncodedLabels);
