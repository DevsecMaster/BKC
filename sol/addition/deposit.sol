// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Bank{
    address public s;
    uint256 public bal;

    constructor(){
        s=msg.sender;
        bal=0;
    }

    function Deposit(uint256 a)public{
        bal+=a;
        s=msg.sender;
    }

    function Withdrwl(uint256 a)public {
        if (bal>=a) {
            bal-= a;
        }
        s=msg.sender;
    }
    function display()public view returns (address){
        return s;
    }
}