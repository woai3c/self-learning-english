---
title: DApp架构
---

## What's your approach to balancing on-chain and off-chain components in dApp architecture?

Based on your experience building Matrix Layer Protocol, how do you decide which parts of the application logic should live on-chain versus off-chain? What factors influence these decisions?

<details>
<summary>查看中文</summary>
在 dApp 架构中，你如何平衡链上和链下组件？

基于你构建 Matrix Layer Protocol 的经验，你如何决定应用程序逻辑的哪些部分应该在链上而不是链下？哪些因素影响这些决策？

</details>

## How did you set up your data indexing service with The Graph?

I see you developed a data indexing service based on Subgraph. Could you explain your approach to indexing blockchain data? What kinds of queries and use cases did this enable for your application?

<details>
<summary>查看中文</summary>
你是如何使用 The Graph 搭建数据索引服务的？

我看到你基于 Subgraph 开发了数据索引服务。你能解释一下你索引区块链数据的方法吗？这为你的应用程序实现了哪些类型的查询和用例？

</details>

## How do you balance on-chain and off-chain components in a dApp?

Balancing on-chain and off-chain components is all about finding the right trade-offs for your specific dApp. I generally follow a principle of "on-chain for what matters, off-chain for everything else."

Critical functionality like financial transactions, ownership records, and governance votes absolutely need to be on-chain for security and trustlessness. These are the things users care most about being decentralized and immutable.

However, putting everything on-chain is expensive and slow. For user profiles, metadata, complex application state, and large datasets, I typically use off-chain solutions like IPFS, Arweave, or even traditional databases depending on the requirements.

For example, in an NFT marketplace, the actual ownership transfers and bids happen on-chain, but all the metadata about the NFTs and the UI state would be stored off-chain. I might use IPFS for the NFT images and metadata, ensuring they're still decentralized, but not paying gas costs to store them on Ethereum.

I also use hybrid approaches like "state channels" or "optimistic updates" where appropriate. This lets users have a snappy UI experience while the blockchain catches up in the background.

For data indexing and querying, I almost always use something like The Graph rather than trying to query the blockchain directly. This gives me better performance without sacrificing the trustlessness of the underlying data.

The key is being intentional about each decision, understanding the security and UX implications, and making sure users understand which parts are fully trustless and which aren't.

<details>
<summary>查看中文</summary>
你如何在dApp中平衡链上和链下组件？

平衡链上和链下组件就是为你的特定dApp找到合适的权衡。我通常遵循"重要的放链上，其他的放链下"的原则。

关键功能如金融交易、所有权记录和治理投票绝对需要在链上进行，以确保安全性和无需信任。这些是用户最关心去中心化和不可变性的方面。

然而，将一切都放在链上是昂贵且缓慢的。对于用户资料、元数据、复杂的应用状态和大型数据集，我通常使用IPFS、Arweave或甚至传统数据库等链下解决方案，具体取决于需求。

例如，在NFT市场中，实际的所有权转移和出价发生在链上，但关于NFT的所有元数据和UI状态都存储在链下。我可能使用IPFS存储NFT图像和元数据，确保它们仍然是去中心化的，但不需要支付gas费用将它们存储在以太坊上。

我还在适当的情况下使用混合方法，如"状态通道"或"乐观更新"。这让用户拥有流畅的UI体验，同时区块链在后台追赶进度。

对于数据索引和查询，我几乎总是使用The Graph之类的工具，而不是尝试直接查询区块链。这让我获得更好的性能，而不牺牲底层数据的无信任性。

关键是对每个决策都有意图，理解安全性和用户体验的影响，并确保用户了解哪些部分是完全无需信任的，哪些不是。

</details>

## How do you handle private data in blockchain applications?

Handling private data in blockchain applications is tricky because blockchains are inherently public. I approach this challenge using several different techniques depending on the specific requirements.

For data that absolutely must remain private, I keep it off-chain entirely. This might be in a traditional database with proper access controls, or in the user's local storage if it only needs to be accessible to them.

When I need to verify the integrity of private data without revealing it, I use cryptographic techniques like zero-knowledge proofs. For example, I might store only a hash of some sensitive information on-chain, then use a zk-SNARK to prove statements about the data without revealing the data itself.

For data that needs to be shared with specific parties but not publicly, I'll use encryption. I might encrypt the data with the recipient's public key before storing a reference to it on-chain, ensuring only they can decrypt it.

Sometimes I use a hybrid approach where some data fields are public on-chain, while more sensitive fields are kept off-chain with access controls. The on-chain component can include a reference (like an IPFS hash) to the private data.

In some applications, I've also used Trusted Execution Environments (TEEs) like Secret Network, which allows smart contracts to process encrypted data.

There's also the question of transaction privacy - even if data is encrypted, the fact that two addresses are interacting might reveal sensitive information. For this, solutions like Tornado Cash (for transaction privacy) can be useful, though regulatory considerations are important here.

The key is understanding exactly what needs to be private, what needs to be verifiable, and designing the system to meet those requirements while being transparent to users about what is and isn't protected.

<details>
<summary>查看中文</summary>
你如何在区块链应用中处理私有数据？

在区块链应用中处理私有数据很棘手，因为区块链本质上是公开的。我根据具体需求使用几种不同的技术来解决这个挑战。

对于绝对必须保持私密的数据，我将其完全保存在链下。这可能是在具有适当访问控制的传统数据库中，或者如果只需要用户自己访问，则存储在用户的本地存储中。

当我需要验证私有数据的完整性而不泄露它时，我使用零知识证明等加密技术。例如，我可能只在链上存储一些敏感信息的哈希值，然后使用zk-SNARK来证明关于数据的陈述而不泄露数据本身。

对于需要与特定方共享但不公开的数据，我会使用加密。在将数据的引用存储在链上之前，我可能会使用接收者的公钥加密数据，确保只有他们能解密。

有时我使用混合方法，一些数据字段在链上公开，而更敏感的字段则在链下保存并设有访问控制。链上组件可以包含对私有数据的引用（如IPFS哈希）。

在某些应用中，我还使用了Secret Network等可信执行环境（TEEs），它允许智能合约处理加密数据。

还有交易隐私的问题 - 即使数据被加密，两个地址正在交互的事实也可能泄露敏感信息。为此，像Tornado Cash（用于交易隐私）这样的解决方案可能有用，不过这里要考虑监管因素。

关键是准确理解什么需要保密，什么需要可验证，并设计系统以满足这些要求，同时向用户透明地说明什么是受保护的，什么不是。

</details>
