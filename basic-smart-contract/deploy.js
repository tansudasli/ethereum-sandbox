const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'spin street shock tail atom crystal seek december garage sausage receive shoe',
    'https://rinkeby.infura.io/v3/ffa910fd43e344d7bcfb000b1c9f5f73'
);

const web3 = new Web3(provider);

let accounts;
let inbox;
const initialMessage = 'Hi, there';
const aMessage = 'Hi, Tansu';

const deploy = async () => {

    // get a list of accounts w/ promises. await is new syntax
//   web3.eth
//       .getAccounts()
//       .then((fetchedAccounts) => {
//       console.log(fetchedAccounts);
//   });

    accounts = await web3.eth.getAccounts();

    console.log(`attempting to deploy from account ${accounts[0]}`);

// use one of that accounts for deployment
     inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x' + bytecode, arguments: [initialMessage]})
        .send({from: accounts[0]}); // Promises<Contract>

    console.log(`contract deployed to address ${inbox.options.address}`);


};

deploy();
