import "@nomiclabs/hardhat-web3"
import {subtask, task} from "hardhat/config"

/**
 * hh l1mintToken721 --exampletoken 0xD7c3Cc3bCbac0679Eae85B40D985Ac5A8d4b0092 --tokenurl 0001 --to 0xD6f15EAC1Cb3B4131Ab4899a52E711e19DEeA73f --network opl1
 */
task("l1mintToken721", "Mint Token")
    .addParam("exampletoken", "ExampleToken address")
    .addParam("tokenurl", "token mint amount")
    .addParam("to", "接受者钱包地址")
    .setAction(async (taskArgs, hre) => {
        const tokenFactory = await hre.ethers.getContractFactory('ExampleToken')
        const token = await tokenFactory.attach(taskArgs.exampletoken)
        // 铸造nft
        const res= await token.mintToken(taskArgs.to, taskArgs.tokenurl)
        console.log("res->",await res)
    });


/**
 * 授权tokenID 2 给合约l1erc721gateway ,l1执行
 * hh approveToken721 --exampletoken 0xD7c3Cc3bCbac0679Eae85B40D985Ac5A8d4b0092 --tokenid 2 --l1erc721gateway 0xffA3A7d25d13520117610BdFe06ae46Ee99c4757 --to 0xD6f15EAC1Cb3B4131Ab4899a52E711e19DEeA73f --network opl1
 */
task("approveToken721", "approveToken721")
    .addParam("exampletoken", "ExampleToken address")
    .addParam("l1erc721gateway", "OVM_L1ERC721Gateway address")
    .addParam("to", "接受者钱包地址")
    .addParam("tokenid", "approve tokenId")
    .setAction(async (taskArgs, hre) => {
        const tokenFactory = await hre.ethers.getContractFactory('ExampleToken')
        const ERC721 = await tokenFactory.attach(taskArgs.exampletoken)
        //确认余额
        const  balanceOf= await ERC721.balanceOf(taskArgs.to)
        console.log("balanceOf->",await balanceOf)
        const ownerOfAddr= await ERC721.ownerOf(1)
        console.log("ownerOfAddr->", ownerOfAddr)
        const ownerOfAdd01= await ERC721.ownerOf(2)
        console.log("ownerOfAdd01->", ownerOfAdd01)
        // 授权合约，通过网管合约转帐
        const approve=await ERC721.approve(taskArgs.l1erc721gateway, taskArgs.tokenid)
        await approve
        console.log("approve->", approve.hash)
    });

/**
 * 锻造->deposit,L1 => L2,l1执行
 * hh depositToken721 --l1erc721gateway 0xffA3A7d25d13520117610BdFe06ae46Ee99c4757 --tokenid 2 --network opl1
 */
task("depositToken721", "Mint Token")
    .addParam("l1erc721gateway", "OVM_L1ERC721Gateway address")
    .addParam("tokenid", "tokenid")
    .setAction(async (taskArgs, hre) => {
        const L1ERC721GatewayFactory = await hre.ethers.getContractFactory('OVM_L1ERC721Gateway')
        const Gateway = await L1ERC721GatewayFactory.attach(taskArgs.l1erc721gateway)
        const deposit=await Gateway.deposit(taskArgs.tokenid)
        console.log("deposit->", await deposit)
    });


/**
 * 确认l2账户
 * hh l2721balances --token 0x7396ba598A935eBccDC841C8d1814F04D2B47Cee --to 0xD6f15EAC1Cb3B4131Ab4899a52E711e19DEeA73f --tokenid 2 --network opl2
 */
task("l2721balances", "确认l2账号信息")
    .addParam("token", "OVM_L2DepositedERC721 address")
    .addParam("to", "接受者钱包地址")
    .addParam("tokenid", "tokenId")
    .setAction(async (taskArgs, hre) => {
        const tokenFactory = await hre.ethers.getContractFactory('OVM_L2DepositedERC721')
        const token = await tokenFactory.attach(taskArgs.token)
            const balanceOf=await token.balanceOf(taskArgs.to)
            console.log("balanceOf->",balanceOf)
            const ownerOfAddr= await token.ownerOf(taskArgs.tokenid)
            console.log("ownerOfAddr->", ownerOfAddr)
    });

/**
 * 确认l1账户
 * hh l1721balances --token 0x7396ba598A935eBccDC841C8d1814F04D2B47Cee --to 0xD6f15EAC1Cb3B4131Ab4899a52E711e19DEeA73f --tokenid 2 --network opl1
 */
task("l1721balances", "确认l1账号信息")
    .addParam("token", "OVM_L2DepositedERC721 address")
    .addParam("to", "接受者钱包地址")
    .addParam("tokenid", "tokenId")
    .setAction(async (taskArgs, hre) => {
            const tokenFactory = await hre.ethers.getContractFactory('ExampleToken')
            const token = await tokenFactory.attach(taskArgs.token)
            const  balanceOf=    await token.balanceOf(taskArgs.to)
            console.log("balanceOf->",await balanceOf)
            const ownerOfAddr= await token.ownerOf(taskArgs.tokenid)
            console.log("ownerOfAddr->", ownerOfAddr)
    })

task("opTransfer721", "转账")
    .addParam("from", "from address")
    .addParam("token", "token address")
    .addParam("to", "to address ")
    .addParam("tokenid", "approve tokenId")
    .setAction(async (taskArgs, hre) => {
            const tokenFactory = await hre.ethers.getContractFactory('OVM_L2DepositedERC721')
            const token = await tokenFactory.attach("0x09635F643e140090A9A8Dcd712eD6285858ceBef")
            const  balanceOf= await token.balanceOf(taskArgs.to)
            console.log("balanceOf->",await balanceOf)
            const txInfo= await token.transferFrom(taskArgs.from, taskArgs.to, taskArgs.tokenid)
            const  balanceOf01=   await token.balanceOf(taskArgs.to)
            console.log("balanceOf01->",await balanceOf01)
            const ownerOfAddr= await token.ownerOf(taskArgs.tokenid)
            console.log("ownerOfAddr->", ownerOfAddr)
            console.log("safeTransferFrom:",txInfo.hash)
    });

task("withdraw721l1", "withdraw到l1")
    .addParam("address", "OVM_L2DepositedERC721 address")
    .addParam("to", "to address ")
    .addParam("tokenid", "tokenId")
    .setAction(async (taskArgs, hre) => {
            const tokenFactory = await hre.ethers.getContractFactory('OVM_L2DepositedERC721')
            const token = await tokenFactory.attach(taskArgs.address)
            await token.withdraw(taskArgs.tokenid)
            const  balanceOf= await token.balanceOf(taskArgs.to)
            console.log("balanceOf->",await balanceOf)
    });

module.exports = {}
