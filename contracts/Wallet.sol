// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Wallet{

    uint public numofFunders;
    mapping(uint=>address) private funders;

receive() external payable {}
    function transfer() external payable{

        funders[numofFunders]=msg.sender;
    } 
    function withdraw(uint withdrawAmount) external{
require(withdrawAmount <=10000000000000000000,"cannot Withdraw more then 2 eth");
payable(msg.sender).transfer(withdrawAmount);

    }
}