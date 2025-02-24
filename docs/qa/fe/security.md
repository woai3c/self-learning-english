---
title: 安全
---

1. [How do you view front-end security? Can you share some of the security best practices you have implemented or consider important?](#how-do-you-view-front-end-security-can-you-share-some-of-the-security-best-practices-you-have-implemented-or-consider-important)

## How do you view front-end security? Can you share some of the security best practices you have implemented or consider important?

You know, front-end pages are actually quite vulnerable to attacks - things like XSS and CSRF attacks can be pretty common. But there are several strategies we can use to handle these security issues.

For example, deploying websites on HTTPS can prevent man-in-the-middle attacks. Also, we should never directly use user input in our front-end code - instead, we need to filter and escape that input to prevent XSS attacks.

Another important practice is adding tokens to sensitive operations to prevent CSRF attacks. And using CSP (Content Security Policy) can help limit what resources a website can load, which is another way to prevent XSS attacks.

<details>
<summary>查看中文</summary>
您如何看待前端安全性？能否分享一些您实施的或认为重要的前端安全最佳实践？

前端页面其实很脆弱，很容易被攻击，比如 xss 攻击、csrf 攻击。我们可以通过一些策略来解决这些问题，例如网站要部署在 https，这样可以防止中间人攻击。然后在前端代码中不要直接使用用户输入的数据，要对用户输入的数据进行过滤和转义，这样可以防止 xss 攻击。还有要对一些敏感操作加上 token，这样可以防止 csrf 攻击。还有使用 csp，可以限制网站加载的资源，防止 xss 攻击。

</details>
