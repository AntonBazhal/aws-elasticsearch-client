'use strict';

const AWS = require('aws-sdk');
const elasticsearch = require('elasticsearch');
const httpAWSES = require('http-aws-es');

function createClient(options) {
	options = options || {}; // eslint-disable-line no-param-reassign

	const region = options.region || process.env.AWS_REGION || 'us-east-1';
	const config = Object.assign(
		{},
		options,
		{
			connectionClass: httpAWSES,
			awsConfig: new AWS.Config({
				region,
				credentials: options.credentials
			})
		}
	);

	return new elasticsearch.Client(config);
}

module.exports = createClient;
module.exports.create = createClient;
