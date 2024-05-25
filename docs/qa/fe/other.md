---
title: 其他
---

1. [Considering future technological trends, how do you think front-end development will evolve? How do you plan to maintain and enhance your competitiveness in this rapidly changing field?](#considering-future-technological-trends-how-do-you-think-front-end-development-will-evolve-how-do-you-plan-to-maintain-and-enhance-your-competitiveness-in-this-rapidly-changing-field)
1. [Please share your reasons for choosing NestJS as a technology stack and the specific benefits it has brought to your projects.](#please-share-your-reasons-for-choosing-nestjs-as-a-technology-stack-and-the-specific-benefits-it-has-brought-to-your-projects)
1. [You have full-stack development experience with Vue and React. What are the advantages and disadvantages of these frameworks in practice?](#you-have-full-stack-development-experience-with-vue-and-react-what-are-the-advantages-and-disadvantages-of-these-frameworks-in-practice)

## Considering future technological trends, how do you think front-end development will evolve? How do you plan to maintain and enhance your competitiveness in this rapidly changing field?

I anticipate that future front-end infrastructure tools, like build and testing tools, will be rewritten in Rust to increase development efficiency and build speed. As AI becomes more prevalent, front-ends could benefit from knowledge in large language models to better comprehend AI services.

Front-end developers should expand towards full-stack capabilities, solidifying their front-end foundation before delving into back-end knowledge. This helps in fully understanding a project's business logic, increasing personal competitiveness.

<details>
<summary>查看中文</summary>
对于未来的技术趋势，您认为前端开发将会如何发展？您打算如何保持和增强您在这个快速变化领域的竞争力？

我认为未来的前端基础设施工具都会用 rust 重写，例如构建工具、测试工具等等，这样能提高前端的开发效率和构建速度。而且未来是 AI 的时代，前端也可以学习一些大语言模型相关的知识，这样能更好的理解 AI 业务。

前端应该向全栈方向发展，把前端基础打扎实了，再学点后端知识，这样能更好的理解整个项目的业务逻辑，提高自己的竞争力。

</details>

## Please share your reasons for choosing NestJS as a technology stack and the specific benefits it has brought to your projects.

I chose Nestjs because it's open-source, written in JS, feature-rich, and has a vibrant ecosystem. It's easy for front-end developers to pick up. In situations where back-end resources are limited, front-end developers can also write back-end code.

<details>
<summary>查看中文</summary>
请分享您选择 NestJS 作为技术栈的原因以及它在项目中带来的具体好处。

我选择 Nestjs 主要是因为它开源并且是用 js 写的，而且功能齐全、生态丰富，前端上手比较快。在后端资源不足的情况下，前端也可以写后端。

</details>

## You have full-stack development experience with Vue and React. What are the advantages and disadvantages of these frameworks in practice?

I've used both Vue and React for a while, and I feel that not only Vue and React, but also other reactive front-end frameworks are similar in usage. The main difference lies in the design and implementation principles underneath. For example, Vue's reactivity is based on dependency tracking and change notification. When you access a data property, Vue automatically adds the current dependency to the dependency list of this property. When the value of this property changes, Vue notifies all dependencies that rely on this property to update, thus re-rendering the component. Meanwhile, React's reactivity works by manually using the setState method. This tells React that the component's state has changed, which then triggers the render method to re-render the component.

<details>
<summary>查看中文</summary>
您有过 Vue 和 React 的全栈开发经验，这两个框架在实战中各有什么优缺点？

Vue 和 React 我都有用过一段时间，我觉得不仅 Vue 和 React，甚至是其他的响应式前端框架用法都差不多。无非是底层的设计和实现原理不同。例如 Vue 的响应式是基于依赖收集和变更通知的。当你访问一个数据属性时，Vue 会自动将当前的依赖添加到这个属性的依赖列表中。当这个属性的值发生变化时，Vue 会通知所有依赖于这个属性的依赖进行更新，从而重新渲染组件。而 React 的响应式是基于手动调用 setState 方法来通知 React 组件状态发生了改变，然后触发 render 方法重新渲染组件。

</details>
