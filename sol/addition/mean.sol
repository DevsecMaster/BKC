// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Mean{
    function mea(uint256 [] memory arr) public pure returns (uint256){
        uint res=0;
        for (uint256 i =0; i<arr.length; i++)
        {
            res = res+arr[i];
        }
        return res=res/arr.length;
    }
}