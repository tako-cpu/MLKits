const plot = require('node-remote-plot');

class Data
{
	constructor()
	{
		this.data = 
		[
			{
				passedemissions: "FALSE",
				mpg: "18",
				cylinders: "8",
				displacement: "307",
				horsepower: "130",
				weight: "1.752",
				acceleration: "12",
				modelyear: "70",
				carname: "chevrolet chevelle malibu"
			},
			{
				passedemissions: "FALSE",
				mpg: "15",
				cylinders: "8",
				displacement: "350",
				horsepower: "165",
				weight: "1.8465",
				acceleration: "11.5",
				modelyear: "70",
				carname: "buick skylark 320"
			},
			{
				passedemissions: "FALSE",
				mpg: "18",
				cylinders: "8",
				displacement: "318",
				horsepower: "150",
				weight: "1.718",
				acceleration: "11",
				modelyear: "70",
				carname: "plymouth satellite"
			},
			{
				passedemissions: "FALSE",
				mpg: "16",
				cylinders: "8",
				displacement: "304",
				horsepower: "150",
				weight: "1.7165",
				acceleration: "12",
				modelyear: "70",
				carname: "amc rebel sst"
			},
			{
				passedemissions: "FALSE",
				mpg: "17",
				cylinders: "8",
				displacement: "302",
				horsepower: "140",
				weight: "1.7245",
				acceleration: "10.5",
				modelyear: "70",
				carname: "ford torino"
			},
			{
				passedemissions: "FALSE",
				mpg: "15",
				cylinders: "8",
				displacement: "429",
				horsepower: "198",
				weight: "2.1705",
				acceleration: "10",
				modelyear: "70",
				carname: "ford galaxie 500"
			},
			{
				passedemissions: "FALSE",
				mpg: "14",
				cylinders: "8",
				displacement: "454",
				horsepower: "220",
				weight: "2.177",
				acceleration: "9",
				modelyear: "70",
				carname: "chevrolet impala"
			},
			{
				passedemissions: "FALSE",
				mpg: "14",
				cylinders: "8",
				displacement: "440",
				horsepower: "215",
				weight: "2.156",
				acceleration: "8.5",
				modelyear: "70",
				carname: "plymouth fury iii"
			},
			{
				passedemissions: "FALSE",
				mpg: "14",
				cylinders: "8",
				displacement: "455",
				horsepower: "225",
				weight: "2.2125",
				acceleration: "10",
				modelyear: "70",
				carname: "pontiac catalina"
			},
			{
				passedemissions: "FALSE",
				mpg: "15",
				cylinders: "8",
				displacement: "390",
				horsepower: "190",
				weight: "1.925",
				acceleration: "8.5",
				modelyear: "70",
				carname: "amc ambassador dpl"
			},
			{
				passedemissions: "FALSE",
				mpg: "15",
				cylinders: "8",
				displacement: "383",
				horsepower: "170",
				weight: "1.7815",
				acceleration: "10",
				modelyear: "70",
				carname: "dodge challenger se"
			},
			{
				passedemissions: "FALSE",
				mpg: "14",
				cylinders: "8",
				displacement: "340",
				horsepower: "160",
				weight: "1.8045",
				acceleration: "8",
				modelyear: "70",
				carname: "plymouth 'cuda 340"
			},
			{
				passedemissions: "FALSE",
				mpg: "15",
				cylinders: "8",
				displacement: "400",
				horsepower: "150",
				weight: "1.8805",
				acceleration: "9.5",
				modelyear: "70",
				carname: "chevrolet monte carlo"
			},
			{
				passedemissions: "FALSE",
				mpg: "14",
				cylinders: "8",
				displacement: "455",
				horsepower: "225",
				weight: "1.543",
				acceleration: "10",
				modelyear: "70",
				carname: "buick estate wagon (sw)"
			},
			{
				passedemissions: "TRUE",
				mpg: "24",
				cylinders: "4",
				displacement: "113",
				horsepower: "95",
				weight: "1.186",
				acceleration: "15",
				modelyear: "70",
				carname: "toyota corona mark ii"
			},
			{
				passedemissions: "TRUE",
				mpg: "22",
				cylinders: "6",
				displacement: "198",
				horsepower: "95",
				weight: "1.4165",
				acceleration: "15.5",
				modelyear: "70",
				carname: "plymouth duster"
			},
			{
				passedemissions: "FALSE",
				mpg: "18",
				cylinders: "6",
				displacement: "199",
				horsepower: "97",
				weight: "1.387",
				acceleration: "15.5",
				modelyear: "70",
				carname: "amc hornet"
			},
			{
				passedemissions: "TRUE",
				mpg: "21",
				cylinders: "6",
				displacement: "200",
				horsepower: "85",
				weight: "1.2935",
				acceleration: "16",
				modelyear: "70",
				carname: "ford maverick"
			},
			{
				passedemissions: "TRUE",
				mpg: "27",
				cylinders: "4",
				displacement: "97",
				horsepower: "88",
				weight: "1.065",
				acceleration: "14.5",
				modelyear: "70",
				carname: "datsun pl510"
			},
			{
				passedemissions: "TRUE",
				mpg: "26",
				cylinders: "4",
				displacement: "97",
				horsepower: "46",
				weight: "0.9175",
				acceleration: "20.5",
				modelyear: "70",
				carname: "volkswagen 1131 deluxe sedan"
			},
			{
				passedemissions: "TRUE",
				mpg: "25",
				cylinders: "4",
				displacement: "110",
				horsepower: "87",
				weight: "1.336",
				acceleration: "17.5",
				modelyear: "70",
				carname: "peugeot 504"
			},
			{
				passedemissions: "TRUE",
				mpg: "24",
				cylinders: "4",
				displacement: "107",
				horsepower: "90",
				weight: "1.215",
				acceleration: "14.5",
				modelyear: "70",
				carname: "audi 100 ls"
			},
			{
				passedemissions: "TRUE",
				mpg: "25",
				cylinders: "4",
				displacement: "104",
				horsepower: "95",
				weight: "1.1875",
				acceleration: "17.5",
				modelyear: "70",
				carname: "saab 99e"
			},
			{
				passedemissions: "TRUE",
				mpg: "26",
				cylinders: "4",
				displacement: "121",
				horsepower: "113",
				weight: "1.117",
				acceleration: "12.5",
				modelyear: "70",
				carname: "bmw 2002"
			},
			{
				passedemissions: "TRUE",
				mpg: "21",
				cylinders: "6",
				displacement: "199",
				horsepower: "90",
				weight: "1.324",
				acceleration: "15",
				modelyear: "70",
				carname: "amc gremlin"
			},
			{
				passedemissions: "FALSE",
				mpg: "10",
				cylinders: "8",
				displacement: "360",
				horsepower: "215",
				weight: "2.3075",
				acceleration: "14",
				modelyear: "70",
				carname: "ford f250"
			},
			{
				passedemissions: "FALSE",
				mpg: "10",
				cylinders: "8",
				displacement: "307",
				horsepower: "200",
				weight: "2.188",
				acceleration: "15",
				modelyear: "70",
				carname: "chevy c20"
			},
			{
				passedemissions: "FALSE",
				mpg: "11",
				cylinders: "8",
				displacement: "318",
				horsepower: "210",
				weight: "2.191",
				acceleration: "13.5",
				modelyear: "70",
				carname: "dodge d200"
			},
			{
				passedemissions: "FALSE",
				mpg: "9",
				cylinders: "8",
				displacement: "304",
				horsepower: "193",
				weight: "2.366",
				acceleration: "18.5",
				modelyear: "70",
				carname: "hi 1200d"
			}
		];
	}
	
	getData()
	{
		let parsed = [];
		for(let iterator = 0; iterator < this.data.length; iterator++)
		{
			parsed.push([this.data[iterator].horsepower, this.data[iterator].mpg]);
		}
		
		let shuffled = _.shuffle(parsed);
		let training = shuffled.slice(0, 20);
		let testing = shuffled.slice(20);
		
		return [training, testing];		
	}
	
	separateData(value)
	{
		let features = [];
		let labels = [];
		
		for(let iterator = 0; iterator < value.length; iterator++)
		{
			features.push(value[iterator][0]);
			labels.push(value[iterator][1]);
		}
		
		return [features, labels];
	}
}

class LinearRegression
{
	constructor(features, labels, options)
	{
		//Wrap features to tensor ready for matrix operation
		//this.features = tf.tensor(features);
		this.features = this.processFeatures(features);
		this.labels = tf.tensor(labels);
		this.mseHistory = [];
		this.bHistory = [];
		
		//this.features = tf.ones([this.features.shape[0], 1]).concat(this.features, 1);
		
		this.options = Object.assign
		(
			{
				learningRate: 0.1,
				iterations: 10,
				decisionBoundary: 0.5
			},
			options
		);
		
		this.weights = tf.zeros([this.features.shape[1], 1]);
		
		this.m = 0;
		this.b = 0;
	}
	
	runGradientDescent(features, labels)
	{
		let currentGuess = features.matMul(this.weights).sigmoid();
		let differences = currentGuess.sub(labels);
		
		let slopes = features.transpose.matMul(differences)
					.div(features.shape[0]);
		
		this.weights = this.weights.sub(slopes.mul(this.options.learningRate));
	}
	
	train()
	{
		const batchQuantity = Math.floor(this.features.shape[0] / this.options.batchSize);
		for(let iterator = 0; iterator < this.options.iterations; iterator++)
		{
			for(let j = 0; j < batchQuantity; j++)
			{
				const startIndex = j * this.options.batchSize;
				const featureSlice = this.features.slice([startIndex, 0], [this.options.batchSize, -1]);
				const labelSlice = this.labels.slice([startIndex, 0], [this.options.batchSize, - 1]);
				this.runGradientDescent(featureSlice, labelSlice);
			}
			
			this.bHistory.push(this.weights.get(0, 0));
			console.log(this.options.iterations);
			this.recordMSE();
			this.updateLearningRate();
		}
	}
	
	test(testFeatures, testLabels)
	{
		// //testFeatures = tf.tensor(testFeatures);
		// testFeatures = this.processFeatures(testFeatures);
		// testLabels = tf.tensor(testLabels);
		
		// //testFeatures = tf.ones([testFeatures.shape[0], 1]).concat(testFeatures, 1);
		
		// let predictions = testFeatures.matMul(this.weights);
		// predictions.print();
		
		// let res = testLabels.sub(predictions).pow(2).sum().get();
		// let tot = testLabels.sub(testLabels.mean()).pow(2).sum().get();
		
		// return 1 - (res / tot);
		const predictions = this.predict(testFeatures).round();
		testLabels = tf.tensor(testLabels);
		
		const incorrect = predictions.sub(testLabels).abs().sum().get();
		
		const correct = (predictions.shape[0] - incorrect) / predictions.shape[0];
		return correct;
	}
	
	processFeatures(features)
	{
		features = tf.tensor(features);
//		features = tf.ones([features.shape[0], 1).concat(features, 1);
		
		if (this.mean && this.variance)
		{
			features = features.sub(this.mean).div(this.variance.pow(0.5));
		}
		else
		{
			features = this.standardize(features);
		}
		
		//To make it 1, instead of 0.999999
		features = tf.ones([features.shape[0], 1).concat(features, 1);
		
		return features;
	}
	
	standardize(features)
	{
		let { mean, variance } = tf.moments(features, 0);
		
		this.mean = mean;
		this.variance = variance;
		
		return features.sub(mean).div(variance.pow(0.5));
	}
	
	recordMSE()
	{
		const mse = this.features.matMul(this.weights).sub(this.labels).pow(2).sum().div(this.features.shape[0]).get();
		this.mseHistory.unshift(mse);
	}
	
	updateLearningRate()
	{
		if(this.mseHistory.length < 2)
			return;
			
		if(this.mseHistory[0] > this.mseHistory[1])
		{
			this.options.learningRate /= 2;
		}
		else
		{
			this.options.learningRate *= 1.05;
		}
	}
	
	predict(observations)
	{
		//cast() to tell treat boolean as numbers in result of greater()
		return this.processFeatures(observations).matMul(this.weights).sigmoid().greater(this.options.decisionBoundary).cast('float32');
	}
}

let Source = new Data();
let [Training, Testing] = Source.getData();
let [featureTraining, labelTraining] = Source.separateData(Training);
let Algorithm = new LinearRegression(featureTraining, labelTraining, {
	learningRate: 0.001,
	iterations: 20,
	batchSize: 10
});
Algorithm.train();
Algorithm.test();

console.log(Algorithm.weights.get(1, 0), Algorithm.weights.get(0, 0));

// plot({
	// x: Algorithm.mseHistory.reverse();,
	// xLabel: 'Iterations',
	// yLabel: 'MSE'
// });
plot({
	x: Algorithm.bHistory,
	y: Algorithm.mseHistory.reverse(),
	xLabel: 'B',
	yLabel: 'MSE'
});

Algorithm.predict(
	[120, 2, 380]
).print();