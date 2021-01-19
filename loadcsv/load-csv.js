const fs = require('fs');
const _ = require('lodash');

function loadCSV(filename, options)
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
			const result = parseFloat(element);
			return _.isNaN(result)? element : result;
		});
	});
	
	
	console.log(data);
}

loadCSV('data.csv');