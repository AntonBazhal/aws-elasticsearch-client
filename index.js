'use strict';

const AWS = require('aws-sdk');
const elasticsearch = require('elasticsearch');
const httpAWSES = require('http-aws-es');

function createClient(options) {
	options = options || {}; // eslint-disable-line no-param-reassign

	const envPrefix = options.envPrefix || 'AWS';
	const region = options.region || process.env[`${envPrefix}_REGION`] || 'us-east-1';
	const credentials = options.credentials
		? options.credentials
		: new AWS.EnvironmentCredentials(envPrefix);

	const config = Object.assign(
		{},
		options,
		{
			connectionClass: httpAWSES,
			amazonES: {
				region,
				credentials
			}
		}
	);

	return new elasticsearch.Client(config);
}

module.exports = createClient;
module.exports.create = createClient;
