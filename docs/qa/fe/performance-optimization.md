---
title: 性能优化
---

1. [Please describe a technology you implemented for performance optimization and specifically how the performance improvement was quantified.](#please-describe-a-technology-you-implemented-for-performance-optimization-and-specifically-how-the-performance-improvement-was-quantified)
1. [When you encounter performance bottlenecks, what tools and methods do you typically use to identify and resolve the issues?](#when-you-encounter-performance-bottlenecks-what-tools-and-methods-do-you-typically-use-to-identify-and-resolve-the-issues)

## Please describe a technology you implemented for performance optimization and specifically how the performance improvement was quantified.

Well, I focused on optimizing initial load time using several techniques - you know, things like route lazy-loading, browser caching with nginx, code compression, file compression, and CDN. Through these optimizations, we managed to cut down the first screen load time from 4 seconds to 1.5 seconds, which really improved the user experience.

As for measuring the improvement, we used monitoring tools to collect performance data and compared the metrics before and after optimization. This gave us a clear picture of how much the performance had improved.

<details>
<summary>查看中文</summary>
请描述一种您在性能优化方面实施过的技术，并且具体说明它带来的性能提升是如何量化的。

我有在优化首屏加载时间时使用了路由懒加载、浏览器缓存 + nginx、代码压缩、文件压缩、CDN 等技术。我通过这些技术，将首屏加载时间从 4s 降低到了 1.5s，用户体验得到了很大的提升。至于如何量化，我们可以用监控工具收集性能数据，然后对比优化前后的数据，就能看到性能提升了多少。

</details>

## When you encounter performance bottlenecks, what tools and methods do you typically use to identify and resolve the issues?

You know, when I run into performance issues, I usually start by collecting performance data using tools like front-end monitoring SDK and Lighthouse. Then I analyze this data to figure out where the bottlenecks are. Once I identify the problems, I can apply the right optimization methods to fix them.

For back-end performance issues, I use performance testing tools like Prometheus and LoadRunner to test API performance. Based on the test results, I can then optimize the APIs accordingly.

<details>
<summary>查看中文</summary>
遇到性能瓶颈时，您通常使用哪些工具和方法来定位和解决问题？

我一般会使用一些工具来收集性能数据，例如前端监控 SDK、lighthouse 等。然后根据收集到的数据来分析性能瓶颈，找到问题后再用对应的性能优化方法来解决性能问题。后端性能瓶颈的话，我会使用一些性能测试工具来测试接口的性能，例如 Prometheus、LoadRunner，然后根据测试结果来优化接口。

</details>
