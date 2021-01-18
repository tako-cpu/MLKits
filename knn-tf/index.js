require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
//const tf = require('./tensor');
const csv = require('./load-csv');

let { features, labels, testFeatures, testLabels } = csv('kc_house_data.csv', {
	shuffle: true,
	splitTest: 10,
	dataColumns: ['lat', 'long'],
	labelColumns: ['price']
});

function runKNN(features, labels, prediction, k)
{
	let distances = features.sub(prediction).pow(2).sum(1).pow(0.5);
	let paired = distances.expandDims(1).concat(labels, 1);
	let tensors = paired.unstack().sort((a, b) => {
	  return ((a.get(0) > b.get(0))? 1 : -1);
	}).slice(0, k).reduce((a, o) => {
	 return a + o.get(1);
	}, 0) / k;
	
	return tensors;
}

let parsedfeatures = tf.tensors(features);
let parsedlabels = tf.tensors(labels);
let parsedtestFeatures = tf.tensors(testFeatures[0]);
let parsedtestLabels = tf.tensors(testLabels);

let results = runKNN(parsedfeatures, parsedlabels, parsedtestFeaturest, 10);
console.log("Find: ", results, testLabels[0][0]);
//console.log(testFeatures);
//console.log(testLabels);