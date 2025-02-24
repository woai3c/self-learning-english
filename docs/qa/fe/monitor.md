---
title: 监控
---

1. [Can you describe the main features of the front-end monitor SDK you developed and how you process and analyze monitor data to optimize performance?](#can-you-describe-the-main-features-of-the-front-end-monitor-sdk-you-developed-and-how-you-process-and-analyze-monitor-data-to-optimize-performance)
1. [What problems did you encounter while developing the monitoring SDK, and how did you solve them?](#what-problems-did-you-encounter-while-developing-the-monitoring-sdk-and-how-did-you-solve-them)

## Can you describe the main features of the front-end monitor SDK you developed and how you process and analyze monitor data to optimize performance?

Well, our SDK can collect all kinds of data from webpages - you know, things like performance metrics, error logs, and user behavior data. Then we send all this data to our server and store it in a database. We've got a monitoring platform where we can check all this information.

With this data, we can spot performance bottlenecks and make improvements. Like, we might implement caching or lazy loading for routes to speed things up.

<details>
<summary>查看中文</summary>
能否描述一下您开发的前端监控 SDK 的主要特点，以及如何处理和分析监控数据以优化性能？

它可以收集网页的性能数据、错误数据，以及用户的行为数据。然后将这些数据发送到服务器，存放到数据库。平时可以通过监控平台里查看这些数据。
通过这些数据可以分析网页的性能瓶颈，然后进行优化，例如做好缓存、路由懒加载等。

</details>

## What problems did you encounter while developing the monitoring SDK, and how did you solve them?

Yeah, developing a monitoring SDK was pretty challenging - there were quite a few technical issues to solve. One interesting problem was figuring out if users actually like a page's content. We decided to look at two main things: how long users stay on the page and how much of it they read.

For the page dwell time, we had to be careful to only count the time when users are actually looking at the page - you know, not when it's in a background tab. And for read depth, we calculate what percentage of the page content users have scrolled through.

By looking at these two metrics together, we can get a pretty good idea of whether users like the content. Like, if we see lots of users spending more time on the page and reading more of it, that's a good sign that the content is working well for them.

<details>
<summary>查看中文</summary>
你在开发监控 SDK 的时候遇到了哪些问题，是怎么解决的？

开发监控 SDK 是一个难度不小的工作，在这个过程中，我遇到了不少的技术问题。例如怎么判断一个页面的内容是否受用户喜欢。我是根据两个指标来判断的：页面停留时长和页面阅读深度。

页面停留时长是指用户在页面的停留时间，在计算这个时间的时候要注意页面切换到后台的时候，这部分时间是不能算上的。页面阅读深度就是用户阅读时的内容高度占整个页面高度的比例。

通过这两个指标一起计算，就能看出来这个页面的内容是否受用户喜欢了。当多个用户的平均页面停留时长越长，平均阅读深度越高就说明这个页面越受用户喜欢。

</details>
