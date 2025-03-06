---
title: 前端与钱包集成
---

## How did you implement MetaMask integration in your dApp?

You mentioned using MetaMask for on-chain transaction display. Could you walk me through how you integrated MetaMask into your application? What were some challenges you faced with wallet interactions?

<details>
<summary>查看中文</summary>
你是如何在 dApp 中实现 MetaMask 集成的？

你提到使用 MetaMask 实现链上交易展示。你能详细介绍一下你是如何将 MetaMask 集成到你的应用中的吗？在钱包交互方面你遇到了哪些挑战？

</details>

## What approaches have you used for handling transaction states and errors in the frontend?

Blockchain transactions can be complex to manage in the UI. How do you handle pending transactions, confirmations, and potential errors? How do you provide feedback to users during these processes?

<details>
<summary>查看中文</summary>
在前端处理交易状态和错误时，你使用了哪些方法？

区块链交易在 UI 中可能很复杂。你如何处理待处理的交易、确认和潜在错误？在这些过程中，你如何向用户提供反馈？

</details>

## How do you handle users switching networks or accounts in a dApp?

When building dApps, handling network and account changes smoothly is really important for user experience. I typically set up event listeners for both these scenarios right when the app initializes.

For network changes, I listen to the 'chainChanged' event from the provider. When it fires, I check if the user is on a supported network. If they're not, I show them a clear message asking them to switch, and even provide a button that calls wallet_switchEthereumChain to make it easy for them. If they switch to a valid network, I might refresh the page or just update the necessary state in the app.

For account changes, I listen to the 'accountsChanged' event. When a user switches accounts, I update the app state with the new address, refresh their balance and other account-specific data, and reset any user-specific UI elements. If they disconnect all accounts, I can show them a "connect wallet" prompt again.

I also handle the initial connection state carefully. When the app loads, I check if they're already connected, which network they're on, and adapt the UI accordingly. This way, users who've previously connected don't have to reconnect every time.

In my experience, it's important to make all these transitions smooth and give clear feedback. Nobody likes a dApp that breaks when they switch accounts or networks, so I make sure everything degrades gracefully even in unexpected scenarios.

<details>
<summary>查看中文</summary>
你如何处理dApp中用户切换网络或账户的情况？

在构建dApp时，平滑处理网络和账户变更对用户体验非常重要。我通常在应用初始化时为这两种情况设置事件监听器。

对于网络变更，我监听provider的'chainChanged'事件。当它触发时，我检查用户是否在支持的网络上。如果不是，我会显示清晰的消息，要求他们切换网络，甚至提供一个调用wallet_switchEthereumChain的按钮，让操作变得简单。如果他们切换到有效的网络，我可能会刷新页面或仅更新应用中的必要状态。

对于账户变更，我监听'accountsChanged'事件。当用户切换账户时，我使用新地址更新应用状态，刷新他们的余额和其他与账户相关的数据，并重置任何用户特定的UI元素。如果他们断开所有账户连接，我可以再次显示"连接钱包"提示。

我还仔细处理初始连接状态。当应用加载时，我检查他们是否已经连接，他们在哪个网络上，并相应地调整UI。这样，以前已连接的用户不必每次都重新连接。

根据我的经验，让所有这些转换平滑并提供清晰的反馈非常重要。没有人喜欢在切换账户或网络时崩溃的dApp，所以我确保即使在意外情况下，一切也能优雅地降级。

</details>

## What strategies do you use for handling failed transactions in the UI?

Handling failed transactions in the UI is crucial for user experience in dApps. I use a multi-layered approach to make sure users never feel lost during the process.

First, I implement pre-transaction validation to catch potential issues before they even submit the transaction. This includes checking if they have enough funds, if the input data is valid, and if the contract will likely accept the transaction. This prevents a lot of failures upfront.

For the transaction flow itself, I break it into clear states: confirming in wallet, pending, success, or error. I use a toast or notification system that keeps users informed at each step, with clear messaging and loading indicators.

When a transaction is submitted, I provide a link to the block explorer so users can check the status themselves if they want to. While it's pending, I'll show a loading state but still let them use other parts of the app.

For failed transactions, I try to provide specific, actionable error messages. Instead of just saying "transaction failed," I'll decode the revert reason from the blockchain and explain what went wrong in plain language. If possible, I suggest a solution - like "You need to approve tokens first" or "Try increasing your slippage tolerance."

I also implement a retry mechanism for certain recoverable errors. For example, if a transaction failed due to gas price changes, I can offer to resubmit with updated parameters.

For more complex flows like DeFi interactions, I'll implement a transaction queue system that handles dependent transactions and manages the entire process as a unified experience.

The key is empathy - blockchain transactions can be confusing and stressful for users, so I make sure they always know what's happening and what to do next.

<details>
<summary>查看中文</summary>
你在UI中处理失败交易的策略是什么？

在dApp中，UI中的失败交易处理对用户体验至关重要。我使用多层方法确保用户在整个过程中不会感到迷失。

首先，我实施交易前验证以在用户提交交易前捕获潜在问题。这包括检查他们是否有足够的资金，输入数据是否有效，以及合约是否可能接受该交易。这预先防止了很多失败。

对于交易流程本身，我将其分为明确的状态：在钱包中确认、待处理、成功或错误。我使用toast或通知系统在每个步骤保持用户了解情况，提供清晰的消息和加载指示器。

当交易提交后，我提供区块浏览器链接，以便用户可以自行检查状态。在交易待处理时，我会显示加载状态，但仍允许他们使用应用的其他部分。

对于失败的交易，我尝试提供具体的、可操作的错误消息。不只是说"交易失败"，我会从区块链解码回滚原因，并用通俗语言解释出了什么问题。如果可能，我会建议解决方案 - 如"你需要先批准代币"或"尝试增加滑点容忍度"。

我还为某些可恢复的错误实现重试机制。例如，如果交易因gas价格变化而失败，我可以提供使用更新参数重新提交的选项。

对于更复杂的流程，如DeFi交互，我会实现一个交易队列系统，处理相关交易并将整个过程管理为统一体验。

关键是同理心 - 区块链交易对用户来说可能令人困惑和紧张，所以我确保他们始终知道发生了什么以及接下来该做什么。

</details>
