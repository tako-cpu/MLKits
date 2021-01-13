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
  let correct = 0;
  
  for (let i = 0; i < testData.length; i++)
  {
	  const bucket = KNN(trainingData, testData[i][0]);
	  if(bucket === testData[i][3])
	  {
		  correct++;
	  }	  
  }
  
  console.log("Accuracy: ", correct / testData.length);
}

