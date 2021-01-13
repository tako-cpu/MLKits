const outputs = [];
const k = 3;

function splitDataset(data, length)
{
	let shuffled = _.shuffle(data);
	let testData = _.slice(shuffled, 0, length);
	let trainingData = _.slice(shuffled, length);
	
	return [testData, trainingData];
}

function KNN(data, point)
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
  let [testData, trainingData] = splitDataset(outputs, 10);
  let accuracy = _.chain(testData).filter(testPoint => {
	return (KNN(trainingData, testPoint[0]) === testPoint[3]);
  }).size().divide(10).value();
  
  console.log("Accuracy: ", accuracy * 100);
}

