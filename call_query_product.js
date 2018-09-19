'use strict';

const { fibosClient, account } = require('./fibos_client');

const CONTRACT_NAME = 'product';

const ctx = fibosClient.contractSync(CONTRACT_NAME);

const product = ctx.querySync(1, {
    authorization: account.name
});

console.log('query:', product);