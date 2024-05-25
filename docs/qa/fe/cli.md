---
title: 脚手架
---

## You mentioned that you have experience developing a scaffold. Can you explain why you developed the scaffold and what problems it solved?

Developing a scaffold is mainly for quickly creating projects. This scaffold has many project templates built in according to our company's business needs, such as PC backend management systems, mobile projects, and mini-program project templates. With the scaffold, we no longer need to create projects from scratch or manually configure eslint and ci/cd, because the project templates are already pre-configured. Now, creating a project with a scaffold only requires a single command, which is very convenient and greatly improves development efficiency.

<details>
<summary>查看中文</summary>
你提到有开发脚手架的经历，能讲一下为什么要开发脚手架吗，它解决了什么问题？

开发脚手架主要为了能快速地创建项目。这个脚手架根据我们公司的业务需求内置了很多项目模板，例如 PC 后台管理系统、移动端 项目、小程序项目模板等等。有了脚手架，我们就不用再从零开始创建项目，也不用手动配置 eslint、ci/cd 了，因为项目模板都已经提前配置好了。现在使用脚手架来创建项目只需要一行命令，非常方便，大大的提升了开发效率。

</details>

## What challenges did you encounter during the development of the scaffold, and how did you solve them?

I did encounter many challenges while developing the scaffold. For example, how to interact with users, prompt users to select templates, recognize user input; how to create projects based on the templates selected by users; how to automatically install dependencies, and a series of other issues.

Let me talk about two of these problems. Regarding user interaction, I used Inquirer.js. It can output prompts to the command line and recognize user input in the command line. After the user selects a template, I pass a series of parameters such as the project name and npm registry source entered by the user as variables into the template. Then, I use the ejs library to render the template, and write the rendered template files into the project through nodejs.

<details>
<summary>查看中文</summary>
你在开发脚手架的过程中遇到了哪些难题，你是怎么解决的？

我在开发脚手架的过程中确实遇到了很多难题。例如如何和用户交互，提示用户选择模板，识别用户的输入；如何根据用户选择的模板来创建项目；如何自动安装依赖等一系列问题。

我挑其中的两个问题来说吧。关于和用户交互的问题，我使用了 `Inquirer.js`，它能把提示输出到命令行，也能在命令行中识别用户的输入。在用户选择好模板后，我会根据用户输入的项目名称，npm 注册源等一系列参数当作变量传入模板，然后使用 `ejs` 库渲染模板，再通过 nodejs 将渲染好的模板文件写入项目。

</details>
