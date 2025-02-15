// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;


contract Auction {
    address public o;
    uint public hb;
    address public hba;
    bool public oe;


    constructor() {
        o = msg.sender;
        hb = 0;
        oe = false;
    }


    function bid(uint a) public {
        require(!oe, "Auction has already ended");
        require(a > hb, "Bid must be greater than current value");
        hb = a;
        hba = msg.sender;
    }


    function endA() public {
        require(msg.sender == o, "Only owner can send");
        oe = true;
    }


    function withdraw() public view returns (uint256) {
        require(msg.sender == hba, "Only highest bidder can withdraw");
        return hb;
    }
}
