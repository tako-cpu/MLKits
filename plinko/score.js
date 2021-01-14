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
  //let [testData, trainingData] = splitDataset(minMax(outputs, 3), split)
  const k = 10;
  
  _.range(0, 3).forEach(feature => {
	let datum = _.map(outputs, row => [row[feature], _.last(row)]);
	let [testData, trainingData] = splitDataset(minMax(datum, 1), split)
	let accuracy = _.chain(testData).filter((testPoint) => {
		return (KNN(trainingData, _.initial(testPoint), k) === _.last(testPoint));
	}).size().divide(split).value();
	
	console.log("Feature# ", feature, " Accuracy: ", accuracy * 100);
  });
  
  
}

function minMax(data, featureCount)
{
	const clone = _.cloneDeep(data);
	
	for(let feature = 0; feature < featureCount; feature++)
	{
		let column = clone.map(row => row[feature]);
		const min = _.min(column);
		const max = _.max(column);
		
		for(let data = 0; data < clone.length; data++)
		{
			clone[data][feature] = ((clone[data][feature] - min) / (max - min));
		}
	}
	
	return clone;
}