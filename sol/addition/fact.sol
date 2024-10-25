// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract FactCal{
    function CalFact (uint Number)public pure returns (uint){
        uint result = 1;
        for (uint i= 2; i <= Number; i++)
        {
            result *= i;
        }
        return result;
    }
    
    
}