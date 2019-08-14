const assert = require('assert');
const AWS = require('aws-sdk');
const elasticsearch = require('elasticsearch');
const httpAWSES = require('http-aws-es');

function createClient(options = {}) {
	assert(typeof options === 'object', 'options must be an object');

	const region = options.region || process.env.AWS_REGION || 'us-east-1';

	const config = {
		...options,
		connectionClass: httpAWSES,
		awsConfig: new AWS.Config({
			region,
			credentials: options.credentials
		})
	};

	return new elasticsearch.Client(config);
}

module.exports = createClient;
module.exports.create = createClient;
