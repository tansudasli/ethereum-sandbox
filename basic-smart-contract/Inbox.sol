pragma solidity ^0.4.17;

contract Inbox {

//    creates getMessage automatically due to public
    string public _message;

    //    constructor
    function Inbox(string message) public{
        _message = message;

    }

    function setMessage(string message) public {
        _message = message;
    }

}
