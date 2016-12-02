# aws-elasticsearch-client

[![Build Status][ci-image]][ci-url]
[![NPM version][npm-image]][npm-url]
[![Dependencies Status][dependencies-image]][dependencies-url]
[![DevDependencies Status][devdependencies-image]][devdependencies-url]

Tiny wrapper for [elasticsearch][elasticsearch-lib-url] and [http-aws-es][http-aws-es-lib-url] libraries with reasonable defaults that makes work with [AWS Elasticsearch Service][aws-elasticsearch-service-url] easier.

## Installation

```bash
$ npm install aws-elasticsearch-client
```

## Usage

`aws-elasticsearch-client` takes `options` object and returns [elasticsearch client][elasticsearch-lib-url] configured to communicate with [AWS Elasticsearch Service][aws-elasticsearch-service-url].

```js
const aeclient = require('aws-elasticsearch-client');

const options = {
	host: 'your-aws-es-host.amazon.com'
};
const client = aeclient(options);
```

Library also provides `create` alias:

```js
const aeclient = require('aws-elasticsearch-client');

const options = {
	host: 'your-aws-es-host.amazon.com'
};
const client = aeclient.create(options);
```

### options
`options` object supports all the [configuration options][elasticsearch-config-url] provided by [elasticsearch library][elasticsearch-lib-url]. On top of that, `aws-elasticsearch-client` provides following configuration capabilities:
- **[envPrefix]** - { String } the [prefix][aws-environment-credentials-class-envprefix-url] for the environment variable names used to retrieve access credentials [defaults to `AWS`]
- **[region]** - { String } AWS region [defaults to `${options.envPrefix}_REGION` environment variable or `us-east-1`]
- **[credentials]** - { [AWS.Credentials][aws-credentials-class-url] } an instance of [AWS.Credentials class][aws-credentials-class-url] or its descendants [defaults to [environment credentials][aws-environment-credentials-class-url] loaded using `options.envPrefix`]

## License

The MIT License (MIT)

Copyright (c) 2016 Anton Bazhal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[aws-credentials-class-url]: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Credentials.html
[aws-elasticsearch-service-url]: https://aws.amazon.com/elasticsearch-service/
[aws-environment-credentials-class-url]: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EnvironmentCredentials.html
[aws-environment-credentials-class-envprefix-url]: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EnvironmentCredentials.html#envPrefix-property
[ci-image]: https://circleci.com/gh/AntonBazhal/aws-elasticsearch-client.svg?style=shield&circle-token=62ce75896db92cd20f8dc1c7b2cc456c2470fa19
[ci-url]: https://circleci.com/gh/AntonBazhal/aws-elasticsearch-client
[dependencies-url]: https://david-dm.org/antonbazhal/aws-elasticsearch-client
[dependencies-image]: https://david-dm.org/antonbazhal/aws-elasticsearch-client/status.svg
[devdependencies-url]: https://david-dm.org/antonbazhal/aws-elasticsearch-client?type=dev
[devdependencies-image]: https://david-dm.org/antonbazhal/aws-elasticsearch-client/dev-status.svg
[elasticsearch-lib-url]: https://www.npmjs.com/package/elasticsearch
[elasticsearch-config-url]: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/configuration.html
[http-aws-es-lib-url]: https://www.npmjs.com/package/http-aws-es
[npm-url]: https://www.npmjs.org/package/aws-elasticsearch-client
[npm-image]: https://img.shields.io/npm/v/aws-elasticsearch-client.svg
