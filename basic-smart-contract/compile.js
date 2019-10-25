const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const sourceOfInbox = fs.readFileSync(inboxPath, 'utf-8');

// console.log(solc.compile(sourceOfInbox, 1));

solc.compile(sourceOfInbox, 1);
