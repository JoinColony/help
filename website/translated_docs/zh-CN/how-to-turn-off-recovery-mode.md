---
id: 如何关闭恢复模式
title: 如何关闭恢复模式
sidebar_label: 如何关闭恢复模式
---

当您点击恢复模式按钮，您的 colony 会被冻结。

现在该怎么办？

当您确定你的 colony 一切正常之后，您需要与 colony 合约交互。

请跳转至 https://mycrypto.com/contracts/interact

在“合约地址”栏输入您的 colony 地址。

复制以下代码至 "ABI/JSON" 接口字段。
```
[{"constant":false,"inputs":[],"name":"exitRecoveryMode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"approveExitRecovery","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
选择 **approveExitRecovery**

登录您的钱包并发起合约交易

选择 **exitRecoveryMode** 并发起合约交易

现在，您的 colony 已经退出恢复模式。
