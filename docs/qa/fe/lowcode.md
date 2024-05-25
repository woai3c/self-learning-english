---
title: 低代码
---

1. [What is low-code, and can it improve development efficiency?](#what-is-low-code-and-can-it-improve-development-efficiency)
1. [You mentioned that non-technical users can quickly build applications on the low-code platform. What user experience design principles did the platform use to reduce the learning curve while providing powerful functionalities?](#you-mentioned-that-non-technical-users-can-quickly-build-applications-on-the-low-code-platform-what-user-experience-design-principles-did-the-platform-use-to-reduce-the-learning-curve-while-providing-powerful-functionalities)
1. [Based on your involvement in the low-code platform project, how do you ensure the quality and maintainability of the generated code?](#based-on-your-involvement-in-the-low-code-platform-project-how-do-you-ensure-the-quality-and-maintainability-of-the-generated-code)
1. [You have gained 15,000+ stars on GitHub. Can you talk about one or two of your main contributions to projects, including the inspiration, technical challenges, and solutions?](#you-have-gained-15000-stars-on-github-can-you-talk-about-one-or-two-of-your-main-contributions-to-projects-including-the-inspiration-technical-challenges-and-solutions)
1. [Please share an experience where you faced a particularly challenging technical refactoring, including the decision-making, execution process, and final outcome.](#please-share-an-experience-where-you-faced-a-particularly-challenging-technical-refactoring-including-the-decision-making-execution-process-and-final-outcome)
1. [In your resume, you mentioned having knowledge of Docker/K8S. Could you please share which projects involved the use of containerization or container orchestration technologies, and what role you played in the entire development process?](#in-your-resume-you-mentioned-having-knowledge-of-dockerk8s-could-you-please-share-which-projects-involved-the-use-of-containerization-or-container-orchestration-technologies-and-what-role-you-played-in-the-entire-development-process)

## What is low-code, and can it improve development efficiency?

"Low-code" refers to a development approach that requires less programming. For example, generating pages through drag-and-drop actions can be considered low-code, as it involves configuring parameters to create usable pages, which is similar to coding but requires less programming knowledge.

Low-code can improve development efficiency in simple business scenarios, especially when there are many templates available. However, if you're developing a page from scratch or dealing with complex page logic, the efficiency might be lower than traditional coding. Therefore, a good low-code platform should provide a large number of reusable page and application templates for quick page generation.

Moreover, combining low-code with large language models can also quickly improve development efficiency. A fine-tuned large language model can generate a usable page directly based on user prompts. However, this training process might be lengthy and costly.

<details>
<summary>查看中文</summary>
你觉得什么是低代码，低代码能提升开发效率吗？

我觉得在实现同样功能的情况下，让开发者比原来少写了一些代码，这样就算是低代码。例如通过拖拉拽来生成页面，这也算是低代码，因为它需要配置一些参数才能生成可用的页面，这个行为相当于在写代码了，只不过不需要太多的编程知识。

低代码在简单的业务场景，并且提供了大量模板的情况下，是可以提升开发效率的。但是如果从零开始开发一个页面或者说页面逻辑非常复杂，效率就会比较低，比不上直接写代码效率高。所以一个好用的低代码平台必定提供了大量可复用的页面模板、应用模板，让用户能快速生成页面。

另外，如果低代码和大语言模型结合，也能快速提升开发效率。在经过微调后的大语言模型可以直接根据用户的提示直接生成一个可用的页面。但是这个训练过程可能会非常漫长，并且费用成本很高。

</details>

## You mentioned that non-technical users can quickly build applications on the low-code platform. What user experience design principles did the platform use to reduce the learning curve while providing powerful functionalities?

I normally communicate with the product manager and designer, combining my experience and user feedback to determine user experience design principles. For example, simplicity and directness, clear functionality, easy operation, timely feedback, and more. During product design, I try to follow these principles to enhance user experience.

<details>
<summary>查看中文</summary>
您提到为非技术用户在低代码平台上快速搭建应用，该平台使用了哪些用户体验设计原则来降低用户的学习曲线，同时提供强大的功能？

我一般会和产品经理、设计师一起沟通，并且结合自己的经验和用户反馈来确定用户体验设计原则。例如简单直接、功能明确、操作简单、反馈及时等。然后在产品设计时，我会尽量遵循这些原则，来提高用户体验。

</details>

## Based on your involvement in the low-code platform project, how do you ensure the quality and maintainability of the generated code?

The style of the generated code is based on our team's coding specifications, which helps ensure consistency and readability of the code. There are extensive tests before feature releases to evaluate the readability and correctness of the generated code.

<details>
<summary>查看中文</summary>
基于您参与的低代码平台项目，如何确保生成的代码的质量和可维护性？

生成的代码风格是按照我们团队的代码规范来的，这样可以保证生成的代码风格统一和代码可读性。并且在功能上线前也有过大量的测试，主要是评测生成的代码可读性和正确性。

</details>

## You have gained 15,000+ stars on GitHub. Can you talk about one or two of your main contributions to projects, including the inspiration, technical challenges, and solutions?

Let's talk about an open-source low-code project. At the time, low-code was very popular, and I often saw articles about it, but I had no experience. So, I decided to start a low-code project from scratch, also making it educational with clear documentation, to help front-end developers unfamiliar with low-code get started quickly.

The technical challenges were numerous. For example, with rotating components, you cannot simply calculate the rotation angle based on the pixel displacement from user drags; it requires some mathematical calculations. Another challenge involved SVG components. The aspect ratio of SVG components cannot change during dragging, which is also technically challenging. My approach is calculating the xy coordinates of each point on the SVG component to determine their proportional values on the component. Then, while dragging, I would use these proportion values to calculate the new xy coordinates, thus ensuring the aspect ratio of the SVG component remained unchanged.

<details>
<summary>查看中文</summary>
您在 GitHub 上获得了 15,000+ stars，请谈谈您主要贡献的一个或两个项目，包括项目的灵感来源、技术难点和如何解决的？

我谈一下开源的低代码项目，当时低代码比较火，经常能看到相关的文章，而我没有相关经验。所以我想着自己从零开始做一个低代码项目，顺便做成教学项目，把文档写清楚，来帮助那些不懂低代码的前端，让他们能快速入门。

技术难点有很多，例如旋转组件，不能简单的通过用户拖拽移动的位移 xy 来算出旋转的角度，还要经过一些数学计算，才能算出来。还有就是支持 SVG 组件，SVG 在拖拽时不能改变 SVG 组件的比例，这个也是一个技术难点。我是通过计算 SVG 组件每个点的 xy 坐标，算出它们的在组件上的比例值，然后拖拽时通过比例值来计算新的 xy 坐标，这样就能保证 SVG 组件的比例不变。

</details>

## Please share an experience where you faced a particularly challenging technical refactoring, including the decision-making, execution process, and final outcome.

I will share an experience of a challenging technical refactoring. It involved upgrading the application deployment feature of a low-code platform to containerized deployment. The original feature could package and deploy low-code applications to a server. But it only supported one server and couldn't scale. When the number of user-built applications increased, it caused performance bottlenecks, affecting the server's normal operation.

So, I decided to upgrade this feature to containerized deployment. This way, user applications were deployed on K8S. It made operations like scaling, canary release, and application rollbacks much easier. This greatly improved the system's stability and performance.

<details>
<summary>查看中文</summary>
请分享一次特别有挑战的技术重构经验，涉及的决策、执行过程和最终的结果。

我分享一下之前将低代码平台的应用部署功能改造为容器化部署的经历。原来的应用部署功能能够把低代码应用打包部署到服务器上，但是只支持一台服务器，不能扩容。当用户搭建的应用多了之后，就会有性能瓶颈，影响服务器正常运转。

所以我决定对这个功能进行升级，将它改造为容器化部署。这样用户的应用就都部署在 K8S 上了，这样就可以很方便的进行扩容、灰度更新和应用回滚等操作，大大的提升了系统的稳定性和性能。

</details>

## In your resume, you mentioned having knowledge of Docker/K8S. Could you please share which projects involved the use of containerization or container orchestration technologies, and what role you played in the entire development process?

Mainly, I used containerization technology in the low-code platform project, deploying users' applications into containers, and then managing these containers via K8S. This makes operations such as scaling up, canary release, and application rollbacks very convenient. I was responsible for the entire process from design to implementation and testing.

<details>
<summary>查看中文</summary>
您在简历中提到具备 Docker/K8S 知识，能否介绍一下在哪些项目中使用到了容器化或容器编排技术，并且你这在整个开发流程中扮演了怎样的角色？

主要是在低代码平台项目中使用到了容器化技术，将用户的应用部署到容器中，然后通过 K8S 来管理这些容器。这样可以很方便的进行扩容、灰度更新和应用回滚等操作。从设计到实现、测试的整个过程都是我一个人做的。

</details>
