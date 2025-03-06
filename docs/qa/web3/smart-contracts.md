---
title: 智能合约开发
---

## How do you approach gas optimization in your Solidity contracts?

<details>
<summary>查看中文</summary>
你如何在 Solidity 合约中进行 gas 优化？

</details>

## What are the main differences between ERC-20, ERC-721, and ERC-1155 token standards?

So ERC-20 is basically the standard for fungible tokens - you know, tokens that are all identical and interchangeable, like a cryptocurrency. Each token has the same value as any other token of the same type. This standard defines basic functions like transfer, balanceOf, and approve that all ERC-20 tokens implement.

ERC-721, on the other hand, is for non-fungible tokens or NFTs. Each token is unique and has its own specific value and metadata. That's why it's perfect for digital collectibles, art, or anything where uniqueness matters. It has similar functions to ERC-20 but adds things like tokenURI for metadata.

ERC-1155 is like a hybrid approach that combines the best of both. It allows for semi-fungible tokens and batch operations. So with a single smart contract, you can create both fungible and non-fungible tokens, and you can transfer multiple token types in a single transaction, which is way more gas-efficient. I think of it as the "multi-token standard" because it's so versatile.

<details>
<summary>查看中文</summary>
ERC-20、ERC-721 和 ERC-1155 代币标准有什么主要区别？

ERC-20 是可替代代币的标准 - 也就是说，这些代币都是完全相同且可互换的，就像加密货币一样。同类型的每个代币都具有相同的价值。这个标准定义了所有 ERC-20 代币都会实现的基本函数，如 transfer、balanceOf 和 approve。

而 ERC-721 是为非同质化代币（NFT）设计的。每个代币都是独特的，有自己特定的价值和元数据。这就是为什么它非常适合数字收藏品、艺术品或任何需要唯一性的场景。它有类似 ERC-20 的函数，但增加了像 tokenURI 这样的元数据功能。

ERC-1155 则是一种混合方法，结合了前两者的优点。它允许半同质化代币和批量操作。因此，通过单个智能合约，你可以创建可替代和非同质化代币，并且可以在单个交易中转移多种代币类型，这样更加节省 gas。我将它视为"多代币标准"，因为它非常通用。

</details>

## How would you handle upgradable smart contracts?

When it comes to upgradable contracts, I generally use the proxy pattern approach. The basic idea is to separate the logic and the storage into different contracts. You have a proxy contract that users interact with, and it delegates all calls to an implementation contract that can be swapped out when you need to upgrade.

There are a few popular proxy patterns, but I prefer the transparent proxy pattern from OpenZeppelin because it's well-tested and addresses many of the common issues. It clearly separates admin functions from user functions, which prevents a lot of potential problems.

Another approach I've used is the diamond pattern (EIP-2535) for more complex systems where you need to upgrade specific functionalities independently. It's like having multiple implementation contracts that handle different aspects of your system.

The key thing I always keep in mind is storage layout. When you upgrade, you need to make sure your new implementation contract maintains the same storage layout as the old one, or you'll corrupt your data. I usually add new variables at the end and never remove or reorder existing ones.

And of course, I always have proper access controls for the upgrade functionality, typically using a multi-sig wallet or a timelock to manage upgrades securely.

<details>
<summary>查看中文</summary>
你会如何处理可升级的智能合约？

对于可升级合约，我通常使用代理模式方法。基本思想是将逻辑和存储分离到不同的合约中。你有一个用户交互的代理合约，它将所有调用委托给一个实现合约，当需要升级时，这个实现合约可以被替换。

有几种流行的代理模式，但我更喜欢使用 OpenZeppelin 的透明代理模式，因为它经过充分测试并解决了许多常见问题。它明确区分了管理员功能和用户功能，这避免了很多潜在问题。

我还使用过钻石模式（EIP-2535）来处理更复杂的系统，这些系统需要独立升级特定功能。这就像有多个实现合约分别处理系统的不同方面。

我始终铭记的关键点是存储布局。当你进行升级时，需要确保新的实现合约维持与旧合约相同的存储布局，否则你会破坏数据。我通常在末尾添加新变量，绝不删除或重新排序现有变量。

当然，我总是为升级功能设置适当的访问控制，通常使用多签钱包或时间锁来安全地管理升级。

</details>

## What are the main data types in Solidity and how do they differ from other programming languages?

In Solidity, we have several core data types that are a bit different from what you'd see in languages like JavaScript or Python.

For integers, we have int and uint with fixed sizes like uint8 up to uint256, with uint256 being the default when you just write uint. This is different from most languages where integers can grow dynamically.

Then there's address, which is unique to blockchain languages - it's a 20-byte value representing Ethereum addresses. An address can be regular or payable, with payable addresses allowing you to send Ether to them.

Boolean and string types work pretty much like in other languages, though strings are actually dynamically-sized byte arrays under the hood.

Arrays can be fixed-size or dynamic, and they're handled differently in memory versus storage, which is something you don't see in traditional languages. Same with mappings, which are like hash tables but with limitations - you can't iterate over all keys or get the size easily.

Structs let you define custom types by grouping variables, similar to other languages. And enums work for creating user-defined types with a discrete set of values.

One thing that throws people off is that there's no native floating-point support in Solidity because of precision concerns on the blockchain. You have to use fixed-point arithmetic with integers and careful division.

<details>
<summary>查看中文</summary>
Solidity 中的主要数据类型有哪些，它们与其他编程语言有何不同？

在 Solidity 中，我们有几种核心数据类型，它们与 JavaScript 或 Python 等语言中的数据类型有些不同。

对于整数，我们有 int 和 uint，具有固定大小，从 uint8 到 uint256 不等，当你只写 uint 时，默认为 uint256。这与大多数整数可以动态增长的语言不同。

然后是 address 类型，这是区块链语言特有的 - 它是一个 20 字节的值，代表以太坊地址。地址可以是普通的或可支付的，可支付地址允许你向其发送以太币。

布尔值和字符串类型的工作方式与其他语言基本相同，尽管字符串在底层实际上是动态大小的字节数组。

数组可以是固定大小或动态的，它们在内存和存储中的处理方式不同，这是你在传统语言中不会看到的。映射也是如此，它们类似于哈希表但有限制 - 你无法遍历所有键或轻松获取大小。

结构体让你可以通过组合变量来定义自定义类型，类似于其他语言。枚举用于创建具有一组离散值的用户定义类型。

一个容易让人困惑的点是，Solidity 中没有原生的浮点支持，因为区块链上的精度问题。你必须使用整数进行定点算术并注意除法。

</details>

## Explain the differences between memory, storage, and calldata in Solidity

In Solidity, these storage locations determine both where your data lives and how gas costs work when you're dealing with that data.

Storage is basically the contract's permanent state variables - it's like a database that persists between function calls and transactions. Every contract has its own storage that's written to the blockchain, which makes it the most expensive to use. Writing to storage costs a lot of gas because you're permanently changing the blockchain state.

Memory is temporary and exists only during function execution. It's like RAM in a computer - when the function is done, it's cleared. Memory is cheaper than storage but still costs gas to allocate and use. You'll typically use memory for intermediate calculations or when working with temporary copies of data.

Calldata is special - it's a read-only area where function arguments are stored when they're passed in from outside the contract. You can't modify calldata, but it's the cheapest option gas-wise because it's just passing through data without copying it. That's why you'll often see external functions using calldata for array and string parameters.

The key thing to remember is that storage variables persist, memory variables are temporary but modifiable, and calldata is temporary and read-only but gas-efficient.

There are some important rules too - you can't assign storage to storage (it creates a reference), and when you assign storage to memory, it creates a copy. Understanding these nuances is crucial for writing gas-efficient contracts.

<details>
<summary>查看中文</summary>
解释 Solidity 中 memory、storage 和 calldata 之间的区别

在 Solidity 中，这些存储位置决定了你的数据存在哪里，以及处理这些数据时的 gas 成本。

Storage 基本上是合约的永久状态变量 - 它就像一个在函数调用和交易之间持久存在的数据库。每个合约都有自己的存储空间，它会被写入区块链，这使它成为最昂贵的使用选项。写入存储需要大量 gas，因为你正在永久改变区块链状态。

Memory 是临时的，只在函数执行期间存在。它就像计算机中的 RAM - 当函数完成时，它就被清除了。Memory 比 storage 便宜，但分配和使用仍然需要 gas。你通常会使用 memory 进行中间计算或处理数据的临时副本。

Calldata 很特殊 - 它是一个只读区域，当函数参数从合约外部传入时存储在这里。你不能修改 calldata，但从 gas 角度来看，它是最便宜的选项，因为它只是传递数据而不复制它。这就是为什么你经常会看到外部函数对数组和字符串参数使用 calldata。

要记住的关键是：storage 变量是持久的，memory 变量是临时的但可修改的，calldata 是临时的且只读的，但 gas 效率高。

还有一些重要规则 - 你不能将 storage 分配给 storage（它会创建引用），当你将 storage 分配给 memory 时，它会创建副本。理解这些细微差别对编写 gas 高效的合约至关重要。

</details>

## Can you explain how delegatecall works and when you would use it?

Delegatecall is one of those powerful but tricky features in Solidity. It's a low-level function similar to a regular call, but with one major difference: when contract A delegatecalls contract B, B's code executes in the context of contract A. This means it uses A's storage, A's ETH balance, and msg.sender remains the original caller, not contract A.

This is powerful because it allows for implementing upgradeable contract patterns. The proxy pattern I mentioned earlier relies on delegatecall - your proxy contract delegatecalls to the implementation contract, so the implementation's code runs with the proxy's storage.

Another use case is for library functions. When you use libraries in Solidity, they're actually being called via delegatecall, which is why they can modify your contract's state.

The tricky part with delegatecall is that the storage layout of both contracts must be compatible. If contract B expects a different storage layout than contract A, it will end up reading and writing to the wrong storage slots, which can corrupt your data or cause serious bugs.

You have to be extremely careful with delegatecall for security reasons. If you delegatecall to a malicious or compromised contract, it can modify your contract's state however it wants. This is why many hacks have occurred through vulnerable proxy implementations or misuse of delegatecall.

I generally only use delegatecall for well-established patterns like proxies or libraries, and even then, I make sure the contracts I'm calling are properly audited and trusted.

<details>
<summary>查看中文</summary>
你能解释delegatecall如何工作以及什么时候会使用它吗？

Delegatecall是Solidity中那些强大但棘手的功能之一。它是一个类似于普通call的低级函数，但有一个主要区别：当合约A对合约B执行delegatecall时，B的代码在合约A的上下文中执行。这意味着它使用A的存储，A的ETH余额，并且msg.sender保持为原始调用者，而不是合约A。

这很强大，因为它允许实现可升级的合约模式。我之前提到的代理模式依赖于delegatecall - 你的代理合约对实现合约进行delegatecall，所以实现的代码在代理的存储环境中运行。

另一个用例是库函数。当你在Solidity中使用库时，它们实际上是通过delegatecall被调用的，这就是为什么它们可以修改你的合约状态。

delegatecall的棘手部分是两个合约的存储布局必须兼容。如果合约B期望的存储布局与合约A不同，它最终会读写错误的存储槽，这可能会破坏你的数据或导致严重的错误。

出于安全原因，你必须非常小心使用delegatecall。如果你对恶意或已被攻破的合约进行delegatecall，它可以随意修改你的合约状态。这就是为什么许多黑客攻击是通过易受攻击的代理实现或delegatecall的误用发生的。

我通常只对代理或库等成熟模式使用delegatecall，即使如此，我也会确保我调用的合约经过适当审计并值得信任。

</details>

## What are events in Solidity and how do you use them effectively?

Events in Solidity are basically the blockchain's way of logging. They're super useful for a few reasons. First, they're much cheaper than storing data on-chain - an event costs way less gas than writing to storage. Second, they make it easy for off-chain applications to track what's happening in your contract.

When you emit an event, the data gets stored in the transaction logs, which are part of the blockchain but separate from contract storage. These logs can be efficiently searched and filtered by dApp frontends or indexing services like The Graph.

A typical event declaration looks like:

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);
```

Those "indexed" parameters are especially important - they become what we call topics, which can be efficiently searched. You can have up to three indexed parameters per event.

I use events for a few key purposes. First, for state changes - anytime I update important state, I emit an event. For example, in a token contract, I emit events for transfers, approvals, mints, and burns.

Second, for debugging - events can help trace execution flow during development and testing.

Finally, for off-chain notifications and data synchronization. Your frontend can listen for specific events and update its UI accordingly, or you can build an indexer that processes events to create a more queryable database of your contract's activity.

One pattern I find useful is including both the old and new values when a state changes, which gives listeners complete information about what changed.

<details>
<summary>查看中文</summary>
Solidity中的事件是什么，如何有效地使用它们？

Solidity中的事件基本上是区块链的日志记录方式。它们非常有用，原因有几个。首先，它们比在链上存储数据便宜得多 - 发出事件的gas成本远低于写入存储。其次，它们使得链下应用程序能够轻松跟踪你的合约中发生的事情。

当你发出事件时，数据被存储在交易日志中，这些日志是区块链的一部分，但与合约存储分开。这些日志可以被dApp前端或像The Graph这样的索引服务高效地搜索和过滤。

一个典型的事件声明看起来像：

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);
```

那些"indexed"参数特别重要 - 它们成为我们所说的主题，可以被高效搜索。每个事件最多可以有三个indexed参数。

我使用事件有几个关键目的。首先是状态变化 - 每次我更新重要状态时，我都会发出事件。例如，在代币合约中，我为转账、批准、铸造和销毁发出事件。

其次是调试 - 事件可以帮助在开发和测试期间追踪执行流程。

最后是链下通知和数据同步。你的前端可以监听特定事件并相应地更新其UI，或者你可以构建一个索引器，处理事件以创建一个更可查询的合约活动数据库。

我发现有用的一个模式是在状态变化时包含旧值和新值，这为监听者提供了关于变化的完整信息。

</details>

## How do you handle common security vulnerabilities like reentrancy in your contracts?

Reentrancy is probably one of the most notorious vulnerabilities in Solidity - it's what caused the original DAO hack that led to Ethereum's fork. It happens when a contract calls an external contract before updating its own state, allowing that external contract to call back into the original function and exploit the outdated state.

My approach to preventing reentrancy is multi-layered. First and most importantly, I follow the checks-effects-interactions pattern. This means I always: 1) check conditions, 2) update state variables, and 3) only then interact with external contracts. By updating state before making external calls, even if the external call tries to reenter, it will find the state already changed.

Second, I use reentrancy guards for critical functions. This is typically a simple mutex pattern:

```solidity
bool private locked;

modifier nonReentrant() {
    require(!locked, "No reentrancy");
    locked = true;
    _;
    locked = false;
}
```

I apply this modifier to functions that make external calls, especially those involving token or Ether transfers.

For other common vulnerabilities - with integer overflows and underflows, Solidity 0.8+ now checks these automatically, but in older versions, I'd use SafeMath. For access control issues, I implement clear role-based systems, often using OpenZeppelin's AccessControl. For tx.origin phishing, I never use tx.origin for authentication.

I'm also cautious about delegatecall as I mentioned earlier, and I'm careful with signature verification to avoid replay attacks by including nonces and chain IDs.

Finally, I always have my contracts professionally audited, and I follow development best practices like extensive testing, formal verification when possible, and careful review of all external calls and dependencies.

<details>
<summary>查看中文</summary>
你如何在合约中处理重入等常见安全漏洞？

重入可能是Solidity中最臭名昭著的漏洞之一 - 它导致了引发以太坊分叉的原始DAO黑客攻击。当一个合约在更新自己的状态之前调用外部合约时，重入攻击就会发生，这允许该外部合约回调进入原始函数并利用过时的状态。

我防止重入的方法是多层次的。首先也是最重要的，我遵循检查-效果-交互模式。这意味着我总是：1）检查条件，2）更新状态变量，3）只有在那之后才与外部合约交互。通过在进行外部调用之前更新状态，即使外部调用尝试重入，它也会发现状态已经改变。

其次，我对关键函数使用重入保护。这通常是一个简单的互斥模式：

```solidity
bool private locked;

modifier nonReentrant() {
    require(!locked, "No reentrancy");
    locked = true;
    _;
    locked = false;
}
```

我将此修饰符应用于进行外部调用的函数，特别是那些涉及代币或以太币转账的函数。

对于其他常见漏洞 - 对于整数溢出和下溢，Solidity 0.8+现在会自动检查这些问题，但在较旧版本中，我会使用SafeMath。对于访问控制问题，我实现清晰的基于角色的系统，通常使用OpenZeppelin的AccessControl。对于tx.origin钓鱼，我从不使用tx.origin进行身份验证。

我也对前面提到的delegatecall保持谨慎，并且在签名验证中小心，通过包含nonce和链ID来避免重放攻击。

最后，我总是让我的合约接受专业审计，并遵循开发最佳实践，如广泛测试、可能时进行形式化验证，以及仔细审查所有外部调用和依赖项。

</details>

## What are the key considerations when designing a token contract (ERC-20, ERC-721, etc.)?

When designing token contracts, there are several key considerations I always keep in mind, regardless of whether it's an ERC-20, ERC-721, or other standard.

First, I think about the token economics and supply mechanics - will the token be mintable, burnable, or have a fixed supply? Who has minting privileges? Is there a cap on the total supply? These decisions need to align with the project's economics and governance model.

Second, access control is critical - determining who can mint, burn, pause, or upgrade the contract. I typically implement role-based access control rather than just having a single owner address, which creates a single point of failure.

Third, I consider extra functionality beyond the basic standard. For ERC-20, this might include features like permit (for gasless approvals), token recovery (to rescue accidentally sent tokens), or snapshot capabilities for governance. For ERC-721, I might add marketplace royalties, metadata management, or reveal mechanics.

Fourth, metadata handling - especially for NFTs, how and where will metadata be stored? On-chain is expensive but immutable, while off-chain is cheaper but requires trust in external systems. I often use a hybrid approach with critical metadata on-chain and extended data on IPFS.

Fifth, gas optimization - token contracts are often heavily used, so optimizations matter. This includes using packed storage, minimizing on-chain data, and efficiently implementing transfer logic.

Sixth, security considerations - implementing protection against reentrancy, front-running, and other common attacks. I always follow audited reference implementations like OpenZeppelin and add custom protections as needed.

Finally, upgradeability - deciding whether the contract should be upgradeable. There's a trade-off between flexibility and security/trust that needs to be carefully considered.

<details>
<summary>查看中文</summary>
设计代币合约（ERC-20、ERC-721等）时的关键考虑因素有哪些？

在设计代币合约时，无论是ERC-20、ERC-721还是其他标准，我总是牢记几个关键考虑因素。

首先，我考虑代币经济学和供应机制 - 代币是否可铸造、可销毁或有固定供应？谁有铸造权限？总供应量是否有上限？这些决定需要与项目的经济和治理模式保持一致。

其次，访问控制至关重要 - 确定谁可以铸造、销毁、暂停或升级合约。我通常实现基于角色的访问控制，而不仅仅是拥有单一的所有者地址，后者会创建单点故障。

第三，我考虑基本标准之外的额外功能。对于ERC-20，这可能包括许可（用于无gas的批准）、代币恢复（拯救意外发送的代币）或用于治理的快照功能。对于ERC-721，我可能会添加市场版税、元数据管理或揭示机制。

第四，元数据处理 - 特别是对于NFT，元数据将如何以及在哪里存储？链上存储昂贵但不可变，而链下存储更便宜但需要信任外部系统。我经常使用混合方法，关键元数据在链上，扩展数据在IPFS上。

第五，gas优化 - 代币合约通常使用频繁，所以优化很重要。这包括使用打包存储、最小化链上数据和高效实现转账逻辑。

第六，安全考虑 - 实施防止重入、抢先交易和其他常见攻击的保护。我总是遵循经过审计的参考实现，如OpenZeppelin，并根据需要添加自定义保护。

最后，可升级性 - 决定合约是否应该可升级。在灵活性和安全性/信任之间存在权衡，需要仔细考虑。

</details>

## How do you interact with oracles in Solidity, and what are the security concerns?

Interacting with oracles is essential for getting external data into your smart contracts, but it comes with its own set of challenges. The most common oracle I work with is Chainlink, which has a pretty standardized interface.

For price feeds, the integration is straightforward - you create an interface to the Chainlink aggregator contract and call its functions:

```solidity
interface AggregatorV3Interface {
  function latestRoundData() external view returns (
    uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound
  );
}

// Then in your contract:
AggregatorV3Interface internal priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419); // ETH/USD feed

function getLatestPrice() public view returns (int) {
    (,int price,,,) = priceFeed.latestRoundData();
    return price;
}
```

For more custom data using Chainlink VRF (for randomness) or using their API calls, you implement the required callback functions that the oracle will call when it has the data.

As for security concerns, there are several key issues to watch out for. First is data staleness - you need to check the timestamp when the data was last updated and make sure it's recent enough for your needs. Oracle data can become stale if the network is congested or if there are issues with the oracle nodes.

Second is manipulation risk. Even with decentralized oracles like Chainlink, there can be temporary price deviations or flash crashes in the underlying markets. I typically implement sanity checks, such as comparing the current value against recent historical values or using time-weighted average prices.

Third is single-point-of-failure risk. I prefer using decentralized oracle networks rather than single-source oracles, and sometimes I'll even combine multiple independent oracle sources for critical functions.

Finally, there's the cost aspect - oracle calls, especially for custom data, can be expensive. You need to design your contract to minimize unnecessary oracle calls and handle the payment for the oracle services appropriately.

<details>
<summary>查看中文</summary>
你如何在Solidity中与预言机交互，有哪些安全隐患？

与预言机交互对于将外部数据导入你的智能合约至关重要，但它带来了一系列挑战。我使用最多的预言机是Chainlink，它有一个相当标准化的接口。

对于价格馈送，集成很简单 - 你创建一个到Chainlink聚合器合约的接口并调用其函数：

```solidity
interface AggregatorV3Interface {
  function latestRoundData() external view returns (
    uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound
  );
}

// 然后在你的合约中：
AggregatorV3Interface internal priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419); // ETH/USD 馈送

function getLatestPrice() public view returns (int) {
    (,int price,,,) = priceFeed.latestRoundData();
    return price;
}
```

对于使用Chainlink VRF（用于随机性）的更自定义数据或使用他们的API调用，你实现所需的回调函数，当预言机有数据时会调用这些函数。

至于安全隐患，有几个关键问题需要注意。首先是数据过时 - 你需要检查数据最后更新的时间戳，并确保它对你的需求来说足够新。如果网络拥堵或预言机节点出现问题，预言机数据可能会变得过时。

其次是操纵风险。即使使用像Chainlink这样的去中心化预言机，基础市场也可能出现临时价格偏差或闪崩。我通常实施合理性检查，例如将当前值与最近的历史值进行比较或使用时间加权平均价格。

第三是单点故障风险。我更喜欢使用去中心化预言机网络而不是单一来源的预言机，有时我甚至会为关键功能组合多个独立的预言机来源。

最后，还有成本方面 - 预言机调用，特别是对于自定义数据，可能很昂贵。你需要设计你的合约，以最小化不必要的预言机调用，并适当处理预言机服务的付款。

</details>

## What are the main differences between developing on Ethereum and other EVM-compatible chains?

While the core development experience with Solidity is pretty similar across EVM-compatible chains, there are several important differences I've encountered when deploying to chains like Polygon, Arbitrum, Optimism, BSC, or Avalanche.

First, gas costs and optimization priorities can differ significantly. On Ethereum mainnet, gas is typically much more expensive, so extreme optimization is crucial. On sidechains or L2s like Polygon or Arbitrum, gas might be cheaper, so you might prioritize readability or functionality over squeezing out every last bit of optimization.

Transaction confirmation times also vary widely. On Ethereum, you might wait minutes for confirmation, while on some other chains it can be seconds. This affects how you design your application's UX and how you handle transaction states.

Each chain also has different built-in contracts and precompiles. For example, some chains have different WETH addresses or different implementations of standards. This means you need to maintain a configuration system that's chain-aware to interact with the right contracts on each network.

Security considerations can also differ. Some chains have shorter finality times or different consensus mechanisms, which might affect how you handle high-value transactions or implement security measures.

Cross-chain interoperability is another key difference. If your dApp needs to work across multiple chains, you'll need to implement or integrate with bridge solutions, which adds complexity.

Chain-specific features can also be important. For instance, Polygon has a gas station network for meta-transactions, Arbitrum and Optimism have different approaches to calldata compression and fraud proofs, and some chains support additional opcodes or precompiles not available on Ethereum.

Finally, the developer tooling and infrastructure can differ - some chains have better block explorers, more reliable RPCs, or better testing environments than others.

<details>
<summary>查看中文</summary>
在以太坊和其他EVM兼容链上开发有什么主要区别？

虽然在EVM兼容链上使用Solidity的核心开发体验非常相似，但在部署到Polygon、Arbitrum、Optimism、BSC或Avalanche等链时，我遇到了几个重要区别。

首先，gas成本和优化优先级可能有显著差异。在以太坊主网上，gas通常要昂贵得多，因此极端优化至关重要。在侧链或L2如Polygon或Arbitrum上，gas可能更便宜，所以你可能会优先考虑可读性或功能性，而不是榨取最后一点优化。

交易确认时间也差异很大。在以太坊上，你可能需要等待几分钟才能确认，而在其他一些链上可能只需几秒钟。这影响你如何设计应用程序的用户体验以及如何处理交易状态。

每个链还有不同的内置合约和预编译。例如，一些链有不同的WETH地址或标准的不同实现。这意味着你需要维护一个链感知的配置系统，以在每个网络上与正确的合约交互。

安全考虑也可能不同。一些链有更短的最终性时间或不同的共识机制，这可能影响你如何处理高价值交易或实施安全措施。

跨链互操作性是另一个关键区别。如果你的dApp需要在多个链上工作，你需要实现或集成桥接解决方案，这增加了复杂性。

链特定功能也可能很重要。例如，Polygon有用于元交易的gas站网络，Arbitrum和Optimism对calldata压缩和欺诈证明有不同的方法，一些链支持以太坊上不可用的额外操作码或预编译。

最后，开发者工具和基础设施可能不同 - 一些链有更好的区块浏览器，更可靠的RPCs，或比其他链更好的测试环境。

</details>
