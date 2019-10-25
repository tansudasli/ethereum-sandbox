# ethereum-sandbox

- basic-smart-contract: 


## How to start

1. Initialize *MetaMask* account in chrome browser.
2. To get free Ether into your own account (defined in MetaMask), [use this url](https://faucet.rinkeby.io/) 

to **start quickly**,

- Copy-Paste Inbox.sol content into [Remix IDE](remix.ethereum.org) which covers,
   - Free Accounts w/ ETHER, 
   - IDE, 
   - Testing and 
   - Ethereum VM inside.
- Select *Rinkeby Test Network* 

to **start on your local* and easily create Ethereum projects, You need:

- install **ganache-cli** for _local Ethereum VM_ `npm install -g ganache-cli`.
    - Run `ganache-cli` to open server on 127.0.0.1:8545 !
- install **truffle** for easy development `npm install truffle -g`

other things, if you need to initialize *manually*, project structure
- `npm init` to initialize manually package.json
- `npm install --save solc@0.4.25` solidity compiler
- `npm i -save mocha` for testing contracts
- `npm i -save web3` for web3 framework
- `npm i --save ganache-cli` for ganache local ethereum vm
