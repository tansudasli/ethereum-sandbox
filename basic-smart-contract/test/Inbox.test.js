const assert = require('assert');
const mocha = require('mocha');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


mocha.beforeEach(() => {

// get a list of accounts
  web3.eth.getAccounts().then((fetchedAccounts) => {
      console.log(fetchedAccounts);
  });

// use one of that accounts for deployment
});


mocha.describe('Inbox', () => {

    it('should ', function () {

    });

});
