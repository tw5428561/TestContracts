import "@nomiclabs/hardhat-web3"
import {subtask, task} from "hardhat/config"
import {expect} from "chai";
import fs from "fs";

let map:Map<string,string>=new Map
task("erc721Test", "erc721 任务测试入口task")
    .setAction(async (taskArgs) => {
        // @ts-ignore
        map= await run("deployToken721", {name: "test",symbol:"bit"})
        let tokenAddress=  map.get("tokenAddress")
        let ownerAddress=  map.get("ownerAddress")
        // @ts-ignore
        await run("mintToken721",{token:tokenAddress,amount:"111111111111111111111",to:ownerAddress})
        // @ts-ignore
        let balances =await run("queryErc721balances", {token: tokenAddress, user: ownerAddress})
        expect(balances).to.equal("111111111111111111111")
        console.log("--------------------------------deployToken-mintToken-success--------------------------------")
        // @ts-ignore
        await run("approve721",{token:tokenAddress, to:ownerAddress,amount:"211111111111111111111"})
        // @ts-ignore
        let allowances = await run("queryAllowance721",{token:tokenAddress, to:ownerAddress,account:ownerAddress})
        expect(allowances).to.equal("211111111111111111111")
        console.log("--------------------------------approve-queryAllowance-success--------------------------------")
        const secrects =read_csv('./secrect.csv')
        let userAddress=secrects[1][1]
        // @ts-ignore
        await run("transfer721", {token: tokenAddress,to: userAddress, amount: "11111111111111111111"})
        // @ts-ignore
        let balances01 =await run("queryErc721balances", {token: tokenAddress, user: userAddress})
        expect(balances01).to.equal("11111111111111111111")
        console.log("--------------------------------erc721-transfer-success--------------------------------")
    });

subtask("deployToken721", "Deploy Token")
    .addParam("name", "token name")
    .addParam("symbol", "token symbol")
    .setAction(async (taskArgs, hre) => {
        const tokenFactory = await hre.ethers.getContractFactory('TestERC721')
        const token = await tokenFactory.deploy()
        await token.deployed();
        console.log("export ERC721_TOKEN=%s", token.address.toLocaleLowerCase());
        map.set("tokenAddress",token.address.toLocaleLowerCase())
        map.set("ownerAddress",await token.owner())
        return map
    });

subtask("mintToken721", "Mint Token")
    .addParam("token", "token address")
    .addParam("amount", "token mint amount")
    .addParam("to", "接受者钱包地址")
    .setAction(async (taskArgs, hre) => {
        const tokenFactory = await hre.ethers.getContractFactory('TestERC721')
        const token = await tokenFactory.attach(taskArgs.token)
        await token.safeMint(taskArgs.to, taskArgs.amount)
    });

subtask("queryErc721balances", "Query ERC721 balances")
    .addParam("token", "token address")
    .addParam("user", "user address ")
    .setAction(async (taskArgs, hre) => {
        const tokenFactory = await hre.ethers.getContractFactory('TestERC721')
        const token = await tokenFactory.attach(taskArgs.token)
        let balances = (await token.balanceOf(taskArgs.user)).toString()
        return balances
    });

subtask("approve721", "approve ERC20 token to others")
    .addParam("token", "erc20 address")
    .addParam("to", "to address ")
    .addParam("amount", "approve amount")
    .setAction(async (taskArgs, hre) => {
        const tokenFactory = await hre.ethers.getContractFactory('TestERC721')
        const token = await tokenFactory.attach(taskArgs.token)

        await token.approve(taskArgs.to, taskArgs.amount)
    });

subtask("queryAllowance721", "Query ERC721 allowance")
    .addParam("token", "erc721 address")
    .addParam("to", "to address ")
    .addParam("account", "account address")
    .setAction(async (taskArgs, hre) => {
        const tokenFactory = await hre.ethers.getContractFactory('TestERC721')
        const token = await tokenFactory.attach(taskArgs.token)

        let allowances = (await token.getApproved(taskArgs.account, taskArgs.to))
        return allowances
    });

subtask("transfer721", "转账")
    .addParam("token", "token address")
    .addParam("to", "to address ")
    .addParam("amount", "approve amount")
    .setAction(async (taskArgs, hre) => {
        const tokenFactory = await hre.ethers.getContractFactory('TestERC721')
        const erc721 = await tokenFactory.attach(taskArgs.token)
        let  txInfo=  await erc721.transferOwnership(taskArgs.to, taskArgs.amount);
        //console.log(txInfo.hash)
    });

function read_csv(csvfile: any){
    // @ts-ignore
    let csvstr: string = fs.readFileSync(csvfile,"utf8",'r+');
    let arr: string[] = csvstr.split('\n');
    let array: any = [];
    arr.forEach(line => {
        array.push(line.split(','));
    });
    return array
}
module.exports = {}
