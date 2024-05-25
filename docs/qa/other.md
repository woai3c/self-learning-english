---
title: 其他
---

1. [Describe an experience where you championed technical innovation or the adoption of new tools, and the impact it had on the project and team.](#describe-an-experience-where-you-championed-technical-innovation-or-the-adoption-of-new-tools-and-the-impact-it-had-on-the-project-and-team)
1. [Could you elaborate on the core functionalities of the compiler you developed and some technical challenges you faced during the process?](#could-you-elaborate-on-the-core-functionalities-of-the-compiler-you-developed-and-some-technical-challenges-you-faced-during-the-process)
1. [Can you give an example of a specific technical issue encountered in cross-platform development and how you solved it?](#can-you-give-an-example-of-a-specific-technical-issue-encountered-in-cross-platform-development-and-how-you-solved-it)
1. [During the management of the front-end team, what was the biggest challenge you faced, and how did you overcome it?](#during-the-management-of-the-front-end-team-what-was-the-biggest-challenge-you-faced-and-how-did-you-overcome-it)
1. [You have used a variety of technology stacks and languages in your work, from Node.js and Nginx to Rust. How do you keep your technical skills advanced and relevant?](#you-have-used-a-variety-of-technology-stacks-and-languages-in-your-work-from-nodejs-and-nginx-to-rust-how-do-you-keep-your-technical-skills-advanced-and-relevant)
1. [When there is a divergence of technical decisions among team members, how do you facilitate communication and consensus?](#when-there-is-a-divergence-of-technical-decisions-among-team-members-how-do-you-facilitate-communication-and-consensus)
1. [How do you quickly learn new technologies and assess their applicability in projects?](#how-do-you-quickly-learn-new-technologies-and-assess-their-applicability-in-projects)
1. [Provide an example of when your coding efficiency was at its highest and lowest and explain the reasons for this difference.](#provide-an-example-of-when-your-coding-efficiency-was-at-its-highest-and-lowest-and-explain-the-reasons-for-this-difference)
1. [You've had experience leading a team. When talking about team management, what do you think are the key factors to a successful team management?](#youve-had-experience-leading-a-team-when-talking-about-team-management-what-do-you-think-are-the-key-factors-to-a-successful-team-management)
1. [How do you view knowledge sharing among the team and individual skill improvement? How do you encourage team members to learn new technologies?](#how-do-you-view-knowledge-sharing-among-the-team-and-individual-skill-improvement-how-do-you-encourage-team-members-to-learn-new-technologies)
1. [In component design, how do you balance universality and customizability? Can you give an example of how you handle this issue?](#in-component-design-how-do-you-balance-universality-and-customizability-can-you-give-an-example-of-how-you-handle-this-issue)
1. [How do you view the difference between front-end and back-end development work, and how do you usually coordinate the work of the front-end and back-end to ensure the smooth progress of the project?](#how-do-you-view-the-difference-between-front-end-and-back-end-development-work-and-how-do-you-usually-coordinate-the-work-of-the-front-end-and-back-end-to-ensure-the-smooth-progress-of-the-project)
1. [Why is it important to establish team technical specifications, and what benefits does it bring?](#why-is-it-important-to-establish-team-technical-specifications-and-what-benefits-does-it-bring)
1. [Regarding code quality, how do you ensure and assess the quality of code produced by your team? What tools and processes have you used?](#regarding-code-quality-how-do-you-ensure-and-assess-the-quality-of-code-produced-by-your-team-what-tools-and-processes-have-you-used)
1. [When choosing between multiple technological options, how do you make decisions? What factors influence your choice?](#when-choosing-between-multiple-technological-options-how-do-you-make-decisions-what-factors-influence-your-choice)

## Describe an experience where you championed technical innovation or the adoption of new tools, and the impact it had on the project and team.

I'd like to share my experience of promoting NestJS in our team. We are a team that leans towards front-end development with limited back-end resources. Sometimes, when there's a shortage of back-end resources and no one to write the interfaces, the front-end developers have to wait. To change this situation, I advocated for the use of NestJS in our team. This allowed front-end developers to write back-end code. As a result, our project progress was not stalled due to a lack of back-end resources, and it also improved the technical skills and broadened the technical perspective of our team members.

<details>
<summary>查看中文</summary>
描述一次您推动技术革新或实施新工具的经历，以及这对项目和团队产生的影响。

我描述一下在团队中推广 Nestjs 的经历。因为我们团队是一个偏前端的团队，后端人员比较少。有时候后端资源不足的情况下，接口没人写，前端人员就得空等着。所以为了改变这种情况。我就在团队里推广使用 Nestjs，让前端也能写后端代码。不会因为缺少后端而阻塞项目进度，而且还能提升团队成员的技术水平和技术视野。

</details>

## Could you elaborate on the core functionalities of the compiler you developed and some technical challenges you faced during the process?

The primary function of a compiler is to transform user-written code into target code. This process involves lexical analysis, syntax analysis, semantic analysis, and code generation. During my development work, I encountered challenges mainly in syntax analysis and code generation. For example, transforming code into tokens, creating an Abstract Syntax Tree (AST) from those tokens, and then converting the AST into target code. This required the application of various algorithms and data structures, such as recursive descent and LL parsing algorithms.

<details>
<summary>查看中文</summary>
能否详细阐述一下该编译器实现的核心功能和您在编写过程中遇到的一些技术挑战？

编译器的核心功能是将用户输入的代码转换成目标代码，这个过程中会涉及到词法分析、语法分析、语义分析、代码生成等步骤。我在编写过程中遇到的技术挑战主要是语法分析和代码生成。比如如何将代码转化为 token，再根据 token 生成 AST，然后根据 AST 生成目标代码。这个过程中会涉及到很多算法和数据结构，例如递归下降、LL 算法等。

</details>

## Can you give an example of a specific technical issue encountered in cross-platform development and how you solved it?

One commonly encountered issue in cross-platform development is compatibility. For example, a program that worked flawlessly on Android but encountered problems on iOS. I once faced a styling issue where an icon's position differed between the Android and iOS versions of a login page. I resolved it by using some platform-specific style properties to achieve consistent presentation.

<details>
<summary>查看中文</summary>
能否举例说明在跨端开发中遇到的某个具体技术问题，以及您如何解决这个问题的？

跨端开发一般遇到的就是兼容性问题，比如在安卓上测试过没问题的程序，放到 IOS 上就有问题了。我之前遇到过一个样式问题，写了个登录页里面有个图标的位置在安卓和 IOS 上不一样，最后通过使用一些平台特有的样式属性来解决这个问题。

</details>

## During the management of the front-end team, what was the biggest challenge you faced, and how did you overcome it?

The biggest challenge was assigning different tasks to different people and coordinating inter-personal relationships. I usually communicate with team members in advance, understand their technical levels and interests, and then assign tasks based on the difficulty and importance of the tasks. During the task execution, I would have regular conversations with team members to understand the progress and problems, and resolving them promptly.

<details>
<summary>查看中文</summary>
在管理前端团队过程中，您遇到的最大挑战是什么，您是如何克服这些挑战的？

最大的挑战是根据不同的人分配不同的任务，以及协调不同人员之间的关系。我一般会提前和团队成员沟通，了解他们的技术水平和兴趣，然后根据任务的难度和重要性来分配任务。并且在任务过程中，我会定期和团队成员沟通，了解任务进度和遇到的问题，及时解决。

</details>

## You have used a variety of technology stacks and languages in your work, from Node.js and Nginx to Rust. How do you keep your technical skills advanced and relevant?

I mainly follow various technology communities and GitHub to see the current technology trends, and then combine my interests and career planning to select new technologies to learn. Then I attempt to use them at work, helping me better understand the strengths and limitations of new technologies and their practical application scenarios in actual projects.

<details>
<summary>查看中文</summary>
您在工作中使用过多种技术栈和语言，从 Node.js、Nginx 到 Rust，您是如何保持您技术技能的先进性和相关性的？

主要是关注一些技术社区和 Github，看看现在的技术趋势，然后结合自己的兴趣和职业规划，选择学习一些新的技术。然后在工作中尝试使用，这样可以更好的理解新技术的优缺点，以及在实际项目中的应用场景。

</details>

## When there is a divergence of technical decisions among team members, how do you facilitate communication and consensus?

Allowing each team member to present their reasons, then making decisions based on project requirements and team's technical level is my approach. If consensus is unattainable, I rely on my experience to decide.

<details>
<summary>查看中文</summary>
当团队成员对于技术决策有分歧时，您是如何促进沟通和达成共识的？

如果团队成员对技术决策有分歧，我会让他们各自说出自己的理由，然后再根据项目的需求和团队的技术水平来做决策。如果实在达不成共识，我会根据自己的经验来做决策。

</details>

## How do you quickly learn new technologies and assess their applicability in projects?

For new technologies, I first look at their documentation and see how the examples run. Then, I try to write a simple demo to deepen my understanding of the new technology. To judge its applicability in a project, besides checking if it meets the project's needs, I also consider factors like the richness of its ecosystem and the activity of its community.

<details>
<summary>查看中文</summary>
对于新技术，您是如何进行快速学习并判断其在项目中的适用性的？

对于新技术，我会先看看它的文档，看文档的示例是如何运行的。然后我会尝试写一个简单的 demo，以加深对新技术的理解。至于是否适合项目，除了需要看它是否看满足项目的需求之外，还要考虑它的生态是否丰富，社区是否活跃等等。

</details>

## Provide an example of when your coding efficiency was at its highest and lowest and explain the reasons for this difference.

My coding efficiency is highest when requirements are clear and I'm using languages and frameworks I know well. It's lowest when requirements are unclear and I'm using unfamiliar languages and frameworks. Unclear requirements mean more talks with managers and designers. Using unfamiliar tools means more time spent on reading documents.

<details>
<summary>查看中文</summary>
请提供一个编码效率最高和最低的例子，并解释造成这种差异的原因。

在需求确定，并且使用我熟悉的编程语言和框架时，我的编码效率是最高的。在需求不确定，并且在我使用不熟悉的语言和框架时，我的编码效率是最低的。因为需求不确定的话，我需要和产品经理、设计师多次沟通，然后再去写代码。而且使用不熟悉的语言和框架时，我需要不停的查文档，这样会耗费很多时间。

</details>

## You've had experience leading a team. When talking about team management, what do you think are the key factors to a successful team management?

In my opinion, leading a team starts with treating team members equally, without acting superior. Respect others, and they will truly respect you. Next, have clear goals and plans so team members know what their work is for. Also, maintain good communication, solve problems promptly, and don't let issues pile up.

<details>
<summary>查看中文</summary>
您已经有带团队的经验，谈到团队管理，您认为成功的团队管理有哪些关键因素？

我觉得带团队首先要与团队成员平等对待，不要有高高在上的感觉。尊重别人，团队成员才会发自内心的尊重你。然后要有明确的目标和规划，让团队成员知道自己的工作是为了什么。再就是要有良好的沟通，及时解决问题，不要让问题越积越多。

</details>

## How do you view knowledge sharing among the team and individual skill improvement? How do you encourage team members to learn new technologies?

Sharing knowledge is a win-win action. When you share with others, you also deepen your own understanding. I often encourage team members to learn new technologies based on their career plans and interests. It's best to practice while learning to grasp new skills faster.

<details>
<summary>查看中文</summary>
您怎样看待团队中的知识共享与个人技能提升？您是如何鼓励团队成员学习新技术的？

分享知识是双赢的行为，当你把知识分享给别人时，实际上也在加深你对知识的理解。我一般会鼓励团队成员根据自己的职业规划和兴趣去学习新技术，最好是一边学习一边实践，这样能更快的掌握这门新技术。

</details>

## In component design, how do you balance universality and customizability? Can you give an example of how you handle this issue?

In component design, we need to consider the use case, such as whether the component is for business or general use. Business components should be less customizable as they serve specific functions, and many scenarios can be predicted and coded in advance, so they require fewer configuration options.

General components should be more universal, offering more configuration options for users to customize according to their needs. For example, button components or radio components can provide more options for users to customize.

<details>
<summary>查看中文</summary>
在组件设计中，如何平衡通用性与定制性？能否举例说明您如何处理这一问题？

在组件设计中我们要考虑组件的使用场景，例如这个组件是业务组件还是通用组件。业务组件定制性要少一点，因为它是为业务服务的，很多业务场景都是可以提前预知的，可以提前写好相关代码，因此业务组件可以少一点配置项。

通用组件要考虑通用性，要尽量多的提供配置项，让用户可以根据自己的需求来定制组件。例如按钮组件、单选框组件这类通用组件就可以提供多一点的配置项，让用户进行定制。

</details>

## How do you view the difference between front-end and back-end development work, and how do you usually coordinate the work of the front-end and back-end to ensure the smooth progress of the project?

I think the main difference between front-end and back-end work is that the front-end more focuses on user experience and page interactions, but the back-end focuses on data processing and business logic. I usually communicate with the back-end in advance to agree on the data formats for the interfaces. This allows both front-end and back-end development to proceed at the same time. The front-end can use mock data to simulate back-end interfaces, and switch to the real APIs when the back-end work is done.

<details>
<summary>查看中文</summary>
您如何看待前端与后端开发工作的差别，您通常如何协调前后端的工作以确保项目的顺利推进？

我觉得前端和后端的工作差别主要是前端更注重用户体验和页面交互，而后端更注重数据处理和业务逻辑。我通常会和后端提前沟通好接口的数据格式，然后前后端可以同时进行开发，前端可以先使用 mock 数据来模拟后端接口，等后端开发完成后再切换至真正的接口。

</details>

## Why is it important to establish team technical specifications, and what benefits does it bring?

Establishing team technical specifications is important because different programmers may have their own coding styles. This includes things like the number of spaces for indentation, whether to add semicolons at the end of code lines, and the position of braces after functions. Additionally, habits for file naming and directory structure can also vary. If team members each follow their own habits for coding and naming files, it can lead to confusion and affect team communication and work atmosphere. Therefore, unifying technical specifications allows everyone to work under the same rules. This can reduce unnecessary communication costs and improve development efficiency.

<details>
<summary>查看中文</summary>
为什么要制定团队技术规范，它带来了哪些好处？

一般情况下，不同的程序员可能各自有不同的编码风格，例如缩进使用空格的数量、代码行末是否加分号、函数后大括号的位置等。此外，文件命名和目录结构也可能各有不同的习惯。如果团队成员各自为政，按照自己的习惯编写代码和命名文件，可能会造成混乱，影响团队沟通和工作氛围。因此，统一技术规范，让每个人在相同的规则下工作，能够减少不必要的沟通成本，提高开发效率。

</details>

## Regarding code quality, how do you ensure and assess the quality of code produced by your team? What tools and processes have you used?

First, we set technical specifications for the team. Then, we set up rules for eslint and prettier based on these specifications. This helps ensure consistent code style through code validation and automatic formatting. When code is submitted to the repository, it goes through a code review. This is another check to make sure there are no issues before the code is merged. Finally, with unit tests and e2e tests, the quality of the team's code is greatly improved.

<details>
<summary>查看中文</summary>
关于代码质量，您如何确保和评估您所领导的团队产出的代码质量？使用过哪些工具和流程？

首先要制定好团队的技术规范，然后根据技术规范来设置 eslint 和 prettier 的规则，通过代码校验和自动格式化来确保团队代码的风格一致。在代码提交到仓库时需要进行 codereviwe，再次确认代码是否有问题，没有问题才能进行合并。最后再配合单元测试和 e2e 测试，团队的代码质量就大大提升了。

</details>

## When choosing between multiple technological options, how do you make decisions? What factors influence your choice?

When making a decision among multiple technological options, I usually consider factors like the activity of the technology's community, the quality of its documentation, whether it's used by major companies, and if it's widely used in open-source projects. I tend to prefer technologies with a robust ecosystem and an active community. The reason is that a well-documented and widely-used technology often means that solutions to potential problems can be found quickly.

<details>
<summary>查看中文</summary>
多个技术选择（如状态管理工具）时，您如何进行决策？您会基于什么因素来选择？

一般进行技术选型时，我会根据这门技术的社区活跃度、文档完善度、是否有大厂在用、是否有大量的开源项目在用。
如果生态非常好，社区非常活跃，我会优先选择这门技术。因为用的人多、社区活跃、文档完善，说明遇到问题可以很快的找到解决方案。

</details>
