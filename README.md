# ethereum-sandbox

- basic-smart-contract: 


## How to start

to **start quickly**,
- Copy-Paste Inbox.sol content into [Remix IDE](remix.ethereum.org) which covers,
   - Free Accounts w/ ETHER, 
   - IDE, 
   - Testing and 
   - Ethereum VM inside.
- Select *Rinkeby Test Network* . Whick comes predefined accounts loaded w/ ETHER.


to **start on your local** and **write tests** and manually create Ethereum projects, 
You need: other things, below. **basic-smart-contract** project was created like below.
- `npm init` to initialize manually package.json
- `npm install --save solc@0.4.25` solidity compiler
- `npm i -save mocha` for testing contracts
- `npm i -save web3` for web3 framework to do things w/ ethereum
- `npm i --save ganache-cli` for ganache local ethereum vm

to **deploy Rinkeby Test Network**
1. Initialize *MetaMask* account in chrome browser. Save your Mnemonic!
2. To get free Ether into your MetaMask account, [use this url](https://faucet.rinkeby.io/) 
3. Create an account on infura.io to connect specific node on Rinkeby network.
    - create a project.
    - copy endpoint of Rinkeby !! Not main network :)
4. Need truffle-hdwallet-provider this time. `npm i --save @truffle/hdwallet-provider`
5. Run `node deploy.js`, then get deployed address
6. Search that address in `https://rinkeby.etherscan.io/`



to **start on your local** and easily create Ethereum projects, You need:
- install **ganache-cli** for _local Ethereum VM_ `npm install -g ganache-cli`.
    - Run `ganache-cli` to open server on 127.0.0.1:8545 !
- install **truffle** for easy development `npm install truffle -g`
