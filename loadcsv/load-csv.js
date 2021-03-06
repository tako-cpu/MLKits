const fs = require('fs');
const _ = require('lodash');
const shuffleSeed = require('shuffle-seed');

function extractColumns(data, columnNames)
{
	const headers = _.first(data);
	
	const indexes = _.map(columnNames, column => headers.indexOf(column));
	const extracted = _.map(data, row => _.pullAt(row, indexes));
	return extracted;
}

function loadCSV(filename, { dataColumns = [], labelColumns = [], shuffle = true, splitTest = false, converters = {} })
{
	let data = fs.readFileSync(filename, {
		encoding: 'utf-8'
	});
	data = data.split('\n').map((row) => row.split(','));
	//Remove trailing comma
	data.map((row) => _.dropRightWhile(row, value => value === ''));
	const headers = _.first(data);
	
	data = data.map((row, index) => {
		if(index === 0)
			return row;
		
		return row.map((element, i) => {
			let result = 0;
			if(converters[headers[i]])
				result = converters[headers[i]](element);
			else
				result = parseFloat(element);
			return _.isNaN(result)? element : result;
		});
	});
	
	let labels = extractColumns(data, labelColumns);
	data = extractColumns(data, dataColumns);
	
	data.shift();
	labels.shift();
	
	if(shuffle)
	{
		data = shuffleSeed.shuffle(data, 'phrase');
		labels = shuffleSeed.shuffle(labels, 'phrase');
	}
	
	if (splitTest)
	{
		const trainSize = _.isNumber(splitTest)? splitTest : Math.floor(data.length / 2);
		
		return {
			features: data.slice(0, trainSize),
			labels: labels.slice(0, trainSize), 
			testFeatures: data.slice(trainSize),
			testLabels: data.slice(trainSize)
		};
	}
	else
	{
		return { features: data, labels };
	}
}

const {features, labels, testFeatures, testLabels} = loadCSV('data.csv', { 
	dataColumns: ['height', 'value'],
	labelColumns: ['passed'],
	shuffle: true,
	splitTest: 1,
	converters: {
		passed: val => ((val === 'TRUE')? 'T' : 'F')
	}
});

console.log("t1", features);
console.log("t2", labels);
console.log("t3", testFeatures);
console.log("t4", testLabels);