pragma solidity ^0.4.0;

contract Inbox {

    static public message;

//    constructor
    function Inbox(string message) public{
        this.message = message;

    }

    function setMessage(string message) public {
        this.message = message;
    }

    function getMessage() public view returns (string) {
        return this.message;
    }
}
