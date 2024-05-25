---
title: 性能优化
---

## Please describe a technology you implemented for performance optimization and specifically how the performance improvement was quantified.

In optimizing the initial loading time, I used techniques such as route lazy-loading, browser caching with nginx, code compression, file compression, and CDN. These techniques reduced the first screen load time from 4 seconds to 1.5 seconds, greatly enhancing user experience. Regarding quantification, we can collect performance data with monitoring tools and compare the data before and after optimization to see the extent of the performance improvement.

<details>
<summary>查看中文</summary>
请描述一种您在性能优化方面实施过的技术，并且具体说明它带来的性能提升是如何量化的。

我有在优化首屏加载时间时使用了路由懒加载、浏览器缓存 + nginx、代码压缩、文件压缩、CDN 等技术。我通过这些技术，将首屏加载时间从 4s 降低到了 1.5s，用户体验得到了很大的提升。至于如何量化，我们可以用监控工具收集性能数据，然后对比优化前后的数据，就能看到性能提升了多少。

</details>

## When you encounter performance bottlenecks, what tools and methods do you typically use to identify and resolve the issues?

When encountering performance bottlenecks, I typically use tools like front-end monitoring SDK and Lighthouse to collect performance data. I then analyze this data to identify the issues. Once the issues are found, I apply appropriate performance optimization methods to resolve them. For back-end performance bottlenecks, I use performance testing tools such as Prometheus and LoadRunner to test API performance. I then optimize the API based on the test results.

<details>
<summary>查看中文</summary>
遇到性能瓶颈时，您通常使用哪些工具和方法来定位和解决问题？

我一般会使用一些工具来收集性能数据，例如前端监控 SDK、lighthouse 等。然后根据收集到的数据来分析性能瓶颈，找到问题后再用对应的性能优化方法来解决性能问题。后端性能瓶颈的话，我会使用一些性能测试工具来测试接口的性能，例如 Prometheus、LoadRunner，然后根据测试结果来优化接口。

</details>
