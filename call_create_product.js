'use strict';

const { fibosClient, account } = require('./fibos_client');

const CONTRACT_NAME = 'product';

const ctx = fibosClient.contractSync(CONTRACT_NAME);
ctx.createSync(1, '笔记本电脑', 182736, {
    authorization: account.name
});