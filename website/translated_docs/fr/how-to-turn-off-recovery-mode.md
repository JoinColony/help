---
id: how-to-turn-off-recovery-mode
title: How Do I Turn Off Recovery Mode?
sidebar_label: How Do I Turn Off Recovery Mode?
---

You hit the recovery mode button and now your colony is frozen.

What now?

Once you are confident that everything in your colony is as it should be, you will need to interact with the colony contracts directly.

Go to https://mycrypto.com/contracts/interact

In contract address, put your colony address.

In the ABI/JSON Interface field, copy and paste this:
```
[{"constant":false,"inputs":[],"name":"exitRecoveryMode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"approveExitRecovery","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
Select **approveExitRecovery**

Sign in to your wallet, and make that transaction.

Select **exitRecoveryMode** and make that transaction.

Your colony should now no longer be in recovery mode.
