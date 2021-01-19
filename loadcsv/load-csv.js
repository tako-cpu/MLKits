const fs = require('fs');

function loadCSV(filename, options)
{
	const data = fs.readFileSync(filename, {
		encoding: 'utf-8'
	});
	const parsed = data.split('\n').map((row) => row.split(','));
	
	console.log(parsed);
}

loadCSV('data.csv');