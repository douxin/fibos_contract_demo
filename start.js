const fibos = require('fibos');

fibos.load('http');
fibos.load('chain', {
    'delete-all-blocks': true,
    'contracts-console': true,
});
fibos.load('net');
fibos.load('chain_api');
fibos.load('history_api');

fibos.enableJSContract = true; // 开启 js 合约

fibos.load('producer', {
    'producer-name': 'eosio',
    'enable-stale-production': true,
});
fibos.config_dir = './config';
fibos.data_dir = './data';

fibos.start();