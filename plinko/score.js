const outputs = [];
const prediction = 300;
const k = 3;
const testData = [];
const trainingData = [];
const testcount = 0;


function splitDataset()
{
	let shuffled = _.shuffle(outputs);
	testData = _.slice(shuffled, 0, testcount);
	trainingData = _.slice(shuffled, testcount);
}

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

function runAnalysis() {
  const parsed = _.chain(outputs).map((output) => [Math.abs(output[0] - prediction), output[3]])
				 .sortBy((output) => output[0]).slice(0, k)
				 .countBy((output) => output[1]).toPairs().sortBy((pair) => pair[1])
				 .last().first().parseInt().value();
				 
  console.log(parsed);
}

