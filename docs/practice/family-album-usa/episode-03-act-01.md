# Episode 3 Act 1 — Grandpa's Trunk

## 基本信息

- 日期：2026-08-09
- 材料：Family Album, U.S.A. Episode 3 "Grandpa's Trunk"
- 范围：Act 1
- 录音时长：约 4 分钟
- 练习形式：脱稿复述

## 情节关键词

```text
Grandpa 即将从 Florida 到达 → 六点 → 坐火车
不需要接站 → 喜欢独立
全家准备房间 → Richard 和 Robbie 很兴奋
整理照片 → welcome present
Ellen 和 Marilyn 发现旧箱子 → locked
Susan 来电 → 晚上才能离开
Philip 上楼 → Grandpa 寄来了钥匙
```

## 原始语音转写

> 说明：以下内容由离线语音模型识别。保留原始结果是为了观察表达和停顿；识别错误不算口语错误。由于本次音量偏低，人名和短词尤其需要谨慎判断。

```text
In Part 3, Ellen and Marilyn are talking about Grandpa's one-and-how.
Coming home. According to their conversation, Grandpa would be...
One home, 6 o'clock this evening by 3 a.m. and they have to...
and they were going to go upstairs and prepare Grandpa's room.

Richard and...
Richard and Robbie were excited about seeing Grandpa.
They plan to put together some photos of Grandpa as well-compliant.

Evelyn and Ellen, one, Ellen and Marilyn, preparing Grandpa's room.
They found a trunk, but it's locked.

One day talking about this trunk, Philip was come upstairs and they
talking about one-and-how Susan and my home and Philip have the key
of the trunk because Grandpa sent the key to him.
```

## 音频数据

- 机器识别词数：约 115 词
- 包含停顿的整体语速：约 29 词/分钟
- 按本次音量分布粗略估算，有效发声约 54 秒，静音约 186 秒，静音约占总时长的 78%
- 发声状态下的语速约 125 词/分钟
- 检测到约 19～20 处超过 3 秒的停顿，其中约 11 处超过 5 秒
- 最长一次停顿约 17.9 秒，出现在第一次说出 `Richard and...` 之后

> 本次录音的噪底和整体音量都低于之前，因此重新按本段音量分布选择阈值。不同合理阈值下，超过 3 秒和 5 秒的停顿统计基本稳定。

## 与上一次录音相比

上一次是 Episode 2 Act 3 的第二次复述，本次换成了新的 Episode 3 Act 1。因此下面主要观察能力迁移，不把所有指标变化直接解释为进步或退步。

| 指标            | Ep2 Act3 第二次 | 本次 Ep3 Act1 |
| --------------- | --------------: | ------------: |
| 总时长          |     约 6 分 45 秒 |       约 4 分钟 |
| 机器识别词数    |         约 331 词 |       约 115 词 |
| 整体语速        |     约 49 词/分钟 |   约 29 词/分钟 |
| 发声语速        |    约 207 词/分钟 |  约 125 词/分钟 |
| 静音占比        |            约 76% |         约 78% |
| 超过 3 秒的停顿 |            约 26 处 |      约 19～20 处 |
| 超过 5 秒的停顿 |            约 11 处 |         约 11 处 |
| 最长停顿        |         约 15.6 秒 |       约 17.9 秒 |

上一轮的两个量化目标在本次新材料中的完成情况：

- 总时长控制在 4 分钟以内：**刚好达成**。
- 超过 3 秒的停顿不多于 8 次：**没有达成**，本次约 19～20 次。

总时长明显缩短，但本次覆盖的细节也更少。超过 5 秒的停顿数量没有减少，最长停顿还略有增加，因此暂时不能把时长缩短直接解释为复述能力提高。

### 已经出现的进步

- 第一次接触新材料时仍然讲出了主要骨架：Grandpa 的到达安排、准备房间、Richard 和 Robbie 很兴奋、照片礼物、旧箱子上锁，以及 Philip 有钥匙。
- `were going`、`were excited` 和 `sent` 表明过去时意识已经存在，不是全程使用现在时。
- `Ellen`、`Marilyn`、`Richard`、`Robbie`、`Philip` 和 `Grandpa` 等人物基本可以辨认。`Marilyn` 相比早期多次被识别成 `male member` 已经稳定很多。
- 录音总时长从上一轮的 6 分 45 秒缩短到约 4 分钟，没有再次出现 6～8 分钟的超长复述。

### 当前主要问题

- **停顿依然是第一问题**：约一半的长停顿超过 5 秒，最长达到 17.9 秒。尤其是进入 Richard 和 Robbie 的情节时，剧情提取接近完全中断。
- 发声时的语速约 125 词/分钟，说明说话器官并不是主要障碍；整体只有约 29 词/分钟，主要时间仍然耗在回忆和组织句子上。
- 过去时不稳定：`plan`、`preparing`、`is locked`、`have` 等位置滑回现在时或缺少助动词。
- 动词结构不稳定：`would be arrive`、`was come`、`they talking` 都说明开口前没有先确定谓语结构。
- 内容覆盖不完整：漏掉 Grandpa 不愿意别人接站、他可能会想念 Florida、Philip 准备衣架，以及 Susan 让 Grandpa 想起 Grandma 等信息。
- Susan 的情节疑似说成了“到家”。原剧情是 Susan 早上打过电话，但要到晚上才能离开。

## 语音识别需要谨慎判断的部分

| 机器识别 | 推测的实际表达 |
| -------- | -------------- |
| `one-and-how` | `when and how` |
| `One home` | `arrive home` / `come home` |
| `by 3 a.m.` | `by train` |
| `well-compliant` | `welcome present` |
| `Evelyn and Ellen` | `Marilyn and Ellen` |
| `One day talking` | `When they were talking` |
| `Susan and my home` | 可能在尝试表达 Susan 什么时候回来，需结合原音确认 |

以下发音值得单独练习，但不能只凭机器结果直接判错：

- `arrive` 多次没有被识别出来，注意第二音节重读：`arrive at six`。
- `train` 被识别为 `three` 或 `trade`，注意保留结尾 `/n/`。
- `trunk` 偶尔接近 `truck`，注意结尾 `/ŋk/`。

## 本次暴露的表达问题

### 1. In Part 3

原表达：

```text
In Part 3...
```

建议：

```text
In Episode 3, Act 1...
```

### 2. Grandpa's when and how coming home

原表达：

```text
Ellen and Marilyn are talking about Grandpa's when and how coming home.
```

建议：

```text
Ellen and Marilyn talked about when and how Grandpa would arrive.
```

### 3. would be arrive

原表达：

```text
Grandpa would be arrive home at six o'clock this evening by train.
```

建议：

```text
Grandpa would arrive by train at six that evening.
```

`would` 后直接使用动词原形，不能说 `would be arrive`。

### 4. plan to put together some photos

原表达：

```text
They plan to put together some photos of Grandpa as welcome present.
```

建议：

```text
They planned to put together some photos as a welcome present.
```

- 复述过去发生的故事时使用 `planned`。
- `present` 是可数名词，这里需要 `a`。

### 5. Ellen and Marilyn preparing

原表达：

```text
Ellen and Marilyn preparing Grandpa's room.
```

建议：

```text
Ellen and Marilyn were preparing Grandpa's room.
```

### 6. Philip was come upstairs

原表达：

```text
Philip was come upstairs.
```

建议：

```text
Philip came upstairs.
```

### 7. they talking about

原表达：

```text
They talking about this trunk.
```

建议：

```text
They were talking about the trunk.
```

也可以用更简单的一般过去时：

```text
They talked about the trunk.
```

### 8. have the key of the trunk

原表达：

```text
Philip have the key of the trunk.
```

建议：

```text
Philip had the key to the trunk.
```

更自然的完整句：

```text
Grandpa had sent Philip the key to the trunk.
```

## 修正后的复述

```text
In Episode 3, Act 1, the Stewart family was preparing for Grandpa's
arrival from Florida. Ellen told Marilyn that he would arrive by train
at six that evening. He did not want anyone to pick him up because he
liked to be independent. Richard and Robbie were excited to see him,
and Richard planned to put together some photos as a welcome present.

Ellen and Marilyn went upstairs to prepare Grandpa's room. They found
his old trunk, but it was locked. Ellen said Susan could not leave until
that evening. Then Philip came upstairs and told them that Grandpa had
sent him the key to the trunk.
```

## 专有词降级表达

想不起准确表达时立即换成简单说法：

- `arrive` → `get there`
- `railroad station` → `the station`
- `independent` → `do things by himself`
- `put together some photos` → `make a photo gift`
- `trunk` → `an old box`
- `welcome present` → `a gift for Grandpa`

## 下一轮训练方法

1. 固定开头，不再即兴组织第一句：

```text
In Episode 3, Act 1, the Stewart family was preparing for Grandpa's
arrival.
```

2. 只看下面六组提示词，每组只说一个短句：

```text
six o'clock → train → independent
prepare room → excited
photos → welcome present
old trunk → locked
Susan called → leave in the evening
Philip → key
```

3. 明天先做一次不录音的六句复述，再完成一次完整脱稿复述。
4. 下一次总时长控制在 2 分 30 秒以内。
5. 超过 3 秒的停顿不多于 5 次，超过 5 秒的停顿不多于 1 次。
6. 全程优先使用一般过去时；开口前先确定谓语：`arrived`、`went`、`planned`、`found`、`came`、`had`。
7. 固定结尾：

```text
They found Grandpa's old trunk, but it was locked.
Philip told them that Grandpa had sent him the key.
```

## 后续复习

- [x] 完成 Episode 3 Act 1 第一次脱稿复述及音频分析（2026-08-09）
- [x] 将总时长控制在上一轮目标的 4 分钟以内
- [ ] 使用六组提示词完成 2 分 30 秒以内的复述
- [ ] 超过 3 秒的停顿不多于 5 次
- [ ] 超过 5 秒的停顿不多于 1 次
- [ ] 全程基本保持一般过去时
- [ ] 能稳定说出固定开头和结尾
- [ ] 卡住时能够主动使用降级表达
