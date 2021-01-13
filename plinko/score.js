const outputs = [];

function splitDataset(data, length)
{
	let shuffled = _.shuffle(data);
	let testData = _.slice(shuffled, 0, length);
	let trainingData = _.slice(shuffled, length);
	
	return [testData, trainingData];
}

function getDistance(a, b)
{
	return _.chain(a).zip(b).map((p1, p2) => (p1 - p2) ** 2)
			.sum().value() ** 0.5;
}

function KNN(data, point, k)
{
  return _.chain(data).map((output) => {
	  return [getDistance(_.initial(output), point), _.last(output)];
  }).sortBy((output) => output[0]).slice(0, k)
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
		return (KNN(trainingData, _.initial(testPoint), k) === testPoint[3]);
	}).size().divide(split).value();
	
	console.log("K# ", k, " Accuracy: ", accuracy * 100);
  });
  
  
}

