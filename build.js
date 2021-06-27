// eslint-disable-next-line @typescript-eslint/no-var-requires
const { readFileSync, writeFileSync } = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path');

const file = readFileSync(join(__dirname, 'package.json')).toString('utf-8');

const packageInformation = JSON.parse(file);

const version = packageInformation.version;

writeFileSync(join(__dirname, '.env'), `VUE_APP_VERSION=v${version}`);
