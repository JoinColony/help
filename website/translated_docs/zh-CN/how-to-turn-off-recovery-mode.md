---
id: 如何关闭恢复模式
title: 如何关闭恢复模式
sidebar_label: 如何关闭恢复模式
---

当你点击恢复模式按钮，你的 colony 会被冻结。

现在该怎么办？

当你确定你的 colony 一切正常之后，你需要与 colony 合约交互。

请跳转至 https://mycrypto.com/contracts/interact

In contract address, put your colony address.

In the ABI/JSON Interface field, copy and paste this:
```
[{"constant":false,"inputs":[],"name":"exitRecoveryMode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"approveExitRecovery","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
Select **approveExitRecovery**

Sign in to your wallet, and make that transaction.

Select **exitRecoveryMode** and make that transaction.

Your colony should now no longer be in recovery mode.
