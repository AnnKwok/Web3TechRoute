# Web3TechRoute
<!-- TOC -->

- [Web3TechRoute](#web3techroute)
- [git](#git)
- [前端](#前端)
  - [javascript](#javascript)
  - [node.js](#nodejs)
    - [npm](#npm)
  - [ethers.js](#ethersjs)
  - [Mocha](#mocha)
  - [chai](#chai)
  - [](#)
- [后端](#后端)
  - [solidity](#solidity)
- [部署](#部署)
  - [hardhat](#hardhat)
- [工具](#工具)
  - [remix](#remix)
  - [hardhat](#hardhat-1)
  - [Alchemy](#alchemy)
  - [Dune](#dune)
- [参考](#参考)

<!-- /TOC -->

# git
- [git 基本操作整理](https://juejin.cn/post/7098675784306393125)
# 前端
## javascript
- [JavaScript 标准参考教程](https://javascript.ruanyifeng.com/)
- [现代 JavaScript 教程](https://zh.javascript.info/)
- 匿名函数
- 回调函数
- 异步代码
  - promise
  - async、await
## node.js
- [手把手小白入門Node.js](https://juejin.cn/post/7090181915562475527)
- [node.js教你写一个web服务器](https://juejin.cn/post/7092006570531241998)
- nodejs是运行环境，不是新的语言
- nodejs包含内置模块（fs、path等），第三方模块（通过npm安装）
- nodejs提供了javascript语言模块化的工具-->require
### npm
- npm是包管理工具，全称nodejs package manage。
- 主要是了解使用npm管理的项目目录以及npm、npx、cnpm的使用。
- [什么是 npm —— 写给初学者的编程教程](https://www.freecodecamp.org/chinese/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
- [全网最全的npm小白教程](https://juejin.cn/post/7091142503478329358)
- [package.json文件](https://javascript.ruanyifeng.com/nodejs/packagejson.html)
- [练习题](https://ks.wjx.top/vj/ro3Rx5R.aspx)
## ethers.js
## Mocha
- 测试框架，一般和chai一起使用
- [测试框架 Mocha 实例教程
](https://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)
- [使用 Mocha 进行自动化测试](https://zh.javascript.info/testing-mocha#kai-fa-liu-cheng)
## chai
- 断言库
##
# 后端
## solidity
# 部署
## hardhat
- 对于web3项目，数据库就是blockchain，因此本地需要搭建链，并且模拟挖矿才能进行测试。
- hardhat简介如下:
>Hardhat框架是专门为以太坊智能合约开发设计的**开发环境**。它提供了一套工具和实用程序，可以更轻松地在以太坊网络上编译、测试和部署智能合约。借助 Hardhat，开发人员可以使用以太坊最流行的编程语言 Solidity 编写智能合约，并利用自动合约测试、合约调试等高级功能，以及与 VSCode 和 Truffle 等流行开发工具的集成。
- 通过上述简介，可以了解hardhat的基本作用（开发环境），方便程序员本地开发测试。否则，需要本地部署链并启动挖矿程序，成本过高。

项目目录介绍：
- contracts：合约代码
- frontend：前端代码
- scripts：部署脚本
- tasks
- test：测试脚本
- hardhat.config.js
- package-lock.json
- package.json

# 工具
## remix
- 开发工具，提供编译、部署功能
## [hardhat](hardhat.md)
- 测试、部署智能合约
- [hardhat中文文档](https://learnblockchain.cn/docs/hardhat/getting-started/)
- [Hardhat以太坊开发环境](https://github.com/AmazingAng/WTF-Solidity/blob/main/Topics/Tools/TOOL06_Hardhat/readme.md)
## Alchemy
- [Alchemy, 区块链API和节点基础设施](https://github.com/AmazingAng/WTF-Solidity/blob/main/Topics/Tools/TOOL04_Alchemy/readme.md)
## Dune
- [使用Dune可视化区块链数据](https://github.com/AmazingAng/WTF-Solidity/tree/main/Topics/Tools/TOOL05_Dune)
- 区块链本质上就是公开的存储数据的分布式账本，现在我们可以通过Dune来查询这个分布式账本的数据。

# 参考
- [hardhat-boilerplate](https://github.com/NomicFoundation/hardhat-boilerplate)
项目