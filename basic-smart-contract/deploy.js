const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'spin street shock tail atom crystal seek december garage sausage receive shoe',
    'rinkeby.infura.io/v3/ffa910fd43e344d7bcfb000b1c9f5f73'
);

const web3 = new Web3(provider);
