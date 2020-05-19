---
id: 交易失败
title: 当我创建 colony 的过程中交易失败了，我该怎么办？
sidebar_label: 交易失败，我该怎么办？
---

通常，当您创建 colony 时一切都会顺利地进行，并很快就可以开始运行它。 不过，在安装过程中，有时会发生一些故障（MetaMask 交易失败、电池耗尽、浏览器崩溃等），从而导致进程中断。

如果在 “创建 colony 名称” 的交易确认之前中断，那么您可以简单地重新开始（是的，不幸地是，这意味着您必须再次支付一次交易费）。

但是，如果在 “创建 colony 名称” 的交易确认之后中断，则可以使用本指南完成该进程，并确保 colony 可以正常工作。

*注意：如果是 “Deploy Token Authority” 交易失败，您需要联系 colony 团队寻求帮助。 出于安全考虑，请原谅不能在此处张贴说明。*

本指南将帮助您重试以下任何交易：

1. 设置通证权限
2. 添加 OneTxPayment Extension
3. 给 OneTxPayment Extension 授权

*提示：如果您需要在处理这些交易上寻求帮助，请随时联系 colony 团队。 您可以通过 clny.io/discord 随时与我们的 Discord 联系。*

## 设置通证权限
导航至 https://mycrypto.com/contracts/interact.

**合约地址：** 交易1中部署的通证地址 **ABI:**
```
[{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
**读/写 合约:** setAuthority **authority_address:** 在交易4中部署的授权合约的地址. **值:** **Gas Limit:** `50,000`



## 添加 OneTxPayment Extension
导航至 https://mycrypto.com/contracts/interact.

**合约地址:** `0x6fb63009e3e03cbf6917647d64ad81939f267067` **ABI:**
```
[{"constant":false,"inputs":[{"name":"_colony","type":"address"}],"name":"deployExtension","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
**读/写合约:** deployExtension **_colony 地址:** colony 的地址 **值:** **Gas Limit:** 1,300,000

交易确认后，您可以在 Etherscan 的事件日志选项卡中找到新部署的OneTxPayment Extension。

点击 MyCrypto 中的 "View on Etherscan" 按钮，或者导航至 etherscan.io/tx/{transaction hash}

![etherscan](assets/failed-transaction/1.png)

## 给 OneTxPayment Extension 授权
在你的 colony 设置中导航至 **Permissions** 标签

点击 **Add Role**

输入您部署的 OneExpayment 合约的地址。

检查 **Funding** 以及 **Administration**.

点击 **Confirm** 并登录以太坊交易。

棒！ 您的 colony 已经可以正常使用啦! 🎉

![权限](assets/failed-transaction/2.png)
