'use strict';

const fibos = require('fibos.js');
const { fibosClient } = require('./fibos_client');

const createKeyPair = function () {
    const pri = fibos.modules.ecc.randomKeySync();
    const pub = fibos.modules.ecc.privateToPublic(pri);

    return { pri, pub };
};

const createAccount = function (name) {
    const key = createKeyPair();
    console.log(key);
    const account = fibosClient.newaccountSync({
        creator: 'eosio',
        name: name,
        owner: key.pub,
        active: key.pub,
    });

    console.log(account);

    return account;
};

createAccount('product');