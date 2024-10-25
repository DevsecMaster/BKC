// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0; 

contract studentC { 
    struct std { 
        uint sid; 
        string name; 
        address addr; 
        uint BCT; 
        uint ML; 
        uint BDA; 
        uint percent; 
        string grade; 
    } 

    mapping(uint256 => std) public student; 
    
    function register(uint i, string memory n, uint b, uint m, uint a) public { 
        student[i].name = n; 
        student[i].addr = msg.sender; 
        student[i].sid = i; 
        student[i].BCT = b; 
        student[i].ML = m; 
        student[i].BDA = a; 

        uint p = (b + m + a) / 3; 
        student[i].percent = p; 

        if (p >= 80) { 
            student[i].grade = "O"; 
        } else if (p >= 60 && p < 80) { 
            student[i].grade = "A"; 
        } else if (p >= 40 && p < 60) { 
            student[i].grade = "B"; 
        } else { 
            student[i].grade = "F"; 
        } 
    } 
} 
