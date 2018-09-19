'use strict';

const fs = require('fs');
const path = require('path');
const { fibosClient, account } = require('./fibos_client');

const CONTRACT_NAME = account.name;

const jsCode = fs.readTextFile(path.join('product', 'product.js'));
fibosClient.setcodeSync(CONTRACT_NAME, 0, 0, fibosClient.compileCode(jsCode));

const code = fibosClient.getCodeSync(CONTRACT_NAME, true);
console.log('code:', code);

const abi = JSON.parse(fs.readTextFile(path.join('product', 'product.abi')));
fibosClient.setabiSync(CONTRACT_NAME, abi);