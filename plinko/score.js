const outputs = [];

function splitDataset(data, length)
{
	let shuffled = _.shuffle(data);
	let testData = _.slice(shuffled, 0, length);
	let trainingData = _.slice(shuffled, length);
	
	return [testData, trainingData];
}

function KNN(data, point, k)
{
  return _.chain(data).map((output) => [Math.abs(output[0] - point), output[3]])
	  	 .sortBy((output) => output[0]).slice(0, k)
		 .countBy((output) => output[1]).toPairs().sortBy((pair) => pair[1])
		 .last().first().parseInt().value();		 
}

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

function runAnalysis() {
  let split = Math.round(outputs.length / 2);
  let [testData, trainingData] = splitDataset(outputs, split)
  
  _.range(1, 15).forEach(k => {
	let accuracy = _.chain(testData).filter((testPoint) => {
		return (KNN(trainingData, testPoint[0], k) === testPoint[3]);
	}).size().divide(split).value();
	
	console.log("K# ", k, " Accuracy: ", accuracy * 100);
  });
  
  
}

