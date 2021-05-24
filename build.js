import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const file = readFileSync(join(__dirname, 'package.json')).toString('utf-8');

const packageInfomration = JSON.parse(file);

const version = packageInfomration.version;

writeFileSync(join(__dirname, '.env'), `VUE_APP_VERSION=v${version}`);
