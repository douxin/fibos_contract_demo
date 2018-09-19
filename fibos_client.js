'use strict';

const fibos = require('fibos.js');

const accounts = {
    eosio: {
        name: 'eosio',
        publicKey: 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
        privateKey: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3',
    },
    product: { // 先通过 account_create 创建新用户，然后将 console 中打印出来的 key 拷贝到这儿
        name: 'product',
        publicKey: 'FO5TGQuwvarHHHNqSKxeWx2APL1vXjbhTys4ewzBA2rp8eEhe4PU',
        privateKey: '5K276J8s2PyKaEFh3nxGpMotvp6nUfQMpMNBkfKZKFPvZr2syQt',
    }
};

const currentAccount = accounts.product; // 先使用 eosio 来创建用户 product，然后使用 product 用户来部署合约和调用合约

const config = {
    chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
    httpEndpoint: 'http://127.0.0.1:8888',
};

const fibosClient = fibos({
    chainId: config.chainId,
    keyProvider: currentAccount.privateKey,
    httpEndpoint: config.httpEndpoint,
    logger: {
        log: null,
        err: console.error,
    }
});

module.exports = {
    fibosClient,
    config,
    account: currentAccount,
};