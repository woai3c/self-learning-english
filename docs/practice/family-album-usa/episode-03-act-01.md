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
- [x] 使用六组提示词完成 2 分 30 秒以内的复述（第二次约 2 分 05 秒）
- [x] 超过 3 秒的内容停顿不多于 5 次（第二次约 5 次）
- [ ] 超过 5 秒的停顿不多于 1 次
- [ ] 全程基本保持一般过去时
- [ ] 能稳定说出固定开头和结尾
- [ ] 卡住时能够主动使用降级表达

## 第二次复述（2026-08-09）

### 原始语音转写

> 说明：保留离线语音模型的原始结果。模型对本次低音量片段的识别不稳定，`two other`、`viable sister-girl`、`antibody` 等明显是机器误识别，不代表实际说出的内容。

```text
In Episode 3, Act 1, the two other family was preparing for grandpa's
arrival. Grandpa would be a viable sister-girl this evening by Trunk,
he turned one antibody to pick in him up because he likes to be
independent.

Mary and Ellen, one up days and prepare grandpa's room, all this to the
family. Inside it about two scene grandpa, Robbie and Richard have
planned to put together some photos of grandpa's as a real component.

While Susan and William, Mary and Ellen, preparing their grandpa's room,
need for our old trunk, but the old trunk was locked. And so they told
that grandpa has sent in the key.

Susan called early in the morning. Susan would be live in the evening.
[BLANK_AUDIO]
```

### 音频数据

- 总时长：约 2 分 05 秒
- 机器识别词数：约 120 词
- 包含停顿的整体语速：约 58 词/分钟
- 有效发声约 40 秒，静音约 84 秒，静音约占总时长的 68%
- 发声状态下的语速约 180 词/分钟
- 除去说完后的结尾空白，约有 5 处超过 3 秒的内容停顿，其中 2 处超过 5 秒
- 最长停顿约 7.3 秒，出现在“照片礼物”到“准备房间、发现旧箱子”的场景切换处

> 音量阈值按本段实际噪底选择。在多个合理阈值下，超过 3 秒的停顿约为 5～6 处；其中一处是内容结束后的空白，因此不计入复述过程。

### 与第一次相比

这是同一段材料的第二次复述，因此可以直接观察熟练度变化。

| 指标            | 第一次 | 第二次 |
| --------------- | -----: | -----: |
| 总时长          | 约 4 分钟 | 约 2 分 05 秒 |
| 机器识别词数    | 约 115 词 | 约 120 词 |
| 整体语速        | 约 29 词/分钟 | 约 58 词/分钟 |
| 发声语速        | 约 125 词/分钟 | 约 180 词/分钟 |
| 静音占比        | 约 78% | 约 68% |
| 超过 3 秒的停顿 | 约 19～20 处 | 约 5 处 |
| 超过 5 秒的停顿 | 约 11 处 | 约 2 处 |
| 最长停顿        | 约 17.9 秒 | 约 7.3 秒 |

本次词数没有减少，总时长却缩短了约一半。因此这次不是靠删减内容换取速度，而是同一材料的提取速度和衔接熟练度确实提高了。

### 上一轮目标完成情况

- 六组提示词全部覆盖：**达成**。
- 总时长不超过 2 分 30 秒：**达成**，本次约 2 分 05 秒。
- 超过 3 秒的停顿不多于 5 次：**达成**。
- 超过 5 秒的停顿不多于 1 次：**未达成**，本次约 2 次。
- 全程基本保持一般过去时：**未完全达成**。
- 固定开头和结尾：开头已经使用，结尾句型仍不稳定。

### 已经出现的进步

- 固定开头成功使用：`In Episode 3, Act 1...`，不再说第一次的 `In Part 3`。
- 第一次漏掉的“Grandpa 不需要接站，因为他喜欢独立”已经补上。
- Susan 来电以及晚上才能离开的情节已经补上。
- 上一轮的六组提示词全部讲到，没有因为速度提高而漏掉主要情节点。
- `train`、`independent` 和 `old trunk was locked` 比第一次识别稳定。
- 机器识别词数略有增加，但总时长缩短接近一半，整体语速翻倍。
- 超过 3 秒的停顿从约 19～20 处降到约 5 处，最长停顿从 17.9 秒降到约 7.3 秒。

### 当前主要问题

- 剩下的停顿集中在**场景切换**，已经不是每个短句内部都卡住：
  - “照片作为欢迎礼物” → “Ellen 和 Marilyn 准备房间、发现旧箱子”；
  - “Philip 和钥匙” → “Susan 早上来电”。
- 发声语速已经达到约 180 词/分钟，不需要继续追求更快。下一步应减少停顿，让整体节奏更均匀。
- 过去时和谓语结构仍不稳定：`would be arrive`、`likes`、`have planned`、`preparing` 和 `has sent` 等结构需要继续固定。
- 固定开头已经形成，但固定结尾 `Philip told them that Grandpa had sent him the key` 还没有稳定说出。
- `welcome present` 连续两次都没有被模型正确识别；虽然不能直接判为发音错误，但值得单独跟读。

### 语音识别需要谨慎判断的部分

| 机器识别 | 推测的实际表达 |
| -------- | -------------- |
| `the two other family` | `the Stewart family` |
| `grandpa's survival` | `Grandpa's arrival` |
| `viable sister-girl this evening by Trunk` | `arrive at six o'clock this evening by train` |
| `turned one antibody to pick in him up` | `didn't want anybody to pick him up` |
| `Mary and Ellen, one up days` | `Marilyn and Ellen went upstairs` |
| `Inside it about to see Grandpa` | `was excited about seeing Grandpa` |
| `real component` | `welcome present` |
| `William, Mary and Ellen` | 重启后尝试说 `Marilyn and Ellen` |
| `has sent in the key` | `had sent him the key` |
| `live in the evening` | `leave in the evening` |

人名和短词仍有明显幻听，因此 `Marilyn`、`Philip` 等词不单凭本次转写判为发音错误。

### 仍需固定的表达

#### 1. would arrive

避免：

```text
Grandpa would be arrive...
```

固定为：

```text
Grandpa would arrive by train at six that evening.
```

#### 2. went upstairs to prepare

避免：

```text
Marilyn and Ellen went upstairs and prepare Grandpa's room.
```

固定为：

```text
Ellen and Marilyn went upstairs to prepare Grandpa's room.
```

#### 3. everyone was excited

固定为：

```text
Everyone in the Stewart family was excited to see Grandpa.
```

这样可以避免临时处理 `family` 的单复数和 `excited about to see` 等结构。

#### 4. planned to put together

避免：

```text
Robbie and Richard have planned to put together some photos.
```

固定为：

```text
Richard and Robbie planned to put together some photos as a welcome
present.
```

#### 5. were preparing

固定为：

```text
While Ellen and Marilyn were preparing Grandpa's room, they found his
old trunk.
```

#### 6. had sent him the key

避免：

```text
Philip told that Grandpa has sent him the key.
```

固定为：

```text
Philip told them that Grandpa had sent him the key.
```

#### 7. Susan could not leave until that evening

固定为：

```text
Susan had called that morning and could not leave until that evening.
```

## 下一轮如何优化

### 1. 不再重复练整篇内容，重点练两个场景接口

本次六组情节已经全部覆盖。下一轮最有价值的训练不是继续背剧情，而是把两个长停顿处练成固定过渡。

照片礼物 → 准备房间：

```text
Meanwhile, Ellen and Marilyn went upstairs to prepare Grandpa's room.
```

钥匙 → Susan 来电：

```text
Earlier that morning, Susan had called the family.
```

### 2. 使用“谓语轨道”保持过去时

复述前只看下面一行，不看完整句子：

```text
would arrive → did not want → went → was excited → planned
were preparing → found → was locked → had sent → had called
```

每次开口先选择这一行中的谓语，再补人物和内容，避免边说边决定时态。

### 3. 使用“3-2-1”训练

1. 两个过渡句各说 3 遍。
2. 只看六组关键词完整复述 2 遍，不录音。
3. 最后完成 1 次完整复述并分析，不连续重复录很多遍。

### 4. 单独跟读三个识别不稳定的短语

```text
would arrive at six
a welcome present
could not leave until that evening
```

每个短语慢速 3 遍、正常速度 3 遍，然后各放进完整句说 1 遍。

### 5. 下一次量化目标

1. 总时长控制在 1 分 50 秒以内。
2. 超过 3 秒的停顿不多于 3 次。
3. 不出现超过 5 秒的停顿。
4. `would be arrive`、`have planned` 和 `has sent` 不再出现。
5. 固定开头、两个过渡句和固定结尾都能自动说出。

## 第二次复述后的复习清单

- [x] 六组情节提示词全部覆盖
- [x] 总时长控制在 2 分 30 秒以内
- [x] 超过 3 秒的内容停顿不多于 5 次
- [ ] 超过 5 秒的停顿降到 0 次
- [ ] 总时长控制在 1 分 50 秒以内
- [ ] 全程基本保持一般过去时
- [ ] 两个场景过渡句能够自动说出
- [ ] `would arrive`、`planned` 和 `had sent` 能稳定使用
- [ ] `welcome present` 能被稳定识别
