---
title: 脚手架
---

1. [You mentioned that you have experience developing a scaffold. Can you explain why you developed the scaffold and what problems it solved?](#you-mentioned-that-you-have-experience-developing-a-scaffold-can-you-explain-why-you-developed-the-scaffold-and-what-problems-it-solved)
1. [What challenges did you encounter during the development of the scaffold, and how did you solve them?](#what-challenges-did-you-encounter-during-the-development-of-the-scaffold-and-how-did-you-solve-them)

## You mentioned that you have experience developing a scaffold. Can you explain why you developed the scaffold and what problems it solved?

Well, we mainly developed the scaffold to speed up project creation. You know, we had various project templates built into the scaffold based on our company's needs - like PC admin systems, mobile apps, and mini-program templates. With this scaffold, we don't have to start projects from scratch anymore or manually set up things like eslint and ci/cd, because all that stuff is pre-configured in the templates. Now, creating a new project is super simple - just one command and you're good to go. It's really convenient and has definitely boosted our development efficiency.

<details>
<summary>查看中文</summary>
你提到有开发脚手架的经历，能讲一下为什么要开发脚手架吗，它解决了什么问题？

开发脚手架主要为了能快速地创建项目。这个脚手架根据我们公司的业务需求内置了很多项目模板，例如 PC 后台管理系统、移动端 项目、小程序项目模板等等。有了脚手架，我们就不用再从零开始创建项目，也不用手动配置 eslint、ci/cd 了，因为项目模板都已经提前配置好了。现在使用脚手架来创建项目只需要一行命令，非常方便，大大的提升了开发效率。

</details>

## What challenges did you encounter during the development of the scaffold, and how did you solve them?

Yeah, I ran into quite a few challenges while developing the scaffold. Like, how to handle user interactions - you know, getting users to pick templates and capturing their input. Also figuring out how to create projects based on their template choices, and how to automatically install dependencies. That kind of stuff.

Let me tell you about two specific problems we solved. For user interaction, I used Inquirer.js - it's great for displaying prompts in the command line and handling user input. After the user picks a template, I take all their inputs like project name and npm registry as variables, pass them into the template, and then use the ejs library to render it. Finally, I use Node.js to write all the rendered template files into the project.

<details>
<summary>查看中文</summary>
你在开发脚手架的过程中遇到了哪些难题，你是怎么解决的？

我在开发脚手架的过程中确实遇到了很多难题。例如如何和用户交互，提示用户选择模板，识别用户的输入；如何根据用户选择的模板来创建项目；如何自动安装依赖等一系列问题。

我挑其中的两个问题来说吧。关于和用户交互的问题，我使用了 `Inquirer.js`，它能把提示输出到命令行，也能在命令行中识别用户的输入。在用户选择好模板后，我会根据用户输入的项目名称，npm 注册源等一系列参数当作变量传入模板，然后使用 `ejs` 库渲染模板，再通过 nodejs 将渲染好的模板文件写入项目。

</details>
