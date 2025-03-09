---
title: 智能合约开发
---

## How do you approach gas optimization in your Solidity contracts?

There are several ways I optimize gas costs in Solidity:

1. Variable packing to optimize storage structure
2. Function visibility optimization - using `external` instead of `public` since public functions copy parameters to memory
3. Loop optimization - caching array length and using `unchecked` to avoid overflow checks
4. Batch operations - combining multiple operations into a single transaction
5. Using `calldata` instead of `memory` for read-only function parameters to avoid memory copying
6. Reducing storage writes whenever possible
7. Using custom errors instead of require with string messages, as strings take up storage space
8. Short-circuit principle - avoiding unnecessary computations
9. Off-chain data with on-chain verification, like using Merkle proofs
10. Inline assembly for critical paths, though this increases complexity and security risks
11. Using mappings instead of arrays when appropriate, as mappings have no length management overhead

Of course, these methods need to be applied based on the specific situation. No single method works for every situation.

<details>
<summary>查看中文</summary>
你如何在 Solidity 合约中进行 gas 优化？

Solidity 中有很多方法可以优化 gas 成本，大概有以下几种：

1. 变量打包，优化存储结构
1. 函数可见性优化，使用 external 代替 public，因为 public 函数在调用时会复制参数到内存，增加成本
1. 循环优化，缓存数组长度，使用 unchecked 避免溢出检查
1. 批量操作，将多个操作合并到一个交易中
1. 使用 calldata 代替 memory，calldata 是只读的，可以避免复制内存节省大量 gas
1. 减少 storage 写入
1. 使用自定义错误代替 require，字符串作为错误消息需要占用存储空间，运行时会复制到内存，增加成本
1. 短路原则，避免不必要的计算
1. 链下数据与链上证明，例如使用 merkle proof 验证链下数据
1. 内联汇编在关键路径上可以节省 gas，但是增加了复杂性和安全风险
1. 在合适的情况下，使用 mapping 代替数组，mapping 没有长度管理开销，且只为实际使用的键分配存储

这些方法都能很好的优化 gas 成本，但是需要根据实际情况选择合适的方法，没有一种方法是万能的。

</details>

## What are the main differences between ERC-20, ERC-721, and ERC-1155 token standards?

These three main token standards are basically distinguished as follows:

ERC-20 is the standard for regular tokens where all tokens are identical, just like regular money.

ERC-721 is for unique tokens - also known as NFTs. Each one is different and has a unique ID.

ERC-1155 allows you to have both types in a single contract, you can simultaneously have both regular tokens and unique tokens.

That's it - ERC-20 for identical tokens, ERC-721 for unique tokens, and ERC-1155 for when you want to mix uses or handle multiple types at once.

<details>
<summary>查看中文</summary>
ERC-20、ERC-721 和 ERC-1155 代币标准有什么主要区别？

这三种主要的代币标准基本上是这样区分的：

ERC-20 是用于普通代币的标准，所有代币都是相同的，就像普通的钱一样。

ERC-721 是用于独特代币的 - 也就是 NFT。每一个都不同，有唯一的 ID。

ERC-1155 允许你在一个合约中同时拥有两种类型，你可以同时拥有普通代币和独特的代币。

就是这样 - ERC-20 用于相同的代币，ERC-721 用于独特的代币，而 ERC-1155 则是当你想要混合使用或一次处理多种类型时的选择。

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

## What's the difference between view, pure, and payable functions in Solidity?

View functions can read contract data but can't change anything. Pure functions can't read or change any contract data - they just do their own calculations. Payable functions are special because they can receive ETH when you call them.

Think of it this way: view is read-only, pure doesn't touch contract data, and payable can accept money. That's it!

<details>
<summary>查看中文</summary>
view 函数可以读取合约数据但不能改变任何东西。pure 函数不能读取也不能改变任何合约数据 - 只做运算。payable 函数很特别，因为调用它们时可以接收 ETH。

简单说：view 是只读的，pure 不碰合约数据，payable 是可以收钱的。就这样！

</details>

## What's the difference between memory, storage, and calldata in Solidity?

Storage is like a hard drive - it stays forever and costs a lot of gas. Memory is like RAM - it's temporary and cheaper. Calldata is for input data only - you can't change it, but it's the cheapest to use.

Simple rule: storage is permanent, memory is temporary, calldata is read-only.

There are some important rules too - you can't assign storage to storage (it creates a reference), and when you assign storage to memory, it creates a copy. Understanding these nuances is crucial for writing gas-efficient contracts.

<details>
<summary>查看中文</summary>
storage 就像硬盘 - 永久存储但很贵。memory 就像内存 - 临时且便宜些。calldata 只用于输入数据 - 不能修改但最便宜。

简单记住：storage 是永久的，memory 是临时的，calldata 是只读的。

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

## What are events in Solidity?

Events are like logs. They're cheaper than storage and let apps know what happened. You can search them, but contracts can't read them.

Think of them as notifications - when something happens, you send an event.

<details>
<summary>查看中文</summary>
事件像日志。比存储便宜，让应用知道发生了什么。可以搜索，但合约不能读取。

就像通知 - 有事发生时，发个事件。

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

First, gas成本和优化优先级可能有显著差异。在以太坊主网上，gas通常要昂贵得多，因此极端优化至关重要。在侧链或L2如Polygon或Arbitrum上，gas可能更便宜，所以你可能会优先考虑可读性或功能性，而不是榨取最后一点优化。

交易确认时间也差异很大。在以太坊上，你可能需要等待几分钟才能确认，而在其他一些链上可能只需几秒钟。这影响你如何设计应用程序的用户体验以及如何处理交易状态。

每个链还有不同的内置合约和预编译。例如，一些链有不同的WETH地址或标准的不同实现。这意味着你需要维护一个链感知的配置系统，以在每个网络上与正确的合约交互。

安全考虑也可能不同。一些链有更短的最终性时间或不同的共识机制，这可能影响你如何处理高价值交易或实施安全措施。

跨链互操作性是另一个关键区别。如果你的dApp需要在多个链上工作，你需要实现或集成桥接解决方案，这增加了复杂性。

链特定功能也可能很重要。例如，Polygon有用于元交易的gas站网络，Arbitrum和Optimism对calldata压缩和欺诈证明有不同的方法，一些链支持以太坊上不可用的额外操作码或预编译。

最后，开发者工具和基础设施可能不同 - 一些链有更好的区块浏览器，更可靠的RPCs，或比其他链更好的测试环境。

</details>

## How do you handle reentrancy attacks?

Always update your state before sending ETH or tokens. Use a reentrancy guard (a simple lock) for extra safety. The key is: check conditions, update state, then interact with other contracts.

It's like locking your door before going out - simple but important.

<details>
<summary>查看中文</summary>
在发送 ETH 或代币之前先更新状态。使用重入锁（简单的锁定）作为额外保护。关键是：检查条件，更新状态，然后才与其他合约交互。

就像出门前先锁门 - 简单但重要。

</details>
