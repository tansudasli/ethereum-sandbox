const assert = require('assert');
const mocha = require('mocha');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
const initialMessage = 'Hi, there';

mocha.beforeEach(async () => {

// get a list of accounts w/ promises. await is new syntax
//   web3.eth
//       .getAccounts()
//       .then((fetchedAccounts) => {
//       console.log(fetchedAccounts);
//   });

   accounts = await web3.eth.getAccounts();

// use one of that accounts for deployment
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [initialMessage]})
        .send({from: accounts[0], gas: '1000000'}); // Promises<Contract>

    inbox.setProvider(provider);

});

// for contract structure, check contract-structure.txt fil

mocha.describe('Inbox', () => {

    mocha.it('should have accounts ', () => {
        console.log(accounts);
    });

    // mocha.it('should have a contract ', () => {
    //     console.log(inbox);
    // });

    mocha.it('deploys a contract ', ()  => {

        assert.ok(inbox.options.address)
    });

    mocha.it('has a default message ', async ()  => {

        // call function vs send a transaction to function
        const message = await inbox.methods._message().call();

        assert.equal(message, initialMessage);
    });

});
