---
title: 监控
---

1. [Can you describe the main features of the front-end monitor SDK you developed and how you process and analyze monitor data to optimize performance?](#can-you-describe-the-main-features-of-the-front-end-monitor-sdk-you-developed-and-how-you-process-and-analyze-monitor-data-to-optimize-performance)
1. [What problems did you encounter while developing the monitoring SDK, and how did you solve them?](#what-problems-did-you-encounter-while-developing-the-monitoring-sdk-and-how-did-you-solve-them)

## Can you describe the main features of the front-end monitor SDK you developed and how you process and analyze monitor data to optimize performance?

The SDK can gather performance data, error data, and user behavior data from webpages. Then, it sends this data to a server for storage in a database. Monitor data can be reviewed through a monitor platform. With this information, we can identify performance bottlenecks and optimize accordingly, such as by implementing caching and lazy loading of routes.

<details>
<summary>查看中文</summary>
能否描述一下您开发的前端监控 SDK 的主要特点，以及如何处理和分析监控数据以优化性能？

它可以收集网页的性能数据、错误数据，以及用户的行为数据。然后将这些数据发送到服务器，存放到数据库。平时可以通过监控平台里查看这些数据。
通过这些数据可以分析网页的性能瓶颈，然后进行优化，例如做好缓存、路由懒加载等。

</details>

## What problems did you encounter while developing the monitoring SDK, and how did you solve them?

Developing a monitoring SDK is a challenging task, and I encountered several technical issues during the process. For instance, I needed to determine whether a page's content is liked by users. I made this judgment based on two metrics: page dwell time and page read depth.

Page dwell time refers to the duration a user spends on a page. It's important to note that the time when the page is in the background should not be included in this calculation. Page read depth is the ratio of the content height read by the user to the total page height.

By calculating these two metrics together, we can determine whether the page's content is liked by users. If the average page dwell time and read depth are higher for multiple users, it indicates that the page is more liked by users.

<details>
<summary>查看中文</summary>
你在开发监控 SDK 的时候遇到了哪些问题，是怎么解决的？

开发监控 SDK 是一个难度不小的工作，在这个过程中，我遇到了不少的技术问题。例如怎么判断一个页面的内容是否受用户喜欢。我是根据两个指标来判断的：页面停留时长和页面阅读深度。

页面停留时长是指用户在页面的停留时间，在计算这个时间的时候要注意页面切换到后台的时候，这部分时间是不能算上的。页面阅读深度就是用户阅读时的内容高度占整个页面高度的比例。

通过这两个指标一起计算，就能看出来这个页面的内容是否受用户喜欢了。当多个用户的平均页面停留时长越长，平均阅读深度越高就说明这个页面越受用户喜欢。

</details>
